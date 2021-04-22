export const barChartData = {
  type: "bar",
  data: {
    labels: ["Mar 1 - 7", "Mar 8 - 14", "Mar 15 - 21", "Mar 22 - 28", "Final wk"],
    datasets: [
      {
        label: "Data",
        data: [50000, 125000, 125000, 125000, 175000],
        backgroundColor: "#ecccff",
        borderColor: "#ecccff",
        borderWidth: 0
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    width: '10px',
    height: '600px',
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

export default barChartData;
