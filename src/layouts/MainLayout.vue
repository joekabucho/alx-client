<template>
  <q-layout view="lHh lpR fFf">

    <q-header  class="bg-white text-black justify-evenly">
      <q-toolbar>
        <q-btn dense flat round icon="menu" class="flat-icon" @click="left = !left" />
        <q-toolbar-title>
          <h4 class=" lt-md">Test</h4>
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" class="flat-icon" @click="right = !right" />

        <q-input rounded standout="bg-dark" label="Search" class="search gt-sm">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-toggle
            v-model="value"
            color="green"
            :label="label"
            size="xl"
            class="gt-sm"
            @toggle="onToggle"
          />
          <div class="q-pa-md gt-sm">
              <q-btn-dropdown   no-caps  class="language-dropdown" label="English" dropdown-icon="fas fa-chevron-down">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick"
                          v-for="language in languages"
                          v-bind:key="language.id"
                          :data-testid="'language-' + language.id">
                    <q-item-section>
                      <q-item-label>{{language.name}}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
        <q-icon name="notifications" size="md" class="notification gt-sm">
          <span class="badge gt-sm" v-if="notifications.length!==0"></span>
        </q-icon>
        <div class="q-pa-md gt-sm">

          <q-avatar rounded class="profile-pic">
            <img src="../assets/images/pfl.png" alt="profile pic" />
          </q-avatar>
          <q-btn-dropdown  no-caps  class="user-dropdown"  dropdown-image="../assets/images/pfl.png" :label="users.username"  dropdown-icon="fas fa-chevron-down" >
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

    <q-drawer show-if-above v-model="left" side="left" :width="327"  class="drawer">
      <h4 class="Test q-pa-xl gt-sm">Test</h4>
      <div class="q-pa-md" style="max-width: 350px">
        <q-expansion-item  no-caps  class="dropdown-sidenav" label="Payments" dropdown-icon="fa fa-caret-down">
        <q-list>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon class="icon-sidebar"  name="fas fa-exchange-alt" />
            </q-item-section>
            <q-item-section class="sidenav-child">Transactions</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon class="icon-sidebar"  name="fas fa-user-friends" />
            </q-item-section>
            <q-item-section class="sidenav-child">Customers</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon class="icon-sidebar"  name="far fa-credit-card" />
            </q-item-section>
            <q-item-section class="sidenav-child">Payouts</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon class="icon-sidebar"  name="fas fa-hands-helping" />
            </q-item-section>
            <q-item-section class="sidenav-child">Balances</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon class="icon-sidebar"  name="done_all" />
            </q-item-section>
            <q-item-section class="sidenav-child">Subscriptions</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon class="icon-sidebar"  name="fas fa-list-alt" />
            </q-item-section>
            <q-item-section class="sidenav-child justify-between d-flex">Payment plans</q-item-section>
          </q-item>

        </q-list>
        </q-expansion-item>

        <q-expansion-item no-caps  class="dropdown-sidenav" label="Commerce" dropdown-icon="fas fa-caret-down">
          <q-list>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon class="icon-sidebar"  name="fas fa-shopping-cart" />
              </q-item-section>
              <q-item-section class="sidenav-child">Commerce</q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
         <q-list>
          <q-item clickable v-ripple class="sidenav-child">
            <q-item-section avatar>
              <q-icon class="icon-sidebar"  name="fas fa-expand-arrows-alt" />
            </q-item-section>
            <q-item-section>Refferal</q-item-section>
          </q-item>
          <q-item clickable v-ripple class="sidenav-child">
            <q-item-section avatar>
              <q-icon class="icon-sidebar"  name="fas fa-eye" />
            </q-item-section>
            <q-item-section>Audit logs</q-item-section>
          </q-item>
          <q-item clickable v-ripple class="sidenav-child">
            <q-item-section avatar>
              <q-icon class="icon-sidebar"  name="fas fa-cog" />
            </q-item-section>
            <q-item-section>Settings</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>
      <q-drawer show-if-above v-model="right" side="right" :width="350"  class="chat-bar">
        <!-- drawer content -->
        <div class="q-pa-md">
          <q-card class="sidebar-card" fill>
            <q-tabs v-model="tab">
              <q-tab label="Stats" class="tabs-text text-bold" name="one" />
              <q-tab label="Messages" class="tabs-text"  name="two" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="one">
                <q-carousel
                  v-model="slide"
                  transition-prev="scale"
                  transition-next="scale"
                  swipeable
                  animated
                  control-color="white"
                  navigation
                  padding
                  arrows
                  height="300px"
                  class="bg-primary text-white shadow-1 rounded-borders"
                >
                  <q-carousel-slide name="style" class="column no-wrap flex-center">
                    <q-icon name="fas fa-users" size="56px" />
                    <div class="q-mt-md text-center">
                     Users: {{ stats.user }}
                    </div>
                  </q-carousel-slide>
                  <q-carousel-slide name="tv" class="column no-wrap flex-center">
                    <q-icon name="fas fa-money-bill-wave" size="56px" />
                    <div class="q-mt-md text-center">
                      Payments: {{ stats.payments }}
                    </div>
                  </q-carousel-slide>
                  <q-carousel-slide name="layers" class="column no-wrap flex-center">
                    <q-icon name="fas fa-door-open" size="56px" />
                    <div class="q-mt-md text-center">
                     Visits: {{ stats.visits }}
                    </div>
                  </q-carousel-slide>
                  <q-carousel-slide name="map" class="column no-wrap flex-center">
                    <q-icon name="fas fa-exclamation-triangle" size="56px" />
                    <div class="q-mt-md text-center">
                      Errors: {{ stats.errors }}
                    </div>
                  </q-carousel-slide>
                </q-carousel>
              </q-tab-panel>

              <q-tab-panel name="two">
                <div v-if="serverError" data-testid="server-error">
                  {{ serverError }}
                </div>

                <div v-else-if="chats.length === 0" data-testid="no-chats">
                  No chats!
                </div>
                <div v-else>
                <q-card class="my-card" flat bordered
                        v-for="chat in chats"
                        v-bind:key="chat.id"
                        :data-testid="'chats-' + chat.id"
                >
                  <div class="row  q-pa-sm">
                    <q-badge  :color="chat.color" id="badge"  class="card-badge Badge"> {{chat.username.charAt(0)}}</q-badge>
                    <p class="card-date">{{chat.datetime}}</p>
                  </div>
                  <q-card-section>
                    <div class="text-h5 q-mt-sm q-mb-xs">{{chat.username}}</div>
                    <div class="text-caption text-grey">
                      {{chat.message.slice(0,20)}}...
                    </div>
                  </q-card-section>

                  <q-card-actions>

                    <q-space />

                    <q-btn
                      color="grey"
                      round
                      flat
                      dense
                      :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                      @click="expanded = !expanded"
                    />
                  </q-card-actions>

                  <q-slide-transition>
                    <div v-show="expanded">
                      <q-separator />
                      <q-card-section class="text-subitle2">
                        {{chat.message}}
                      </q-card-section>
                    </div>
                  </q-slide-transition>
                </q-card>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>


  </q-layout>
