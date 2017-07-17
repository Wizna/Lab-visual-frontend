function getCourses() {
    $(".nav-tab").removeClass("active");
    $("#courses").addClass("active");
    $( "#adddiv" ).remove();
    $("#tab-plane").css("width", '100%');


    


    var myChart = echarts.init(document.getElementById('tab-plane'));
    myChart.showLoading();

    $.get('https://raw.githubusercontent.com/Wizna/play/master/wordcloud.json', function(pdata) {
        myChart.hideLoading();
        var data = JSON.parse(pdata);

        var fordisplay = data.slice(1, data.length);
        console.log(fordisplay.length)
        fordisplay.unshift({
            name: data[0].name,
            value: data[0].value,
            textStyle: {
                normal: {
                    color: 'black'
                },
                emphasis: {
                    color: 'red'
                }
            }
        });

        console.log(fordisplay)
        option = {
            title: {
                text: "Word Cloud for Courses",

                subtext: '234523',
                x: 'center'

            },
            tooltip: {},
            series: [{
                type: 'wordCloud',
                gridSize: 10,
                sizeRange: [12, 28],
                rotationRange: [0, 0],
                shape: 'circle',
                autoSize: {
                    enable: true,
                    minSize: 10
                },
                textStyle: {
                    normal: {
                        color: function() {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: fordisplay
            }]
        };

        myChart.setOption(option);
    });
}
