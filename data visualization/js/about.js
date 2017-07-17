function getAbout() {
    $(".nav-tab").removeClass("active");
    $("#about").addClass("active");
    $("#tab-plane").css("width", '50%');
    $( "#adddiv" ).remove();
    // $("#tab-plane").css("height", 500);
    $("#tab-plane").css("float", "left");
    $(".content").append('<div id = "adddiv" style="width:50%;height:500px;float:right;"><h1><a name="header-n0" class="md-header-anchor "></a>Lab : Data Analysis and visualization</h1><h3><a name="header-n2" class="md-header-anchor "></a>Brief</h3><p>This project is for the lab I&#39;ve taken this summer semester.</p><p>I finished 4 subtasks : course selection(Sankey), time &amp; performance(scatter), popular courses(word cloud), performance factors(3D bar)</p><h3><a name="header-n7" class="md-header-anchor "></a>Architecture</h3><p>MySQL - Django - Front end </p><h3><a name="header-n10" class="md-header-anchor "></a>Interesting</h3><p>Implemented a spell checker for German courses.</p><p></p><blockquote><p>All rights preserved - 黄锐铭</p></blockquote></div>')
    var tabplane = document.getElementById('tab-plane');
    // tabplane.setAttribute("style", "width:50%;height:500px;float:left;");
    // document.body.innerHTML += '<div style="width:50%;height:500px;float:right;"><author>黄锐铭</author><p>This project is built for Lab : Data Analytics and Visualiztion</p></div>';
    var myChart = echarts.init(tabplane);
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
