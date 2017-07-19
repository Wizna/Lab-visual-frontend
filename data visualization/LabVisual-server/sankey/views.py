from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
import re
import pickle
import operator
from django.http import JsonResponse
import json

data = pickle.load( open( "sankey/coursetable_jan.p", "rb" ) )
listforfp = list(data.values())
lv2name = pickle.load( open( "sankey/lv2name.p", "rb" ) )

def index(request):
    courses = request.GET.get('course')
    print(courses)
    strarray = re.findall('[0-9]{2}\w[sS]\-[0-9]{5}',courses)
    strarray = [int(i.lower().replace('ws-','1').replace('ss-','2')) for i in strarray]
    print(strarray)

    size = len(strarray)
    queryset = set(strarray)

    dictsort = {}
    for courses in listforfp:
        if queryset.issubset(courses):
            for cornum in courses:

                if cornum in dictsort:
                    dictsort[cornum] += 1
                else:
                    dictsort[cornum] = 1

    sorted_dict = sorted(dictsort.items(), key=operator.itemgetter(1), reverse=True)
    orderedlist = [int(i[0]) for i in sorted_dict]
    # to make first one not counted, the selected one
    orderedlist = orderedlist[size:200]
    orderedset = set(orderedlist)
    newfp = []
    for item in listforfp:
        templist = list(set(item) & orderedset)
        templist.sort(key=lambda x: orderedlist.index(x))
        newfp.append(templist)

    dictlink = {}
    for item in newfp:
        for index, subitem in enumerate(item):
            if index != 0:
                insertLink(item[index - 1], subitem, dictlink)

    sortedlink = sorted(dictlink.items(), key=operator.itemgetter(1), reverse=True)
    sortedlink = sortedlink[:120]
    # print(sortedlink)
    checkDuplicate = []
    containCourse = []

    for key, value in sortedlink:
        if key[0] in lv2name:
            temp1 = lv2name[key[0]]
            if temp1 not in checkDuplicate:
                containCourse.append(key[0])
                checkDuplicate.append(temp1)

        if key[1] in lv2name:
            temp2 = lv2name[key[1]]

            if temp2 not in checkDuplicate:
                containCourse.append(key[1])
                checkDuplicate.append(temp2)

    orderedlist = list(orderedset & set(containCourse))

    sortedlink = [(key, value) for key, value in sortedlink if key[0] in orderedlist and key[1] in orderedlist]

    print(len(orderedlist))

    dictforjson = {}
    datajson = [{"source": lv2name[key[0]], "target": lv2name[key[1]], "value": value} for key, value in sortedlink if
                key[0] in lv2name and key[1] in lv2name]
    namejson = [{"name": lv2name[course]} for course in orderedlist if course in lv2name]
    # datajson = [{"source": str(key[0]), "target": str(key[1]), "value": value} for key, value in sortedlink]
    # namejson = [{"name": str(course)} for course in orderedlist]
    dictforjson["nodes"] = namejson
    dictforjson["links"] = datajson

    print(dictforjson)
    return JsonResponse(dictforjson)


def insertLink(source, target, dictionary):
    indextuple = (source, target)
    if indextuple in dictionary:
        dictionary[indextuple] += 1
    else:
        dictionary[indextuple] = 1
