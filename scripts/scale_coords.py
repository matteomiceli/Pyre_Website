import json

area_coords = {
    "trig": "22,72,97,139",
    "belfrost": "181,111,266,167",
    "fo": "297,15,341,78",
    "maul": "379,74,449,124",
    "annis": "772,35,845,91",
    "alldark": "743,120,846,164",
    "di-loth": "395,205,511,251",
    "westfall": "569,199,672,269",
    "tusk": "0,268,55,483",
    "aro": "134,307,331,375",
    "teth": "369,278,443,332",
    "lyka": "667,282,774,326",
    "baldurkeep": "214,398,122,472",
    "anethyr": "304,450,416,525",
    "faelaen": "552,366,658,402",
    "bahz": "661,411,746,450",
    "karathuhm": "59,594,172,653",
    "mystra-academy": "196,542,287,633",
    "duin": "273,640,330,689",
    "saltcliff": "344,672,459,719",
    "port-amyr": "476,522,605,593",
    "fane": "819,696,906,736",
    "valynor": "144,841,253,890",
    "demlin-sea": "804,540,560,745",
}

OLD_HEIGHT = 897
OLD_WIDTH = 1074

NEW_HEIGHT = 1974
NEW_WIDTH = 2362


def scaleX(x):
    return round(int(x) * X_RATIO)


def scaleY(y):
    return round(int(y) * Y_RATIO)


for place, coords in area_coords.items():
    [x1, y1, x2, y2] = coords.split(",")
    Y_RATIO = NEW_HEIGHT / OLD_HEIGHT
    X_RATIO = NEW_WIDTH / OLD_WIDTH

    area_coords[place] = f"{scaleX(x1)},{scaleY(y1) },{scaleX(x2) },{scaleY(y2)}"


print(json.dumps(area_coords))
