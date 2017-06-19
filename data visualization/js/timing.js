function getTiming() {

    $(".nav-tab").removeClass("active");
    $("#timing").addClass("active");
    var myChart = echarts.init(document.getElementById('tab-plane'));

    var option = {
        title: {
            text: 'Time spent on etests',
            subtext: '023923',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x: 'center',
            y: 'bottom',
            data: ['time1', 'time2', 'time3', 'time4', 'time5', 'time6', 'time7', 'time8']
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        series: [{
            name: 'radius mode',
            type: 'pie',
            radius: [20, 110],
            center: ['25%', '50%'],
            roseType: 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: [
                { value: 10, name: 'time1' },
                { value: 5, name: 'time2' },
                { value: 15, name: 'time3' },
                { value: 25, name: 'time4' },
                { value: 20, name: 'time5' },
                { value: 35, name: 'time6' },
                { value: 30, name: 'time7' },
                { value: 40, name: 'time8' }
            ]
        }, {
            name: 'area mode',
            type: 'pie',
            radius: [30, 110],
            center: ['75%', '50%'],
            roseType: 'area',
            data: [
                { value: 10, name: 'time1' },
                { value: 5, name: 'time2' },
                { value: 15, name: 'time3' },
                { value: 25, name: 'time4' },
                { value: 20, name: 'time5' },
                { value: 35, name: 'time6' },
                { value: 30, name: 'time7' },
                { value: 40, name: 'time8' }
            ]
        }]
    };


    myChart.setOption(option);

}
