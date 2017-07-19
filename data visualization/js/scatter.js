function getScatter() {
    var zulatopics = '<li><a href="#">Einführung</a></li><li><a href="#">OO-Einführung</a></li><li><a href="#">Variablen und Type..</a></li><li><a href="#">Parameter, Methode..</a></li><li><a href="#">Systematisches Pro..</a></li><li><a href="#">Speicher & Rekursi..</a></li><li><a href="#">Polymorphie</a></li><li><a href="#">Interfaces</a></li><li><a href="#">Klassenmethoden un..</a></li><li><a href="#">Exception Handling</a></li><li><a href="#">GUI</a></li><li><a href="#">Persistenz</a></li><li><a href="#">Datenstrukturen</a></li>';
    var headtopics = '<li><a href="#">OO Einführung</a></li><li><a href="#">Parameter, Methode..</a></li><li><a href="#">Systematisches Pro..</a></li><li><a href="#">Polymorphie</a></li><li><a href="#">Interfaces</a></li><li><a href="#">Klassenmethoden un..</a></li><li><a href="#">Exception Handling</a></li><li><a href="#">GUI</a></li><li><a href="#">Persistenz</a></li>';
    var selftopics = '<li><a href="#">Variablen</a></li><li><a href="#">Methoden</a></li><li><a href="#">Programme schreibe..</a></li><li><a href="#">Vererbung & Polymo..</a></li><li><a href="#">Interfaces & abstr..</a></li><li><a href="#">Klassenmethoden un..</a></li><li><a href="#">Exceptions</a></li><li><a href="#">GUI Programmierung</a></li><li><a href="#">Objekte und Daten ..</a></li><li><a href="#">Klausurvorbereitun..</a></li>';

    var selectStrMapArray = ["EinführungZulassungstest15ws","OO-EinführungZulassungstest15ws","Variablen und Type..Zulassungstest15ws","Parameter, Methode..Zulassungstest15ws","Systematisches Pro..Zulassungstest15ws","Speicher & Rekursi..Zulassungstest15ws","PolymorphieZulassungstest15ws","InterfacesZulassungstest15ws","Klassenmethoden un..Zulassungstest15ws","Exception HandlingZulassungstest15ws","GUIZulassungstest15ws","PersistenzZulassungstest15ws","DatenstrukturenZulassungstest15ws","OO EinführungHead First Test15ws","Parameter, Methode..Head First Test15ws","Systematisches Pro..Head First Test15ws","PolymorphieHead First Test15ws","InterfacesHead First Test15ws","Klassenmethoden un..Head First Test15ws","Exception HandlingHead First Test15ws","GUIHead First Test15ws","PersistenzHead First Test15ws","VariablenSelbsttests15ws","MethodenSelbsttests15ws","Programme schreibe..Selbsttests15ws","Vererbung & Polymo..Selbsttests15ws","Interfaces & abstr..Selbsttests15ws","Klassenmethoden un..Selbsttests15ws","ExceptionsSelbsttests15ws","GUI ProgrammierungSelbsttests15ws","Objekte und Daten ..Selbsttests15ws","Klausurvorbereitun..Selbsttests15ws","EinführungZulassungstest16ws","OO-EinführungZulassungstest16ws","Variablen und Type..Zulassungstest16ws","Parameter, Methode..Zulassungstest16ws","Systematisches Pro..Zulassungstest16ws","Speicher & Rekursi..Zulassungstest16ws","PolymorphieZulassungstest16ws","InterfacesZulassungstest16ws","Klassenmethoden un..Zulassungstest16ws","Exception HandlingZulassungstest16ws","GUIZulassungstest16ws","PersistenzZulassungstest16ws","DatenstrukturenZulassungstest16ws","VariablenSelbsttests16ws","OO EinführungHead First Test16ws","Parameter, Methode..Head First Test16ws","Systematisches Pro..Head First Test16ws","PolymorphieHead First Test16ws","InterfacesHead First Test16ws","Klassenmethoden un..Head First Test16ws","Exception HandlingHead First Test16ws","GUIHead First Test16ws","PersistenzHead First Test16ws","MethodenSelbsttests16ws","Programme schreibe..Selbsttests16ws","Vererbung & Polymo..Selbsttests16ws","Interfaces & abstr..Selbsttests16ws","Klassenmethoden un..Selbsttests16ws","ExceptionsSelbsttests16ws","GUI ProgrammierungSelbsttests16ws","Objekte und Daten ..Selbsttests16ws","Klausurvorbereitun..Selbsttests16ws"];

    var findTestnum=1;
    $(".nav-tab").removeClass("active");
    $("#scatter").addClass("active");
    deleteUselessDivs();
    $("#tab-plane").css("width", '100%');

    $(".content").prepend('<div id = "scatter-select-refresh-div" class="btn-group"><button id = "refresh-button" class="btn btn-primary" type="button" >Refresh</button></div>');

    $(".content").prepend('<div id = "scatter-select-topic-div" class="dropdown btn-group"><button style = "width : 200px;" class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Einführung&nbsp&nbsp<span class="caret"></span></button> <ul id = "listOfTopics" class="dropdown-menu scatter-menu1" aria-labelledby="dropdownMenu1">'+zulatopics+'</ul></div>');
    $(".content").prepend('<div id = "scatter-select-type-div" class="dropdown btn-group"><button style = "width : 140px;"class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Zulassungstest&nbsp&nbsp<span class="caret"></span></button> <ul class="dropdown-menu scatter-menu2" aria-labelledby="dropdownMenu2"><li><a href="#">Head First Test</a></li><li><a href="#">Selbsttests</a></li><li><a href="#">Zulassungstest</a></li></ul></div>');
    $(".content").prepend('<div id = "scatter-select-semester-div" class="dropdown btn-group"><button style = "width : 100px;"class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">15ws&nbsp&nbsp<span class="caret"></span></button> <ul class="dropdown-menu scatter-menu3" aria-labelledby="dropdownMenu3"><li><a href="#">16ws</a></li><li><a href="#">15ws</a></li></ul></div>');

    bindSelectionOnClick();
    $('.scatter-menu2 li > a').click(function(e){
        $('#dropdownMenu2').html(this.innerHTML+'&nbsp&nbsp<span class="caret"></span>');

        var tempStrForTopics = "";
        if(this.innerHTML =="Zulassungstest")
            tempStrForTopics = zulatopics;
        else if(this.innerHTML == "Selbsttests")
            tempStrForTopics = selftopics;
        else
            tempStrForTopics = headtopics;
        $('#listOfTopics').html(tempStrForTopics);
        bindSelectionOnClick();
        $('#dropdownMenu1').html('&nbsp&nbsp<span class="caret"></span>');
    });
    $('.scatter-menu3 li > a').click(function(e){
        $('#dropdownMenu3').html(this.innerHTML+'&nbsp&nbsp<span class="caret"></span>');
    });
    $('#refresh-button').click(function(e){
        var strSelectTopic = $('#dropdownMenu1').text();
        var strSelectType = $('#dropdownMenu2').text();
        var strSelectTerm = $('#dropdownMenu3').text();
        var searchSelectionMapStr = strSelectTopic.substring(0, strSelectTopic.length-2)+strSelectType.substring(0, strSelectType.length-2)+strSelectTerm.substring(0, strSelectTerm.length-2);
        console.log(searchSelectionMapStr);
        findTestnum = selectStrMapArray.indexOf(searchSelectionMapStr)+1;
        console.log("index:"+findTestnum);
        if(findTestnum<=0)
            alert('No data, please check your selection');
        else
            getTestDataAndDisplay(findTestnum);
        
    });

    



    //these below stilll neededd
    getTestDataAndDisplay(findTestnum);



}

