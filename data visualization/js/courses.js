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
    

    var dataOct = [{"value": 6613, "name": "37850-h\u00f6here Mathematik I f\u00fcr Wirtscha..(V)"}, {"value": 6058, "name": "10387-Internes Rechnungswesen und buch..(V\u00dc)"}, {"value": 5673, "name": "06039-einf\u00fchrung in die Technische Inf..(\u00dc)"}, {"value": 4910, "name": "04035-Analysis f\u00fcr Informatiker(V)"}, {"value": 4854, "name": "00856-Physik f\u00fcr Maschinenbau(V)"}, {"value": 4387, "name": "02656-Mathematik I(V)"}, {"value": 4121, "name": "02931-h\u00f6here Mathematik 1(V)"}, {"value": 3844, "name": "06862-Maschinengestaltung II (Vorlesun..(V)"}, {"value": 3843, "name": "04213-Maschinengestaltung II(V)"}, {"value": 3734, "name": "12450-Werkstoffkunde I(V)"}, {"value": 3675, "name": "04543-Mechanik I f\u00fcr Maschinenbauer(V)"}, {"value": 3653, "name": "04317-Regelungstechnik Vorlesung(V)"}, {"value": 3629, "name": "12136-Lernraum Messtechnisches Labor(L\u00dc)"}, {"value": 3507, "name": "05171-Mathematik III(V)"}, {"value": 3436, "name": "00748-grundz\u00fcge der Chemie(V)"}, {"value": 3343, "name": "03724-Thermodynamik II(V)"}, {"value": 3338, "name": "02015-h\u00f6here Mathematik 3(V)"}, {"value": 3158, "name": "00722-Grundgebiete der Elektrotechnik ..(V)"}, {"value": 3105, "name": "04689-Grundgebiete der Elektrotechnik ..(V)"}, {"value": 3045, "name": "06014-Berechenbarkeit und komplexit\u00e4t(V\u00dc)"}, {"value": 2834, "name": "04974-Produktion und Logistik(V)"}, {"value": 2826, "name": "12227-Operations Research 1(V)"}, {"value": 2790, "name": "02517-Entscheidungslehre WIWI C alle a..(V)"}, {"value": 2693, "name": "01188-Maschinengestaltung I f\u00fcr Maschi..(V)"}, {"value": 2658, "name": "08468-Numerisches Rechnen(V)"}, {"value": 2657, "name": "18808-w\u00e4rme und stoff\u00fcbertragung I(V)"}, {"value": 2655, "name": "00997-Mechanik III f\u00fcr Maschinenbauer(V)"}, {"value": 2630, "name": "06285-Investition und Finanzierung au\u00df..(V)"}, {"value": 2530, "name": "05893-\"Vorlesung \"\"Makro\u00f7konomie I\"\" (..(V)"}, {"value": 2468, "name": "04603-Grundgebiete der Informatik I(V)"}, {"value": 2340, "name": "01798-Vorlesung Baustoffkunde 1 BSK 1 ..(V)"}, {"value": 2303, "name": "05179-Vorlesung WiWi A einf\u00fchrung in d..(V)"}, {"value": 2250, "name": "09425-einf\u00fchrung in den Maschinenbau(V)"}, {"value": 2021, "name": "02678-Analysis I(V)"}, {"value": 1928, "name": "20316-Thermodynamik I(V)"}, {"value": 1908, "name": "06015-Softwaretechnik(V)"}, {"value": 1878, "name": "19858-w\u00e4rme und stoff\u00fcbertragung I(\u00dc)"}, {"value": 1868, "name": "01994-Mechanik I(V)"}, {"value": 1842, "name": "02374-Kommunikation und Organisationse..(V)"}, {"value": 1752, "name": "15682-l?p Lernraum zu mikro\u00f6konomie 1"}, {"value": 1732, "name": "00217-Experimentalphysik I Mechanik un..(V)"}, {"value": 1719, "name": "36509-Maschinengestaltung III Lehrmate.."}, {"value": 1641, "name": "39454-Mechanik I f\u00fcr Wirtschaftsingeni..(V)"}, {"value": 1587, "name": "08364-Treffpunkt Regelungstechnik(Tut)"}, {"value": 1581, "name": "03462-Baukonstruktion(V)"}, {"value": 1570, "name": "02468-Business Engineering(V)"}, {"value": 1541, "name": "45308-Introduction to Artificial Intel..(V\u00dc)"}, {"value": 1487, "name": "04673-einf\u00fchrung in die Theoretische P..(V)"}, {"value": 1479, "name": "03487-einf\u00fchrung in die empirische Wir..(V)"}, {"value": 1459, "name": "00242-Werkstoffkunde II (Kunststoff un..(V)"}, {"value": 1449, "name": "02568-Mathematische Methoden der Elekt..(V)"}, {"value": 1433, "name": "12516-Mechanik III f\u00fcr Wirtschaftsinge..(V)"}, {"value": 1390, "name": "29394-h\u00f6here Mathematik I f\u00fcr Physiker(V)"}, {"value": 1369, "name": "00659-Informatik im Maschinenbau I(V)"}, {"value": 1362, "name": "00844-Planungsmethodik(V)"}, {"value": 1356, "name": "02535-Angewandte Statistik B Sc(V)"}, {"value": 1342, "name": "09905-Lernraum zum Modul ALG1"}, {"value": 1320, "name": "01221-Basic Techniques in Computer Gra..(V)"}];
    var dataNov = [{"value": 9373, "name": "10387-Internes Rechnungswesen und buch..(V\u00dc)"}, {"value": 8312, "name": "04035-Analysis f\u00fcr Informatiker(V)"}, {"value": 7898, "name": "37850-h\u00f6here Mathematik I f\u00fcr Wirtscha..(V)"}, {"value": 7042, "name": "06039-einf\u00fchrung in die Technische Inf..(\u00dc)"}, {"value": 6453, "name": "02931-h\u00f6here Mathematik 1(V)"}, {"value": 6171, "name": "12450-Werkstoffkunde I(V)"}, {"value": 6039, "name": "00856-Physik f\u00fcr Maschinenbau(V)"}, {"value": 5731, "name": "03724-Thermodynamik II(V)"}, {"value": 5584, "name": "04213-Maschinengestaltung II(V)"}, {"value": 5370, "name": "02656-Mathematik I(V)"}, {"value": 5185, "name": "06285-Investition und Finanzierung au\u00df..(V)"}, {"value": 5114, "name": "05171-Mathematik III(V)"}, {"value": 4961, "name": "04543-Mechanik I f\u00fcr Maschinenbauer(V)"}, {"value": 4759, "name": "00722-Grundgebiete der Elektrotechnik ..(V)"}, {"value": 4447, "name": "01188-Maschinengestaltung I f\u00fcr Maschi..(V)"}, {"value": 4443, "name": "04974-Produktion und Logistik(V)"}, {"value": 4259, "name": "08468-Numerisches Rechnen(V)"}, {"value": 4222, "name": "02015-h\u00f6here Mathematik 3(V)"}, {"value": 4190, "name": "06014-Berechenbarkeit und komplexit\u00e4t(V\u00dc)"}, {"value": 4167, "name": "04317-Regelungstechnik Vorlesung(V)"}, {"value": 4059, "name": "01994-Mechanik I(V)"}, {"value": 3862, "name": "19858-w\u00e4rme und stoff\u00fcbertragung I(\u00dc)"}, {"value": 3625, "name": "12227-Operations Research 1(V)"}, {"value": 3577, "name": "04603-Grundgebiete der Informatik I(V)"}, {"value": 3572, "name": "04689-Grundgebiete der Elektrotechnik ..(V)"}, {"value": 3456, "name": "00997-Mechanik III f\u00fcr Maschinenbauer(V)"}, {"value": 3428, "name": "01798-Vorlesung Baustoffkunde 1 BSK 1 ..(V)"}, {"value": 3238, "name": "06015-Softwaretechnik(V)"}, {"value": 3178, "name": "00217-Experimentalphysik I Mechanik un..(V)"}, {"value": 3141, "name": "02678-Analysis I(V)"}, {"value": 3128, "name": "02517-Entscheidungslehre WIWI C alle a..(V)"}, {"value": 3062, "name": "00748-grundz\u00fcge der Chemie(V)"}, {"value": 2981, "name": "03462-Baukonstruktion(V)"}, {"value": 2959, "name": "12136-Lernraum Messtechnisches Labor(L\u00dc)"}, {"value": 2902, "name": "08364-Treffpunkt Regelungstechnik(Tut)"}, {"value": 2892, "name": "02568-Mathematische Methoden der Elekt..(V)"}, {"value": 2795, "name": "15682-l?p Lernraum zu mikro\u00f6konomie 1"}, {"value": 2782, "name": "02079-Geotechnik I V(V)"}, {"value": 2736, "name": "05179-Vorlesung WiWi A einf\u00fchrung in d..(V)"}, {"value": 2525, "name": "12516-Mechanik III f\u00fcr Wirtschaftsinge..(V)"}, {"value": 2451, "name": "18808-w\u00e4rme und stoff\u00fcbertragung I(V)"}, {"value": 2439, "name": "01221-Basic Techniques in Computer Gra..(V)"}, {"value": 2369, "name": "09905-Lernraum zum Modul ALG1"}, {"value": 2343, "name": "49533-Mathematisches prop\u00e4deutikum(V)"}, {"value": 2319, "name": "02374-Kommunikation und Organisationse..(V)"}, {"value": 2304, "name": "11939-Systemprogrammierung(P)"}, {"value": 2155, "name": "29394-h\u00f6here Mathematik I f\u00fcr Physiker(V)"}, {"value": 2125, "name": "02836-einf\u00fchrung in die Programmierung(V\u00dc)"}, {"value": 2094, "name": "35339-Grundlagen der Physik Vorlesung(V\u00dc)"}, {"value": 2081, "name": "39454-Mechanik I f\u00fcr Wirtschaftsingeni..(V)"}, {"value": 2046, "name": "03827-Kurs der Physik Physikalisches P..(P)"}, {"value": 2043, "name": "04673-einf\u00fchrung in die Theoretische P..(V)"}, {"value": 1991, "name": "45308-Introduction to Artificial Intel..(V\u00dc)"}, {"value": 1970, "name": "03487-einf\u00fchrung in die empirische Wir..(V)"}, {"value": 1967, "name": "18059-Vorbereitung und durchf\u00fchrung vo..(V\u00dcP)"}, {"value": 1960, "name": "09425-einf\u00fchrung in den Maschinenbau(V)"}, {"value": 1954, "name": "20340-Baustatik I(V)"}, {"value": 1893, "name": "02535-Angewandte Statistik B Sc(V)"}];
    var dataDec = [{"value": 6775, "name": "37850-h\u00f6here Mathematik I f\u00fcr Wirtscha..(V)"}, {"value": 6610, "name": "10387-Internes Rechnungswesen und buch..(V\u00dc)"}, {"value": 5531, "name": "04543-Mechanik I f\u00fcr Maschinenbauer(V)"}, {"value": 5528, "name": "04035-Analysis f\u00fcr Informatiker(V)"}, {"value": 5061, "name": "03724-Thermodynamik II(V)"}, {"value": 4928, "name": "06285-Investition und Finanzierung au\u00df..(V)"}, {"value": 4676, "name": "04213-Maschinengestaltung II(V)"}, {"value": 4458, "name": "06039-einf\u00fchrung in die Technische Inf..(\u00dc)"}, {"value": 4239, "name": "04974-Produktion und Logistik(V)"}, {"value": 4146, "name": "12450-Werkstoffkunde I(V)"}, {"value": 3975, "name": "01188-Maschinengestaltung I f\u00fcr Maschi..(V)"}, {"value": 3918, "name": "00722-Grundgebiete der Elektrotechnik ..(V)"}, {"value": 3780, "name": "01994-Mechanik I(V)"}, {"value": 3656, "name": "00997-Mechanik III f\u00fcr Maschinenbauer(V)"}, {"value": 3548, "name": "05171-Mathematik III(V)"}, {"value": 3453, "name": "09425-einf\u00fchrung in den Maschinenbau(V)"}, {"value": 3361, "name": "00856-Physik f\u00fcr Maschinenbau(V)"}, {"value": 3278, "name": "02015-h\u00f6here Mathematik 3(V)"}, {"value": 3257, "name": "02656-Mathematik I(V)"}, {"value": 2967, "name": "08468-Numerisches Rechnen(V)"}, {"value": 2900, "name": "02931-h\u00f6here Mathematik 1(V)"}, {"value": 2711, "name": "12227-Operations Research 1(V)"}, {"value": 2641, "name": "19858-w\u00e4rme und stoff\u00fcbertragung I(\u00dc)"}, {"value": 2624, "name": "06014-Berechenbarkeit und komplexit\u00e4t(V\u00dc)"}, {"value": 2596, "name": "04317-Regelungstechnik Vorlesung(V)"}, {"value": 2497, "name": "03462-Baukonstruktion(V)"}, {"value": 2323, "name": "02678-Analysis I(V)"}, {"value": 2202, "name": "00217-Experimentalphysik I Mechanik un..(V)"}, {"value": 2196, "name": "04689-Grundgebiete der Elektrotechnik ..(V)"}, {"value": 2149, "name": "05179-Vorlesung WiWi A einf\u00fchrung in d..(V)"}, {"value": 2116, "name": "12136-Lernraum Messtechnisches Labor(L\u00dc)"}, {"value": 1919, "name": "09905-Lernraum zum Modul ALG1"}, {"value": 1891, "name": "05586-Kurs der Zellbiologie I Vorlesun..(V)"}, {"value": 1822, "name": "00748-grundz\u00fcge der Chemie(V)"}, {"value": 1821, "name": "08364-Treffpunkt Regelungstechnik(Tut)"}, {"value": 1810, "name": "06015-Softwaretechnik(V)"}, {"value": 1783, "name": "20340-Baustatik I(V)"}, {"value": 1733, "name": "02079-Geotechnik I V(V)"}, {"value": 1692, "name": "02517-Entscheidungslehre WIWI C alle a..(V)"}, {"value": 1666, "name": "23156-Maschinengestaltung III(\u00dc)"}, {"value": 1582, "name": "12516-Mechanik III f\u00fcr Wirtschaftsinge..(V)"}, {"value": 1552, "name": "18059-Vorbereitung und durchf\u00fchrung vo..(V\u00dcP)"}, {"value": 1520, "name": "03348-Wasserwirtschaft und Hydrologie ..(V)"}, {"value": 1504, "name": "39454-Mechanik I f\u00fcr Wirtschaftsingeni..(V)"}, {"value": 1484, "name": "15682-l?p Lernraum zu mikro\u00f6konomie 1"}, {"value": 1484, "name": "35339-Grundlagen der Physik Vorlesung(V\u00dc)"}, {"value": 1470, "name": "04673-einf\u00fchrung in die Theoretische P..(V)"}, {"value": 1443, "name": "11939-Systemprogrammierung(P)"}, {"value": 1441, "name": "01221-Basic Techniques in Computer Gra..(V)"}, {"value": 1439, "name": "29394-h\u00f6here Mathematik I f\u00fcr Physiker(V)"}, {"value": 1429, "name": "18808-w\u00e4rme und stoff\u00fcbertragung I(V)"}, {"value": 1429, "name": "02568-Mathematische Methoden der Elekt..(V)"}, {"value": 1400, "name": "04603-Grundgebiete der Informatik I(V)"}, {"value": 1396, "name": "00868-Grundlagen der Geotechnik I(V\u00dc)"}, {"value": 1394, "name": "01798-Vorlesung Baustoffkunde 1 BSK 1 ..(V)"}, {"value": 1365, "name": "45297-Thermodynamik II f\u00fcr Wirt Ing(V)"}, {"value": 1352, "name": "02836-einf\u00fchrung in die Programmierung(V\u00dc)"}, {"value": 1337, "name": "02535-Angewandte Statistik B Sc(V)"}];
    var dataJan = [{"value": 7662, "name": "10387-Internes Rechnungswesen und buch..(V\u00dc)"}, {"value": 7285, "name": "37850-h\u00f6here Mathematik I f\u00fcr Wirtscha..(V)"}, {"value": 5827, "name": "06285-Investition und Finanzierung au\u00df..(V)"}, {"value": 5739, "name": "12450-Werkstoffkunde I(V)"}, {"value": 5738, "name": "03724-Thermodynamik II(V)"}, {"value": 5329, "name": "04543-Mechanik I f\u00fcr Maschinenbauer(V)"}, {"value": 5017, "name": "04974-Produktion und Logistik(V)"}, {"value": 4368, "name": "00722-Grundgebiete der Elektrotechnik ..(V)"}, {"value": 4200, "name": "19858-w\u00e4rme und stoff\u00fcbertragung I(\u00dc)"}, {"value": 4125, "name": "05171-Mathematik III(V)"}, {"value": 4021, "name": "04035-Analysis f\u00fcr Informatiker(V)"}, {"value": 3812, "name": "01188-Maschinengestaltung I f\u00fcr Maschi..(V)"}, {"value": 3615, "name": "04317-Regelungstechnik Vorlesung(V)"}, {"value": 3509, "name": "02656-Mathematik I(V)"}, {"value": 3488, "name": "00748-grundz\u00fcge der Chemie(V)"}, {"value": 3326, "name": "02931-h\u00f6here Mathematik 1(V)"}, {"value": 3207, "name": "04689-Grundgebiete der Elektrotechnik ..(V)"}, {"value": 3184, "name": "06039-einf\u00fchrung in die Technische Inf..(\u00dc)"}, {"value": 3103, "name": "00856-Physik f\u00fcr Maschinenbau(V)"}, {"value": 2997, "name": "00997-Mechanik III f\u00fcr Maschinenbauer(V)"}, {"value": 2953, "name": "02015-h\u00f6here Mathematik 3(V)"}, {"value": 2856, "name": "08468-Numerisches Rechnen(V)"}, {"value": 2613, "name": "01994-Mechanik I(V)"}, {"value": 2417, "name": "05179-Vorlesung WiWi A einf\u00fchrung in d..(V)"}, {"value": 2336, "name": "08364-Treffpunkt Regelungstechnik(Tut)"}, {"value": 2300, "name": "02568-Mathematische Methoden der Elekt..(V)"}, {"value": 2257, "name": "02517-Entscheidungslehre WIWI C alle a..(V)"}, {"value": 2164, "name": "00217-Experimentalphysik I Mechanik un..(V)"}, {"value": 2137, "name": "03487-einf\u00fchrung in die empirische Wir..(V)"}, {"value": 2047, "name": "12227-Operations Research 1(V)"}, {"value": 2042, "name": "18808-w\u00e4rme und stoff\u00fcbertragung I(V)"}, {"value": 1959, "name": "02859-Projektmanagement I(V\u00dc)"}, {"value": 1792, "name": "00538-Differential und Integralrechnun..(V)"}, {"value": 1737, "name": "02678-Analysis I(V)"}, {"value": 1691, "name": "12136-Lernraum Messtechnisches Labor(L\u00dc)"}, {"value": 1681, "name": "02079-Geotechnik I V(V)"}, {"value": 1679, "name": "45297-Thermodynamik II f\u00fcr Wirt Ing(V)"}, {"value": 1637, "name": "05586-Kurs der Zellbiologie I Vorlesun..(V)"}, {"value": 1622, "name": "06014-Berechenbarkeit und komplexit\u00e4t(V\u00dc)"}, {"value": 1615, "name": "39454-Mechanik I f\u00fcr Wirtschaftsingeni..(V)"}, {"value": 1598, "name": "03462-Baukonstruktion(V)"}, {"value": 1595, "name": "04603-Grundgebiete der Informatik I(V)"}, {"value": 1561, "name": "15682-l?p Lernraum zu mikro\u00f6konomie 1"}, {"value": 1516, "name": "23156-Maschinengestaltung III(\u00dc)"}, {"value": 1516, "name": "20340-Baustatik I(V)"}, {"value": 1483, "name": "09905-Lernraum zum Modul ALG1"}, {"value": 1438, "name": "00435-Lineare Algebra I(V)"}, {"value": 1417, "name": "49533-Mathematisches prop\u00e4deutikum(V)"}, {"value": 1349, "name": "00844-Planungsmethodik(V)"}, {"value": 1339, "name": "04213-Maschinengestaltung II(V)"}, {"value": 1284, "name": "12516-Mechanik III f\u00fcr Wirtschaftsinge..(V)"}, {"value": 1256, "name": "35339-Grundlagen der Physik Vorlesung(V\u00dc)"}, {"value": 1215, "name": "11939-Systemprogrammierung(P)"}, {"value": 1211, "name": "20280-Grundoperationen der Verfahrenst..(V)"}, {"value": 1210, "name": "04673-einf\u00fchrung in die Theoretische P..(V)"}, {"value": 1203, "name": "12774-Econometrics \u00f6konometrie(V)"}, {"value": 1198, "name": "28859-Energiesystemtechnik(V)"}, {"value": 1193, "name": "02535-Angewandte Statistik B Sc(V)"}];
    var dataFeb = [{"value": 8147, "name": "37850-h\u00f6here Mathematik I f\u00fcr Wirtscha..(V)"}, {"value": 7773, "name": "12450-Werkstoffkunde I(V)"}, {"value": 7184, "name": "10387-Internes Rechnungswesen und buch..(V\u00dc)"}, {"value": 7088, "name": "00748-grundz\u00fcge der Chemie(V)"}, {"value": 6447, "name": "05171-Mathematik III(V)"}, {"value": 5887, "name": "19858-w\u00e4rme und stoff\u00fcbertragung I(\u00dc)"}, {"value": 5754, "name": "06285-Investition und Finanzierung au\u00df..(V)"}, {"value": 5352, "name": "04974-Produktion und Logistik(V)"}, {"value": 5051, "name": "04543-Mechanik I f\u00fcr Maschinenbauer(V)"}, {"value": 4708, "name": "04317-Regelungstechnik Vorlesung(V)"}, {"value": 4620, "name": "03724-Thermodynamik II(V)"}, {"value": 3886, "name": "00856-Physik f\u00fcr Maschinenbau(V)"}, {"value": 3776, "name": "04689-Grundgebiete der Elektrotechnik ..(V)"}, {"value": 3675, "name": "02015-h\u00f6here Mathematik 3(V)"}, {"value": 3501, "name": "02517-Entscheidungslehre WIWI C alle a..(V)"}, {"value": 3356, "name": "04035-Analysis f\u00fcr Informatiker(V)"}, {"value": 3245, "name": "00722-Grundgebiete der Elektrotechnik ..(V)"}, {"value": 3150, "name": "05179-Vorlesung WiWi A einf\u00fchrung in d..(V)"}, {"value": 3147, "name": "08468-Numerisches Rechnen(V)"}, {"value": 3137, "name": "08364-Treffpunkt Regelungstechnik(Tut)"}, {"value": 3129, "name": "18808-w\u00e4rme und stoff\u00fcbertragung I(V)"}, {"value": 3106, "name": "01994-Mechanik I(V)"}, {"value": 3086, "name": "15682-l?p Lernraum zu mikro\u00f6konomie 1"}, {"value": 2991, "name": "02568-Mathematische Methoden der Elekt..(V)"}, {"value": 2825, "name": "00217-Experimentalphysik I Mechanik un..(V)"}, {"value": 2775, "name": "06039-einf\u00fchrung in die Technische Inf..(\u00dc)"}, {"value": 2660, "name": "01188-Maschinengestaltung I f\u00fcr Maschi..(V)"}, {"value": 2419, "name": "00997-Mechanik III f\u00fcr Maschinenbauer(V)"}, {"value": 2371, "name": "02859-Projektmanagement I(V\u00dc)"}, {"value": 2334, "name": "00844-Planungsmethodik(V)"}, {"value": 2299, "name": "00676-einf\u00fchrung in die Bauinformatik ..(V)"}, {"value": 2274, "name": "04603-Grundgebiete der Informatik I(V)"}, {"value": 2273, "name": "02656-Mathematik I(V)"}, {"value": 2238, "name": "02931-h\u00f6here Mathematik 1(V)"}, {"value": 2194, "name": "20280-Grundoperationen der Verfahrenst..(V)"}, {"value": 2088, "name": "12227-Operations Research 1(V)"}, {"value": 1928, "name": "45308-Introduction to Artificial Intel..(V\u00dc)"}, {"value": 1760, "name": "18365-Stadt und Regionalplanung I(V)"}, {"value": 1720, "name": "43476-Werkstoffphysik I II \u00fcbung(\u00dc)"}, {"value": 1680, "name": "03487-einf\u00fchrung in die empirische Wir..(V)"}, {"value": 1561, "name": "02210-Systemtheorie 2(V)"}, {"value": 1520, "name": "08688-Umweltmanagement Grundlagen(V)"}, {"value": 1491, "name": "05725-Produktionsmanagement I(V)"}, {"value": 1481, "name": "12009-Umweltmanagement Methoden(V)"}, {"value": 1467, "name": "24447-Energiespeichertechnologien(V\u00dc)"}, {"value": 1462, "name": "09905-Lernraum zum Modul ALG1"}, {"value": 1441, "name": "14007-Personal und Organisation f\u00fcr Wi..(V)"}, {"value": 1423, "name": "45297-Thermodynamik II f\u00fcr Wirt Ing(V)"}, {"value": 1418, "name": "02892-Fahrzeugtechnik I(V)"}, {"value": 1375, "name": "03135-Grundlagen der Fluidtechnik(\u00dc)"}, {"value": 1364, "name": "00538-Differential und Integralrechnun..(V)"}, {"value": 1342, "name": "02079-Geotechnik I V(V)"}, {"value": 1323, "name": "28859-Energiesystemtechnik(V)"}, {"value": 1316, "name": "04970-MSG 5 Sem Systemblock Psyche(VPS)"}, {"value": 1313, "name": "00727-Theoretische Physik II Elektrody..(V)"}, {"value": 1305, "name": "01667-Grundgebiete der Informatik 3(V)"}, {"value": 1298, "name": "12186-Grundlagen der Tragwerke(V\u00dc)"}, {"value": 1297, "name": "35339-Grundlagen der Physik Vorlesung(V\u00dc)"}];
    var dataMar = [{"value": 7312, "name": "37850-h\u00f6here Mathematik I f\u00fcr Wirtscha..(V)"}, {"value": 6147, "name": "04543-Mechanik I f\u00fcr Maschinenbauer(V)"}, {"value": 5846, "name": "00722-Grundgebiete der Elektrotechnik ..(V)"}, {"value": 5763, "name": "00856-Physik f\u00fcr Maschinenbau(V)"}, {"value": 5530, "name": "04317-Regelungstechnik Vorlesung(V)"}, {"value": 5526, "name": "10387-Internes Rechnungswesen und buch..(V\u00dc)"}, {"value": 5235, "name": "03724-Thermodynamik II(V)"}, {"value": 4834, "name": "12450-Werkstoffkunde I(V)"}, {"value": 4707, "name": "05171-Mathematik III(V)"}, {"value": 4659, "name": "00997-Mechanik III f\u00fcr Maschinenbauer(V)"}, {"value": 4630, "name": "06039-einf\u00fchrung in die Technische Inf..(\u00dc)"}, {"value": 4589, "name": "02374-Kommunikation und Organisationse..(V)"}, {"value": 4430, "name": "02656-Mathematik I(V)"}, {"value": 4346, "name": "06285-Investition und Finanzierung au\u00df..(V)"}, {"value": 3910, "name": "02468-Business Engineering(V)"}, {"value": 3626, "name": "02517-Entscheidungslehre WIWI C alle a..(V)"}, {"value": 3626, "name": "01188-Maschinengestaltung I f\u00fcr Maschi..(V)"}, {"value": 3597, "name": "18808-w\u00e4rme und stoff\u00fcbertragung I(V)"}, {"value": 3351, "name": "12516-Mechanik III f\u00fcr Wirtschaftsinge..(V)"}, {"value": 3345, "name": "02931-h\u00f6here Mathematik 1(V)"}, {"value": 3127, "name": "03487-einf\u00fchrung in die empirische Wir..(V)"}, {"value": 3113, "name": "04689-Grundgebiete der Elektrotechnik ..(V)"}, {"value": 2978, "name": "02535-Angewandte Statistik B Sc(V)"}, {"value": 2868, "name": "04974-Produktion und Logistik(V)"}, {"value": 2859, "name": "04213-Maschinengestaltung II(V)"}, {"value": 2857, "name": "06015-Softwaretechnik(V)"}, {"value": 2856, "name": "15682-l?p Lernraum zu mikro\u00f6konomie 1"}, {"value": 2671, "name": "06014-Berechenbarkeit und komplexit\u00e4t(V\u00dc)"}, {"value": 2257, "name": "23156-Maschinengestaltung III(\u00dc)"}, {"value": 2226, "name": "39454-Mechanik I f\u00fcr Wirtschaftsingeni..(V)"}, {"value": 2216, "name": "05179-Vorlesung WiWi A einf\u00fchrung in d..(V)"}, {"value": 2125, "name": "02531-Klausur Mechanik I f\u00fcr Maschinen.."}, {"value": 2124, "name": "02015-h\u00f6here Mathematik 3(V)"}, {"value": 2068, "name": "01994-Mechanik I(V)"}, {"value": 1958, "name": "01029-Fertigungstechnik I(V)"}, {"value": 1955, "name": "02079-Geotechnik I V(V)"}, {"value": 1945, "name": "03462-Baukonstruktion(V)"}, {"value": 1909, "name": "04477-Grundlagen der Verbrennungsmotor..(V)"}, {"value": 1865, "name": "04840-Hydromechanik I(V)"}, {"value": 1842, "name": "01497-Physik I f\u00fcr Elektrotechniker(V)"}, {"value": 1812, "name": "19858-w\u00e4rme und stoff\u00fcbertragung I(\u00dc)"}, {"value": 1805, "name": "04603-Grundgebiete der Informatik I(V)"}, {"value": 1781, "name": "00659-Informatik im Maschinenbau I(V)"}, {"value": 1778, "name": "25554-pr\u00fcfung qualit\u00e4ts und Projektman..(Kl)"}, {"value": 1766, "name": "45297-Thermodynamik II f\u00fcr Wirt Ing(V)"}, {"value": 1728, "name": "03760-Klausur Mechanik III f\u00fcr Maschin.."}, {"value": 1657, "name": "02525-Grundlagen elektronischer Materi..(V)"}, {"value": 1601, "name": "35339-Grundlagen der Physik Vorlesung(V\u00dc)"}, {"value": 1592, "name": "00748-grundz\u00fcge der Chemie(V)"}, {"value": 1565, "name": "03911-Leichtbau B Sc(V)"}, {"value": 1529, "name": "01896-Elektromagnetische Felder 1 Elek..(V)"}, {"value": 1512, "name": "12227-Operations Research 1(V)"}, {"value": 1482, "name": "05591-Arbeitsrecht(V)"}, {"value": 1470, "name": "08468-Numerisches Rechnen(V)"}, {"value": 1435, "name": "02664-str\u00f6mungsmechanik II(V)"}, {"value": 1405, "name": "37840-Advanced Microeconomics(V)"}, {"value": 1384, "name": "08364-Treffpunkt Regelungstechnik(Tut)"}, {"value": 1375, "name": "21230-Simulationstechnik(V)"}];

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
                    '2016-10', '2016-11', '2016-12', '2017-01', '2017-02'
                    , '2017-03'
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
        }
        , {
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
        }
        ]
    };

    myChart.setOption(option);
}