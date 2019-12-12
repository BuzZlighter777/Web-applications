var chart = new Chart(
  document.getElementById('prodVisitChart').getContext('2d'),
  {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: ['', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', ''],
      datasets: [
        {
          label: 'Visitors',
          backgroundColor: 'rgb(76, 187, 255)',
          borderColor: 'rgb(76, 187, 255)',
          data: [29, 34, 31, 26, 30, 38, 38, 30]
        },
        {
          label: '',
          data: [0, 10, 20, 30, 40, 50, 60, 70],
          borderColor: 'rgb(255, 255, 255)',
          fill: false
        }
      ]
    },

    // Configuration options go here
    options: {}
  }
);

// var chart = new Chart(
//   document.getElementById('weekSalesChart').getContext('2d'),
//   {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//       labels: [],
//       datasets: [
//         {
//           label: '',
//           backgroundColor: 'rgb(76, 187, 255)',
//           borderColor: 'rgb(76, 187, 255)',
//           data: [29, 34, 31, 26, 30, 38, 38, 30],
//         }
//       ],
//       options: {

//       }
//     },
//   }
// );

new Chart(document.getElementById('pieChart'), {
  type: 'doughnut',
  data: {
    labels: ['Visitors', 'Registered', 'Bounce'],
    datasets: [
      {
        label: '',
        backgroundColor: ['#ffc400', '#38a4dd', '#b39ddb'],
        data: [5858, 901, 2253]
      }
    ]
  }
});
