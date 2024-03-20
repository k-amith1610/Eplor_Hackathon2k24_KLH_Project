// JavaScript code for creating graphs
var ctx1 = document.getElementById('line-chart').getContext('2d');
var lineChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Data Science', 'Artificial Intelligence & Machine Learning', 'Cloud Computing', 'Digital Marketing', 'Cyber Security', 'Full Stack Development', 'Blockchain Technology', 'User Experience (UX) Design', 'Business Analytics', 'Project Management', 'Graphic Design', 'Content Writing'],
        datasets: [{
            label: 'Average Annual Salary (in Lakhs)',
            data: [10, 10, 8, 6, 8, 8, 10, 8, 7, 7, 6, 6],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Modified code for circular chart
var ctx2 = document.getElementById('circular-chart').getContext('2d');
var circularChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Data Science', 'Artificial Intelligence & Machine Learning', 'Cloud Computing', 'Digital Marketing', 'Cyber Security', 'Full Stack Development', 'Blockchain Technology', 'User Experience (UX) Design', 'Business Analytics', 'Project Management', 'Graphic Design', 'Content Writing'],
        datasets: [{
            label: 'Average Annual Salary (in Lakhs)',
            data: [10, 10, 8, 6, 8, 8, 10, 8, 7, 7, 6, 6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Average Annual Salary (in Lakhs)',
                padding: {
                    top: 10,
                    bottom: 30
                }
            }
        },
        animation: {
            animateRotate: true,
            animateScale: true
        },
        events: ['mousemove', 'mouseout']
    }
});
