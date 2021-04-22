export const doughnutChartData = {
  type: "doughnut",
  data: {
    labels: [
      'Unsuccessfull',
      'Successfull',
    ],
    datasets: [
      {
        labels: [
          'Unsuccessfull',
          'Successfull',
        ],
        data: [1, 150],
        backgroundColor: [
          '#dfeedb',
          '#a6d997',
        ],
        hoverOffset: 4
      }
    ]
  },
  options: {
    elements: {
      center: {
        text: '98%',
        color: '#89b27c', // Default is #000000
        fontStyle: 'Montserrat', // Default is Arial
        sidePadding: 20, // Default is 20 (as a percentage)
        minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
        lineHeight: 25 // Default is 25 (in px), used for when text wraps
      }
    }
  }
};

export default doughnutChartData;
