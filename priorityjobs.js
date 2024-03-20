// JavaScript code for creating graphs
var ctx1 = document.getElementById('line-chart').getContext('2d');
var lineChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Project Manager', 'AI Engineer', 'Data Scientist', 'Machine Learning Engineer', 'Blockchain Developer', 'Full Stack Software Developer', 'Product Manager', 'Management Consultant', 'Marketing Manager', 'Business Analyst', 'Internet of Things (IoT) Solutions Architect', 'Engineering Manager', 'IT Systems Manager', 'Data Engineer', 'Software Architect', 'Cloud Architect', 'DevOps Engineer', 'Investment Banker', 'Chartered Accountant', 'Medical Professionals'],
        datasets: [{
            label: 'Average Annual Salary (in Lakhs)',
            data: [12, 8, 10, 7, 8, 9, 14.4, 11.49, 7, 6.5, 26.65, 27, 12, 11, 27, 21, 6.5, 40, 7, 10],
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
        labels: ['Project Manager', 'AI Engineer', 'Data Scientist', 'Machine Learning Engineer', 'Blockchain Developer', 'Full Stack Software Developer', 'Product Manager', 'Management Consultant', 'Marketing Manager', 'Business Analyst', 'Internet of Things (IoT) Solutions Architect', 'Engineering Manager', 'IT Systems Manager', 'Data Engineer', 'Software Architect', 'Cloud Architect', 'DevOps Engineer', 'Investment Banker', 'Chartered Accountant', 'Medical Professionals'],
        datasets: [{
            label: 'Average Annual Salary (in Lakhs)',
            data: [12, 8, 10, 7, 8, 9, 14.4, 11.49, 7, 6.5, 26.65, 27, 12, 11, 27, 21, 6.5, 40, 7, 10],
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
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
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
