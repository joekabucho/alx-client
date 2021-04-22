<template>
  <div>
    <canvas id="payment-chart" height="80px"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import paymentChartData from '../api/mock/payment-issues-date'

export default {
  name: 'PaymentChart',
  data() {
    return {
      paymentChartData: paymentChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('payment-chart');
    new Chart(ctx, this.paymentChartData);
  }
}
</script>
