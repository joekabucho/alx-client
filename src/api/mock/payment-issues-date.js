export const paymentChartData = {
  type: "bar",
  data: {
    labels: ["a", "x", "o", "n"],
    datasets: [
      {
        label: "Payment Data",
        data: [1, 5, 3, 10],
        backgroundColor: ["#ffbb4f","#ffda93","#ff7576","#80e0e5"],
        borderWidth: 0
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25
          }
        }
      ]
    }
  }
};

export default paymentChartData;
