$(document).ready(function () {

    // Sidebar

    $("#menu1").slideDown();
    $("#menu3").slideDown();

    $("#link1").click(function () {
        $("#menu1").slideToggle('fast');
    });

    $("#link2").click(function () {
        $("#menu2").slideToggle(500);
    });

    $("#link3").click(function () {
        $("#menu3").slideToggle('fast');
    });

    // Responsive Tables

    $('table').addClass('table-responsive');

    // Ripples Js 

    $.ripple(".sidebar .li, .btn1, .btn2", {
        debug: false, // Turn Ripple.js logging on/off
        on: 'mousedown', // The event to trigger a ripple effect

        opacity: 0.4, // The opacity of the ripple
        color: "auto", // Set the background color. If set to "auto", it will use the text color
        multi: false, // Allow multiple ripples per element

        duration: 0.6, // The duration of the ripple

        // Filter function for modifying the speed of the ripple
        rate: function (pxPerSecond) {
            return pxPerSecond;
        },

        easing: 'linear' // The CSS3 easing function of the ripple
    });



    // Chart JS

    // Pie Chart

    var ctx = document.getElementById('pieChart');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Active Members', 'Incative Members'],
            datasets: [{
                label: '# of Members',
                data: [12, 5],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // Bar  Chart
    var ctx = document.getElementById('barChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Active Members', 'Incative Members'],
            datasets: [{
                label: '# of Members',
                data: [12, 5],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });





});
