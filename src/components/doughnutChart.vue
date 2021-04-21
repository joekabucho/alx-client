<template>
  <div>
    <canvas id="doughnut-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import doughnutChartData from '../api/mock/doughnut-data'

export default {
  name: 'DoughnutChart',
  data() {
    return {
      doughnutChartData: doughnutChartData
    }
  },
  mounted() {

    const ctx = document.getElementById('doughnut-chart');
    new Chart(ctx, this.doughnutChartData);
  }
}
</script>
