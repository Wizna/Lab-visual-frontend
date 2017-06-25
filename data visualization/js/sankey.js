function getSankey() {

    $(".nav-tab").removeClass("active");
    $("#timing").addClass("active");
    var myChart = echarts.init(document.getElementById('tab-plane'));
    myChart.showLoading();

    $.get('https://raw.githubusercontent.com/ecomfe/echarts/c7b62850ef9efa928415a91ae77b42928b823be6/test/data/energy.json', function(pdata) {
        myChart.hideLoading();

        data = JSON.parse(pdata);
        myChart.setOption(option = {
            title: {
                text: 'Sankey Diagram'
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