function bindSelectionOnClick(){
    $('.scatter-menu1 li > a').click(function(e){
        $('#dropdownMenu1').html(this.innerHTML+'&nbsp&nbsp<span class="caret"></span>');
    });
}

function getTestDataAndDisplay(testnum){
    var myChart = echarts.init(document.getElementById('tab-plane'));

    myChart.showLoading();
    $.get("http://127.0.0.1:8000/polls/?test="+testnum, function(data, status) {
        var jsonObj = $.parseJSON(data);
        displayTheGraph(jsonObj);
    });
}

function deleteUselessDivs() {
    $("#adddiv").remove();
    $("#scatter-select-semester-div").remove();
    $("#scatter-select-type-div").remove();
    $("#scatter-select-topic-div").remove();
    $("#scatter-select-refresh-div").remove();
    $("#constraint-course-div").remove();

}

function displayTheGraph(data) {
    var class1Array = [];
    var class2Array = [];
    var class3Array = [];
    var class4Array = [];

    var dataArray = [class1Array, class2Array, class3Array, class4Array];

    $.each(data, function(k, v) {
        // console.log(k + ' ' + v);
        var keysbyindex = Object.keys(v);
        var index = v[keysbyindex[2]];
        console.log(index);
        dataArray[index].push([parseFloat(v[keysbyindex[1]]).toPrecision(3), parseFloat(v[keysbyindex[0]]).toPrecision(3)]);

    });

    var myChart = echarts.init(document.getElementById('tab-plane'));
    myChart.hideLoading();

    option = {
        title: {
            text: 'Grade and Time',
            subtext: 'etest 2 result'
        },
        grid: {
            left: '3%',
            right: '7%',
            bottom: '3%',
            containLabel: true
        },
        tooltip: {
            // trigger: 'axis',
            showDelay: 0,
            formatter: function(params) {
                if (params.value.length > 1) {
                    return params.seriesName + ' :<br/>' + params.value[0] + 'time ' + params.value[1] + 'points ';
                } else {
                    return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + 'points ';
                }
            },
            axisPointer: {
                show: true,
                type: 'cross',
                lineStyle: {
                    type: 'dashed',
                    width: 1
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
        brush: {},
        legend: {
            data: ['class1', 'class2', 'class3', 'class4'],
            left: 'center'
        },
        xAxis: [{
            type: 'value',
            scale: true,
            axisLabel: {
                formatter: '{value} time'
            },
            splitLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'value',
            scale: true,
            axisLabel: {
                formatter: '{value} points'
            },
            splitLine: {
                show: false
            }
        }],
        series: [{
            name: 'class1',
            type: 'scatter',
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
            markPoint: {
                data: [
                    { type: 'average', name: '平均值' }

                    // {type : 'max', name: '最大值'},
                    // {type : 'min', name: '最小值'}
                ]
            }
        }, {
            name: 'class2',
            type: 'scatter',
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
            markPoint: {
                data: [
                    { type: 'average', name: '平均值' }

                    // {type : 'max', name: '最大值'},
                    // {type : 'min', name: '最小值'}
                ]
            }
        }, {
            name: 'class3',
            type: 'scatter',
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
            markPoint: {
                data: [
                    { type: 'average', name: '平均值' }

                    // {type : 'max', name: '最大值'},
                    // {type : 'min', name: '最小值'}
                ]
            },
            markLine: {
                lineStyle: {
                    normal: {
                        type: 'solid'
                    }
                },
                data: [
                    // { type: 'average', name: 'You' },

                    { xAxis: dataArray[2][0][0], name: 'You' },
                    { yAxis: dataArray[2][0][1] }
                ]
            }
        }, {
            name: 'class4',
            type: 'scatter',
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
            markPoint: {
                data: [
                    // {type : 'max', name: '最大值'},
                    { type: 'average', name: '平均值' }

                    // {type : 'min', name: '最小值'}
                ]
            }
        }],
        animationEasing: 'elasticOut'

    };


    myChart.setOption(option);
}