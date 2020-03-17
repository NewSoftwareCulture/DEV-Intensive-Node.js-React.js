import requests
import re
import sys
from bs4 import BeautifulSoup

url_Streshnevo_Istra = 'https://rasp.yandex.ru/suburban/leningradskaya-platform--istra-platform/today'
url_Tushino_Istra = 'https://rasp.yandex.ru/suburban/tushino-station--istra-platform/today'
url_Dmitrovskaya_Istra = 'https://rasp.yandex.ru/suburban/dmitrovskaya--istra-platform/today'
url_Istra_Streshnevo = 'https://rasp.yandex.ru/suburban/istra-platform--leningradskaya-platform/today'
url_Istra_Tushino = 'https://rasp.yandex.ru/suburban/istra-platform--tushino-station/today'
url_Istra_Dmitrovskaya = 'https://rasp.yandex.ru/suburban/istra-platform--dmitrovskaya/today'

def get_html(url):
    r = requests.get(url)    
    r.encoding = 'utf8'
    return BeautifulSoup(r.text, 'lxml')

def get_table(html, status):
    buffer = html.find_all(class_ = "SearchSegment SearchSegment_isNotInterval SearchSegment_isNotGone SearchSegment_isVisible")
    size = 10
    i = 0
    array = ['', '', '', '', '', '', '', '', '', '']
    for it in buffer:
        if i < size:
            time_table = re.findall(r'\d\d:\d\d', str(it))
            temp = re.findall(r'[А-я]{4,}[ (А-я.]*[ А-я)]*[0-9]*[—]?[0-9]*[ А-я]*', str(it))
            type_train = temp[6]
            station_A = temp[1]
            station_B = temp[2]
            array[i] = time_table[0] + " -> " + time_table[1] + ' (' +  type_train + ')'
            if status: array[i] += '\t' + station_A + ' -> ' + station_B
            i += 1
    return array

def format(point_A, point_B, array):
    result = point_A + ' -> '+ point_B + '\n'
    for it in array:
        result += it + '\n'
    return result[0:-1]

def Streshnevo_Istra(status = False):
    html = get_html(url_Streshnevo_Istra)
    return format('Стрешнево', 'Истра', get_table(html, status))

def Tushino_Istra(status = False):
    html = get_html(url_Tushino_Istra)
    return format('Тушино', 'Истра', get_table(html, status))

def Dmitrovskaya_Istra(status = False):
    html = get_html(url_Dmitrovskaya_Istra)
    return format('Дмитровская', 'Истра', get_table(html, status))

def Istra_Streshnevo(status = False):
    html = get_html(url_Istra_Streshnevo)
    return format('Истра', 'Стрешнево', get_table(html, status))

def Istra_Tushino(status = False):
    html = get_html(url_Istra_Tushino)
    return format('Истра', 'Тушино', get_table(html, status))

def Istra_Dmitrovskaya(status = False):
    html = get_html(url_Istra_Dmitrovskaya)
    return format('Истра', 'Дмитровская', get_table(html, status))

print(Istra_Streshnevo(True))
print(Streshnevo_Istra(True))