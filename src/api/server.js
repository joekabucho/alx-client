// src/server.js

import {Model, Server} from 'miragejs'

export function makeServer({ environment = "development" } = {}) {

  return new Server({
    environment,

    models: {
      chat: Model,
      paymentIssue: Model,
      successRate: Model,
      language: Model,
      notification: Model,
      user: Model,
      stat: Model,

    },
   // making dummy data everytime the server script is called
    seeds(server) {
      server.create("chat", {
        username: "James Robinson",
        date_time: "Jan 2,12:30pm",
        message: "I need some maintenance my account has issues",
        color: "primary",
      })
      server.create("chat", {
        username: "Eseosa Igbinobaro",
        date_time: "Wed ,6:00pm",
        message: "I got your email and i like the schematics we can proceed with the plan",
        color: "secondary",

      })
      server.create("chat", {
        username: "James Robinson",
        date_time: "Jan 2,12:30pm",
        message: "I need some maintenance my account has issues",
        color: "teal",

      })
      server.create("chat", {
        username: "Lupita Jonah",
        date_time: "Feb 13,6:15pm",
        message: "Thank you so much for the good work am looking forward to working with you on future projects",
        color: "orange",

      })
      server.create("paymentIssue", {
        customer_error: 1,
        fraud_blocks: 5,
        bank_errors: 3,
        system_errors: 10,
      })
      server.create("paymentIssue", {
        customer_error: 1,
        fraud_blocks: 5,
        bank_errors: 3,
        system_errors: 10,
      })
      server.create("successRate", {
        unsuccessfull: 1,
        successfull: 150,
      })
      server.create("successRate", {
        unsuccessfull: 1,
        successfull: 150,
      })
      server.create("stat", {
        users: 1,
        payments: 50,
        visits: 51000,
        errors: 150,

      })
      server.create("stat", {
        users: 1,
        payments: 50,
        visits: 51000,
        errors: 150,

      })
      server.create("language", {name: "Swahili"})
      server.create("language", {name: "Spanish"})
      server.create("language", {name: "German"})
      server.create("notification", {number: "1"})
      server.create("user", {
        username: 'Username  test',
        email: 'test@example.com',
      })
      server.create("user", {
        username: 'test',
        email: 'test@example.com',
      })

    },

    routes() {

      this.namespace = "api"

      this.get("/chats", schema => {
        return schema.chats.all()
      })
      this.get("/payment_issue", schema => {
        return schema.paymentIssues.all()
      })
      this.get("/success_rate", schema => {
        return schema.successRates.all()
      })
      this.get("/languages", schema => {
        return schema.languages.all()
      })
      this.get("/notifications", schema => {
        return schema.notifications.all()
      })
      this.get("/users", schema => {
        return schema.users.all()
      })
      this.get("/stats", schema => {
        return schema.stats.all()
      })
    },

  })
}
