function getAbout() {
    //reset echart graph and remove useless divs
    $(".nav-tab").removeClass("active");
    $("#about").addClass("active");
    $("#tab-plane").css("width", '50%');
    deleteUselessDivs();
    $("#tab-plane").css("float", "left");

    //add an introduction div beside the echart
    $(".content").append('<div id = "adddiv" style="width:50%;height:500px;float:right;text-align:left"><h1>Lab : Data Analysis and visualizations</h1><h3>Brief</h3><p>This project is for the lab I&#39;ve taken this summer semester.</p><p>I finished 3 subtasks : </p><ul><li>course selection(Sankey)</li><li>time &amp; performance(Scatter)</li><li>popular courses(Word cloud)</li></ul><p></p><h3>Architecture</h3><p>MySQL - Django - Front end </p><p></p><h3>Interesting</h3><p>I implemented a spell checker for German courses with little knowledge about German.</p><p>The Sankey diagram is really cool and helpful for course selection, I implemented an algorithm similar to constructing a FP-tree.</p><p></p><p></p><blockquote><p>All rights preserved - 黄锐铭</p></blockquote></div>')

    var tabplane = document.getElementById('tab-plane');
    var myChart = echarts.init(tabplane);

    //set option for the liquid fill graph
    var option = {
        series: [{
            radius: '70%',
            type: 'liquidFill',
            data: [0.5, 0.4, 0.3],
            color: ['#fdeec7', '#799fa2', '#282536'],
            itemStyle: {
                normal: {
                    opacity: 0.6
                },
                emphasis: {
                    opacity: 0.9
                }
            },
            outline: {
                show: false
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#282536',
                        fontSize: 24
                    },
                    formatter: function() {
                        return 'no matter';
                    }
                }
            },
            silent: true
        }]
    };
    myChart.setOption(option);

}