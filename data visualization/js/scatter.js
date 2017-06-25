function getScatter() {

    $(".nav-tab").removeClass("active");
    $("#scatter").addClass("active");

    $.get("http://127.0.0.1:8000/polls/", function(data, status) {
        var jsonObj = $.parseJSON(data);
        displayTheGraph(jsonObj);
    });

    

}

function displayTheGraph(data){
	var class1Array=[];
	var class2Array=[];
	var class3Array=[];
	var class4Array=[];

	var dataArray=[class1Array, class2Array, class3Array, class4Array];

	$.each(data, function(k, v) {
        // console.log(k + ' ' + v);
        var keysbyindex = Object.keys(v);
        var index = v[keysbyindex[2]];
        console.log(index);
        dataArray[index].push([parseFloat(v[keysbyindex[1]]).toPrecision(3),parseFloat(v[keysbyindex[0]]).toPrecision(3)]);
        
    });

    var myChart = echarts.init(document.getElementById('tab-plane'));

	option = {
	    title : {
	        text: 'Grade and Time',
	        subtext: 'etest 2 result'
	    },
	    grid: {
	        left: '3%',
	        right: '7%',
	        bottom: '3%',
	        containLabel: true
	    },
	    tooltip : {
	        // trigger: 'axis',
	        showDelay : 0,
	        formatter : function (params) {
	            if (params.value.length > 1) {
	                return params.seriesName + ' :<br/>'
	                + params.value[0] + 'cm '
	                + params.value[1] + 'kg ';
	            }
	            else {
	                return params.seriesName + ' :<br/>'
	                + params.name + ' : '
	                + params.value + 'kg ';
	            }
	        },
	        axisPointer:{
	            show: true,
	            type : 'cross',
	            lineStyle: {
	                type : 'dashed',
	                width : 1
	            }
	        }
	    },
	    toolbox: {
	        feature: {
	            dataZoom: {},
	            brush: {
	                type: ['rect', 'polygon', 'clear']
	            }
	        }
	    },
	    brush: {
	    },
	    legend: {
	        data: ['class1','class2', 'class3', 'class4'],
	        left: 'center'
	    },
	    xAxis : [
	        {
	            type : 'value',
	            scale:true,
	            axisLabel : {
	                formatter: '{value} time'
	            },
	            splitLine: {
	                show: false
	            }
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            scale:true,
	            axisLabel : {
	                formatter: '{value} points'
	            },
	            splitLine: {
	                show: false
	            }
	        }
	    ],
	    series : [
	        {
	            name:'class1',
	            type:'scatter',
	            data: dataArray[0],
	            // markArea: {
	            //     silent: true,
	            //     itemStyle: {
	            //         normal: {
	            //             color: 'transparent',
	            //             borderWidth: 1,
	            //             borderType: 'dashed'
	            //         }
	            //     },
	            //     data: [[{
	            //         // name: '分布区间',
	            //         xAxis: 'min',
	            //         yAxis: 'min'
	            //     }, {
	            //         xAxis: 'max',
	            //         yAxis: 'max'
	            //     }]]
	            // },
	            markPoint : {
	                data : [
	                    {type : 'average', name: '平均值'}

	                    // {type : 'max', name: '最大值'},
	                    // {type : 'min', name: '最小值'}
	                ]
	            }
	        },
	        {
	            name:'class2',
	            type:'scatter',
	            data: dataArray[1],
	            // markArea: {
	            //     silent: true,
	            //     itemStyle: {
	            //         normal: {
	            //             color: 'transparent',
	            //             borderWidth: 1,
	            //             borderType: 'dashed'
	            //         }
	            //     },
	            //     data: [[{
	            //         // name: '分布区间',
	            //         xAxis: 'min',
	            //         yAxis: 'min'
	            //     }, {
	            //         xAxis: 'max',
	            //         yAxis: 'max'
	            //     }]]
	            // },
	            markPoint : {
	                data : [
	                    {type : 'average', name: '平均值'}

	                    // {type : 'max', name: '最大值'},
	                    // {type : 'min', name: '最小值'}
	                ]
	            }
	        },
	        {
	            name:'class3',
	            type:'scatter',
	            data: dataArray[2],
	            // markArea: {
	            //     silent: true,
	            //     itemStyle: {
	            //         normal: {
	            //             color: 'transparent',
	            //             borderWidth: 1,
	            //             borderType: 'dashed'
	            //         }
	            //     },
	            //     data: [[{
	            //         // name: '分布区间',
	            //         xAxis: 'min',
	            //         yAxis: 'min'
	            //     }, {
	            //         xAxis: 'max',
	            //         yAxis: 'max'
	            //     }]]
	            // },
	            markPoint : {
	                data : [
	                    {type : 'average', name: '平均值'}

	                    // {type : 'max', name: '最大值'},
	                    // {type : 'min', name: '最小值'}
	                ]
	            }
	        },
	        {
	            name:'class4',
	            type:'scatter',
	            data: dataArray[3],
	            // markArea: {
	            //     silent: true,
	            //     itemStyle: {
	            //         normal: {
	            //             color: 'transparent',
	            //             borderWidth: 1,
	            //             borderType: 'dashed'
	            //         }
	            //     },
	            //     data: [[{
	            //         // name: '分布区间',
	            //         xAxis: 'min',
	            //         yAxis: 'min'
	            //     }, {
	            //         xAxis: 'max',
	            //         yAxis: 'max'
	            //     }]]
	            // },
	            markPoint : {
	                data : [
	                    // {type : 'max', name: '最大值'},
	                    {type : 'average', name: '平均值'}

	                    // {type : 'min', name: '最小值'}
	                ]
	            }
	        }
	    ]
	    ,animationEasing: 'elasticOut'
    
	};


    myChart.setOption(option);
}
