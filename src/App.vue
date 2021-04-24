<template>
  <div id="q-app">
    <router-view />
    <div v-if="serverError" data-testid="server-error">
      {{ serverError }}
    </div>

    <div v-else-if="tests.length === 0" data-testid="no-tests">
      No tests!
    </div>

    <div v-else>
      <ul id="tests">
        <li
          v-for="test in tests"
          v-bind:key="test.id"
          :data-testid="'test-' + test.id"
        >
          {{ test.content }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",

  data() {
    return {
      tests: [],
      serverError: null,
    }
  },

  created() {
    fetch("/api/tests")
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          this.serverError = json.error
        } else {
          this.tests = json.tests
        }
      })
  },
}
</script>
