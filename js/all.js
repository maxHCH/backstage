window.chartColors = {
    red: '#dc3545',
    blue: '#007bff',
    orange: '#fd7e14',
    green: '#28a745',
    yellow: '#ffc107',
    purple: 'rgb(153, 102, 255)',
    grey: '#6c757d'
};
const config = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: '總支出',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: [2000, 3000, 3900, 3200, 1000, 2400, 2000],
            fill: false,
            lineTension:0
        }, {
            label: '總收入',
            fill: false,
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            data: [7180, 4300, 5522, 7819, 4111, 6900, 6000],
            lineTension:0
        }, {
            label: '總毛利',
            fill: false,
            backgroundColor: window.chartColors.green,
            borderColor: window.chartColors.green,
            data: [5180, 1300, 1622, 3519, 3111, 3500, 4000],
            lineTension:0
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: ''
        },
        scales: {
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                    color: 'grey'
                },
                ticks: {
                    min: 0,
                    max: 10000,
                    stepSize: 1000
                }
            }]
        }
    }
};

window.onload = function() {
    let ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
};