function getSankey() {

    $(".nav-tab").removeClass("active");
    $("#sankey").addClass("active");
    $( "#adddiv" ).remove();
    $("#tab-plane").css("width", '100%');

    var myChart = echarts.init(document.getElementById('tab-plane'));
    myChart.showLoading();

    $.get('https://raw.githubusercontent.com/Wizna/play/master/data.json', function(pdata) {

        data = JSON.parse(pdata);
        myChart.hideLoading();

        // pp = data.links
        // alert(pp[0].source)
        myChart.setOption(option = {
            title: {
                text: 'Sankey Diagram',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [{
                type: 'sankey',
                layout: 'none',
                data: data.nodes,
                links: data.links,
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.5
                    }
                }
            }]
        });
    });

}
