const TRIP = [
 {
  "n": 1,
  "date": "2026-09-25",
  "dow": "Fri",
  "title": "Fly into Salt Lake City",
  "region": "Utah",
  "hero": "Salt Lake City Temple Square",
  "summary": "Land in Salt Lake City, walk the city center, then drive north to Logan for the night.",
  "drive": "Salt Lake City to Logan · 1h 20m · 130 km",
  "stay": {
   "name": "Airbnb #1 — Logan",
   "meta": "1 night",
   "link": "https://www.airbnb.com/rooms/922565824584368585"
  },
  "segments": [
   {
    "id": "d01s1",
    "name": "Segment 1 — Salt Lake City sightseeing",
    "blurb": "Arrival afternoon on foot around downtown Salt Lake City.",
    "time": "12:00–4:00pm",
    "map": {
     "center": "Temple Square, Salt Lake City, Utah",
     "zoom": 14,
     "ll": [
      40.77036,
      -111.89253
     ]
    },
    "stops": [
     {
      "name": "Ensign Peak",
      "q": "Ensign Peak Salt Lake City",
      "note": "Short hike, skyline and valley overlook.",
      "ll": [
       40.79437,
       -111.89066
      ]
     },
     {
      "name": "Utah State Capitol Building",
      "q": "Utah State Capitol",
      "note": "Hilltop capitol above downtown.",
      "ll": [
       40.7774,
       -111.88822
      ]
     },
     {
      "name": "Temple Square",
      "q": "Salt Lake City Temple Square",
      "note": "Historic LDS temple complex, city center.",
      "ll": [
       40.77036,
       -111.89253
      ]
     }
    ]
   },
   {
    "id": "d01s2",
    "name": "Segment 2 — Food and the drive to Logan",
    "blurb": "Snack and dinner in Salt Lake City, then north to Logan.",
    "time": "4:00–8:00pm",
    "map": {
     "from": "Salt Lake City, Utah",
     "to": "Logan, Utah",
     "fromll": [
      40.75962,
      -111.8868
     ],
     "toll": [
      41.73131,
      -111.83491
     ]
    },
    "stops": [
     {
      "name": "In-N-Out (afternoon snack)",
      "q": "In-N-Out Burger sign",
      "note": "Quick stop before the drive north."
     },
     {
      "name": "Osteria Amore (dinner)",
      "q": "Salt Lake City downtown restaurant street",
      "note": "Dinner stop in Salt Lake City.",
      "ll": [
       40.7642,
       -111.85429
      ]
     },
     {
      "name": "Logan Canyon",
      "q": "Logan Canyon Utah",
      "note": "Canyon drive into Logan, evening arrival.",
      "ll": [
       41.74367,
       -111.76968
      ]
     }
    ]
   }
  ]
 },
 {
  "n": 2,
  "date": "2026-09-26",
  "dow": "Sat",
  "title": "Bear Lake to the Tetons",
  "region": "Wyoming",
  "hero": "Grand Teton National Park autumn",
  "summary": "Early start over US-89 past Bear Lake, then the full Grand Teton scenic drive at golden hour.",
  "drive": "Logan to Jackson · 4h 30m · 330 km",
  "stay": {
   "name": "Airbnb #2 — Jackson",
   "meta": "2 nights",
   "link": "https://www.airbnb.com/rooms/1410358581481167106"
  },
  "segments": [
   {
    "id": "d02s1",
    "name": "Segment 1 — US-89 to Jackson",
    "blurb": "5am departure over Bear Lake and the Wyoming line into Jackson.",
    "time": "5:00am–1:00pm",
    "map": {
     "from": "Logan, Utah",
     "to": "Jackson, Wyoming",
     "fromll": [
      41.73131,
      -111.83491
     ],
     "toll": [
      43.47996,
      -110.76181
     ]
    },
    "stops": [
     {
      "name": "Garden City",
      "q": "Bear Lake Utah",
      "note": "Lakefront town on US-89.",
      "ll": [
       42.49658,
       -108.72557
      ]
     },
     {
      "name": "Bear Lake State Park",
      "q": "Bear Lake Utah",
      "note": "Turquoise glacial lake, Utah-Idaho line.",
      "ll": [
       44.94057,
       -109.52467
      ]
     },
     {
      "name": "Montpelier, Idaho (Butch Cassidy Museum)",
      "q": "Montpelier Idaho",
      "note": "Bank robbed by Butch Cassidy in 1896.",
      "ll": [
       42.31729,
       -111.30785
      ]
     },
     {
      "name": "Alpine Junction / Snake River",
      "q": "Alpine Junction Wyoming Snake River",
      "note": "Snake River canyon, Idaho-Wyoming border.",
      "ll": [
       43.1593,
       -111.03228
      ]
     },
     {
      "name": "Persephone Bakery (Jackson)",
      "q": "Jackson Wyoming Town Square",
      "note": "Bakery stop in Jackson before the park.",
      "ll": [
       43.47971,
       -110.76005
      ]
     },
     {
      "name": "Cowboy Coffee Co.",
      "q": "Jackson Wyoming Town Square",
      "note": "Coffee stop in Jackson.",
      "ll": [
       43.48046,
       -110.76255
      ]
     }
    ]
   },
   {
    "id": "d02s2",
    "name": "Segment 2 — Teton Park Road, Moose to Signal Mountain",
    "blurb": "Start of the inner park road, turnout by turnout north from Moose.",
    "time": "1:00–3:30pm",
    "map": {
     "from": "Moose, Wyoming",
     "to": "Signal Mountain Lodge, Wyoming",
     "fromll": [
      43.65593,
      -110.71644
     ],
     "toll": [
      43.84406,
      -110.61093
     ]
    },
    "stops": [
     {
      "name": "Craig Thomas Discovery and Visitor Center",
      "q": "Craig Thomas Discovery and Visitor Center Grand Teton",
      "note": "Park visitor center at Moose entrance.",
      "ll": [
       43.6533,
       -110.7187
      ]
     },
     {
      "name": "Windy Point Turnout",
      "q": "Teton Range from Teton Park Road",
      "note": "First full Teton Range panorama.",
      "ll": [
       43.67715,
       -110.72468
      ]
     },
     {
      "name": "Grand Teton Climbers Ranch",
      "q": "Grand Teton Climbers Ranch",
      "note": "Historic AAC climbers' lodging.",
      "ll": [
       43.70486,
       -110.73533
      ]
     },
     {
      "name": "Teton Glacier Turnout",
      "q": "Teton Glacier Wyoming",
      "note": "View of the range's largest glacier.",
      "ll": [
       43.69086,
       -110.67261
      ]
     },
     {
      "name": "Geraldine Lucas Homestead",
      "q": "Grand Teton National Park historic homestead",
      "note": "Early homesteader's cabin near the road."
     },
     {
      "name": "Mountain View Turnout",
      "q": "Teton Range from Teton Park Road",
      "note": "Roadside range overlook.",
      "ll": [
       43.79422,
       -110.69597
      ]
     },
     {
      "name": "Mount Moran Turnout",
      "q": "Mount Moran Grand Teton",
      "note": "View of Mount Moran's flat-topped summit.",
      "ll": [
       43.80343,
       -110.64157
      ]
     },
     {
      "name": "Jackson Point Overlook",
      "q": "Grand Teton National Park Teton Range panorama",
      "note": "Named for photographer W.H. Jackson.",
      "ll": [
       43.84589,
       -110.57561
      ]
     }
    ]
   },
   {
    "id": "d02s3",
    "name": "Segment 3 — Signal Mountain and Jackson Lake",
    "blurb": "Jackson Lake shoreline turnouts and the dam overlook.",
    "time": "3:30–5:00pm",
    "map": {
     "from": "Signal Mountain Lodge, Wyoming",
     "to": "Moran Entrance Station, Wyoming",
     "fromll": [
      43.84406,
      -110.61093
     ],
     "toll": [
      44.58938,
      -104.70048
     ]
    },
    "stops": [
     {
      "name": "Emma Matilda Overlook",
      "q": "Jackson Lake Grand Teton",
      "note": "Named for an early park visitor.",
      "ll": [
       43.84893,
       -110.56717
      ]
     },
     {
      "name": "Signal Mountain Summit Overlook",
      "q": "Signal Mountain Jackson Lake Wyoming",
      "note": "Short side road, highest overlook on the drive.",
      "ll": [
       43.84589,
       -110.57561
      ]
     },
     {
      "name": "Catholic Bay Turnout",
      "q": "Jackson Lake Grand Teton",
      "note": "Jackson Lake shoreline viewpoint.",
      "ll": [
       43.84879,
       -110.59401
      ]
     },
     {
      "name": "Jackson Lake Dam Overlook",
      "q": "Jackson Lake Dam Wyoming",
      "note": "Dam holding back Jackson Lake.",
      "ll": [
       43.98144,
       -110.66186
      ]
     },
     {
      "name": "Oxbow Bend Turnout",
      "q": "Oxbow Bend Grand Teton",
      "note": "Snake River bend, Mount Moran reflection, wildlife.",
      "ll": [
       43.86615,
       -110.54754
      ]
     },
     {
      "name": "Moran Entrance Station",
      "q": "Grand Teton National Park entrance sign",
      "note": "Park entrance near Moran junction.",
      "ll": [
       43.8718,
       -110.5716
      ]
     }
    ]
   },
   {
    "id": "d02s4",
    "name": "Segment 4 — Highway 89, Snake River overlooks to Mormon Row",
    "blurb": "Sunset run down the valley to the historic Mormon Row barns.",
    "time": "5:00–7:30pm",
    "map": {
     "from": "Moran Entrance Station, Wyoming",
     "to": "Mormon Row, Wyoming",
     "fromll": [
      44.58938,
      -104.70048
     ],
     "toll": [
      43.66905,
      -110.66446
     ]
    },
    "stops": [
     {
      "name": "Snake River Overlook",
      "q": "Snake River Overlook Grand Teton",
      "note": "Ansel Adams' famous vantage over the Snake River.",
      "ll": [
       43.7539,
       -110.62409
      ]
     },
     {
      "name": "Teton Point Turnout",
      "q": "Snake River Overlook Grand Teton",
      "note": "Wide valley and range view.",
      "ll": [
       43.71796,
       -110.66008
      ]
     },
     {
      "name": "Schwabacher Landing",
      "q": "Schwabacher Landing Grand Teton",
      "note": "Beaver pond reflections of the Teton Range.",
      "ll": [
       43.70915,
       -110.67113
      ]
     },
     {
      "name": "Glacier View Turnout",
      "q": "Teton Range from Teton Park Road",
      "note": "Range view on Highway 89.",
      "ll": [
       43.69086,
       -110.67261
      ]
     },
     {
      "name": "Blacktail Ponds Overlook",
      "q": "Grand Teton National Park wetlands",
      "note": "Wetland ponds below the Tetons.",
      "ll": [
       43.66732,
       -110.69555
      ]
     },
     {
      "name": "Mormon Row, T.A. Moulton Barn",
      "q": "Mormon Row Grand Teton barn",
      "note": "Iconic homestead barn at sunset.",
      "ll": [
       43.66069,
       -110.665
      ]
     }
    ]
   }
  ]
 },
 {
  "n": 3,
  "date": "2026-09-27",
  "dow": "Sun",
  "title": "Teton Village, Death Canyon, and Jenny Lake",
  "region": "Wyoming",
  "hero": "Jenny Lake Grand Teton",
  "summary": "Hike to Phelps Lake, boat across Jenny Lake to Inspiration Point, then explore String Lake and Jackson.",
  "stay": {
   "name": "Airbnb #2 — Jackson",
   "meta": "2 nights",
   "link": "https://www.airbnb.com/rooms/1410358581481167106"
  },
  "segments": [
   {
    "id": "d03s1",
    "name": "Segment 1 — Teton Village and Death Canyon",
    "blurb": "Breakfast, Teton Village, then Death Canyon hike to Phelps Lake.",
    "time": "7:30am–12:00pm",
    "map": {
     "from": "Teton Village, Wyoming",
     "to": "Death Canyon Trailhead, Wyoming",
     "fromll": [
      43.58798,
      -110.82799
     ],
     "toll": [
      43.65631,
      -110.78173
     ]
    },
    "stops": [
     {
      "name": "Persephone Westbank (breakfast)",
      "q": "Teton Village Wyoming",
      "note": "Breakfast stop before the park.",
      "ll": [
       43.52983,
       -110.84281
      ]
     },
     {
      "name": "Teton Village",
      "q": "Teton Village Wyoming",
      "note": "Base of the Jackson Hole ski resort.",
      "ll": [
       43.58798,
       -110.82799
      ]
     },
     {
      "name": "Granite Canyon Entrance Station",
      "q": "Grand Teton National Park entrance sign",
      "note": "South entrance into the park."
     },
     {
      "name": "Death Canyon Trailhead",
      "q": "Death Canyon Grand Teton",
      "note": "Trailhead for the Phelps Lake hike.",
      "ll": [
       43.65586,
       -110.7811
      ]
     },
     {
      "name": "Phelps Lake Overlook",
      "q": "Phelps Lake Grand Teton",
      "note": "Overlook above the lake from the trail.",
      "ll": [
       43.65713,
       -110.79916
      ]
     },
     {
      "name": "Laurance S. Rockefeller Preserve Center",
      "q": "Laurance S Rockefeller Preserve Grand Teton",
      "note": "Visitor center at the trailhead.",
      "ll": [
       43.62634,
       -110.77521
      ]
     }
    ]
   },
   {
    "id": "d03s2",
    "name": "Segment 2 — Jenny Lake and Inspiration Point",
    "blurb": "Boat shuttle across Jenny Lake and the hike up to Inspiration Point.",
    "time": "12:30–3:00pm",
    "map": {
     "center": "Jenny Lake, Wyoming",
     "zoom": 14,
     "ll": [
      43.76348,
      -110.73033
     ]
    },
    "stops": [
     {
      "name": "Jenny Lake Visitor Center",
      "q": "Jenny Lake Visitor Center Wyoming",
      "note": "Visitor center on the east shore.",
      "ll": [
       43.75149,
       -110.72233
      ]
     },
     {
      "name": "Jenny Lake Boat House",
      "q": "Jenny Lake Grand Teton",
      "note": "Dock for the shuttle boat across the lake.",
      "ll": [
       43.74846,
       -110.72769
      ]
     },
     {
      "name": "Boat shuttle across Jenny Lake",
      "q": "Jenny Lake Grand Teton",
      "note": "Short crossing to the west shore trailhead.",
      "ll": [
       43.75284,
       -110.72408
      ]
     },
     {
      "name": "Inspiration Point",
      "q": "Inspiration Point Grand Teton",
      "note": "Overlook above Jenny Lake after a short climb.",
      "ll": [
       43.7671,
       -110.74804
      ]
     },
     {
      "name": "Cascade Canyon Turnout",
      "q": "Cascade Canyon Grand Teton",
      "note": "Canyon trail continuing past Inspiration Point.",
      "ll": [
       43.77317,
       -110.71194
      ]
     }
    ]
   },
   {
    "id": "d03s3",
    "name": "Segment 3 — Jenny Lake Road and String Lake",
    "blurb": "Scenic one-way loop road and the String Lake picnic area.",
    "time": "3:00–5:30pm",
    "map": {
     "from": "Jenny Lake Road, Wyoming",
     "to": "String Lake, Wyoming",
     "fromll": [
      43.78373,
      -110.72386
     ],
     "toll": [
      43.78954,
      -110.73237
     ]
    },
    "stops": [
     {
      "name": "Jenny Lake Overlook",
      "q": "Jenny Lake Grand Teton",
      "note": "Roadside viewpoint on Jenny Lake Road.",
      "ll": [
       43.76783,
       -110.71742
      ]
     },
     {
      "name": "Alder Fire Overlook",
      "q": "Grand Teton National Park forest fire regrowth",
      "note": "View over an old burn area's regrowth."
     },
     {
      "name": "String Lake Picnic Area",
      "q": "String Lake Grand Teton",
      "note": "Picnic spot at the shallow lake's south end.",
      "ll": [
       43.85976,
       -110.5886
      ]
     },
     {
      "name": "Cathedral Group Turnout",
      "q": "Cathedral Group Grand Teton",
      "note": "Classic view of the range's three main peaks.",
      "ll": [
       43.78961,
       -110.71397
      ]
     },
     {
      "name": "String Lake Loop Hike (optional)",
      "q": "String Lake Grand Teton",
      "note": "Flat loop trail around the lake.",
      "ll": [
       43.78954,
       -110.73237
      ]
     }
    ]
   },
   {
    "id": "d03s4",
    "name": "Segment 4 — Evening in Jackson",
    "blurb": "Back to town for dinner after a full day in the park.",
    "time": "6:00–9:00pm",
    "map": {
     "center": "Jackson, Wyoming",
     "zoom": 15,
     "ll": [
      43.47996,
      -110.76181
     ]
    },
    "stops": [
     {
      "name": "Jackson Town Square",
      "q": "Jackson Town Square Wyoming",
      "note": "Antler arches, center of downtown Jackson.",
      "ll": [
       43.47996,
       -110.7618
      ]
     },
     {
      "name": "Million Dollar Cowboy Bar",
      "q": "Million Dollar Cowboy Bar Jackson Wyoming",
      "note": "Historic saloon on the square.",
      "ll": [
       43.47988,
       -110.76253
      ]
     },
     {
      "name": "National Museum of Wildlife Art",
      "q": "National Museum of Wildlife Art Jackson",
      "note": "Art museum overlooking the National Elk Refuge.",
      "ll": [
       43.5189,
       -110.74904
      ]
     }
    ]
   }
  ]
 },
 {
  "n": 4,
  "date": "2026-09-28",
  "dow": "Mon",
  "title": "Yellowstone South Entrance and the Lower Loop",
  "region": "Wyoming",
  "hero": "Grand Prismatic Spring",
  "summary": "Enter Yellowstone from the south at dawn and drive the park's Lower 8 loop clockwise to West Yellowstone.",
  "drive": "Jackson to West Yellowstone via Yellowstone South Entrance and Grand Loop Road · 6h · 300 km",
  "stay": {
   "name": "Airbnb #3 — West Yellowstone",
   "meta": "1 night",
   "link": "https://www.airbnb.com/rooms/1528338870934746802"
  },
  "segments": [
   {
    "id": "d04s1",
    "name": "Segment 1 — South Entrance to West Thumb",
    "blurb": "The park's south approach, two waterfalls, and the lake's geyser basin.",
    "time": "6:00–9:30am",
    "map": {
     "from": "Yellowstone South Entrance, Wyoming",
     "to": "West Thumb Geyser Basin, Yellowstone National Park",
     "fromll": [
      43.95412,
      -109.89101
     ],
     "toll": [
      44.41576,
      -110.57411
     ]
    },
    "stops": [
     {
      "name": "South Entrance Station",
      "q": "Yellowstone South Entrance",
      "note": "Park boundary; drive north from Jackson begins here.",
      "ll": [
       43.75222,
       -110.72227
      ]
     },
     {
      "name": "Moose Falls",
      "q": "Moose Falls Yellowstone",
      "note": "Small waterfall steps from the road.",
      "ll": [
       44.15186,
       -110.67263
      ]
     },
     {
      "name": "Lewis Falls",
      "q": "Lewis Falls Yellowstone",
      "note": "Wide falls on the Lewis River.",
      "ll": [
       44.26735,
       -110.6369
      ]
     },
     {
      "name": "Lewis Lake Picnic Area",
      "q": "Lewis Lake Yellowstone",
      "note": "Lakeside pull-off, good rest stop.",
      "ll": [
       44.28303,
       -110.628
      ]
     },
     {
      "name": "Grant Village Visitor Center",
      "q": "Grant Village Yellowstone",
      "note": "Visitor center on the south shore of Yellowstone Lake.",
      "ll": [
       44.39358,
       -110.55632
      ]
     },
     {
      "name": "West Thumb Geyser Basin",
      "q": "West Thumb Geyser Basin",
      "note": "Geysers and hot springs right on the lakeshore.",
      "ll": [
       44.41701,
       -110.57197
      ]
     }
    ]
   },
   {
    "id": "d04s2",
    "name": "Segment 2 — Old Faithful and the Upper Geyser Basin",
    "blurb": "The park's most famous geyser and the road leading to it.",
    "time": "9:30–11:30am",
    "map": {
     "from": "West Thumb Geyser Basin, Yellowstone National Park",
     "to": "Old Faithful, Yellowstone National Park",
     "fromll": [
      44.41576,
      -110.57411
     ],
     "toll": [
      44.45963,
      -110.83129
     ]
    },
    "stops": [
     {
      "name": "Continental Divide",
      "q": "Continental Divide Yellowstone National Park",
      "note": "Marked crossing on the road south of Old Faithful.",
      "ll": [
       44.42286,
       -110.66069
      ]
     },
     {
      "name": "Kepler Cascades",
      "q": "Kepler Cascades",
      "note": "Roadside waterfall just before Old Faithful.",
      "ll": [
       44.44554,
       -110.80587
      ]
     },
     {
      "name": "Old Faithful",
      "q": "Old Faithful geyser",
      "note": "Eruptions roughly every 90 minutes.",
      "ll": [
       44.46046,
       -110.82815
      ]
     }
    ]
   },
   {
    "id": "d04s3",
    "name": "Segment 3 — Midway and Lower Geyser Basins",
    "blurb": "The largest hot spring in the US, then a paint pot loop.",
    "time": "11:30am–1:00pm",
    "map": {
     "from": "Old Faithful, Yellowstone National Park",
     "to": "Fountain Paint Pots, Yellowstone National Park",
     "fromll": [
      44.45963,
      -110.83129
     ],
     "toll": null
    },
    "stops": [
     {
      "name": "Grand Prismatic Spring",
      "q": "Grand Prismatic Spring",
      "note": "Largest hot spring in the US; rainbow-colored.",
      "ll": [
       44.52511,
       -110.83819
      ]
     },
     {
      "name": "Firehole Lake Drive",
      "q": "Firehole Lake Drive Yellowstone",
      "note": "One-way loop past Great Fountain Geyser.",
      "ll": [
       44.54028,
       -110.80174
      ]
     },
     {
      "name": "Fountain Paint Pots",
      "q": "Fountain Paint Pots",
      "note": "Boardwalk loop past mudpots and geysers.",
      "ll": [
       44.55061,
       -110.80624
      ]
     }
    ]
   },
   {
    "id": "d04s4",
    "name": "Segment 4 — Canyon and the Grand Canyon of the Yellowstone",
    "blurb": "Waterfall overlooks, then mud pots on the way toward the lake.",
    "time": "1:00–5:30pm",
    "map": {
     "from": "Fountain Paint Pots, Yellowstone National Park",
     "to": "West Yellowstone, Montana",
     "fromll": null,
     "toll": [
      44.66321,
      -111.10121
     ]
    },
    "stops": [
     {
      "name": "Virginia Cascade Drive",
      "q": "Virginia Cascade Yellowstone",
      "note": "One-way spur past a narrow waterfall.",
      "ll": [
       44.71393,
       -110.64927
      ]
     },
     {
      "name": "Canyon Visitor Education Center",
      "q": "Canyon Visitor Education Center Yellowstone",
      "note": "Exhibits on the canyon and its geology.",
      "ll": [
       44.73473,
       -110.49189
      ]
     },
     {
      "name": "Inspiration Point",
      "q": "Inspiration Point Yellowstone Grand Canyon",
      "note": "Wide view down the canyon.",
      "ll": [
       44.72467,
       -110.46979
      ]
     },
     {
      "name": "Lower Falls (Artist Point)",
      "q": "Lower Falls Yellowstone",
      "note": "308-foot waterfall, the canyon's centerpiece."
     },
     {
      "name": "Upper Falls View",
      "q": "Upper Falls Yellowstone",
      "note": "Smaller falls upstream of the Lower Falls.",
      "ll": [
       44.71478,
       -110.4973
      ]
     },
     {
      "name": "Sulphur Caldron",
      "q": "Sulphur Caldron Yellowstone",
      "note": "One of the most acidic springs in the park.",
      "ll": [
       44.62403,
       -110.43349
      ]
     },
     {
      "name": "Mud Volcano Trail — Black Dragon's Caldron",
      "q": "Mud Volcano Yellowstone",
      "note": "Boardwalk past bubbling mud pots and steam vents.",
      "ll": [
       44.62015,
       -110.43528
      ]
     },
     {
      "name": "LeHardys Rapids",
      "q": "LeHardys Rapids",
      "note": "Rapids on the Yellowstone River; cutthroat trout run here.",
      "ll": [
       44.60737,
       -110.38388
      ]
     }
    ]
   }
  ]
 },
 {
  "n": 5,
  "date": "2026-09-29",
  "dow": "Tue",
  "title": "Yellowstone's Upper Loop, then on to Glacier",
  "region": "Wyoming / Montana",
  "hero": "Mammoth Hot Springs Terraces",
  "summary": "Finish Yellowstone's Upper 8 loop clockwise, then drive north-west toward West Glacier via Bozeman and Butte.",
  "drive": "Canyon Village to West Glacier via Bozeman and Butte · 9h · 720 km",
  "stay": {
   "name": "Airbnb #4 — West Glacier",
   "meta": "2 nights",
   "link": "https://www.airbnb.com/rooms/833317616963247528"
  },
  "segments": [
   {
    "id": "d05s1",
    "name": "Segment 1 — Gibbon Falls to Norris Geyser Basin",
    "blurb": "A waterfall and two short-hike geyser basins on the way to Norris.",
    "time": "8:00–10:30am",
    "map": {
     "from": "Gibbon Falls, Yellowstone National Park",
     "to": "Norris Geyser Basin, Yellowstone National Park",
     "fromll": [
      43.51273,
      -112.0165
     ],
     "toll": null
    },
    "stops": [
     {
      "name": "Gibbon Falls",
      "q": "Gibbon Falls Yellowstone",
      "note": "Roadside waterfall on the Gibbon River.",
      "ll": [
       44.65402,
       -110.77075
      ]
     },
     {
      "name": "Beryl Spring",
      "q": "Beryl Spring Yellowstone",
      "note": "Small, loud hot spring right by the road.",
      "ll": [
       44.67869,
       -110.74654
      ]
     },
     {
      "name": "Monument Geyser Basin",
      "q": "Norris Geyser Basin",
      "note": "Steep short hike to a ridge of geyser cones.",
      "ll": [
       44.68768,
       -110.74738
      ]
     },
     {
      "name": "Artists' Paintpots",
      "q": "Artists Paint Pots Yellowstone",
      "note": "Boardwalk loop past mudpots and hot springs.",
      "ll": [
       44.69154,
       -110.73825
      ]
     },
     {
      "name": "Norris Geyser Basin",
      "q": "Norris Geyser Basin",
      "note": "Hottest, most acidic basin in the park.",
      "ll": [
       44.72652,
       -110.70357
      ]
     }
    ]
   },
   {
    "id": "d05s2",
    "name": "Segment 2 — Roaring Mountain to Mammoth Hot Springs",
    "blurb": "A steaming hillside, then the park's terraced hot spring complex.",
    "time": "10:30am–12:30pm",
    "map": {
     "from": "Norris Geyser Basin, Yellowstone National Park",
     "to": "Mammoth Hot Springs, Yellowstone National Park",
     "fromll": null,
     "toll": [
      44.97556,
      -110.70342
     ]
    },
    "stops": [
     {
      "name": "Roaring Mountain",
      "q": "Roaring Mountain Yellowstone",
      "note": "Acidic hillside vented with steam and fumaroles.",
      "ll": [
       44.77716,
       -110.72743
      ]
     },
     {
      "name": "Cleopatra Spring and Terrace",
      "q": "Mammoth Hot Springs Terraces",
      "note": "Travertine terrace within the Mammoth complex."
     },
     {
      "name": "Mammoth Hot Springs",
      "q": "Mammoth Hot Springs Terraces",
      "note": "Wide travertine terraces, the park's north hub.",
      "ll": [
       44.97062,
       -110.70564
      ]
     },
     {
      "name": "Mount Everts Viewpoint",
      "q": "Mount Everts Yellowstone",
      "note": "Long sedimentary ridge above Mammoth.",
      "ll": [
       44.97494,
       -110.66132
      ]
     }
    ]
   },
   {
    "id": "d05s3",
    "name": "Segment 3 — Lamar Valley and Mount Washburn",
    "blurb": "Open valley for wildlife, then a high summit lookout before exiting north.",
    "time": "12:30–3:30pm",
    "map": {
     "from": "Mammoth Hot Springs, Yellowstone National Park",
     "to": "Canyon Village, Yellowstone National Park",
     "fromll": [
      44.97556,
      -110.70342
     ],
     "toll": [
      44.65908,
      -111.10006
     ]
    },
    "stops": [
     {
      "name": "Slough Creek",
      "q": "Slough Creek Yellowstone",
      "note": "Prime wildlife-watching meadow, wolves and bison.",
      "ll": [
       44.92809,
       -110.32576
      ]
     },
     {
      "name": "Yellowstone River Overlook",
      "q": "Yellowstone River overlook Lamar Valley",
      "note": "Open view across the Lamar Valley.",
      "ll": [
       44.90472,
       -110.39139
      ]
     },
     {
      "name": "Mount Washburn",
      "q": "Mount Washburn fire lookout",
      "note": "Fire lookout summit; wide views of the whole park.",
      "ll": [
       44.79756,
       -110.43379
      ]
     }
    ]
   },
   {
    "id": "d05s4",
    "name": "Segment 4 — Drive to West Glacier via Bozeman and Butte",
    "blurb": "Long transit day: out of the park, past Bozeman, through Butte.",
    "time": "3:30–9:00pm",
    "map": {
     "from": "Canyon Village, Yellowstone National Park",
     "to": "West Glacier, Montana",
     "fromll": [
      44.65908,
      -111.10006
     ],
     "toll": [
      48.49634,
      -113.98244
     ]
    },
    "stops": [
     {
      "name": "Yellowstone Hot Springs (Paradise Valley)",
      "q": "Paradise Valley Montana Yellowstone River",
      "note": "Riverside soak stop north of the park, [to add].",
      "ll": [
       41.42201,
       -117.38737
      ]
     },
     {
      "name": "Bozeman",
      "q": "Bozeman Montana downtown",
      "note": "College town, good stretch-your-legs stop.",
      "ll": [
       45.67943,
       -111.04405
      ]
     },
     {
      "name": "Butte — Berkeley Pit",
      "q": "Berkeley Pit Butte",
      "note": "Former open-pit copper mine, now a flooded overlook.",
      "ll": [
       46.01715,
       -112.51173
      ]
     }
    ]
   }
  ]
 },
 {
  "n": 6,
  "date": "2026-09-30",
  "dow": "Wed",
  "title": "Going-to-the-Sun Road, Rim to Lake",
  "region": "Montana",
  "hero": "Going-to-the-Sun Road",
  "summary": "Sunrise at Logan Pass, then the full Going-to-the-Sun Road east to west, ending with dinner in Kalispell.",
  "drive": "West Glacier to Kalispell via Going-to-the-Sun Road · 5h · 180 km",
  "stay": {
   "name": "Airbnb #4 — West Glacier",
   "meta": "2 nights",
   "link": "https://www.airbnb.com/rooms/833317616963247528"
  },
  "segments": [
   {
    "id": "d06s1",
    "name": "Segment 1 — Logan Pass at Sunrise and the East Side",
    "blurb": "Sunrise from the road's high point; it can close for snow after mid-September.",
    "time": "5:00–9:30am",
    "map": {
     "from": "Logan Pass, Glacier National Park",
     "to": "Saint Mary, Montana",
     "fromll": null,
     "toll": [
      48.74387,
      -113.42955
     ]
    },
    "stops": [
     {
      "name": "Logan Pass",
      "q": "Logan Pass Glacier National Park",
      "note": "Highest point on Going-to-the-Sun Road, 6,646 ft.",
      "ll": [
       48.69667,
       -113.7179
      ]
     },
     {
      "name": "Hidden Lake Overlook",
      "q": "Hidden Lake Overlook Glacier National Park",
      "note": "Short boardwalk hike from the Logan Pass visitor center.",
      "ll": [
       48.68721,
       -113.74164
      ]
     },
     {
      "name": "Saint Mary Falls",
      "q": "Saint Mary Falls Glacier National Park",
      "note": "Trailhead waterfall on the east side.",
      "ll": [
       48.66797,
       -113.61511
      ]
     },
     {
      "name": "Sunrift Gorge",
      "q": "Sunrift Gorge Glacier National Park",
      "note": "Narrow rock gorge cut by Baring Creek.",
      "ll": [
       48.67795,
       -113.59614
      ]
     },
     {
      "name": "Sun Point Nature Trail",
      "q": "Saint Mary Lake Glacier National Park",
      "note": "Short trail with views across Saint Mary Lake.",
      "ll": [
       48.67553,
       -113.57967
      ]
     },
     {
      "name": "Wild Goose Island Lookout",
      "q": "Wild Goose Island Glacier National Park",
      "note": "Classic overlook of the small island in the lake.",
      "ll": [
       48.68886,
       -113.54023
      ]
     },
     {
      "name": "Explore Saint Mary",
      "q": "Saint Mary Montana Glacier",
      "note": "Small gateway town at the east entrance.",
      "ll": [
       48.74733,
       -113.43902
      ]
     }
    ]
   },
   {
    "id": "d06s2",
    "name": "Segment 2 — West Side to Kalispell",
    "blurb": "Cedar boardwalk and the park's largest lake, then dinner off the mountain.",
    "time": "9:30am–8:30pm",
    "map": {
     "from": "Avalanche Creek, Glacier National Park",
     "to": "Kalispell, Montana",
     "fromll": [
      50.91181,
      -114.65838
     ],
     "toll": [
      48.20216,
      -114.31532
     ]
    },
    "stops": [
     {
      "name": "Trail of the Cedars",
      "q": "Trail of the Cedars Glacier National Park",
      "note": "Boardwalk loop through old-growth cedar and hemlock.",
      "ll": [
       48.67662,
       -113.8138
      ]
     },
     {
      "name": "Avalanche Lake",
      "q": "Avalanche Lake Glacier National Park",
      "note": "Optional add-on hike above Avalanche Gorge.",
      "ll": [
       48.65613,
       -113.78687
      ]
     },
     {
      "name": "Lake McDonald",
      "q": "Lake McDonald Glacier National Park",
      "note": "Largest lake in the park, historic lodge on its shore.",
      "ll": [
       48.58397,
       -113.91906
      ]
     },
     {
      "name": "The Desoto Grill",
      "q": "Conrad Mansion Kalispell",
      "note": "Dinner stop in downtown Kalispell.",
      "ll": [
       48.19734,
       -114.3174
      ]
     },
     {
      "name": "Sykes Diner & Market",
      "q": "Conrad Mansion Kalispell",
      "note": "Alternate option, local diner since 1948.",
      "ll": [
       48.19595,
       -114.31633
      ]
     }
    ]
   }
  ]
 },
 {
  "n": 7,
  "date": "2026-10-01",
  "dow": "Thu",
  "title": "Kalispell to Sandpoint, Lake Pend Oreille",
  "region": "Idaho Panhandle",
  "hero": "Lake Pend Oreille Sandpoint",
  "summary": "A forest highway from Glacier country into North Idaho, ending lakeside in Sandpoint.",
  "drive": "West Glacier to Sandpoint · 4h 10m · 204 mi",
  "stay": {
   "name": "Airbnb #5 — Sandpoint",
   "meta": "1 night",
   "link": "https://www.airbnb.com/rooms/1526797092117497451"
  },
  "segments": [
   {
    "id": "d07s1",
    "name": "Segment 1 — Kootenai National Forest, West Glacier to Bonners Ferry",
    "blurb": "Two-lane highway through Kootenai National Forest along the Kootenai River.",
    "time": "9:00am–1:00pm",
    "map": {
     "from": "West Glacier, Montana",
     "to": "Bonners Ferry, Idaho",
     "fromll": [
      48.49634,
      -113.98244
     ],
     "toll": [
      48.69723,
      -116.31198
     ]
    },
    "stops": [
     {
      "name": "Kootenai Falls",
      "q": "Kootenai Falls Montana",
      "note": "Roadside stop on US-2, largest undammed falls in Montana.",
      "ll": [
       47.72185,
       -116.82641
      ]
     },
     {
      "name": "Troy, Montana",
      "q": "Kootenai River Montana",
      "note": "Small riverside town near the Idaho line.",
      "ll": [
       48.46152,
       -115.89499
      ]
     },
     {
      "name": "Kootenai National Forest",
      "q": "Kootenai National Forest",
      "note": "Forest corridor for most of the morning drive.",
      "ll": [
       47.25295,
       -115.91958
      ]
     },
     {
      "name": "Bonners Ferry",
      "q": "Bonners Ferry Idaho",
      "note": "Kootenai River crossing, gateway to the Idaho Panhandle.",
      "ll": [
       48.68817,
       -116.31564
      ]
     }
    ]
   },
   {
    "id": "d07s2",
    "name": "Segment 2 — US-95 south to Sandpoint, tamarack country",
    "blurb": "Selkirk Mountains foothills, with a larch-viewing detour up Pack River.",
    "time": "1:00–3:30pm",
    "map": {
     "from": "Bonners Ferry, Idaho",
     "to": "Sandpoint, Idaho",
     "fromll": [
      48.69723,
      -116.31198
     ],
     "toll": [
      48.27613,
      -116.54878
     ]
    },
    "stops": [
     {
      "name": "Kaniksu National Forest",
      "q": "Kaniksu National Forest",
      "note": "Forest boundary the highway runs through south of Bonners Ferry.",
      "ll": [
       47.25295,
       -115.91958
      ]
     },
     {
      "name": "Selkirk Mountains",
      "q": "Selkirk Mountains Idaho",
      "note": "Range visible to the west for most of the drive.",
      "ll": [
       49.09215,
       -116.82006
      ]
     },
     {
      "name": "Upper Pack River Road",
      "q": "Kaniksu National Forest",
      "note": "Gravel side road off US-95 near Samuels; western larch turn gold in early October.",
      "ll": [
       48.6397,
       -116.6193
      ]
     },
     {
      "name": "Sandpoint Long Bridge",
      "q": "Sandpoint Bridge Lake Pend Oreille",
      "note": "Two-mile wooden-piling bridge crossing the lake into town.",
      "ll": [
       48.27325,
       -116.54395
      ]
     }
    ]
   },
   {
    "id": "d07s3",
    "name": "Segment 3 — Sandpoint lakeshore, afternoon into evening",
    "blurb": "Lake Pend Oreille shoreline trails and the Schweitzer viewpoint above town.",
    "time": "3:30–7:00pm",
    "map": {
     "center": "Sandpoint, Idaho",
     "zoom": 14,
     "ll": [
      48.27613,
      -116.54878
     ]
    },
    "stops": [
     {
      "name": "City Beach",
      "q": "City Beach Sandpoint Idaho",
      "note": "In-town lake beach and park, easy first stop.",
      "ll": [
       48.27338,
       -116.54019
      ]
     },
     {
      "name": "Pend d'Oreille Bay Trail",
      "q": "Lake Pend Oreille Sandpoint",
      "note": "3.2-mile flat lakeside trail from Ponderay to Sandpoint.",
      "ll": [
       48.29197,
       -116.54242
      ]
     },
     {
      "name": "Sand Creek Trail",
      "q": "Sandpoint Bridge Lake Pend Oreille",
      "note": "Paved path along Sand Creek from downtown Sandpoint."
     },
     {
      "name": "Schweitzer Mountain Resort",
      "q": "Schweitzer Mountain Resort",
      "note": "Viewpoint above town, weather and time permitting.",
      "ll": [
       48.3787,
       -116.61308
      ]
     },
     {
      "name": "Pend Oreille Scenic Byway",
      "q": "Pend Oreille Scenic Byway",
      "note": "SR-200 lakeshore drive east of town for evening light.",
      "ll": [
       48.76688,
       -117.06094
      ]
     }
    ]
   }
  ]
 },
 {
  "n": 8,
  "date": "2026-10-02",
  "dow": "Fri",
  "title": "Sandpoint to Spokane to Leavenworth",
  "region": "Washington",
  "hero": "Riverfront Park Spokane",
  "summary": "Morning through North Idaho lake country, a Spokane city stop, then the Cascade climb into Leavenworth.",
  "drive": "Sandpoint to Leavenworth via Spokane · ~4h 30m driving · 265 mi",
  "stay": {
   "name": "Airbnb #6 — Leavenworth",
   "meta": "1 night",
   "link": "https://www.airbnb.com/rooms/1436750025558634515"
  },
  "segments": [
   {
    "id": "d08s1",
    "name": "Segment 1 — Sandpoint to Spokane",
    "blurb": "US-95 south past Lake Pend Oreille and Lake Coeur d'Alene into Washington.",
    "time": "9:00–10:45am",
    "map": {
     "from": "Sandpoint, Idaho",
     "to": "Spokane, Washington",
     "fromll": [
      48.27613,
      -116.54878
     ],
     "toll": [
      47.65719,
      -117.42351
     ]
    },
    "stops": [
     {
      "name": "Farragut State Park",
      "q": "Farragut State Park Idaho",
      "note": "Former naval training station on the south shore of Lake Pend Oreille.",
      "ll": [
       47.79013,
       -117.36492
      ]
     },
     {
      "name": "Silverwood Theme Park",
      "q": "Silverwood Theme Park Idaho",
      "note": "Roadside landmark on US-95 between Coeur d'Alene and Sandpoint.",
      "ll": [
       47.90678,
       -116.70751
      ]
     },
     {
      "name": "Lake Coeur d'Alene",
      "q": "Lake Coeur d'Alene",
      "note": "Quick lake view as the highway skirts Coeur d'Alene.",
      "ll": [
       48.2956,
       -118.36703
      ]
     }
    ]
   },
   {
    "id": "d08s2",
    "name": "Segment 2 — Spokane, Riverfront Park and the Falls",
    "blurb": "A few hours downtown around the falls before continuing west.",
    "time": "11:00am–1:30pm",
    "map": {
     "center": "Spokane, Washington",
     "zoom": 15,
     "ll": [
      47.65719,
      -117.42351
     ]
    },
    "stops": [
     {
      "name": "Riverfront Park",
      "q": "Riverfront Park Spokane",
      "note": "1974 World's Fair site; paths along both falls channels.",
      "ll": [
       47.6617,
       -117.41991
      ]
     },
     {
      "name": "Spokane Falls",
      "q": "Spokane Falls",
      "note": "Viewed from the park or the SkyRide gondola.",
      "ll": [
       47.65719,
       -117.42351
      ]
     },
     {
      "name": "Davenport Hotel",
      "q": "Davenport Hotel Spokane",
      "note": "1914 landmark hotel lobby, open to walk through.",
      "ll": [
       47.65735,
       -117.42398
      ]
     },
     {
      "name": "Manito Park",
      "q": "Manito Park Spokane",
      "note": "Duncan Garden and Japanese Garden, 2.5 miles south of downtown; free entry.",
      "ll": [
       47.63587,
       -117.41355
      ]
     }
    ]
   },
   {
    "id": "d08s3",
    "name": "Segment 3 — Spokane to Leavenworth via Cashmere",
    "blurb": "I-90 to Wenatchee, then US-2 up Tumwater Canyon into the mountains.",
    "time": "2:00–5:30pm",
    "map": {
     "from": "Spokane, Washington",
     "to": "Leavenworth, Washington",
     "fromll": [
      47.65719,
      -117.42351
     ],
     "toll": [
      47.59691,
      -120.66108
     ]
    },
    "stops": [
     {
      "name": "Cashmere",
      "q": "Cashmere Washington",
      "note": "Historic apple-country town, home of Aplets & Cotlets candy.",
      "ll": [
       47.52238,
       -120.46904
      ]
     },
     {
      "name": "Ohme Gardens",
      "q": "Ohme Gardens Wenatchee",
      "note": "Alpine garden overlooking the Wenatchee Valley, if time allows.",
      "ll": [
       47.47795,
       -120.32651
      ]
     },
     {
      "name": "Tumwater Canyon",
      "q": "Tumwater Canyon Washington",
      "note": "Wenatchee River canyon on US-2, the final approach into Leavenworth.",
      "ll": [
       47.61655,
       -120.72301
      ]
     }
    ]
   },
   {
    "id": "d08s4",
    "name": "Segment 4 — Leavenworth, Bavarian village evening",
    "blurb": "Front Street on Oktoberfest opening weekend; expect crowds and full parking.",
    "time": "6:00–9:00pm",
    "map": {
     "center": "Leavenworth, Washington",
     "zoom": 16,
     "ll": [
      47.59691,
      -120.66108
     ]
    },
    "stops": [
     {
      "name": "Front Street",
      "q": "Front Street Leavenworth Washington",
      "note": "Pedestrianized main street, Bavarian-themed storefronts.",
      "ll": [
       47.5961,
       -120.66037
      ]
     },
     {
      "name": "9th Street / Alpen Strasse",
      "q": "Leavenworth Washington Bavarian",
      "note": "Core of the village's Bavarian architecture.",
      "ll": [
       47.59544,
       -120.66068
      ]
     },
     {
      "name": "Front Street Park",
      "q": "Front Street Leavenworth Washington",
      "note": "One of the two Oktoberfest beer-garden venues this weekend.",
      "ll": [
       47.5956,
       -120.66195
      ]
     }
    ]
   }
  ]
 },
 {
  "n": 9,
  "date": "2026-10-03",
  "dow": "Sat",
  "title": "Leavenworth to Mount Rainier, Paradise sunset",
  "region": "Washington",
  "hero": "Reflection Lakes Mount Rainier",
  "summary": "South over Blewett Pass and Chinook Pass, then an afternoon at Paradise ending with sunset at Reflection Lakes.",
  "drive": "Leavenworth to Paradise · ~3h driving · 105 mi",
  "stay": {
   "name": "Airbnb #7 — Mount Rainier area",
   "meta": "1 night",
   "link": "https://www.airbnb.com.sg/rooms/1540024658555591588"
  },
  "segments": [
   {
    "id": "d09s1",
    "name": "Segment 1 — Leavenworth to Chinook Pass via Blewett Pass",
    "blurb": "US-97 over Blewett Pass, then west on SR-410 toward the park.",
    "time": "8:00–10:30am",
    "map": {
     "from": "Leavenworth, Washington",
     "to": "Chinook Pass, Washington",
     "fromll": [
      47.59691,
      -120.66108
     ],
     "toll": [
      46.87214,
      -121.51569
     ]
    },
    "stops": [
     {
      "name": "Blewett Pass",
      "q": "Blewett Pass Washington",
      "note": "US-97 summit between the Wenatchee and Yakima valleys.",
      "ll": [
       47.33492,
       -120.57826
      ]
     },
     {
      "name": "Naches",
      "q": "Naches Washington",
      "note": "Small town where SR-410 branches off toward Chinook Pass.",
      "ll": [
       46.73096,
       -120.69952
      ]
     },
     {
      "name": "Chinook Pass Entrance Arch",
      "q": "Chinook Pass Washington",
      "note": "Log entrance arch marking the park boundary at the summit.",
      "ll": [
       46.87214,
       -121.51569
      ]
     }
    ]
   },
   {
    "id": "d09s2",
    "name": "Segment 2 — Tipsoo Lake and Chinook Pass",
    "blurb": "Short stop at the alpine lake; SR-410 can close for winter by late October.",
    "time": "10:30–11:30am",
    "map": {
     "center": "Tipsoo Lake, Washington",
     "zoom": 14,
     "ll": [
      46.86894,
      -121.51713
     ]
    },
    "stops": [
     {
      "name": "Tipsoo Lake",
      "q": "Tipsoo Lake Mount Rainier",
      "note": "Short loop trail; Rainier reflected in the lake when calm.",
      "ll": [
       46.86894,
       -121.51713
      ]
     },
     {
      "name": "Naches Peak Loop Trail",
      "q": "Naches Peak Loop Trail",
      "note": "3.2-mile loop from the pass, optional if time allows.",
      "ll": [
       46.87128,
       -121.5181
      ]
     },
     {
      "name": "Cayuse Pass",
      "q": "Cayuse Pass Washington",
      "note": "Junction where SR-410 meets SR-123 heading south into the park.",
      "ll": [
       46.86762,
       -121.54056
      ]
     }
    ]
   },
   {
    "id": "d09s3",
    "name": "Segment 3 — Paradise, Myrtle Falls, Nisqually Vista",
    "blurb": "The two short, well-known trails from the Paradise parking lot.",
    "time": "1:00–5:00pm",
    "map": {
     "center": "Paradise, Mount Rainier National Park",
     "zoom": 15,
     "ll": [
      46.85434,
      -121.70633
     ]
    },
    "stops": [
     {
      "name": "Henry M. Jackson Visitor Center",
      "q": "Henry M Jackson Visitor Center Paradise",
      "note": "Starting point for the Paradise trails."
     },
     {
      "name": "Myrtle Falls",
      "q": "Myrtle Falls Mount Rainier",
      "note": "0.8-mile round trip on the Skyline Trail; the park's most photographed falls.",
      "ll": [
       46.79137,
       -121.73249
      ]
     },
     {
      "name": "Nisqually Vista Trail",
      "q": "Nisqually Vista Trail Mount Rainier",
      "note": "1.2-mile loop over Nisqually Glacier and valley views.",
      "ll": [
       46.78739,
       -121.7454
      ]
     },
     {
      "name": "Skyline Trail",
      "q": "Skyline Trail Mount Rainier",
      "note": "Longer option climbing above Myrtle Falls toward Panorama Point.",
      "ll": [
       46.8016,
       -121.72225
      ]
     }
    ]
   },
   {
    "id": "d09s4",
    "name": "Segment 4 — Sunset at Reflection Lakes",
    "blurb": "Short drive from Paradise for the classic mountain-in-lake sunset shot.",
    "time": "6:00–7:30pm",
    "map": {
     "center": "Reflection Lakes, Mount Rainier National Park",
     "zoom": 15,
     "ll": null
    },
    "stops": [
     {
      "name": "Reflection Lakes",
      "q": "Reflection Lakes Mount Rainier",
      "note": "Pull-off on Stevens Canyon Road, a few minutes from Paradise.",
      "ll": [
       46.76958,
       -121.73021
      ]
     },
     {
      "name": "Louise Lake",
      "q": "Louise Lake Mount Rainier",
      "note": "Smaller lake just past Reflection Lakes, fewer crowds.",
      "ll": [
       46.77079,
       -121.7176
      ]
     },
     {
      "name": "Narada Falls",
      "q": "Stevens Canyon Road Mount Rainier",
      "note": "168-foot falls on the way back toward Paradise.",
      "ll": [
       46.77502,
       -121.74615
      ]
     }
    ]
   }
  ]
 },
 {
  "n": 10,
  "date": "2026-10-04",
  "dow": "Sun",
  "title": "Rainier Sunrise to Seattle, Road Trip's End",
  "region": "Washington",
  "hero": "Pike Place Market Seattle",
  "summary": "Sunrise at Rainier, then west to Seattle to return the car, say goodbye, and settle into Belltown.",
  "drive": "Paradise to Seattle-Tacoma Airport · 2h 15m · 94 mi",
  "stay": {
   "name": "Airbnb #8 — Belltown, Seattle",
   "meta": "1 night",
   "link": "https://www.airbnb.com.sg/rooms/986282080847684009"
  },
  "segments": [
   {
    "id": "d10s1",
    "name": "Segment 1 — Rainier sunrise, Reflection Lakes",
    "blurb": "Early light on the mountain before the long drive out.",
    "time": "6:00–7:30am",
    "map": {
     "center": "Reflection Lakes, Mount Rainier National Park",
     "zoom": 15,
     "ll": null
    },
    "stops": [
     {
      "name": "Reflection Lakes",
      "q": "Reflection Lakes Mount Rainier",
      "note": "Same pull-off as last night, best light at dawn.",
      "ll": [
       46.76958,
       -121.73021
      ]
     },
     {
      "name": "Henry M. Jackson Visitor Center",
      "q": "Henry M Jackson Visitor Center Paradise",
      "note": "Coffee and restrooms before the drive down."
     },
     {
      "name": "Narada Falls",
      "q": "Stevens Canyon Road Mount Rainier",
      "note": "Quick stop on the way down toward Longmire.",
      "ll": [
       46.77502,
       -121.74615
      ]
     }
    ]
   },
   {
    "id": "d10s2",
    "name": "Segment 2 — Drive to Seattle via Longmire",
    "blurb": "Down through the park's original headquarters and the small gateway towns.",
    "time": "8:00–10:30am",
    "map": {
     "from": "Paradise, Mount Rainier National Park",
     "to": "Seattle, Washington",
     "fromll": [
      46.85434,
      -121.70633
     ],
     "toll": [
      47.60383,
      -122.33006
     ]
    },
    "stops": [
     {
      "name": "Longmire",
      "q": "Longmire Mount Rainier",
      "note": "Historic park headquarters and the National Park Inn.",
      "ll": [
       46.74954,
       -121.81254
      ]
     },
     {
      "name": "Ashford",
      "q": "Ashford Washington",
      "note": "Small gateway town just outside the Nisqually entrance.",
      "ll": [
       46.75441,
       -122.01093
      ]
     },
     {
      "name": "Eatonville",
      "q": "Eatonville Washington",
      "note": "Town along SR-7 on the way north to I-5.",
      "ll": [
       46.86825,
       -122.27007
      ]
     }
    ]
   },
   {
    "id": "d10s3",
    "name": "Segment 3 — SEA airport, car return and goodbye",
    "blurb": "Rental car back at Sea-Tac; Kuek and Kim fly home at 7:50pm.",
    "time": "3:00–5:00pm",
    "map": {
     "center": "Seattle-Tacoma International Airport, Washington",
     "zoom": 14,
     "ll": [
      47.44757,
      -122.30802
     ]
    },
    "stops": [
     {
      "name": "Seattle-Tacoma International Airport",
      "q": "Seattle-Tacoma International Airport",
      "note": "Rental car return, then Kuek and Kim head to their 7:50pm flight.",
      "ll": [
       47.44757,
       -122.30802
      ]
     },
     {
      "name": "SEA Rental Car Facility",
      "q": "Seattle-Tacoma International Airport",
      "note": "Consolidated rental car return center, connected by shuttle.",
      "ll": [
       47.46138,
       -122.29309
      ]
     },
     {
      "name": "Link Light Rail, Airport Station",
      "q": "Sea-Tac Airport Link light rail station",
      "note": "Train option into downtown Seattle after the return."
     }
    ]
   },
   {
    "id": "d10s4",
    "name": "Segment 4 — First evening in Belltown",
    "blurb": "Just Jason and Alicia now; Pike Place is an 8–10 minute walk.",
    "time": "6:00–9:00pm",
    "map": {
     "center": "Belltown, Seattle, Washington",
     "zoom": 16,
     "ll": [
      47.61323,
      -122.34536
     ]
    },
    "stops": [
     {
      "name": "Belltown",
      "q": "Belltown Seattle",
      "note": "Dense residential neighborhood just north of downtown.",
      "ll": [
       47.61323,
       -122.34536
      ]
     },
     {
      "name": "Pike Place Market",
      "q": "Pike Place Market Seattle",
      "note": "8–10 minute walk south along 1st or Western Ave.",
      "ll": [
       47.6094,
       -122.34141
      ]
     },
     {
      "name": "Olympic Sculpture Park",
      "q": "Olympic Sculpture Park Seattle",
      "note": "Waterfront park a short walk west, open until dusk.",
      "ll": [
       47.61624,
       -122.35431
      ]
     }
    ]
   }
  ]
 },
 {
  "n": 11,
  "date": "2026-10-05",
  "dow": "Mon",
  "title": "Seattle on Foot to the Night Train",
  "region": "Seattle, Washington",
  "hero": "Pike Place Market Seattle",
  "summary": "A full Seattle day on foot from Belltown, then bags, bus to the station, and the 6pm train to Vancouver.",
  "stay": {
   "name": "Airbnb — Renfrew-Collingwood, East Vancouver",
   "meta": "night 1 of 2",
   "link": "https://www.airbnb.com.sg/rooms/780351322964363373"
  },
  "segments": [
   {
    "id": "d11s1",
    "name": "Segment 1 — Pike Place Market on foot",
    "blurb": "8-10 minute walk from the Belltown Airbnb.",
    "time": "8:30-11:00am",
    "map": {
     "center": "Pike Place Market, Seattle, WA",
     "zoom": 16,
     "ll": [
      47.6094,
      -122.34141
     ]
    },
    "stops": [
     {
      "name": "Pike Place Market",
      "q": "Pike Place Market Seattle",
      "note": "Original farmers market, opened 1907.",
      "ll": [
       47.6094,
       -122.34141
      ]
     },
     {
      "name": "Piroshky Piroshky",
      "q": "Pike Place Market Seattle",
      "note": "Russian bakery, savory piroshky.",
      "ll": [
       47.60993,
       -122.34246
      ]
     },
     {
      "name": "Le Panier",
      "q": "Pike Place Market Seattle",
      "note": "French bakery, almond croissant.",
      "ll": [
       47.60983,
       -122.34228
      ]
     },
     {
      "name": "Beecher's Handmade Cheese",
      "q": "Beecher's Handmade Cheese Pike Place",
      "note": "Mac and cheese, cheese made on-site.",
      "ll": [
       47.60958,
       -122.34182
      ]
     },
     {
      "name": "Gum Wall",
      "q": "Gum Wall Seattle",
      "note": "Post Alley wall covered in chewed gum.",
      "ll": [
       47.60842,
       -122.34038
      ]
     }
    ]
   },
   {
    "id": "d11s2",
    "name": "Segment 2 — Pioneer Square",
    "blurb": "About 25 minutes on foot from the market.",
    "time": "11:00am-1:00pm",
    "map": {
     "center": "Pioneer Square, Seattle, WA",
     "zoom": 16,
     "ll": [
      47.60272,
      -122.33135
     ]
    },
    "stops": [
     {
      "name": "Pioneer Square",
      "q": "Pioneer Square Seattle",
      "note": "Seattle's oldest neighborhood, Victorian-era buildings.",
      "ll": [
       47.60272,
       -122.33135
      ]
     },
     {
      "name": "Klondike Gold Rush National Historical Park",
      "q": "Klondike Gold Rush National Historical Park Seattle",
      "note": "Free museum on the 1897 gold rush.",
      "ll": [
       47.59938,
       -122.33186
      ]
     },
     {
      "name": "Salumi",
      "q": "Pioneer Square Seattle",
      "note": "Cash-only porchetta sandwich, lunch stop.",
      "ll": [
       47.59898,
       -122.33267
      ]
     }
    ]
   },
   {
    "id": "d11s3",
    "name": "Segment 3 — Seattle Center and Chihuly Garden and Glass",
    "blurb": "Back toward Belltown; collect bags after this.",
    "time": "2:00-4:30pm",
    "map": {
     "center": "Seattle Center, Seattle, WA",
     "zoom": 16,
     "ll": [
      47.62125,
      -122.34974
     ]
    },
    "stops": [
     {
      "name": "Chihuly Garden and Glass",
      "q": "Chihuly Garden and Glass",
      "note": "Dale Chihuly glass sculpture garden and galleries.",
      "ll": [
       47.62053,
       -122.35021
      ]
     },
     {
      "name": "Space Needle",
      "q": "Space Needle Seattle",
      "note": "1962 World's Fair observation tower.",
      "ll": [
       47.62051,
       -122.3493
      ]
     },
     {
      "name": "Belltown",
      "q": "Belltown Seattle",
      "note": "Walk back to the Airbnb, collect bags.",
      "ll": [
       47.61323,
       -122.34536
      ]
     }
    ]
   },
   {
    "id": "d11s4",
    "name": "Segment 4 — King Street Station and the 6:00 PM train",
    "blurb": "Bus or Uber to the station, then Amtrak north.",
    "time": "4:30-10:00pm",
    "map": {
     "from": "Belltown, Seattle, WA",
     "to": "King Street Station, Seattle, WA",
     "fromll": [
      47.61323,
      -122.34536
     ],
     "toll": [
      47.59845,
      -122.3299
     ]
    },
    "stops": [
     {
      "name": "Wall St & 5th Ave bus stop",
      "q": "Belltown Seattle",
      "note": "16 min bus to the station, every 15 min.",
      "ll": [
       47.60696,
       -122.33231
      ]
     },
     {
      "name": "King Street Station",
      "q": "King Street Station Seattle",
      "note": "Be there by 5:00pm; train 518 at 6:00pm.",
      "ll": [
       47.59845,
       -122.3299
      ]
     },
     {
      "name": "Pacific Central Station, Vancouver",
      "q": "Pacific Central Station Vancouver",
      "note": "Arrive 10:00pm; Canadian border check on arrival."
     }
    ]
   }
  ]
 },
 {
  "n": 12,
  "date": "2026-10-06",
  "dow": "Tue",
  "title": "Downtown Vancouver by SkyTrain",
  "region": "Vancouver, British Columbia",
  "hero": "Gastown steam clock",
  "summary": "A full downtown Vancouver day on the SkyTrain and on foot: Gastown, Chinatown, Stanley Park, English Bay.",
  "stay": {
   "name": "Airbnb — Renfrew-Collingwood, East Vancouver",
   "meta": "night 2 of 2, checks out tomorrow morning",
   "link": "https://www.airbnb.com.sg/rooms/780351322964363373"
  },
  "segments": [
   {
    "id": "d12s1",
    "name": "Segment 1 — Gastown and Chinatown",
    "blurb": "26 minutes from Renfrew-Collingwood on the Expo Line.",
    "time": "9:00am-1:00pm",
    "map": {
     "center": "Gastown, Vancouver, BC",
     "zoom": 15,
     "ll": [
      49.28366,
      -123.10624
     ]
    },
    "stops": [
     {
      "name": "Gastown Steam Clock",
      "q": "Gastown steam clock",
      "note": "Steam-powered clock, whistles every 15 minutes.",
      "ll": [
       49.28438,
       -123.10889
      ]
     },
     {
      "name": "Revolver Coffee",
      "q": "Gastown steam clock",
      "note": "Specialty coffee roaster in Gastown.",
      "ll": [
       49.28317,
       -123.10946
      ]
     },
     {
      "name": "Millennium Gate, Chinatown",
      "q": "Vancouver Chinatown",
      "note": "Historic gate, Canada's oldest Chinatown.",
      "ll": [
       49.28067,
       -123.10531
      ]
     },
     {
      "name": "Phnom Penh",
      "q": "Vancouver Chinatown",
      "note": "Cambodian-Vietnamese, butter beef and wings.",
      "ll": [
       49.27835,
       -123.0982
      ]
     },
     {
      "name": "Bao Bei",
      "q": "Vancouver Chinatown",
      "note": "Modern Chinese small plates.",
      "ll": [
       49.27962,
       -123.10057
      ]
     }
    ]
   },
   {
    "id": "d12s2",
    "name": "Segment 2 — Stanley Park seawall and Coal Harbour",
    "blurb": "Walk the waterfront from downtown into the park.",
    "time": "2:00-5:00pm",
    "map": {
     "center": "Stanley Park, Vancouver, BC",
     "zoom": 14,
     "ll": [
      49.30207,
      -123.14133
     ]
    },
    "stops": [
     {
      "name": "Coal Harbour",
      "q": "Coal Harbour Vancouver",
      "note": "Marina walk between downtown and Stanley Park.",
      "ll": [
       49.28944,
       -123.12492
      ]
     },
     {
      "name": "Stanley Park Seawall",
      "q": "Stanley Park seawall",
      "note": "8.8km waterfront path around the park.",
      "ll": [
       49.30586,
       -123.13286
      ]
     },
     {
      "name": "Brockton Point Totem Poles",
      "q": "Stanley Park seawall",
      "note": "Indigenous totem pole collection.",
      "ll": [
       49.29922,
       -123.12117
      ]
     }
    ]
   },
   {
    "id": "d12s3",
    "name": "Segment 3 — English Bay sunset and dinner",
    "blurb": "Sunset on the beach, then dinner downtown.",
    "time": "5:30-9:00pm",
    "map": {
     "center": "English Bay, Vancouver, BC",
     "zoom": 15,
     "ll": [
      49.28636,
      -123.16423
     ]
    },
    "stops": [
     {
      "name": "English Bay Beach",
      "q": "English Bay Vancouver",
      "note": "West End beach, sunset viewpoint.",
      "ll": [
       49.28648,
       -123.14371
      ]
     },
     {
      "name": "A-maze-ing Laughter sculptures",
      "q": "A-maze-ing Laughter Vancouver",
      "note": "14 bronze laughing figures by Yue Minjun.",
      "ll": [
       49.28759,
       -123.14194
      ]
     },
     {
      "name": "Joe Fortes",
      "q": "English Bay Vancouver",
      "note": "Classic Robson Street oyster bar.",
      "ll": [
       49.28493,
       -123.12461
      ]
     }
    ]
   }
  ]
 },
 {
  "n": 13,
  "date": "2026-10-07",
  "dow": "Wed",
  "title": "Sea-to-Sky to Whistler",
  "region": "British Columbia",
  "hero": "Sea to Sky Gondola Squamish",
  "summary": "Pick up the rental car in Vancouver, drive the Sea-to-Sky Highway, and spend the evening in Whistler village.",
  "drive": "Vancouver to Whistler · about 2h with stops · 120 km",
  "stay": {
   "name": "Pinnacle Hotel Whistler",
   "meta": "1 night"
  },
  "segments": [
   {
    "id": "d13s1",
    "name": "Segment 1 — Rental car pickup and Shannon Falls",
    "blurb": "All luggage in the car; no return to the Vancouver Airbnb.",
    "time": "8:30-9:30am",
    "map": {
     "from": "Vancouver, BC",
     "to": "Whistler, BC",
     "fromll": [
      49.26087,
      -123.11395
     ],
     "toll": [
      50.11719,
      -122.9543
     ]
    },
    "stops": [
     {
      "name": "Rental car pickup, downtown Vancouver",
      "q": "Vancouver skyline",
      "note": "8:30am pickup; check out of the Airbnb first.",
      "ll": [
       49.29149,
       -123.1299
      ]
     },
     {
      "name": "Shannon Falls Provincial Park",
      "q": "Shannon Falls Provincial Park",
      "note": "Free roadside waterfall stop, 15 minutes.",
      "ll": [
       49.6665,
       -123.16258
      ]
     },
     {
      "name": "Howe Sound",
      "q": "Howe Sound British Columbia",
      "note": "Scenic fjord views along Highway 99.",
      "ll": [
       49.34094,
       -123.26654
      ]
     }
    ]
   },
   {
    "id": "d13s2",
    "name": "Segment 2 — Sea to Sky Gondola, Squamish",
    "blurb": "CAD $69pp, summit boardwalk and suspension bridge.",
    "time": "9:30-11:30am",
    "map": {
     "center": "Sea to Sky Gondola, Squamish, BC",
     "zoom": 14,
     "ll": [
      49.67316,
      -123.14385
     ]
    },
    "stops": [
     {
      "name": "Sea to Sky Gondola",
      "q": "Sea to Sky Gondola Squamish",
      "note": "Open year-round, 10-minute ride to the summit.",
      "ll": [
       49.67316,
       -123.14385
      ]
     },
     {
      "name": "Sky Pilot Suspension Bridge",
      "q": "Sea to Sky Gondola Squamish",
      "note": "Suspension bridge at the gondola summit.",
      "ll": [
       49.67064,
       -123.1309
      ]
     },
     {
      "name": "Squamish viewpoint",
      "q": "Squamish BC",
      "note": "Views over Howe Sound and the Stawamus Chief.",
      "ll": [
       49.78483,
       -123.10882
      ]
     }
    ]
   },
   {
    "id": "d13s3",
    "name": "Segment 3 — Whistler village, spa, and dinner",
    "blurb": "No alpine gondola — Peak 2 Peak closed for maintenance.",
    "time": "12:30-9:00pm",
    "map": {
     "center": "Whistler Village, BC",
     "zoom": 15,
     "ll": [
      50.11466,
      -122.95598
     ]
    },
    "stops": [
     {
      "name": "Whistler Village",
      "q": "Whistler British Columbia village",
      "note": "Pedestrian village, lunch and shops.",
      "ll": [
       50.11466,
       -122.95598
      ]
     },
     {
      "name": "Scandinave Spa Whistler",
      "q": "Whistler British Columbia village",
      "note": "CAD $115pp, outdoor Nordic baths, silence policy.",
      "ll": [
       50.13604,
       -122.94794
      ]
     },
     {
      "name": "Whistler Train Wreck",
      "q": "Whistler Train Wreck",
      "note": "Suspension bridge trail to derailed boxcars.",
      "ll": [
       50.08156,
       -123.05557
      ]
     },
     {
      "name": "Lost Lake",
      "q": "Lost Lake Whistler",
      "note": "Easy lakeside walk, fall colours.",
      "ll": [
       50.12887,
       -122.93727
      ]
     },
     {
      "name": "Audain Art Museum",
      "q": "Whistler British Columbia village",
      "note": "Indigenous and BC art; wet-weather option.",
      "ll": [
       50.11822,
       -122.95277
      ]
     },
     {
      "name": "Pinnacle Hotel Whistler",
      "q": "Whistler British Columbia village",
      "note": "Village dinner, then overnight here.",
      "ll": [
       50.11744,
       -122.95743
      ]
     }
    ]
   }
  ]
 },
 {
  "n": 14,
  "date": "2026-10-08",
  "dow": "Thu",
  "title": "Whistler back to Vancouver, via Capilano",
  "region": "British Columbia",
  "hero": "Capilano Suspension Bridge",
  "summary": "Sea-to-Sky drive south from Whistler, a four-minute detour to Capilano, then hand back the car.",
  "drive": "Whistler to North Vancouver to Vancouver · 2h 00m · 126 km",
  "stay": {
   "name": "Airbnb — Mount Pleasant, Vancouver",
   "meta": "1 night",
   "link": "https://www.airbnb.com.sg/rooms/5471844"
  },
  "segments": [
   {
    "id": "d14s1",
    "name": "Segment 1 — Whistler village, last morning",
    "blurb": "Short walk before checkout, no gondola this late in the season.",
    "time": "8:00–9:30am",
    "map": {
     "center": "Whistler Village, BC",
     "zoom": 15,
     "ll": [
      50.11466,
      -122.95598
     ]
    },
    "stops": [
     {
      "name": "Whistler Village Stroll",
      "q": "Whistler Village",
      "note": "Pedestrian village, shops and coffee before departure.",
      "ll": [
       50.11616,
       -122.9552
      ]
     },
     {
      "name": "Lost Lake Trail",
      "q": "Lost Lake Whistler",
      "note": "Flat 15-min loop if there's time.",
      "ll": [
       50.12015,
       -122.94801
      ]
     }
    ]
   },
   {
    "id": "d14s2",
    "name": "Segment 2 — Sea-to-Sky Highway south",
    "blurb": "Scenic descent with optional falls, mine, and provincial park stops.",
    "time": "9:30–11:30am",
    "map": {
     "from": "Whistler, BC",
     "to": "Squamish, BC",
     "fromll": [
      50.11719,
      -122.9543
     ],
     "toll": [
      49.69807,
      -123.15586
     ]
    },
    "stops": [
     {
      "name": "Brandywine Falls",
      "q": "Brandywine Falls Provincial Park",
      "note": "70m waterfall, 5-min walk from parking.",
      "ll": [
       50.04688,
       -123.11781
      ]
     },
     {
      "name": "Murrin Provincial Park",
      "q": "Murrin Provincial Park",
      "note": "Small lake and cliffs, quick leg-stretch.",
      "ll": [
       49.64543,
       -123.20766
      ]
     },
     {
      "name": "Britannia Mine Museum",
      "q": "Britannia Mine Museum",
      "note": "Former copper mine, underground train tour.",
      "ll": [
       49.6231,
       -123.20396
      ]
     },
     {
      "name": "Porteau Cove",
      "q": "Porteau Cove Provincial Park",
      "note": "Howe Sound viewpoint, popular photo stop.",
      "ll": [
       49.55615,
       -123.23894
      ]
     }
    ]
   },
   {
    "id": "d14s3",
    "name": "Segment 3 — Capilano Suspension Bridge",
    "blurb": "Four-minute detour off the direct route into Vancouver.",
    "time": "12:00–1:30pm",
    "map": {
     "from": "Squamish, BC",
     "to": "Capilano Suspension Bridge Park, North Vancouver",
     "fromll": [
      49.69807,
      -123.15586
     ],
     "toll": [
      49.3427,
      -123.11605
     ]
    },
    "stops": [
     {
      "name": "Capilano Suspension Bridge",
      "q": "Capilano Suspension Bridge",
      "note": "137m suspension bridge over the canyon.",
      "ll": [
       49.3429,
       -123.1151
      ]
     },
     {
      "name": "Cleveland Dam",
      "q": "Cleveland Dam North Vancouver",
      "note": "Nearby viewpoint over Capilano Lake, free.",
      "ll": [
       49.36016,
       -123.11052
      ]
     }
    ]
   },
   {
    "id": "d14s4",
    "name": "Segment 4 — Return car, settle into Mount Pleasant",
    "blurb": "Drop the rental by 8pm, dinner near the Airbnb.",
    "time": "2:00–8:00pm",
    "map": {
     "from": "Capilano Suspension Bridge Park, North Vancouver",
     "to": "Mount Pleasant, Vancouver",
     "fromll": [
      49.3427,
      -123.11605
     ],
     "toll": [
      49.26333,
      -123.09659
     ]
    },
    "stops": [
     {
      "name": "Rental car return",
      "q": "Vancouver skyline",
      "note": "Must be back in Vancouver by 8:00pm — no car after this.",
      "ll": [
       49.02293,
       -122.38255
      ]
     },
     {
      "name": "Main Street, Mount Pleasant",
      "q": "Mount Pleasant Vancouver",
      "note": "Dinner along Main St, walk from the Airbnb.",
      "ll": [
       49.26168,
       -123.10131
      ]
     }
    ]
   }
  ]
 },
 {
  "n": 15,
  "date": "2026-10-09",
  "dow": "Fri",
  "title": "Last Vancouver day, transit only, train to Seattle",
  "region": "British Columbia",
  "hero": "Granville Island Public Market",
  "summary": "No car today — Granville Island by Aquabus, then Pacific Central for the 4:55pm train to Seattle.",
  "stay": {
   "name": "DoubleTree by Hilton Seattle Airport",
   "meta": "1 night, 24-hour airport shuttle"
  },
  "segments": [
   {
    "id": "d15s1",
    "name": "Segment 1 — Breakfast in Mount Pleasant",
    "blurb": "Coffee and breakfast on Main Street before heading out.",
    "time": "8:00–9:30am",
    "map": {
     "center": "Main Street, Mount Pleasant, Vancouver",
     "zoom": 16,
     "ll": [
      49.26168,
      -123.10131
     ]
    },
    "stops": [
     {
      "name": "Main Street cafes",
      "q": "Mount Pleasant Vancouver",
      "note": "Walk from the Airbnb, no transit needed.",
      "ll": [
       49.27315,
       -123.10044
      ]
     }
    ]
   },
   {
    "id": "d15s2",
    "name": "Segment 2 — Granville Island Public Market",
    "blurb": "Bus or walk to the water, then Aquabus across False Creek.",
    "time": "10:00am–12:30pm",
    "map": {
     "center": "Granville Island, Vancouver",
     "zoom": 16,
     "ll": [
      49.27071,
      -123.13429
     ]
    },
    "stops": [
     {
      "name": "Granville Island Public Market",
      "q": "Granville Island Public Market",
      "note": "Food stalls and produce, main draw.",
      "ll": [
       49.27031,
       -123.136
      ]
     },
     {
      "name": "Lee's Donuts",
      "q": "Granville Island Public Market",
      "note": "Classic donut stand inside the market.",
      "ll": [
       49.27225,
       -123.13525
      ]
     },
     {
      "name": "Oyama Sausage",
      "q": "Granville Island Public Market",
      "note": "Charcuterie counter, good for a light lunch.",
      "ll": [
       49.27242,
       -123.13541
      ]
     },
     {
      "name": "Granville Island Brewing",
      "q": "Granville Island Public Market",
      "note": "Tasting room a few steps from the market.",
      "ll": [
       49.27047,
       -123.13556
      ]
     }
    ]
   },
   {
    "id": "d15s3",
    "name": "Segment 3 — Yaletown or the Art Gallery",
    "blurb": "Pick one or two, kept light with the train ahead.",
    "time": "1:00–2:30pm",
    "map": {
     "center": "Yaletown, Vancouver",
     "zoom": 15,
     "ll": [
      49.27632,
      -123.12096
     ]
    },
    "stops": [
     {
      "name": "Yaletown waterfront",
      "q": "Yaletown Vancouver",
      "note": "Converted warehouse district, cafes and shops.",
      "ll": [
       49.27453,
       -123.12195
      ]
     },
     {
      "name": "Vancouver Art Gallery",
      "q": "Vancouver Art Gallery",
      "note": "Downtown museum, an indoor option if raining.",
      "ll": [
       49.28285,
       -123.12062
      ]
     }
    ]
   },
   {
    "id": "d15s4",
    "name": "Segment 4 — Pacific Central Station, train to Seattle",
    "blurb": "Missing this train wrecks tomorrow's flight home.",
    "time": "3:00–9:20pm",
    "map": {
     "from": "Mount Pleasant, Vancouver",
     "to": "Pacific Central Station, Vancouver",
     "fromll": [
      49.26333,
      -123.09659
     ],
     "toll": [
      49.27373,
      -123.0979
     ]
    },
    "stops": [
     {
      "name": "Bags collected, en route to station",
      "q": "Mount Pleasant Vancouver",
      "note": "24 min by transit from Mount Pleasant — leave with margin.",
      "ll": [
       49.26333,
       -123.09659
      ]
     },
     {
      "name": "Pacific Central Station — be there by 3:40pm",
      "q": "Pacific Central Station Vancouver",
      "note": "US immigration clears here before boarding. This is a hard deadline.",
      "ll": [
       49.27373,
       -123.0979
      ]
     },
     {
      "name": "Amtrak Train 519 departs 4:55pm",
      "q": "King Street Station Seattle",
      "note": "Arrives Seattle King Street Station about 9:20pm.",
      "ll": [
       49.2494,
       -123.11524
      ]
     }
    ]
   }
  ]
 },
 {
  "n": 16,
  "date": "2026-10-10",
  "dow": "Sat",
  "title": "Fly home from Seattle",
  "region": "Washington",
  "hero": "Seattle-Tacoma International Airport",
  "summary": "Short day — airport shuttle from the DoubleTree, international check-in, 10:15am flight.",
  "segments": [
   {
    "id": "d16s1",
    "name": "Segment 1 — Hotel shuttle to Sea-Tac",
    "blurb": "24-hour DoubleTree shuttle, roughly a 10-minute ride.",
    "time": "7:00am",
    "map": {
     "from": "DoubleTree by Hilton Seattle Airport",
     "to": "Seattle-Tacoma International Airport",
     "fromll": [
      47.43641,
      -122.29208
     ],
     "toll": [
      47.44757,
      -122.30802
     ]
    },
    "stops": [
     {
      "name": "DoubleTree shuttle pickup",
      "q": "Seattle-Tacoma International Airport",
      "note": "Catch the shuttle by about 7:00am.",
      "ll": [
       49.16166,
       -123.92453
      ]
     }
    ]
   },
   {
    "id": "d16s2",
    "name": "Segment 2 — International check-in and departure",
    "blurb": "Two hours ahead of an international flight, wheels up 10:15am.",
    "time": "7:30–10:15am",
    "map": {
     "center": "Seattle-Tacoma International Airport",
     "zoom": 15,
     "ll": [
      47.44757,
      -122.30802
     ]
    },
    "stops": [
     {
      "name": "International check-in",
      "q": "Seattle-Tacoma International Airport",
      "note": "At the terminal by about 7:30am, two hours before departure.",
      "ll": [
       47.43249,
       -122.29587
      ]
     },
     {
      "name": "Flight departs",
      "q": "Seattle-Tacoma International Airport",
      "note": "10:15am departure.",
      "ll": [
       47.51823,
       -122.29611
      ]
     }
    ]
   }
  ]
 }
];
const PACKING = {"rules":[{"leg":"Singapore → Seattle","allow":"2 checked pieces, 23kg each","note":"Long-haul allowance is generous — not the constraint on this trip."},{"leg":"Seattle → Salt Lake City (Alaska/Delta)","allow":"1 carry-on + 1 personal item free; 1st checked bag $45, 23kg/158cm limit","note":"This leg prices bag two — pack to one checked bag for the whole trip."},{"leg":"Amtrak Cascades, Seattle → Vancouver BC","allow":"1 personal item (14x11x7in, 25lb) + 2 bags (28x22x14in, 50lb each), per passenger","note":"Most generous leg by far — one checked plus one carry-on fits easily."},{"leg":"Amtrak Cascades, Vancouver BC → Seattle","allow":"Same as northbound; arrive 1 hour early for checked bags at Pacific Central","note":"Not the binding constraint — SEA→SLC flight is."}],"lists":{"man":{"title":"The Loadout","tagline":"One bag out, one bag back. Vented, not bundled — he runs hot.","sections":[{"name":"The Loadout","icon":"🎒","items":[{"t":"Duffel or wheeled checked bag, 23kg","bag":"check"},{"t":"Carry-on backpack","n":"Keep it near-empty outbound","bag":"carry"},{"t":"Packable daypack","n":"A few hours out of the car, not a hiking pack","bag":"check"},{"t":"Packing cubes ×3","bag":"check"},{"t":"Laundry bag","bag":"check"}]},{"name":"Layer System","icon":"🧥","items":[{"t":"Waterproof shell, pit zips","n":"Vents beat carrying a second fleece","bag":"wear"},{"t":"One light packable vest","n":"All the insulation you need — you'll overheat in the car","bag":"wear"},{"t":"Merino short-sleeve base layers ×2","n":"Build up from these, don't overpack heavy","bag":"check"},{"t":"Merino long-sleeve ×1","n":"Altitude mornings only","bag":"check"},{"t":"Breathable quick-dry hiking pants ×2","bag":"check"},{"t":"Jeans","bag":"wear"},{"t":"T-shirts ×4","n":"Strip to this in an overheated lodge","bag":"check"},{"t":"Wool socks ×5, underwear ×7","bag":"check"},{"t":"Thin beanie and gloves","n":"Minimal — you run hot, not bulky insulated kit","bag":"check"}]},{"name":"Out of the Car Kit","icon":"🚗","items":[{"t":"Waterproof walking shoes","n":"Boardwalks and short trails — no need for boots","bag":"wear"},{"t":"Swim trunks","n":"Scandinave spa, Whistler","bag":"check"},{"t":"Quick-dry towel","n":"Spa doesn't always supply one","bag":"check"},{"t":"Refillable water bottle","bag":"carry"},{"t":"Sunglasses and sunscreen","bag":"carry"},{"t":"Blister plasters, road snacks","bag":"check"}]},{"name":"Power & Cables","icon":"🔌","items":[{"t":"US/Canada plug adapter ×1","n":"SG uses UK-style plugs, NA doesn't","bag":"carry"},{"t":"Multi-port USB charger","bag":"carry"},{"t":"Phone + laptop cables","bag":"carry"},{"t":"Portable battery pack","n":"Long drives, spotty park charging","bag":"carry"},{"t":"Offline maps downloaded","n":"Cell coverage gaps in the parks","bag":"carry"}]},{"name":"Grooming Bench","icon":"🧴","items":[{"t":"Toiletry kit, travel-size","n":"Liquids under 100ml for carry-on","bag":"carry"},{"t":"Medication, original packaging","n":"Keep on person, not checked","bag":"carry"},{"t":"Razor and deodorant","bag":"check"},{"t":"Travel toothbrush/paste","bag":"carry"},{"t":"Pain reliever, nail clippers","bag":"check"}]},{"name":"Papers & Nice Dinner","icon":"📁","items":[{"t":"Passport","bag":"carry"},{"t":"ArriveCAN / Canada entry docs","bag":"carry"},{"t":"Travel insurance printout","bag":"carry"},{"t":"Driving licence, for both rental drivers","bag":"carry"},{"t":"Smart-casual shirt + chinos","n":"One nice dinner, Seattle or Vancouver","bag":"check"},{"t":"Dress shoes, packable","bag":"check"}]},{"name":"Bring It Home","icon":"📦","items":[{"t":"Empty carry-on space","n":"For gear, gifts, park merch","bag":"carry"},{"t":"Foldable extra tote","bag":"check"},{"t":"Small luggage scale","n":"Stay under 23kg coming home heavier","bag":"check"},{"t":"Vacuum-seal bags","n":"Compress dirty laundry on the way back","bag":"check"},{"t":"Buffer cash","n":"For a possible overweight-bag fee","bag":"carry"}]}]},"woman":{"title":"Aspiration: Cross-Country Explorer","tagline":"One suitcase, one carry-on, Warmth bar kept full at all costs.","sections":[{"name":"Build Mode: The Suitcase","icon":"🧳","items":[{"t":"Checked suitcase, 23kg","bag":"check"},{"t":"Carry-on bag","n":"Leave it almost empty going out","bag":"carry"},{"t":"Foldable tote for the spa/day trips","bag":"check"},{"t":"Packing cubes ×3","bag":"check"},{"t":"Laundry bag","bag":"check"}]},{"name":"Buy Mode: Layers","icon":"🧶","items":[{"t":"Waterproof rain shell","n":"Seattle/Vancouver near-certain rain","bag":"wear"},{"t":"Proper insulated jacket","n":"Real warmth for freezing mornings, not a throw-on","bag":"wear"},{"t":"Thermal base layers, top + bottom ×2","n":"Under everything on cold mornings","bag":"check"},{"t":"Warm cardigan or wrap","n":"Doubles for the AC and sitting between spa baths","bag":"check"},{"t":"Leggings ×2, jeans","bag":"check"},{"t":"Tops ×5","bag":"check"},{"t":"Thick wool socks ×5, underwear ×7","bag":"check"},{"t":"Warm hat, gloves, scarf/neck warmer","bag":"check"},{"t":"Hand warmers","n":"Logan Pass and Paradise viewpoints","bag":"check"}]},{"name":"Needs: Comfort & Style","icon":"💚","items":[{"t":"Waterproof walking shoes","n":"Boardwalks and short trails — not hiking boots","bag":"wear"},{"t":"Swimsuit + cover-up","n":"Scandinave spa, Whistler","bag":"check"},{"t":"Flip-flops for spa floors","bag":"check"},{"t":"Nice dinner outfit + flats","n":"One night out, Seattle or Vancouver","bag":"check"},{"t":"Comfy sneakers for driving days","bag":"wear"}]},{"name":"Aspiration: Scenic Wanderer","icon":"🏔️","items":[{"t":"Small daypack","n":"A few hours at a viewpoint, not a summit pack","bag":"check"},{"t":"Refillable water bottle","bag":"carry"},{"t":"Sunglasses and sunscreen","bag":"carry"},{"t":"Blister plasters, road snacks","bag":"check"},{"t":"Hair ties, sun hat","bag":"check"}]},{"name":"Plumbob Power (Electronics)","icon":"🔋","items":[{"t":"US/Canada plug adapter","n":"SG uses UK-style plugs, NA doesn't","bag":"carry"},{"t":"Charging cables + block","bag":"carry"},{"t":"Portable battery pack","n":"Long drives and the train","bag":"carry"},{"t":"Offline maps downloaded","n":"Park cell coverage is patchy","bag":"carry"},{"t":"Headphones for the Amtrak legs","bag":"carry"}]},{"name":"Needs: Hygiene & Docs","icon":"🧴","items":[{"t":"Toiletries + skincare, travel-size","n":"Liquids under 100ml in carry-on","bag":"carry"},{"t":"Medication, original packaging","n":"Always on person","bag":"carry"},{"t":"Makeup bag, minimal kit","bag":"check"},{"t":"Passport","bag":"carry"},{"t":"ArriveCAN / Canada entry docs","bag":"carry"},{"t":"Travel insurance printout","bag":"carry"},{"t":"Driving licence, for both rental drivers","bag":"carry"}]},{"name":"Motherlode (Bring It Home)","icon":"💰","items":[{"t":"Empty carry-on space","n":"For souvenirs and gear","bag":"carry"},{"t":"Spare foldable tote","bag":"check"},{"t":"Small luggage scale","n":"Stay under 23kg coming home heavier","bag":"check"},{"t":"Vacuum-seal bags","n":"Compress dirty laundry on the way back","bag":"check"},{"t":"Buffer cash","n":"For a possible overweight-bag fee","bag":"carry"}]}]}}};
const GAMES = {"games":[{"id":"contact","name":"Contact","players":"3+","driver":"yes","blurb":"Word game: race the Wordmaster to guess the secret word, letter by letter.","how":["The Wordmaster secretly picks a word and reveals only its first letter.","Everyone else thinks of a word starting with the known letters and gives the other guessers a cryptic clue, never spoken to the Wordmaster.","When you think you and another guesser have the same word, say \"Contact.\"","You both count down from three and say your word out loud together.","If your words match before the Wordmaster guesses it, the Wordmaster must reveal the next letter.","Guessers win by spelling out the whole word; the Wordmaster wins by guessing it first."],"content":{"words":["Apple","Anchor","Antelope","Airport","Acorn","Bicycle","Balloon","Bridge","Blanket","Bear","Candle","Camera","Canyon","Compass","Cabin","Diamond","Desert","Dolphin","Drum","Doorway","Eagle","Engine","Elevator","Envelope","Ember","Forest","Fountain","Feather","Flashlight","Fence","Glacier","Guitar","Garden","Ghost","Grape","Harbor","Hammer","Horizon","Hammock","Helmet","Igloo","Island","Icicle","Ink","Ivy","Jacket","Journey","Jungle","Jar","Jelly","Kettle","Kite","Kayak","Key","Kingdom","Lantern","Lighthouse","Ladder","Leaf","Lake","Mountain","Meadow","Mirror","Museum","Marble","Nest","Needle","Notebook","Nectar","Net","Ocean","Orchard","Owl","Oasis","Oar","Prairie","Pyramid","Pillow","Pine","Puzzle","Quilt","Quarry","Queen","River","Rocket","Ribbon","Raccoon","Ranch","Sunset","Saddle","Snowflake","Statue","Spider","Trail","Tunnel","Thunder","Teapot","Tent","Umbrella","Unicorn","Utensil","Uniform","Urn","Valley","Volcano","Violin","Vineyard","Vase","Waterfall","Wagon","Whistle","Wolf","Wheat","Xylophone","X-ray","Yarn","Yak","Yacht","Zebra","Zipper","Zeppelin"]}},{"id":"bingo","name":"Road Trip Bingo","players":"2–5","driver":"call","blurb":"Cross off things you spot on the route until you get bingo.","how":["Before you start driving, everyone grabs their own random card of squares.","Cross off a square the moment you spot it and call it out.","The driver can call out sightings but can't look at a card.","First to cross off a full row, column, or diagonal shouts \"Bingo!\"","Keep playing for a blackout if you want the whole card gone."],"content":{"squares":["Bison","Elk","Moose","Pronghorn","Bald eagle","Bighorn sheep","Black bear","Grizzly bear sign","Marmot","Chipmunk","Coyote","Osprey nest","Deer crossing sign","Geyser erupting","Steam vent","Hot spring","Old Faithful sign","Sulfur smell","Snow-capped peak","First snow at altitude","Aspen grove turning gold","Fall foliage","Douglas fir forest","Clear-cut hillside","Logging truck","Waterfall","Fire lookout tower","Wheat field","Hay bales","Grain elevator","Cattle ranch","Horse pasture","Potato field","Barn quilt square","Irrigation sprinkler","Runaway truck ramp","Elevation sign","Scenic viewpoint pullout","Historical marker","Rest area","RV with bike rack","Semi truck convoy","Cattle guard","Roadside fruit stand","Highway patrol car","Out-of-state license plate","Cyclist touring","Motorcycle group","Construction flagger","Small town water tower","Church steeple","Freight train","Grain silo","Tunnel","Bridge over river","Lake reflection","Rainbow","Snow flurries","Frost on windshield","Ranger station","National park entrance sign","Bear-proof food box","Campfire smoke","Ferry boat","Rain on windshield","Fog over water","Orca mural","Coffee stand","Salmon sign","Totem pole","Container ship","Canadian flag","British Columbia welcome sign","Metric speed sign","Border checkpoint","Ski gondola","Float plane","Espresso drive-thru"]}},{"id":"frenchtoast","name":"French Toast","players":"3+","driver":"yes","blurb":"Guess the secret item by chaining comparisons off French toast.","how":["One player secretly picks an everyday item and keeps it to themselves.","Everyone else asks, \"Is it more like [something] or French toast?\"","The secret-picker says which one it's more like, without explaining why.","The next question chains off that answer: \"Is it more like [that] or [something new]?\"","Keep chaining until someone guesses the exact item.","Whoever guesses right picks the next secret item."],"content":{"secrets":["Cupcake","Lighthouse","Umbrella","Bicycle","Pillow","Guitar","Sandwich","Ladder","Balloon","Backpack","Candle","Blanket","Pancake","Kettle","Mirror","Sailboat","Trumpet","Basket","Hammer","Scarf","Popcorn","Suitcase","Compass","Wheelbarrow","Jellyfish","Pretzel","Snowman","Cactus","Waffle","Anchor","Trampoline","Marshmallow","Skateboard","Teapot","Pineapple","Fireplace","Hammock","Bathtub","Doorknob","Windmill","Butterfly","Volcano","Igloo","Kite","Canoe","Chandelier","Cupboard","Pumpkin","Slipper","Toaster","Violin","Wagon","Beehive","Cabbage","Drawbridge","Envelope","Flashlight","Grapefruit","Harmonica","Icicle","Jackhammer","Kaleidoscope","Lantern","Mailbox","Nutcracker","Octopus","Parachute","Quilt","Raccoon","Scarecrow","Telescope","Unicycle","Vacuum","Xylophone","Yo-yo","Zipper","Blender","Corkscrew","Doormat","Eggplant","Flamingo","Gumball","Horseshoe","Inkwell","Jukebox","Lampshade","Mousetrap","Necklace","Overcoat","Pinwheel","Rocking chair","Sombrero","Thermos","Vending machine","Wristwatch","Accordion","Birdcage","Cheesecake","Dumpling","Escalator","Firefly","Gondola","Hourglass","Iceberg","Jigsaw puzzle","Kangaroo","Lava lamp","Noodle","Origami crane","Popsicle","Quicksand","Rollerblade","Snorkel","Trombone","Urn","Vineyard","Yarn ball","Zeppelin"]}},{"id":"wouldyourather","name":"Would You Rather","players":"2+","driver":"yes","blurb":"Pick a side in impossible, ridiculous, and thought-provoking dilemmas.","how":["Draw or read out one prompt with two options.","Everyone picks a side and says why, out loud.","No picking \"neither\" or \"both\" — you have to choose.","Argue it out if people disagree, then move to the next prompt."],"content":{"prompts":[{"a":"Only be able to whisper for the rest of your life.","b":"Only be able to shout for the rest of your life."},{"a":"Sneeze uncontrollably every time you see a mountain.","b":"Cry uncontrollably every time you see a lake."},{"a":"Find a spider the size of a dinner plate in the tent.","b":"Find a snake curled up in your sleeping bag."},{"a":"Drive the whole trip with the AC broken in 90-degree heat.","b":"Drive the whole trip with the heater stuck on full blast."},{"a":"Lose all your trip photos forever.","b":"Lose your phone for the rest of the trip."},{"a":"Eat only gas station food for the entire road trip.","b":"Eat only what you can forage for the entire road trip."},{"a":"Have to yodel every time you enter a national park.","b":"Have to narrate everything you do out loud like a nature documentary."},{"a":"Get a flat tire in the middle of nowhere at midnight.","b":"Run out of gas ten miles from the nearest station."},{"a":"Share a hotel room with a family of raccoons for one night.","b":"Share a campsite with a very curious bear for one night."},{"a":"Have to hike the rest of the trip in flip-flops.","b":"Have to hike the rest of the trip in ski boots."},{"a":"Your travel companion talks in their sleep, loudly, every night.","b":"Your travel companion sleepwalks and rearranges the tent every night."},{"a":"Be forced to sing every sentence you say for a full day.","b":"Be forced to speak only in movie quotes for a full day."},{"a":"Get stuck behind an RV going 35 for two hours.","b":"Get stuck in a construction zone with a 20-minute wait, twice."},{"a":"Have unlimited gas money but a car that breaks down weekly.","b":"Have a perfect car but a strict daily budget of $20."},{"a":"Wake up every morning to freezing tent condensation on your face.","b":"Wake up every morning to a wasp trapped in the tent."},{"a":"Never see a sunset again.","b":"Never see stars again."},{"a":"Be the one who always navigates and never gets to relax.","b":"Be the one who always drives and never gets to sightsee."},{"a":"Eat the last marshmallow that fell in the dirt.","b":"Drink the last bit of warm, gritty coffee."},{"a":"Get altitude sickness on the first big hike of the trip.","b":"Get carsick on every single mountain road for the whole trip."},{"a":"Live the rest of your life speaking only in questions.","b":"Live the rest of your life unable to ask any questions."},{"a":"Have every photo you take come out slightly blurry, forever.","b":"Have every photo you take have a stranger photobombing it."},{"a":"Be trapped in a car with a broken radio stuck on polka.","b":"Be trapped in a car with no radio and total silence."},{"a":"Wear the same socks for the entire ten-day trip.","b":"Wear the same t-shirt for the entire ten-day trip."},{"a":"Accidentally set off every bear spray canister in the car.","b":"Accidentally lock the keys in the car at a trailhead."},{"a":"Find out the campground shower only has ice-cold water.","b":"Find out the campground has no shower at all."},{"a":"Meet a moose on the trail and have to back away slowly.","b":"Meet a skunk on the trail and have to back away slowly."},{"a":"Have to translate every road sign into a poem before reading it.","b":"Have to explain every landmark using only hand gestures."},{"a":"Be the designated bug-swatter for the whole trip.","b":"Be the designated dish-washer at every campsite."},{"a":"Get a ticket for going five miles under the speed limit.","b":"Get lost for three hours because of one wrong turn."},{"a":"Have your snacks replaced with only unsalted rice cakes.","b":"Have your snacks replaced with only unsweetened black coffee."},{"a":"Wake up to find a llama has joined your campsite.","b":"Wake up to find your tent has floated into a lake."},{"a":"Never be able to complain about the weather again.","b":"Never be able to compliment the scenery again."},{"a":"Have to do a cartwheel at every scenic overlook.","b":"Have to do ten jumping jacks at every gas station."},{"a":"Drive through a rainstorm so loud you can't hear the radio.","b":"Drive through fog so thick you can't see the car ahead."},{"a":"Find a $100 bill on the trail.","b":"Find a perfect, undamaged fossil on the trail."},{"a":"Eat trail mix with only the raisins picked out.","b":"Eat trail mix with only the raisins left in."},{"a":"Be forced to nap through the most scenic drive of the trip.","b":"Be forced to stay awake through the most boring drive of the trip."},{"a":"Have a car that only plays one song, on repeat, forever.","b":"Have a car with no music at all, ever."},{"a":"Discover the hotel pool is freezing cold.","b":"Discover the hotel pool is closed for cleaning."},{"a":"Get a sunburn so bad it glows in the dark.","b":"Get so many mosquito bites you look polka-dotted."},{"a":"Hike an extra five miles because you took a wrong trail.","b":"Wait an extra five hours because the trailhead is full."},{"a":"Be the one who has to ask strangers to take the group photo.","b":"Be the one who always ends up cut out of the group photo."},{"a":"Watch the sunrise but miss the sunset every day.","b":"Watch the sunset but miss the sunrise every day."},{"a":"Have your GPS voice replaced with an extremely dramatic narrator.","b":"Have your GPS voice replaced with someone who whispers everything."},{"a":"Cross the border and get pulled aside for random extra questions.","b":"Cross the border and realize you forgot your passport at the hotel."},{"a":"Camp one night with zero cell signal and no map.","b":"Camp one night in a thunderstorm with a leaky tent."},{"a":"Only be able to eat food that is the color orange for a week.","b":"Only be able to eat food that is completely beige for a week."},{"a":"Have every wildlife sighting be from very, very far away.","b":"Have every wildlife sighting be uncomfortably, dangerously close."},{"a":"Be stuck with a car that smells like wet dog the whole trip.","b":"Be stuck with a car that smells like old gas station coffee the whole trip."},{"a":"Have to hand-crank the windows the entire trip.","b":"Have to navigate using only a paper map the entire trip."},{"a":"Be handed a kazoo and forced to play it at every stop.","b":"Be handed a whistle and forced to blow it at every stop."},{"a":"See the most beautiful waterfall of your life but can't take a photo.","b":"Take the most beautiful photo of your life but never see it again."},{"a":"Hike in complete silence for an entire trail.","b":"Hike while constantly making small talk with a stranger."},{"a":"Get a flat tire on the one day you're running late.","b":"Spill coffee all over yourself on the one day you're dressed nicely."},{"a":"Eat gas station sushi at 2am.","b":"Eat a mystery sandwich found in the cooler."},{"a":"Trade your pillow for a rock for the whole trip.","b":"Trade your sleeping bag for a beach towel for the whole trip."},{"a":"Be forced to hum the theme song of every place you visit.","b":"Be forced to rhyme every sentence for the rest of the day."},{"a":"Have the car break down in a beautiful, remote location.","b":"Have the car break down in a boring, crowded parking lot."},{"a":"Never get to see snow again in your life.","b":"Never get to see the ocean again in your life."},{"a":"Wear a full snowsuit in 80-degree weather for a day.","b":"Wear shorts and sandals in a snowstorm for a day."},{"a":"Be the one who has to set up the tent every single night.","b":"Be the one who has to take the tent down every single morning."},{"a":"Get every campsite you want but lose all your snacks.","b":"Keep all your snacks but get the worst campsite every night."},{"a":"Do the whole trip without a single hot shower.","b":"Do the whole trip without a single hot meal."},{"a":"Wake up and realize you slept through the entire drive through Yellowstone.","b":"Wake up and realize you slept through the entire drive along the coast."},{"a":"Be trapped in an elevator with a very talkative stranger for an hour.","b":"Be trapped in traffic with a very quiet stranger for an hour."},{"a":"Answer every question with a question for the whole day.","b":"Answer every question with a random fact for the whole day."},{"a":"Find out your hotel room is haunted but very quiet about it.","b":"Find out your hotel room is next to the world's loudest ice machine."},{"a":"Give up your phone for the entire trip.","b":"Give up your camera for the entire trip."},{"a":"Get to relive one perfect day of this trip forever.","b":"Get to skip straight to one day you're most excited for."},{"a":"Have unlimited time but a tiny budget for this trip.","b":"Have unlimited budget but only three days for this trip."},{"a":"Accidentally set your alarm for 3am and can't fall back asleep.","b":"Accidentally leave your charger at the last hotel and run out of battery."},{"a":"Be forced to narrate the whole trip as a nature documentary host.","b":"Be forced to narrate the whole trip as a true crime podcaster."},{"a":"Have every meal be delicious but ice cold.","b":"Have every meal be warm but bland."},{"a":"See a bear from the safety of the car.","b":"See a bear while standing outside the car, at a safe distance."},{"a":"Have this trip be one week longer.","b":"Have this trip be twice as luxurious but half as long."}]}}]};