</template>

<script>
export default {
  name: "main",
  data () {
    return {
      left: false,
      right: false,
      value: true,
      label: 'Live',
      tab: 'two',
      expanded: false,
      slide: 'style',
      chats: [],
      languages: [],
      notifications: [],
      users: [],
      stats: [],
      mycolor: 'primary',


      serverError: null,

    }
  },
  methods: {
    onItemClick () {
      // console.log('Clicked on an Item')
    },
    onToggle() {
      if (this.value === false) {
        this.label = "Offline";
      }
    }
  },
  mounted() {
    let colors = ['primary', 'secondary', 'accent', 'positive', 'negative'];
    this.mycolor = colors[Math.floor(Math.random() * colors.length)];

  },
  created() {

    fetch("/api/chats")
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          this.serverError = json.error
        } else {
          this.chats = json.chats
        }
      })
    fetch("/api/languages")
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          this.serverError = json.error
        } else {
          this.languages = json.languages
        }
      })
    fetch("/api/notifications")
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          this.serverError = json.error
        } else {
          this.notifications = json.notifications
        }
      })
    fetch("/api/users")
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          this.serverError = json.error
        } else {
          this.users = json.users[0]
        }
      })
    fetch("/api/stats")
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          this.serverError = json.error
        } else {
          this.stats = json.stats[0]
        }
      })
  },
}
</script>
