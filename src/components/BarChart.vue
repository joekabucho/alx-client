<template>
  <div>
    <canvas id="bar-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import barChartData from '../api/mock/bar-data'

export default {
  name: 'BarChart',
  data() {
    return {
      barChartData: barChartData
    }
  },
  mounted() {

    const ctx = document.getElementById('bar-chart');
    new Chart(ctx, this.barChartData);
  }
}
</script>
