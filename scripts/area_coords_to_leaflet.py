from pathlib import Path
from sys import argv
import json

# this script converts area coord used in the previous HTML map version of this
# project to latlng coords usable by leaflet js

# for Shanai
# area_coords = {
#    "lyreth": "1139,983,887,745",
#    "graev": "594,1090,859,1327",
#    "silk-port": "1404,792,1828,997",
#    "umberfhel": "2922,28,3351,224",
#    "winter-sea": "1968,489,2881,680",
#    "endless-sea": "54,1537,221,2469",
#    "zerqan": "1348,1509,1614,1719",
#    "qyiax": "1642,1532,1870,1770",
#    "shai-yn": "985,2063,1297,2292",
#    "tubul": "789,2348,1013,2543",
#    "yllan": "976,2571,1264,2692",
#    "usol": "943,2958,1153,3153",
#    "soule": "1176,3014,1386,3209",
#    "kwaixl": "1665,2338,2065,2525",
#    "suntouched-sea": "1544,3358,2648,3535",
#    "veithaar": "2336,2366,2708,2520",
#    "ithaar": "2610,2017,2936,2171",
#    "kepe": "3165,2888,3365,3097",
#    "silent-sea": "3202,2087,4031,2296",
#    "sleet": "3649,3149,3859,3335",
#    "tenzu": "4049,3247,4371,3428",
#    "port-tivar": "4455,2525,4920,2678",
#    "yoros": "4613,1933,4874,2119",
#    "sedhar": "2764,1341,3048,1621",
#    "hadria": "4017,1458,4315,1626",
#    "mercaia": "3751,1290,4082,1458",
#    "seleria": "4175,880,4455,1109",
#    "darun": "4590,1318,4869,1500",
#    "efretes": "5018,1644,5218,2408",
# }


# MAP_HEIGHT = 3880
# MAP_WIDTH = 5272

# x1, y1, x2, y2
area_coords = {
    "trig": "48,158,213,306",
    "belfrost": "398,244,585,368",
    "fo": "653,33,750,172",
    "maul": "834,163,987,273",
    "annis": "1698,77,1858,200",
    "alldark": "1634,264,1861,361",
    "di-loth": "869,451,1124,552",
    "westfall": "1251,438,1478,592",
    "tusk": "0,590,121,1063",
    "aro": "295,676,728,825",
    "teth": "812,612,974,731",
    "lyka": "1467,621,1702,717",
    "baldurkeep": "550,900,300,1139",
    "anethyr": "669,990,915,1155",
    "faelaen": "1214,805,1447,885",
    "bahz": "1454,904,1641,990",
    "karathuhm": "130,1307,378,1437",
    "mystra-academy": "431,1193,631,1393",
    "duin": "600,1408,726,1516",
    "saltcliff": "757,1479,1009,1582",
    "port-amyr": "1047,1149,1331,1305",
    "fane": "1801,1532,1993,1620",
    "valynor": "317,1851,556,1959",
    "demlin-sea": "1785,1288,1300,1739",
}

MAP_HEIGHT = 1974
MAP_WIDTH = 2362

if len(argv) != 2:
    raise Exception("Must include a content file")

target_file = argv[1]

path = Path(argv[1])
f = open(path)

places_dict = json.load(f)

for place, info in places_dict.items():
    [x1, y1, x2, y2] = area_coords[place].split(",")

    # flip y coords - leaflet considers 0 bottom whereas html area considers 0
    # the top of the image
    y1 = MAP_HEIGHT - int(y1)
    y2 = MAP_HEIGHT - int(y2)

    # leaflet latlng wants y first
    coords = [[y1, int(x1)], [y2, int(x2)]]
    places_dict[place]["coords"] = coords

content_file = open(path.parent / "places.json", "w")
json.dump(places_dict, content_file)
