<template>
  <q-page>
    <div class="row flex-inline">
      <q-icon name="waving_hand" class="waving-hand" size="md" color="orange"></q-icon>
    <h3 class="intro-header">Hey User</h3>
    </div>
    <div class="row flex-inline">
      <h2 class="intro-title">Your dummy dashboard</h2>
    </div>
    <div class="row flex-inline">
      <q-btn-dropdown  no-caps  class="chart-dropdown"  label="Last 30 days" dropdown-icon="fa fa-caret-down">
        <q-list>

          <q-item clickable v-close-popup >
            <q-item-section>
              <q-item-label>Last 2 weeks</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup >
            <q-item-section>
              <q-item-label>Last 1 week</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup >
            <q-item-section>
              <q-item-label>Last day</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
    <div class="row flex-inline ">
      <q-card class="chart-card col-lg-12 bar-card">
        <q-card-section>
            <BarChart/>
        </q-card-section>
      </q-card>
    </div>
    <br>
    <br>
    <div class="row flex-inline">
      <q-card class="info-card col-lg-6">
        <q-card-section>

          <p class="siccess-rate">Success Rate</p>
          <DoughnutChart/>
          <div class="row flex-inline justify-center">
            <q-badge text-color="black" class="doughnut-uns"/>
            <p class="success-number">1</p><br>
            <q-badge text-color="black" class="doughnut-succ"/>
            <p class="success-number">150</p>
          </div>
          <div class="row flex-inline justify-center">
            <p class="success-footer">Unsuccessfull</p>
            <p class="success-footer"></p>
            <p class="success-footer">Successfull</p>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="info-card col-lg-6">
        <q-card-section>
          <p class="siccess-rate">Payment Issues</p>
          <PaymentChart/>
          <div class="row flex-inline">
          <p class="error-rate">Total number of errors:19</p>
          </div>
          <q-list dense>
            <q-item clickable v-ripple>
              <q-item-section>
                <div class="row flex-inline">
                <q-badge class="badge-li-1" text-color="white" label="a" />
                  <legend class="payment-li"> customer errors</legend>
                </div>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <div class="row flex-inline">
                <q-badge class="badge-li-2" text-color="white" label="x" />
                  <p class="payment-li">Fraud blocks</p>
                </div>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <div class="row flex-inline">
                <q-badge class="badge-li-3" text-color="white" label="o" />
                  <legend class="payment-li">Bank Errors</legend>
                </div>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                <div class="row flex-inline">
                <q-badge class="badge-li-4" text-color="white" label="n" />
                  <legend class="payment-li">System Errors</legend>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import BarChart from '../components/BarChart'
import DoughnutChart from '../components/doughnutChart'
import PaymentChart from '../components/PaymentChart'


export default {
  name: 'PageDashboard',
  data () {
    return {
      //api arrays
      payment_issue: [],
      success_rate: [],
      serverError: null,

    }
  },
  components: {
    //import components
    BarChart,
    DoughnutChart,
    PaymentChart,
  },
  created() {
    //oninit hook
    fetch("/api/payment_issue")
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          this.serverError = json.error
        } else {
          this.payment_issue = json.payment_issue
        }
      })
    fetch("/api/success_rate")
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          this.serverError = json.error
        } else {
          this.success_rate = json.success_rate
        }
      })
  },
}
</script>
