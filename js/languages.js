Math.easeOutBounce = function (pos) {
    if ((pos) < (1 / 2.75)) {
        return (7.5625 * pos * pos);
    }
    if (pos < (2 / 2.75)) {
        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
    }
    if (pos < (2.5 / 2.75)) {
        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
    }
    return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
};

var chart = Highcharts.chart('languages', {

    title: {
        text: 'Languages',
        style: {
            fontWeight: 'bold',
            fontSize: '20px',
            color: 'white',
        }
    },

    chart: {
        type: 'column',
        height: 500,
        // color: '#ffffff',
        backgroundColor: "#111111",
        plotBorderColor: '#FF0000',
        inverted: true,
        polar: false,

    },

    xAxis: {
        categories: ['HTML5', 'CSS3', 'Bootstrap4', 'JavaScript', 'JQuery', 'PHP', 'MySQL', 'Laravel'],
        labels: {
            style: {
                color: 'white',
                fontSize: "14px",
                fontWeight: "bold"
            }
        },
        lineColor: '#707073',
        tickColor: '#707073',
    },

    yAxis: {
        title: {
            text: 'Skills percent',

            style: {
                color: 'white',
                fontSize: "16px",
            }
        },
        labels: {
            formatter: function () {
                return this.value + ' %';
            },

            style: {
                color: 'white',
                fontSize: "16px",
            },
        },

        // categories: ['10', '20', '30', '40', '50', '60',
        //     '70', '80', '90', '100']
    },

    tooltip: {
        crosshairs: true,
        shared: true,
        useHTML: true,
        headerFormat: '<table class="charts_table"><tr><td><b>{point.key} : ',
        pointFormat: '{point.y} %</b></td></tr>',
        footerFormat: '</table>',
        valueDecimals: 2,

        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        style: {
            // color:  
        }
    },


    plotOptions: {
        spline: {
            marker: {
                radius: 4,
            }
        },
        column: {
            borderRadius: 5
        },
        series: {
            animation: {
                duration: 2000,
                easing: 'easeOutBounce'
            },
            borderWidth: 1,
            borderColor: 'black'
        }
    },


    colors: ['#E44D26', '#1E88DC', '#563D7C', '#63A814', '#183555', '#6181B6', '#cccccc', '#FA503A'],

    series: [{
        type: 'column',
        colorByPoint: true,
        data: [90, 80, 70, 70, 80, 80, 75, 80],
        showInLegend: false,
    }],

});

// $('#plain').click(function () {
//     chart.update({
//         chart: {
//             inverted: false,
//             polar: false
//         },
//     });
//     charts($(this))
// });

// $('#inverted').click(function () {
//     chart.update({
//         chart: {
//             inverted: true,
//             polar: false
//         },
//     });
//     charts($(this))
// });

// $('#polar').click(function () {
//     chart.update({
//         chart: {
//             inverted: false,
//             polar: true
//         },
//     });
//     charts($(this))
// });

// function charts(it){
//     $(".types_of_chart").removeClass("active")
//     $(it).addClass("active")
// }