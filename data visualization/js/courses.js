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
    // $("#adddiv").remove();
    $("#tab-plane").css("width", '100%');
    deleteUselessDivs();
    

    var dataOct = [{"value": 6613, "name": "h\u00f6here Mathematik I f\u00fcr Wirtschaftsingenieure und Maschinenbauer"}, {"value": 6058, "name": "Internes Rechnungswesen und buchf\u00fchrung Rechnungswesen I A Lernraum zur Veranstaltung"}, {"value": 5673, "name": "einf\u00fchrung in die Technische Informatik"}, {"value": 4910, "name": "Analysis f\u00fcr Informatiker"}, {"value": 4854, "name": "Physik f\u00fcr Maschinenbau"}, {"value": 4387, "name": "Mathematik I"}, {"value": 4121, "name": "h\u00f6here Mathematik 1"}, {"value": 3844, "name": "Maschinengestaltung II Vorlesung"}, {"value": 3843, "name": "Maschinengestaltung II"}, {"value": 3734, "name": "Werkstoffkunde I"}, {"value": 3675, "name": "Mechanik I f\u00fcr Maschinenbauer"}, {"value": 3653, "name": "Regelungstechnik Vorlesung"}, {"value": 3629, "name": "Lernraum Messtechnisches Labor"}, {"value": 3507, "name": "Mathematik III"}, {"value": 3436, "name": "grundz\u00fcge der Chemie"}, {"value": 3343, "name": "Thermodynamik II"}, {"value": 3338, "name": "h\u00f6here Mathematik 3"}, {"value": 3158, "name": "Grundgebiete der Elektrotechnik 3 f\u00fcr Elektrotechniker 3 Sem"}, {"value": 3105, "name": "Grundgebiete der Elektrotechnik 1"}, {"value": 3045, "name": "Berechenbarkeit und komplexit\u00e4t"}, {"value": 2834, "name": "Produktion und Logistik"}, {"value": 2826, "name": "Operations Research 1"}, {"value": 2790, "name": "Entscheidungslehre WIWI C alle au\u00dfer Bachelor BWL"}, {"value": 2693, "name": "Maschinengestaltung I f\u00fcr Maschinenbauer 1 Sem"}, {"value": 2658, "name": "Numerisches Rechnen"}, {"value": 2657, "name": "w\u00e4rme und stoff\u00fcbertragung I"}, {"value": 2655, "name": "Mechanik III f\u00fcr Maschinenbauer"}, {"value": 2630, "name": "Investition und Finanzierung au\u00dfer BWL Bachelor"}, {"value": 2530, "name": "Vorlesung Makro konomie I f r alle Studieng nge mit curricularer Verankerung"}, {"value": 2468, "name": "Grundgebiete der Informatik I"}, {"value": 2340, "name": "Vorlesung Baustoffkunde 1 BSK 1 BB f Bauing UIW ler WI MoVe u Lehramt BT"}, {"value": 2303, "name": "Vorlesung WiWi A einf\u00fchrung in die BWL"}, {"value": 2250, "name": "einf\u00fchrung in den Maschinenbau"}, {"value": 2021, "name": "Analysis I"}, {"value": 1928, "name": "Thermodynamik I"}, {"value": 1908, "name": "Softwaretechnik"}, {"value": 1878, "name": "w\u00e4rme und stoff\u00fcbertragung I"}, {"value": 1868, "name": "Mechanik I"}, {"value": 1842, "name": "Kommunikation und Organisationsentwicklung"}, {"value": 1752, "name": "l?p Lernraum zu mikro\u00f6konomie 1"}, {"value": 1732, "name": "Experimentalphysik I Mechanik und relativit\u00e4t Vorlesung"}, {"value": 1719, "name": "Maschinengestaltung III Lehrmaterial"}, {"value": 1641, "name": "Mechanik I f\u00fcr Wirtschaftsingenieure FR Maschinenbau"}, {"value": 1587, "name": "Treffpunkt Regelungstechnik"}, {"value": 1581, "name": "Baukonstruktion"}, {"value": 1570, "name": "Business Engineering"}, {"value": 1541, "name": "Introduction to Artificial Intelligence"}, {"value": 1487, "name": "einf\u00fchrung in die Theoretische Physik Vorlesung"}, {"value": 1479, "name": "einf\u00fchrung in die empirische Wirtschaftsforschung"}, {"value": 1459, "name": "Werkstoffkunde II Kunststoff und Keramik"}, {"value": 1449, "name": "Mathematische Methoden der Elektrotechnik"}, {"value": 1433, "name": "Mechanik III f\u00fcr Wirtschaftsingenieure FR Maschinenbau"}, {"value": 1390, "name": "h\u00f6here Mathematik I f\u00fcr Physiker"}, {"value": 1369, "name": "Informatik im Maschinenbau I"}, {"value": 1362, "name": "Planungsmethodik"}, {"value": 1356, "name": "Angewandte Statistik B Sc"}, {"value": 1342, "name": "Lernraum zum Modul ALG1"}, {"value": 1320, "name": "Basic Techniques in Computer Graphics"}];
    var dataNov = [{"value": 9373, "name": "Internes Rechnungswesen und buchf\u00fchrung Rechnungswesen I A Lernraum zur Veranstaltung"}, {"value": 8312, "name": "Analysis f\u00fcr Informatiker"}, {"value": 7898, "name": "h\u00f6here Mathematik I f\u00fcr Wirtschaftsingenieure und Maschinenbauer"}, {"value": 7042, "name": "einf\u00fchrung in die Technische Informatik"}, {"value": 6453, "name": "h\u00f6here Mathematik 1"}, {"value": 6171, "name": "Werkstoffkunde I"}, {"value": 6039, "name": "Physik f\u00fcr Maschinenbau"}, {"value": 5731, "name": "Thermodynamik II"}, {"value": 5584, "name": "Maschinengestaltung II"}, {"value": 5370, "name": "Mathematik I"}, {"value": 5185, "name": "Investition und Finanzierung au\u00dfer BWL Bachelor"}, {"value": 5114, "name": "Mathematik III"}, {"value": 4961, "name": "Mechanik I f\u00fcr Maschinenbauer"}, {"value": 4759, "name": "Grundgebiete der Elektrotechnik 3 f\u00fcr Elektrotechniker 3 Sem"}, {"value": 4447, "name": "Maschinengestaltung I f\u00fcr Maschinenbauer 1 Sem"}, {"value": 4443, "name": "Produktion und Logistik"}, {"value": 4259, "name": "Numerisches Rechnen"}, {"value": 4222, "name": "h\u00f6here Mathematik 3"}, {"value": 4190, "name": "Berechenbarkeit und komplexit\u00e4t"}, {"value": 4167, "name": "Regelungstechnik Vorlesung"}, {"value": 4059, "name": "Mechanik I"}, {"value": 3862, "name": "w\u00e4rme und stoff\u00fcbertragung I"}, {"value": 3625, "name": "Operations Research 1"}, {"value": 3577, "name": "Grundgebiete der Informatik I"}, {"value": 3572, "name": "Grundgebiete der Elektrotechnik 1"}, {"value": 3456, "name": "Mechanik III f\u00fcr Maschinenbauer"}, {"value": 3428, "name": "Vorlesung Baustoffkunde 1 BSK 1 BB f Bauing UIW ler WI MoVe u Lehramt BT"}, {"value": 3238, "name": "Softwaretechnik"}, {"value": 3178, "name": "Experimentalphysik I Mechanik und relativit\u00e4t Vorlesung"}, {"value": 3141, "name": "Analysis I"}, {"value": 3128, "name": "Entscheidungslehre WIWI C alle au\u00dfer Bachelor BWL"}, {"value": 3062, "name": "grundz\u00fcge der Chemie"}, {"value": 2981, "name": "Baukonstruktion"}, {"value": 2959, "name": "Lernraum Messtechnisches Labor"}, {"value": 2902, "name": "Treffpunkt Regelungstechnik"}, {"value": 2892, "name": "Mathematische Methoden der Elektrotechnik"}, {"value": 2795, "name": "l?p Lernraum zu mikro\u00f6konomie 1"}, {"value": 2782, "name": "Geotechnik I V"}, {"value": 2736, "name": "Vorlesung WiWi A einf\u00fchrung in die BWL"}, {"value": 2525, "name": "Mechanik III f\u00fcr Wirtschaftsingenieure FR Maschinenbau"}, {"value": 2451, "name": "w\u00e4rme und stoff\u00fcbertragung I"}, {"value": 2439, "name": "Basic Techniques in Computer Graphics"}, {"value": 2369, "name": "Lernraum zum Modul ALG1"}, {"value": 2343, "name": "Mathematisches prop\u00e4deutikum"}, {"value": 2319, "name": "Kommunikation und Organisationsentwicklung"}, {"value": 2304, "name": "Systemprogrammierung"}, {"value": 2155, "name": "h\u00f6here Mathematik I f\u00fcr Physiker"}, {"value": 2125, "name": "einf\u00fchrung in die Programmierung"}, {"value": 2094, "name": "Grundlagen der Physik Vorlesung"}, {"value": 2081, "name": "Mechanik I f\u00fcr Wirtschaftsingenieure FR Maschinenbau"}, {"value": 2046, "name": "Kurs der Physik Physikalisches Praktikum f\u00fcr Studierende der Medizin"}, {"value": 2043, "name": "einf\u00fchrung in die Theoretische Physik Vorlesung"}, {"value": 1991, "name": "Introduction to Artificial Intelligence"}, {"value": 1970, "name": "einf\u00fchrung in die empirische Wirtschaftsforschung"}, {"value": 1967, "name": "Vorbereitung und durchf\u00fchrung von Bauprojekten im Lebenszyklus"}, {"value": 1960, "name": "einf\u00fchrung in den Maschinenbau"}, {"value": 1954, "name": "Baustatik I"}, {"value": 1893, "name": "Angewandte Statistik B Sc"}];
    var dataDec = [{"value": 6775, "name": "h\u00f6here Mathematik I f\u00fcr Wirtschaftsingenieure und Maschinenbauer"}, {"value": 6610, "name": "Internes Rechnungswesen und buchf\u00fchrung Rechnungswesen I A Lernraum zur Veranstaltung"}, {"value": 5531, "name": "Mechanik I f\u00fcr Maschinenbauer"}, {"value": 5528, "name": "Analysis f\u00fcr Informatiker"}, {"value": 5061, "name": "Thermodynamik II"}, {"value": 4928, "name": "Investition und Finanzierung au\u00dfer BWL Bachelor"}, {"value": 4676, "name": "Maschinengestaltung II"}, {"value": 4458, "name": "einf\u00fchrung in die Technische Informatik"}, {"value": 4239, "name": "Produktion und Logistik"}, {"value": 4146, "name": "Werkstoffkunde I"}, {"value": 3975, "name": "Maschinengestaltung I f\u00fcr Maschinenbauer 1 Sem"}, {"value": 3918, "name": "Grundgebiete der Elektrotechnik 3 f\u00fcr Elektrotechniker 3 Sem"}, {"value": 3780, "name": "Mechanik I"}, {"value": 3656, "name": "Mechanik III f\u00fcr Maschinenbauer"}, {"value": 3548, "name": "Mathematik III"}, {"value": 3453, "name": "einf\u00fchrung in den Maschinenbau"}, {"value": 3361, "name": "Physik f\u00fcr Maschinenbau"}, {"value": 3278, "name": "h\u00f6here Mathematik 3"}, {"value": 3257, "name": "Mathematik I"}, {"value": 2967, "name": "Numerisches Rechnen"}, {"value": 2900, "name": "h\u00f6here Mathematik 1"}, {"value": 2711, "name": "Operations Research 1"}, {"value": 2641, "name": "w\u00e4rme und stoff\u00fcbertragung I"}, {"value": 2624, "name": "Berechenbarkeit und komplexit\u00e4t"}, {"value": 2596, "name": "Regelungstechnik Vorlesung"}, {"value": 2497, "name": "Baukonstruktion"}, {"value": 2323, "name": "Analysis I"}, {"value": 2202, "name": "Experimentalphysik I Mechanik und relativit\u00e4t Vorlesung"}, {"value": 2196, "name": "Grundgebiete der Elektrotechnik 1"}, {"value": 2149, "name": "Vorlesung WiWi A einf\u00fchrung in die BWL"}, {"value": 2116, "name": "Lernraum Messtechnisches Labor"}, {"value": 1919, "name": "Lernraum zum Modul ALG1"}, {"value": 1891, "name": "Kurs der Zellbiologie I Vorlesung"}, {"value": 1822, "name": "grundz\u00fcge der Chemie"}, {"value": 1821, "name": "Treffpunkt Regelungstechnik"}, {"value": 1810, "name": "Softwaretechnik"}, {"value": 1783, "name": "Baustatik I"}, {"value": 1733, "name": "Geotechnik I V"}, {"value": 1692, "name": "Entscheidungslehre WIWI C alle au\u00dfer Bachelor BWL"}, {"value": 1666, "name": "Maschinengestaltung III"}, {"value": 1582, "name": "Mechanik III f\u00fcr Wirtschaftsingenieure FR Maschinenbau"}, {"value": 1552, "name": "Vorbereitung und durchf\u00fchrung von Bauprojekten im Lebenszyklus"}, {"value": 1520, "name": "Wasserwirtschaft und Hydrologie I"}, {"value": 1504, "name": "Mechanik I f\u00fcr Wirtschaftsingenieure FR Maschinenbau"}, {"value": 1484, "name": "l?p Lernraum zu mikro\u00f6konomie 1"}, {"value": 1484, "name": "Grundlagen der Physik Vorlesung"}, {"value": 1470, "name": "einf\u00fchrung in die Theoretische Physik Vorlesung"}, {"value": 1443, "name": "Systemprogrammierung"}, {"value": 1441, "name": "Basic Techniques in Computer Graphics"}, {"value": 1439, "name": "h\u00f6here Mathematik I f\u00fcr Physiker"}, {"value": 1429, "name": "w\u00e4rme und stoff\u00fcbertragung I"}, {"value": 1429, "name": "Mathematische Methoden der Elektrotechnik"}, {"value": 1400, "name": "Grundgebiete der Informatik I"}, {"value": 1396, "name": "Grundlagen der Geotechnik I"}, {"value": 1394, "name": "Vorlesung Baustoffkunde 1 BSK 1 BB f Bauing UIW ler WI MoVe u Lehramt BT"}, {"value": 1365, "name": "Thermodynamik II f\u00fcr Wirt Ing"}, {"value": 1352, "name": "einf\u00fchrung in die Programmierung"}, {"value": 1337, "name": "Angewandte Statistik B Sc"}];
    var dataJan = [{"name": "internes rechnungswesen und buchf\u00fchrung lernraum zur veranstaltung", "value": 8236}, {"name": "h\u00f6here mathematik", "value": 7707}, {"name": "investition und finanzierung", "value": 6528}, {"name": "thermodynamik", "value": 6316}, {"name": "werkstoffkunde", "value": 6083}, {"name": "mechanik f\u00fcr maschinenbauer", "value": 5610}, {"name": "produktion und logistik", "value": 5411}, {"name": "grundgebiete der elektrotechnik", "value": 4917}, {"name": "w\u00e4rme und stoff\u00fcbertragung", "value": 4431}, {"name": "mathematik", "value": 4382}, {"name": "maschinengestaltung", "value": 4258}, {"name": "analysis f\u00fcr informatiker", "value": 4254}, {"name": "regelungstechnik vorlesung", "value": 3841}, {"name": "mathematik", "value": 3808}, {"name": "grundz\u00fcge der chemie", "value": 3725}, {"name": "h\u00f6here mathematik", "value": 3487}, {"name": "einf\u00fchrung in die technische informatik", "value": 3441}, {"name": "grundgebiete der elektrotechnik", "value": 3427}, {"name": "physik", "value": 3335}, {"name": "mechanik f\u00fcr maschinenbauer", "value": 3162}, {"name": "h\u00f6here mathematik", "value": 3125}, {"name": "numerisches rechnen", "value": 3004}, {"name": "mechanik", "value": 2776}, {"name": "vorlesung wi wi einf\u00fchrung in die", "value": 2620}, {"name": "mathematische methoden der elektrotechnik", "value": 2618}, {"name": "treffpunkt regelungstechnik", "value": 2462}, {"name": "entscheidungslehre", "value": 2398}, {"name": "experimentalphysik mechanik und relativit\u00e4t", "value": 2318}, {"name": "einf\u00fchrung in die empirische wirtschaftsforschung", "value": 2261}, {"name": "w\u00e4rme und stoff\u00fcbertragung", "value": 2164}, {"name": "operations research", "value": 2148}, {"name": "projektmanagement", "value": 2067}, {"name": "analysis", "value": 1942}, {"name": "differential und integralrechnung", "value": 1889}, {"name": "thermodynamik f\u00fcr wirt ing", "value": 1810}, {"name": "geotechnik", "value": 1793}, {"name": "lernraum messtechnisches labor", "value": 1755}, {"name": "berechenbarkeit und komplexit\u00e4t", "value": 1736}, {"name": "baukonstruktion", "value": 1734}, {"name": "kurs der zellbiologie", "value": 1719}, {"name": "mechanik f\u00fcr wirtschaftsingenieure maschinenbau", "value": 1713}, {"name": "grundgebiete der informatik", "value": 1688}, {"name": "l\u00fc lernraum zu mikro\u00f6konomie", "value": 1687}, {"name": "baustatik", "value": 1642}, {"name": "maschinengestaltung", "value": 1609}, {"name": "lernraum zum modul", "value": 1602}, {"name": "lineare algebra", "value": 1533}, {"name": "maschinengestaltung", "value": 1525}, {"name": "mathematisches prop\u00e4deutikum", "value": 1430}, {"name": "planungsmethodik", "value": 1424}, {"name": "grundlagen der physik vorlesung", "value": 1373}, {"name": "mechanik f\u00fcr wirtschaftsingenieure maschinenbau", "value": 1357}, {"name": "einf\u00fchrung in die theoretische physik", "value": 1298}, {"name": "angewandte statistik", "value": 1292}, {"name": "systemprogrammierung", "value": 1283}, {"name": "econometrics", "value": 1283}, {"name": "grundoperationen der verfahrenstechnik", "value": 1281}, {"name": "energiesystemtechnik", "value": 1278}];
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
    console.log(dataOct.length)
    console.log(dataNov.length)
    console.log(dataDec.length)
    console.log(dataJan.length)
    var dlength = dataJan.length;
    var myChart = echarts.init(document.getElementById('tab-plane'));
    console.log(dataJan.length);

    option = {
        baseOption: {
            timeline: {
                axisType: 'category',
                autoPlay: true,
                playInterval: 6000,
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

                //subtext: '234523',
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

                //subtext: '234523',
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

                //subtext: '234523',
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

                //subtext: '234523',
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

                //subtext: '234523',
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

                //subtext: '234523',
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