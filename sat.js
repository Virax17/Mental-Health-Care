// Data for India - Student Suicide by Year
const ctx1 = document.getElementById('suicide-rates-india').getContext('2d');
const suicideRatesIndiaChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Student Suicides per Year',
            data: [8572, 9123, 9438, 10159, 10925, 12375], // Sample data
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

// Data for Suicide by Gender
const ctx3 = document.getElementById('suicide-gender').getContext('2d');
const suicideGenderChart = new Chart(ctx3, {
    type: 'pie chart',
    data: {
        labels: ['Male', 'Female'],
        datasets: [{
            label: 'Suicides by Gender',
            data: [8000, 5000], // Sample data
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 1
        }]
    }
});

// Data for Suicide by Region
const ctx4 = document.getElementById('suicide-region').getContext('2d');
const suicideRegionChart = new Chart(ctx4, {
    type: 'horizontalBar',
    data: {
        labels: ['Maharashtra', 'Tamil Nadu', 'West Bengal', 'Karnataka', 'Madhya Pradesh'],
        datasets: [{
            label: 'Suicides by Region',
            data: [3000, 2500, 2000, 1500, 1000], // Sample data
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    }
});

