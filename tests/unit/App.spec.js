// src/App.spec.js
import { mount } from "@vue/test-utils"
import { Response } from "miragejs"
import { makeServer } from "../../src/api/server"
import App from "../../src/App"

let server

beforeEach(() => {
  server = makeServer({ environment: "test" })
})

it("shows the chats from our server", async () => {
  server.create("chat", { id: 1, content: "Learn Mirage JS" })
  server.create("chat", { id: 2, content: "Integrate with Vue.js" })

  const wrapper = mount(App)

  // let's wait for our vue component to finish loading data
  // we know it's done when the data-testid enters the dom.
  await waitFor(wrapper, '[data-testid="chats-1"]')
  await waitFor(wrapper, '[data-testid="chats-2"]')

  expect(wrapper.find('[data-testid="chats-1"]').text()).toBe("Learn Mirage JS")
  expect(wrapper.find('[data-testid="chats-2"]').text()).toBe("Integrate with Vue.js")
})

it("shows a message if there are no chats", async () => {
  // Don't create any todos

  const wrapper = mount(App)
  await waitFor(wrapper, '[data-testid="no-chats"]')

  expect(wrapper.find('[data-testid="no-chats"]').text()).toBe("No chats!")
})


it("handles error responses from the server", async () => {
  // Override Mirage's route handler for /todos, just for this test
  server.get("/chats", () => {
    return new Response(
      500,
      {},
      {
        error: "The database is taking a break.",
      }
    )
  })

  const wrapper = mount(App)

  await waitFor(wrapper, '[data-testid="server-error"]')

  expect(wrapper.find('[data-testid="server-error"]').text()).toBe(
    "The database is taking a break."
  )
})

// This helper method returns a promise that resolves
// once the selector enters the wrapper's dom.
const waitFor = function(wrapper, selector) {
  return new Promise(resolve => {
    const timer = setInterval(() => {
      const todoEl = wrapper.findAll(selector)
      if (todoEl.length > 0) {
        clearInterval(timer)
        resolve()
      }
    }, 100)
  })
}

afterEach(() => {
  server.shutdown()
})
