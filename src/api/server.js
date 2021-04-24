// src/server.js

import {Model, createServer, Server} from 'miragejs'

export function makeServer({ environment = "development" } = {}) {

  return new Server({
    environment,

    models: {
      chat: Model,
    },

    seeds(server) {
      server.create("chat", {content: "Learn Mirage JS"})
      server.create("chat", {content: "Integrate With Vue.js"})
    },

    routes() {

      this.namespace = "api"

      this.get("/chats", schema => {
        return schema.chats.all()
      })
    },

  })
}
