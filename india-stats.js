// Data for India - Student Suicide by Year
const ctx1 = document.getElementById('suicide-rates-india').getContext('2d');
const suicideRatesIndiaChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020','2021','2022','2023'],
        datasets: [{
            label: 'Student Suicides per Year',
            data: [8572, 9123, 9438, 10159, 10925, 12375, 12845, 13123, 14564], // Sample data
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
        }]
    }
});

// Data for Suicide by Age Group
const ctx2 = document.getElementById('suicide-age-group').getContext('2d');
const suicideAgeGroupChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['<15', '15-19', '20-25'],
        datasets: [{
            label: 'Suicides by Age Group',
            data: [800, 3200, 5000], // Sample data
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1
        }]
    }
});

// Data for Depression by Age Group
const ctx3 = document.getElementById('depression-chart').getContext('2d');
const depressionChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['<15', '15-19', '20-25'],
        datasets: [{
            label: 'Depression Prevalence (%)',
            data: [10, 20, 35], // Sample data
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    }
});

// Data for Anxiety by Age Group
const ctx4 = document.getElementById('anxiety-chart').getContext('2d');
const anxietyChart = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['<15', '15-19', '20-25'],
        datasets: [{
            label: 'Anxiety Prevalence (%)',
            data: [15, 25, 40], // Sample data
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    }
});

// Data for ADHD by Age Group
const ctx5 = document.getElementById('adhd-chart').getContext('2d');
const adhdChart = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['<15', '15-19', '20-25'],
        datasets: [{
            label: 'ADHD Prevalence (%)',
            data: [5, 12, 18], // Sample data
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
        }]
    }
});

// Data for PTSD by Age Group
const ctx6 = document.getElementById('ptsd-chart').getContext('2d');
const ptsdChart = new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: ['<15', '15-19', '20-25'],
        datasets: [{
            label: 'PTSD Prevalence (%)',
            data: [2, 8, 15], // Sample data
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    }
});

// Data for Students Who Received Treatment
const ctx7 = document.getElementById('received-treatment').getContext('2d');
const receivedTreatmentChart = new Chart(ctx7, {
    type: 'bar',
    data: {
        labels: ['Received Treatment', 'Did Not Receive Treatment'],
        datasets: [{
            label: 'Proportion of Students Receiving Mental Health Treatment',
            data: [20, 80], // Sample data (in percentage)
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    }
});

