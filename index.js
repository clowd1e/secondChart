let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['0:00', '4:00', '8:00', '12:00', '16:00', '20:00'],
        datasets: [{
            label: 'Градусы',
            backgroundColor: 'rgba(150, 150, 150, 0.5)',
            borderColor: 'rgb(225, 0, 0)',
            data: [-2, -1, 2, 5, 7, 4]
        }]
    },

    // Configuration options go here
    options: {}
});