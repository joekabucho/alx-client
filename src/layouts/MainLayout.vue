<template>
  <q-layout view="lHh lpR fFf">

    <q-header  class="bg-white text-black">
      <q-toolbar>
          <q-input rounded standout="bg-dark" label="Search" class="search">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-toggle
            v-model="value"
            color="green"
            label="Live"
            size="xl"
          />
          <div class="q-pa-md">
              <q-btn-dropdown   no-caps  class="language-dropdown" label="English" dropdown-icon="fas fa-chevron-down">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Swahili</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Spanish</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>German</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
        <q-icon name="notifications" size="md" class="notification">
          <span class="badge"></span>
        </q-icon>
        <div class="q-pa-md">

          <q-avatar rounded>
            <img src="../assets/images/pfl.png" alt="profile pic"/>
          </q-avatar>
          <q-btn-dropdown  no-caps  class="user-dropdown" dropdown-image="../assets/images/pfl.png" label="User name" dropdown-icon="fas fa-chevron-down">
            <q-list>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Logout</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" >
      <h4 class="Test q-pa-lg">Test</h4>
      <div class="q-pa-md" style="max-width: 350px">
        <q-expansion-item  no-caps  class="dropdown-sidenav" label="Payments" dropdown-icon="fa fa-caret-down">
        <q-list>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon class="icon-sidebar"  name="fas fa-exchange-alt" />
            </q-item-section>
            <q-item-section>Transactions</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon class="icon-sidebar"  name="fas fa-user-friends" />
            </q-item-section>
            <q-item-section>Customers</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon class="icon-sidebar"  name="far fa-credit-card" />
            </q-item-section>
            <q-item-section>Payouts</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon class="icon-sidebar"  name="fas fa-hands-helping" />
            </q-item-section>
            <q-item-section>Balances</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon class="icon-sidebar"  name="done_all" />
            </q-item-section>
            <q-item-section>Subscriptions</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon class="icon-sidebar"  name="fas fa-list-alt" />
            </q-item-section>
            <q-item-section>Payment plans</q-item-section>
          </q-item>

        </q-list>
        </q-expansion-item>

        <q-expansion-item no-caps  class="dropdown-sidenav" label="Commerce" dropdown-icon="fas fa-caret-down">
          <q-list>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon class="icon-sidebar"  name="fas fa-shopping-cart" />
              </q-item-section>
              <q-item-section>Commerce</q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
         <q-list>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon class="icon-sidebar"  name="fas fa-expand-arrows-alt" />
            </q-item-section>
            <q-item-section>Refferal</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon class="icon-sidebar"  name="fas fa-eye" />
            </q-item-section>
            <q-item-section>Audit logs</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon class="icon-sidebar"  name="fas fa-cog" />
            </q-item-section>
            <q-item-section>Settings</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      value: true

    }
  },
  methods: {
    onItemClick () {
      // console.log('Clicked on an Item')
    }
  }
}
</script>
