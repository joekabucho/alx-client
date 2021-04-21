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
    <div class="row flex-inline">
      <q-card class="chart-card col-lg-12">
        <q-card-section>
            <BarChart/>
        </q-card-section>
      </q-card>
    </div>
    <div class="row flex-inline">
      <q-card class="info-card col-lg-6">
        <q-card-section>
          <DoughnutChart/>
        </q-card-section>
      </q-card>
      <q-card class="info-card col-lg-6">
        <q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import BarChart from '../components/BarChart'
import DoughnutChart from '../components/doughnutChart'

export default {
  name: 'PageDashboard',
  components: {
    BarChart,
    DoughnutChart,
  }
}
</script>
