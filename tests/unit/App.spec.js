// src/App.spec.js
import { mount } from "@vue/test-utils"
import { Response } from "miragejs"
import { makeServer } from "../../src/api/server"
import App from "../../src/App"

let server

beforeEach(() => {
  server = makeServer({ environment: "test" })
})

it("shows the tests from our server", async () => {
  server.create("test", { id: 1, content: "Hi im just a random  test" })
  server.create("test", { id: 2, content: "here to test if everything is okay :)" })

  const wrapper = mount(App)

  // let’s wait for our vue component to finish loading data
  // we know it’s done when the data-testid enters the dom.
  await waitFor(wrapper, '[data-testid="test-1"]')
  await waitFor(wrapper, '[data-testid="test-2"]')

  expect(wrapper.find('[data-testid="test-1"]').text()).toBe("Hi im just a random  test")
  expect(wrapper.find('[data-testid="test-2"]').text()).toBe("here to test if everything is okay :)")
})

it("shows a message if there are no test", async () => {
  // Don’t create any tests

  const wrapper = mount(App)
  await waitFor(wrapper, '[data-testid="no-tests"]')

  expect(wrapper.find('[data-testid="no-tests"]').text()).toBe("No tests!")
})

// This helper method returns a promise that resolves
// once the selector enters the wrapper’s dom.
const waitFor = function(wrapper, selector) {
  return new Promise(resolve => {
    const timer = setInterval(() => {
      const testEl = wrapper.findAll(selector)
      if (testEl.length > 0) {
        clearInterval(timer)
        resolve()
      }
    }, 100)
  })
}

afterEach(() => {
  server.shutdown()
})
