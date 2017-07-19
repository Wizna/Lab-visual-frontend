function rebindClickRemove(){
    $('div > .btn-default').click(function(e){
        $(this).remove();
    });
}

function getSankey() {

    var arrayCourse = ['16ws-04543'];
    $(".nav-tab").removeClass("active");
    $("#sankey").addClass("active");
    // $( "#adddiv" ).remove();
    deleteUselessDivs();
    $("#tab-plane").css("width", '100%');

    
    $(".content").prepend('<div id = "constraint-course-div" class="btn-group" role="group" aria-label="..."><button id = "add-course-button" class="btn btn-success" type="button" data-toggle="modal" data-target="#myModal">Add</button><button type="button" class="btn btn-default">16ws-04543 <span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button><button id = "refresh-course-button" class="btn btn-primary" type="button" >Refresh</button></div>');
    $(".content").prepend('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog " role="document"><div class="modal-content"><div class = "modal-body"><div class="input-group"><span class="input-group-addon" id="basic-addon3">Selected course</span><input type="text" class="form-control" id="course-num-input" placeholder="e.g. 16ws-30929" aria-describedby="basic-addon3"></div></div><div class="modal-footer"><button type="button" class="btn btn-warning" data-dismiss="modal">Cancel</button><button id = "add-btn-confirm"type="button" class="btn btn-primary">Add</button></div></div></div></div>');

    rebindClickRemove();
    $('#add-btn-confirm').click(function(e){
        $('#myModal').modal('toggle');
        var temp = $('#course-num-input').val();
        var re = /\d{2}\w[Ss]\-[0-9]{5}/i;

        if(!temp.match(re)){
            alert("Invalid input format !")
            return;
        }
        $("#add-course-button").after('<button type="button" class="btn btn-default">'+temp+'  <span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>');
        $('#course-num-input').val('');
        rebindClickRemove();
    });

    $('#refresh-course-button').click(function(e){
        arrayCourse = [];
        $( "div > .btn-default" ).each(function( index ) {
            arrayCourse.push($( this ).text());
            // console.log( index + ": " + $( this ).text() );
        });
        console.log(arrayCourse);
        getSankeyAndDisplay(arrayCourse);
    });

    getSankeyAndDisplay(arrayCourse);

}

function getSankeyAndDisplay(courseList){
    var myChart = echarts.init(document.getElementById('tab-plane'));
    myChart.showLoading();
//'https://raw.githubusercontent.com/Wizna/play/master/data.json'
    $.get('http://127.0.0.1:8000/sankey/?course='+courseList, function(data) {

        // console.log(pdata)
        // data = JSON.parse(pdata);
        console.log(data.nodes);
        if(data.nodes.length<=0){
            alert("No data for this course selection !");
            myChart.hideLoading();
            return ;
        }
        // pp = data.links
        // alert(pp[0].source)
        myChart.setOption(option = {
            title: {
                text: 'Course Selection: follow the links',
                // subtext: 'follow the links :)',
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

        myChart.hideLoading();

    });
}