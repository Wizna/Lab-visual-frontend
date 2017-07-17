String.prototype.hashCode = function() {
    var hash = 0,
        i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

function getCourses() {
    $(".nav-tab").removeClass("active");
    $("#courses").addClass("active");
    $("#adddiv").remove();
    $("#tab-plane").css("width", '100%');

    var dataOct = [{
        name: 'Macys',
        value: 6000
    }, {
        name: 'Amy Schumer',
        value: 2086
    }, {
        name: 'Jurassic World',
        value: 4055
    }, {
        name: 'Charter Communications',
        value: 2467
    }, {
        name: 'Chick Fil A',
        value: 1244
    }];
    var dataNov = [{
        name: 'Macys',
        value: 6181
    }, {
        name: 'Amy Schumer',
        value: 4386
    }, {
        name: 'Jurassic World',
        value: 4055
    }, {
        name: 'Charter Communications',
        value: 2467
    }, {
        name: 'Chick Fil A',
        value: 2244
    }];
    var dataDec = [{
        name: 'Macys',
        value: 6181
    }, {
        name: 'Amy Schumer',
        value: 4386
    }, {
        name: 'Jurassic World',
        value: 4055
    }, {
        name: 'Charter Communications',
        value: 2467
    }, {
        name: 'Chick Fil A',
        value: 2244
    }];
    var dataJan = [{ "name": "internes rechnungswesen und buchf\u00fchrung lernraum zur veranstaltung", "value": 8236 },
        { "name": "h\u00f6here mathematik", "value": 7707 },
        { "name": "investition und finanzierung", "value": 6528 },
        { "name": "thermodynamik", "value": 6316 },
        { "name": "werkstoffkunde", "value": 6083 },
    ];
    var dataFeb = [{
        name: 'Macys',
        value: 6281
    }, {
        name: 'Amy Schumer',
        value: 4086
    }, {
        name: 'Jurassic World',
        value: 2055
    }, {
        name: 'Charter Communications',
        value: 1467
    }, {
        name: 'Chick Fil A',
        value: 3244
    }];
    var dataMar = [{
        name: 'Macys',
        value: 181
    }, {
        name: 'Amy Schumer',
        value: 486
    }, {
        name: 'Jurassic World',
        value: 2055
    }, {
        name: 'Charter Communications',
        value: 1467
    }, {
        name: 'Chick Fil A',
        value: 2244
    }];

    var count = 0
    var dlength = dataJan.length;
    var myChart = echarts.init(document.getElementById('tab-plane'));
    console.log(dataJan.length);

    option = {
        baseOption: {
            timeline: {
                axisType: 'category',
                autoPlay: true,
                playInterval: 2000,
                data: [
                    '2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03'
                ],
                label: {
                    formatter: function(s) {
                        return s;
                    }
                }
            },
            series: []
        },
        options: [{
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
                            var temp = dataOct[count].name;
                            var hash = temp.hashCode();
                            var r = (hash & 0xFF0000) >> 16;
                            var g = (hash & 0x00FF00) >> 8;
                            var b = hash & 0x0000FF;

                            count++;
                            if (count >= dlength)
                                count -= dlength;

                            return 'rgb(' + [r,g,b].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: dataOct
            }]
        }, {
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
                            var temp = dataNov[count].name;
                            var hash = temp.hashCode();
                            var r = (hash & 0xFF0000) >> 16;
                            var g = (hash & 0x00FF00) >> 8;
                            var b = hash & 0x0000FF;

                            count++;
                            if (count >= dlength)
                                count -= dlength;

                            return 'rgb(' + [r,g,b].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: dataNov
            }]
        }, {
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
                            var temp = dataDec[count].name;
                            var hash = temp.hashCode();
                            var r = (hash & 0xFF0000) >> 16;
                            var g = (hash & 0x00FF00) >> 8;
                            var b = hash & 0x0000FF;

                            count++;
                            if (count >= dlength)
                                count -= dlength;

                            return 'rgb(' + [r,g,b].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: dataDec
            }]
        }, {
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
                            var temp = dataJan[count].name;
                            var hash = temp.hashCode();
                            var r = (hash & 0xFF0000) >> 16;
                            var g = (hash & 0x00FF00) >> 8;
                            var b = hash & 0x0000FF;

                            count++;
                            if (count >= dlength)
                                count -= dlength;

                            return 'rgb(' + [r,g,b].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: dataJan
            }]
        }, {
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
                            var temp = dataFeb[count].name;
                            var hash = temp.hashCode();
                            var r = (hash & 0xFF0000) >> 16;
                            var g = (hash & 0x00FF00) >> 8;
                            var b = hash & 0x0000FF;

                            count++;
                            if (count >= dlength)
                                count -= dlength;

                            return 'rgb(' + [r,g,b].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: dataFeb
            }]
        }, {
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
                            var temp = dataMar[count].name;
                            var hash = temp.hashCode();
                            var r = (hash & 0xFF0000) >> 16;
                            var g = (hash & 0x00FF00) >> 8;
                            var b = hash & 0x0000FF;

                            count++;
                            if (count >= dlength)
                                count -= dlength;

                            return 'rgb(' + [r,g,b].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: dataMar
            }]
        }]
    };

    myChart.setOption(option);
}