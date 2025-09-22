const playerStats = {
  "Shai Gilgeous-Alexander": {
    pos: "PG",
    stats: {
      "Points per Game": 32.7,
      "Rebounds per Game": 5.0,
      "Assists per Game": 6.4,
      "Field Goal %": 51.9,
      "Three Point %": 37.5,
      "Free Throw %": 89.8
    },
    scoring: {
      twoPoints: 697 * 2,   // 1394
      threePoints: 163 * 3, // 489
      ftPoints: 601,
      totalPoints: 2484
    },
    shooting: {}
  },
  "Anthony Edwards": {
    pos: "SG",
    stats: {
      "Points per Game": 27.6,
      "Rebounds per Game": 5.7,
      "Assists per Game": 4.5,
      "Field Goal %": 44.7,
      "Three Point %": 39.5,
      "Free Throw %": 83.7
    },
    scoring: {
      twoPoints: 401 * 2,   // 802
      threePoints: 320 * 3, // 960
      ftPoints: 415,
      totalPoints: 2177
    },
    shooting: {}
  },
  "Nikola Jokic": {
    pos: "C",
    stats: {
      "Points per Game": 29.6,
      "Rebounds per Game": 12.7,
      "Assists per Game": 10.2,
      "Field Goal %": 57.6,
      "Three Point %": 41.7,
      "Free Throw %": 80.0
    },
    scoring: {
      twoPoints: 648 * 2,   // 1296
      threePoints: 138 * 3, // 414
      ftPoints: 361,
      totalPoints: 2071
    },
    shooting: {}
  },
  "Giannis Antetokounmpo": {
    pos: "PF",
    stats: {
      "Points per Game": 30.4,
      "Rebounds per Game": 11.9,
      "Assists per Game": 6.5,
      "Field Goal %": 60.1,
      "Three Point %": 22.2,
      "Free Throw %": 61.7
    },
    scoring: {
      twoPoints: 779 * 2,  // 1558
      threePoints: 14 * 3, // 42
      ftPoints: 436,
      totalPoints: 2036
    },
    shooting: {}
  },
  "Jayson Tatum": {
    pos: "PF",
    stats: {
      "Points per Game": 26.8,
      "Rebounds per Game": 8.6,
      "Assists per Game": 6.0,
      "Field Goal %": 45.2,
      "Three Point %": 34.3,
      "Free Throw %": 81.4
    },
    scoring: {
      twoPoints: 412 * 2,  // 824
      threePoints: 250 * 3, // 750
      ftPoints: 358,
      totalPoints: 1932
    },
    shooting: {}
  },
  "Devin Booker": {
    pos: "SG",
    stats: {
      "Points per Game": 25.6,
      "Rebounds per Game": 4.1,
      "Assists per Game": 7.1,
      "Field Goal %": 46.1,
      "Three Point %": 33.2,
      "Free Throw %": 89.4
    },
    scoring: {
      twoPoints: 471 * 2,   // 942
      threePoints: 183 * 3, // 549
      ftPoints: 432,
      totalPoints: 1923
    },
    shooting: {}
  },
  "Trae Young": {
    pos: "PG",
    stats: {
      "Points per Game": 24.2,
      "Rebounds per Game": 3.1,
      "Assists per Game": 11.6,
      "Field Goal %": 41.1,
      "Three Point %": 34.0,
      "Free Throw %": 87.5
    },
    scoring: {
      twoPoints: 348 * 2,   // 696
      threePoints: 218 * 3, // 654
      ftPoints: 491,
      totalPoints: 1841
    },
    shooting: {}
  },
  "Tyler Herro": {
    pos: "SG",
    stats: {
      "Points per Game": 23.9,
      "Rebounds per Game": 5.2,
      "Assists per Game": 5.5,
      "Field Goal %": 47.2,
      "Three Point %": 37.5,
      "Free Throw %": 87.8
    },
    scoring: {
      twoPoints: 400 * 2,   // 800
      threePoints: 251 * 3, // 753
      ftPoints: 287,
      totalPoints: 1840
    },
    shooting: {}
  },
  "Cade Cunningham": {
    pos: "PG",
    stats: {
      "Points per Game": 26.1,
      "Rebounds per Game": 6.1,
      "Assists per Game": 9.1,
      "Field Goal %": 46.9,
      "Three Point %": 35.6,
      "Free Throw %": 84.6
    },
    scoring: {
      twoPoints: 535 * 2,   // 1070
      threePoints: 149 * 3, // 447
      ftPoints: 313,
      totalPoints: 1830
    },
    shooting: {}
  },
  "James Harden": {
    pos: "PG",
    stats: {
      "Points per Game": 22.8,
      "Rebounds per Game": 5.8,
      "Assists per Game": 8.7,
      "Field Goal %": 41.0,
      "Three Point %": 35.2,
      "Free Throw %": 87.4
    },
    scoring: {
      twoPoints: 296 * 2,   // 592
      threePoints: 235 * 3, // 705
      ftPoints: 505,
      totalPoints: 1802
    },
    shooting: {}
  },
  "Karl-Anthony Towns": {
    pos: "C",
    stats: {
      "Points per Game": 24.4,  // 1759 ÷ 72
      "Rebounds per Game": 12.8, // 920 ÷ 72
      "Assists per Game": 3.1,   // 222 ÷ 72
      "Field Goal %": 52.6,
      "Three Point %": 42.0,
      "Free Throw %": 82.9
    },
    scoring: {
      twoPoints: 497 * 2,   // 994
      threePoints: 142 * 3, // 426
      ftPoints: 339,
      totalPoints: 1759
    },
    shooting: {}
  },
  "Zach LaVine": {
    pos: "SG",
    stats: {
      "Points per Game": 23.3,  // 1724 ÷ 74
      "Rebounds per Game": 4.3, // 315 ÷ 74
      "Assists per Game": 4.2,  // 310 ÷ 74
      "Field Goal %": 51.1,
      "Three Point %": 44.6,
      "Free Throw %": 82.5
    },
    scoring: {
      twoPoints: 386 * 2,   // 772
      threePoints: 239 * 3, // 717
      ftPoints: 235,
      totalPoints: 1724
    },
    shooting: {}
  },
  "Jalen Green": {
    pos: "SG",
    stats: {
      "Points per Game": 21.0,  // 1723 ÷ 82
      "Rebounds per Game": 4.6, // 377 ÷ 82
      "Assists per Game": 3.4,  // 282 ÷ 82
      "Field Goal %": 42.3,
      "Three Point %": 35.4,
      "Free Throw %": 81.3
    },
    scoring: {
      twoPoints: 374 * 2,   // 748
      threePoints: 234 * 3, // 702
      ftPoints: 273,
      totalPoints: 1723
    },
    shooting: {}
  },
  "Stephen Curry": {
    pos: "PG",
    stats: {
      "Points per Game": 24.5,  // 1718 ÷ 70
      "Rebounds per Game": 4.4, // 310 ÷ 70
      "Assists per Game": 6.0,  // 421 ÷ 70
      "Field Goal %": 44.8,
      "Three Point %": 39.7,
      "Free Throw %": 93.3
    },
    scoring: {
      twoPoints: 253 * 2,   // 506
      threePoints: 311 * 3, // 933
      ftPoints: 279,
      totalPoints: 1718
    },
    shooting: {}
  },
  "DeMar DeRozan": {
    pos: "SF",
    stats: {
      "Points per Game": 22.2,  // 1710 ÷ 77
      "Rebounds per Game": 3.9, // 298 ÷ 77
      "Assists per Game": 4.4,  // 342 ÷ 77
      "Field Goal %": 47.7,
      "Three Point %": 32.8,
      "Free Throw %": 85.7
    },
    scoring: {
      twoPoints: 540 * 2,   // 1080
      threePoints: 84 * 3,  // 252
      ftPoints: 378,
      totalPoints: 1710
    },
    shooting: {}
  },
  "LeBron James": {
    pos: "SF",
    stats: {
      "Points per Game": 24.4,  // 1710 ÷ 70
      "Rebounds per Game": 7.8, // 546 ÷ 70
      "Assists per Game": 8.2,  // 575 ÷ 70
      "Field Goal %": 51.3,
      "Three Point %": 37.6,
      "Free Throw %": 78.2
    },
    scoring: {
      twoPoints: 502 * 2,   // 1004
      threePoints: 149 * 3, // 447
      ftPoints: 259,
      totalPoints: 1710
    },
    shooting: {}
  },
  "Donovan Mitchell": {
    pos: "SG",
    stats: {
      "Points per Game": 23.9,  // 1701 ÷ 71
      "Rebounds per Game": 4.5, // 322 ÷ 71
      "Assists per Game": 5.0,  // 354 ÷ 71
      "Field Goal %": 44.3,
      "Three Point %": 36.8,
      "Free Throw %": 82.3
    },
    scoring: {
      twoPoints: 352 * 2,   // 704
      threePoints: 233 * 3, // 699
      ftPoints: 298,
      totalPoints: 1701
    },
    shooting: {}
  },
  "Jalen Brunson": {
    pos: "PG",
    stats: {
      "Points per Game": 26.0,  // 1690 ÷ 65
      "Rebounds per Game": 2.9, // 187 ÷ 65
      "Assists per Game": 7.3,  // 475 ÷ 65
      "Field Goal %": 48.8,
      "Three Point %": 38.3,
      "Free Throw %": 82.1
    },
    scoring: {
      twoPoints: 433 * 2,   // 866
      threePoints: 152 * 3, // 456
      ftPoints: 368,
      totalPoints: 1690
    },
    shooting: {}
  },
  "Kevin Durant": {
    pos: "PF",
    stats: {
      "Points per Game": 26.6,  // 1647 ÷ 62
      "Rebounds per Game": 6.0, // 374 ÷ 62
      "Assists per Game": 4.2,  // 263 ÷ 62
      "Field Goal %": 52.7,
      "Three Point %": 43.0,
      "Free Throw %": 83.9
    },
    scoring: {
      twoPoints: 432 * 2,   // 864
      threePoints: 160 * 3, // 480
      ftPoints: 303,
      totalPoints: 1647
    },
    shooting: {}
  },
  "Jaren Jackson Jr.": {
    pos: "C",
    stats: {
      "Points per Game": 22.2,  // 1641 ÷ 74
      "Rebounds per Game": 5.6, // 417 ÷ 74
      "Assists per Game": 2.0,  // 148 ÷ 74
      "Field Goal %": 48.8,
      "Three Point %": 37.5,
      "Free Throw %": 78.1
    },
    scoring: {
      twoPoints: 446 * 2,   // 892
      threePoints: 146 * 3, // 438
      ftPoints: 311,
      totalPoints: 1641
    },
    shooting: {}
  },
  "Pascal Siakam": {
    pos: "PF",
    stats: {
      "Points per Game": 20.2,  // 1578 ÷ 78
      "Rebounds per Game": 6.9, // 540 ÷ 78
      "Assists per Game": 3.4,  // 263 ÷ 78
      "Field Goal %": 51.9,
      "Three Point %": 38.9,
      "Free Throw %": 73.4
    },
    scoring: {
      twoPoints: 487 * 2,   // 974
      threePoints: 126 * 3, // 378
      ftPoints: 226,
      totalPoints: 1578
    },
    shooting: {}
  },
  "Darius Garland": {
    pos: "PG",
    stats: {
      "Points per Game": 20.6,  // 1544 ÷ 75
      "Rebounds per Game": 2.9, // 214 ÷ 75
      "Assists per Game": 6.7,  // 506 ÷ 75
      "Field Goal %": 47.2,
      "Three Point %": 40.1,
      "Free Throw %": 87.8
    },
    scoring: {
      twoPoints: 342 * 2,   // 684
      threePoints: 212 * 3, // 636
      ftPoints: 224,
      totalPoints: 1544
    },
    shooting: {}
  },
  "Coby White": {
    pos: "SG",
    stats: {
      "Points per Game": 20.4,  // 1509 ÷ 74
      "Rebounds per Game": 3.7, // 273 ÷ 74
      "Assists per Game": 4.5,  // 330 ÷ 74
      "Field Goal %": 45.3,
      "Three Point %": 37.0,
      "Free Throw %": 90.2
    },
    scoring: {
      twoPoints: 292 * 2,   // 584
      threePoints: 216 * 3, // 648
      ftPoints: 277,
      totalPoints: 1509
    },
    shooting: {}
  },
    "Zion Williamson": {
    pos: "PF",
    stats: {
      "Points per Game": 24.6,   // 737 ÷ 30
      "Rebounds per Game": 7.2,  // 216 ÷ 30
      "Assists per Game": 5.3,   // 159 ÷ 30
      "Field Goal %": 56.7,
      "Three Point %": 23.1,
      "Free Throw %": 65.6
    },
    scoring: {
      twoPoints: 570,   // (288 - 3) * 2
      threePoints: 9,   // 3 * 3
      ftPoints: 158,
      totalPoints: 737
    },
    shooting: {}
  },
  "Jalen Williams": {
    pos: "SG",
    stats: {
      "Points per Game": 21.6,  // 1490 ÷ 69
      "Rebounds per Game": 5.4, // 369 ÷ 69
      "Assists per Game": 5.1,  // 354 ÷ 69
      "Field Goal %": 48.4,
      "Three Point %": 36.5,
      "Free Throw %": 78.9
    },
    scoring: {
      twoPoints: 441 * 2,   // 882
      threePoints: 124 * 3, // 372
      ftPoints: 236,
      totalPoints: 1490
    },
    shooting: {}
  },
  "Austin Reaves": {
    pos: "SG",
    stats: {
      "Points per Game": 20.2,  // 1475 ÷ 73
      "Rebounds per Game": 4.5, // 329 ÷ 73
      "Assists per Game": 5.8,  // 421 ÷ 73
      "Field Goal %": 46.0,
      "Three Point %": 37.7,
      "Free Throw %": 87.7
    },
    scoring: {
      twoPoints: 277 * 2,   // 554
      threePoints: 200 * 3, // 600
      ftPoints: 321,
      totalPoints: 1475
    },
    shooting: {}
  },
  "De'Aaron Fox": {
    pos: "PG",
    stats: {
      "Points per Game": 23.5,  // 1459 ÷ 62
      "Rebounds per Game": 4.8, // 298 ÷ 62
      "Assists per Game": 6.3,  // 392 ÷ 62
      "Field Goal %": 46.3,
      "Three Point %": 31.0,
      "Free Throw %": 82.7
    },
    scoring: {
      twoPoints: 421 * 2,   // 842
      threePoints: 118 * 3, // 354
      ftPoints: 263,
      totalPoints: 1459
    },
    shooting: {}
  },
  "Alperen Şengün": {
    pos: "C",
    stats: {
      "Points per Game": 19.1,  // 1451 ÷ 76
      "Rebounds per Game": 10.3,// 786 ÷ 76
      "Assists per Game": 4.9,  // 372 ÷ 76
      "Field Goal %": 49.6,
      "Three Point %": 23.3,
      "Free Throw %": 69.2
    },
    scoring: {
      twoPoints: 546 * 2,   // 1092
      threePoints: 21 * 3,  // 63
      ftPoints: 296,
      totalPoints: 1451
    },
    shooting: {}
  },
  "Franz Wagner": {
    pos: "SF",
    stats: {
      "Points per Game": 24.2,  // 1449 ÷ 60
      "Rebounds per Game": 5.7, // 342 ÷ 60
      "Assists per Game": 4.7,  // 284 ÷ 60
      "Field Goal %": 46.3,
      "Three Point %": 29.5,
      "Free Throw %": 87.1
    },
    scoring: {
      twoPoints: 433 * 2,   // 866
      threePoints: 104 * 3, // 312
      ftPoints: 271,
      totalPoints: 1449
    },
    shooting: {}
  },
  "Damian Lillard": {
    pos: "PG",
    stats: {
      "Points per Game": 24.9,  // 1447 ÷ 58
      "Rebounds per Game": 4.7, // 272 ÷ 58
      "Assists per Game": 7.1,  // 410 ÷ 58
      "Field Goal %": 44.8,
      "Three Point %": 37.6,
      "Free Throw %": 92.1
    },
    scoring: {
      twoPoints: 247 * 2,   // 494
      threePoints: 197 * 3, // 591
      ftPoints: 362,
      totalPoints: 1447
    },
    shooting: {}
  },
  "Mikal Bridges": {
    pos: "SF",
    stats: {
      "Points per Game": 17.6,  // 1444 ÷ 82
      "Rebounds per Game": 3.2, // 259 ÷ 82
      "Assists per Game": 3.7,  // 306 ÷ 82
      "Field Goal %": 50.0,
      "Three Point %": 35.4,
      "Free Throw %": 81.4
    },
    scoring: {
      twoPoints: 428 * 2,   // 856
      threePoints: 164 * 3, // 492
      ftPoints: 96,
      totalPoints: 1444
    },
    shooting: {}
  },
    "Jamal Murray": {
    pos: "PG",
    stats: {
      "Points per Game": 21.4,  // 1436 ÷ 67
      "Rebounds per Game": 3.9, // 261 ÷ 67
      "Assists per Game": 6.0,  // 403 ÷ 67
      "Field Goal %": 47.4,
      "Three Point %": 39.3,
      "Free Throw %": 88.6
    },
    scoring: {
      twoPoints: 375 * 2,   // 750
      threePoints: 156 * 3, // 468
      ftPoints: 218,
      totalPoints: 1436
    },
    shooting: {}
  },
  "Bam Adebayo": {
    pos: "C",
    stats: {
      "Points per Game": 18.1,  // 1410 ÷ 78
      "Rebounds per Game": 9.6, // 749 ÷ 78
      "Assists per Game": 4.3,  // 337 ÷ 78
      "Field Goal %": 48.5,
      "Three Point %": 35.7,
      "Free Throw %": 76.5
    },
    scoring: {
      twoPoints: 461 * 2,   // 922
      threePoints: 79 * 3,  // 237
      ftPoints: 251,
      totalPoints: 1410
    },
    shooting: {}
  },
  "Luka Doncic": {
    pos: "PG",
    stats: {
      "Points per Game": 28.2,  // 1408 ÷ 50
      "Rebounds per Game": 8.2, // 409 ÷ 50
      "Assists per Game": 7.7,  // 383 ÷ 50
      "Field Goal %": 45.0,
      "Three Point %": 36.8,
      "Free Throw %": 78.2
    },
    scoring: {
      twoPoints: 284 * 2,   // 568
      threePoints: 177 * 3, // 531
      ftPoints: 309,
      totalPoints: 1408
    },
    shooting: {}
  },
  "Jaylen Brown": {
    pos: "SF",
    stats: {
      "Points per Game": 22.2,  // 1398 ÷ 63
      "Rebounds per Game": 5.8, // 368 ÷ 63
      "Assists per Game": 4.5,  // 286 ÷ 63
      "Field Goal %": 46.3,
      "Three Point %": 32.4,
      "Free Throw %": 76.4
    },
    scoring: {
      twoPoints: 402 * 2,   // 804
      threePoints: 116 * 3, // 348
      ftPoints: 246,
      totalPoints: 1398
    },
    shooting: {}
  },
  "Michael Porter Jr.": {
    pos: "SF",
    stats: {
      "Points per Game": 18.1,  // 1398 ÷ 77
      "Rebounds per Game": 7.0, // 540 ÷ 77
      "Assists per Game": 2.1,  // 165 ÷ 77
      "Field Goal %": 50.4,
      "Three Point %": 39.5,
      "Free Throw %": 76.8
    },
    scoring: {
      twoPoints: 335 * 2,   // 670
      threePoints: 193 * 3, // 579
      ftPoints: 149,
      totalPoints: 1398
    },
    shooting: {}
  },
  "Jordan Poole": {
    pos: "SG",
    stats: {
      "Points per Game": 20.5,  // 1391 ÷ 68
      "Rebounds per Game": 3.0, // 203 ÷ 68
      "Assists per Game": 4.5,  // 303 ÷ 68
      "Field Goal %": 43.2,
      "Three Point %": 37.8,
      "Free Throw %": 88.3
    },
    scoring: {
      twoPoints: 222 * 2,   // 444
      threePoints: 235 * 3, // 705
      ftPoints: 242,
      totalPoints: 1391
    },
    shooting: {}
  },
  "Tyrese Maxey": {
    pos: "PG",
    stats: {
      "Points per Game": 26.3,  // 1369 ÷ 52
      "Rebounds per Game": 3.3, // 174 ÷ 52
      "Assists per Game": 6.1,  // 317 ÷ 52
      "Field Goal %": 43.7,
      "Three Point %": 33.7,
      "Free Throw %": 87.9
    },
    scoring: {
      twoPoints: 316 * 2,   // 632
      threePoints: 161 * 3, // 483
      ftPoints: 254,
      totalPoints: 1369
    },
    shooting: {}
  },
  "Tyrese Haliburton": {
    pos: "PG",
    stats: {
      "Points per Game": 18.6,  // 1359 ÷ 73
      "Rebounds per Game": 3.5, // 258 ÷ 73
      "Assists per Game": 9.2,  // 673 ÷ 73
      "Field Goal %": 47.3,
      "Three Point %": 38.8,
      "Free Throw %": 85.1
    },
    scoring: {
      twoPoints: 258 * 2,   // 516
      threePoints: 218 * 3, // 654
      ftPoints: 189,
      totalPoints: 1359
    },
    shooting: {}
  },
  "Nikola Vučević": {
    pos: "C",
    stats: {
      "Points per Game": 18.5,  // 1349 ÷ 73
      "Rebounds per Game": 10.1,// 735 ÷ 73
      "Assists per Game": 3.5,  // 256 ÷ 73
      "Field Goal %": 53.0,
      "Three Point %": 40.2,
      "Free Throw %": 80.5
    },
    scoring: {
      twoPoints: 421 * 2,   // 842
      threePoints: 129 * 3, // 387
      ftPoints: 120,
      totalPoints: 1349
    },
    shooting: {}
  },
  "Anfernee Simons": {
    pos: "SG",
    stats: {
      "Points per Game": 19.3,  // 1348 ÷ 70
      "Rebounds per Game": 2.7, // 189 ÷ 70
      "Assists per Game": 4.8,  // 337 ÷ 70
      "Field Goal %": 42.6,
      "Three Point %": 36.3,
      "Free Throw %": 90.2
    },
    scoring: {
      twoPoints: 264 * 2,   // 528
      threePoints: 215 * 3, // 645
      ftPoints: 175,
      totalPoints: 1348
    },
    shooting: {}
  },
    "Ivica Zubac": {
    pos: "C",
    stats: {
      "Points per Game": 16.8,  // 1340 ÷ 80
      "Rebounds per Game": 12.6,// 1010 ÷ 80
      "Assists per Game": 2.7,  // 214 ÷ 80
      "Field Goal %": 62.8,
      "Three Point %": 0.0,
      "Free Throw %": 66.1
    },
    scoring: {
      twoPoints: 592 * 2,  // 1184
      threePoints: 0,      // none made
      ftPoints: 156,
      totalPoints: 1340
    },
    shooting: {}
  },
  "Domantas Sabonis": {
    pos: "C",
    stats: {
      "Points per Game": 19.1,  // 1337 ÷ 70
      "Rebounds per Game": 13.9,// 972 ÷ 70
      "Assists per Game": 6.0,  // 423 ÷ 70
      "Field Goal %": 59.0,
      "Three Point %": 41.7,
      "Free Throw %": 75.4
    },
    scoring: {
      twoPoints: 462 * 2,  // 924
      threePoints: 65 * 3, // 195
      ftPoints: 218,
      totalPoints: 1337
    },
    shooting: {}
  },
  "Malik Beasley": {
    pos: "SG",
    stats: {
      "Points per Game": 16.3,  // 1336 ÷ 82
      "Rebounds per Game": 2.6, // 214 ÷ 82
      "Assists per Game": 1.7,  // 139 ÷ 82
      "Field Goal %": 43.0,
      "Three Point %": 41.6,
      "Free Throw %": 67.9
    },
    scoring: {
      twoPoints: 142 * 2,  // 284
      threePoints: 319 * 3,// 957
      ftPoints: 95,
      totalPoints: 1336
    },
    shooting: {}
  },
  "Shaedon Sharpe": {
    pos: "SG",
    stats: {
      "Points per Game": 18.5,  // 1335 ÷ 72
      "Rebounds per Game": 4.5, // 324 ÷ 72
      "Assists per Game": 2.8,  // 198 ÷ 72
      "Field Goal %": 45.2,
      "Three Point %": 31.1,
      "Free Throw %": 78.5
    },
    scoring: {
      twoPoints: 352 * 2,  // 704
      threePoints: 147 * 3,// 441
      ftPoints: 190,
      totalPoints: 1335
    },
    shooting: {}
  },
  "OG Anunoby": {
    pos: "PF",
    stats: {
      "Points per Game": 18.0,  // 1332 ÷ 74
      "Rebounds per Game": 4.8, // 358 ÷ 74
      "Assists per Game": 2.2,  // 164 ÷ 74
      "Field Goal %": 47.6,
      "Three Point %": 37.2,
      "Free Throw %": 81.0
    },
    scoring: {
      twoPoints: 318 * 2,  // 636
      threePoints: 171 * 3,// 513
      ftPoints: 183,
      totalPoints: 1332
    },
    shooting: {}
  },
  "Desmond Bane": {
    pos: "SG",
    stats: {
      "Points per Game": 19.2,  // 1327 ÷ 69
      "Rebounds per Game": 6.1, // 418 ÷ 69
      "Assists per Game": 5.4,  // 369 ÷ 69
      "Field Goal %": 48.4,
      "Three Point %": 39.2,
      "Free Throw %": 89.4
    },
    scoring: {
      twoPoints: 329 * 2,  // 658
      threePoints: 164 * 3,// 492
      ftPoints: 177,
      totalPoints: 1327
    },
    shooting: {}
  },
  "Evan Mobley": {
    pos: "PF",
    stats: {
      "Points per Game": 18.5,  // 1316 ÷ 71
      "Rebounds per Game": 9.3, // 659 ÷ 71
      "Assists per Game": 3.2,  // 226 ÷ 71
      "Field Goal %": 55.7,
      "Three Point %": 37.0,
      "Free Throw %": 72.5
    },
    scoring: {
      twoPoints: 420 * 2,  // 840
      threePoints: 85 * 3, // 255
      ftPoints: 221,
      totalPoints: 1316
    },
    shooting: {}
  },
  "Norman Powell": {
    pos: "SG",
    stats: {
      "Points per Game": 21.8,  // 1306 ÷ 60
      "Rebounds per Game": 3.2, // 190 ÷ 60
      "Assists per Game": 2.1,  // 125 ÷ 60
      "Field Goal %": 48.4,
      "Three Point %": 41.8,
      "Free Throw %": 80.4
    },
    scoring: {
      twoPoints: 278 * 2,  // 556
      threePoints: 179 * 3,// 537
      ftPoints: 213,
      totalPoints: 1306
    },
    shooting: {}
  },
  "Miles Bridges": {
    pos: "PF",
    stats: {
      "Points per Game": 20.3,  // 1300 ÷ 64
      "Rebounds per Game": 7.5, // 481 ÷ 64
      "Assists per Game": 3.9,  // 248 ÷ 64
      "Field Goal %": 43.1,
      "Three Point %": 31.3,
      "Free Throw %": 87.0
    },
    scoring: {
      twoPoints: 328 * 2,  // 656
      threePoints: 141 * 3,// 423
      ftPoints: 221,
      totalPoints: 1300
    },
    shooting: {}
  },
  "Julius Randle": {
    pos: "PF",
    stats: {
      "Points per Game": 18.7,  // 1288 ÷ 69
      "Rebounds per Game": 7.1, // 487 ÷ 69
      "Assists per Game": 4.7,  // 323 ÷ 69
      "Field Goal %": 48.5,
      "Three Point %": 34.4,
      "Free Throw %": 80.6
    },
    scoring: {
      twoPoints: 347 * 2,  // 694
      threePoints: 108 * 3,// 324
      ftPoints: 270,
      totalPoints: 1288
    },
    shooting: {}
  },
    "Anthony Davis": {
    pos: "C",
    stats: {
      "Points per Game": 24.7,  // 1261 ÷ 51
      "Rebounds per Game": 11.6,// 590 ÷ 51
      "Assists per Game": 3.5,  // 181 ÷ 51
      "Field Goal %": 51.6,
      "Three Point %": 28.2,
      "Free Throw %": 77.5
    },
    scoring: {
      twoPoints: 435 * 2,  // 870
      threePoints: 35 * 3, // 105
      ftPoints: 286,
      totalPoints: 1261
    },
    shooting: {}
  },
  "Scottie Barnes": {
    pos: "PF",
    stats: {
      "Points per Game": 19.3,  // 1252 ÷ 65
      "Rebounds per Game": 7.7, // 502 ÷ 65
      "Assists per Game": 5.8,  // 378 ÷ 65
      "Field Goal %": 44.6,
      "Three Point %": 27.1,
      "Free Throw %": 75.5
    },
    scoring: {
      twoPoints: 398 * 2,  // 796
      threePoints: 76 * 3, // 228
      ftPoints: 228,
      totalPoints: 1252
    },
    shooting: {}
  },
  "Derrick White": {
    pos: "SG",
    stats: {
      "Points per Game": 16.4,  // 1248 ÷ 76
      "Rebounds per Game": 4.5, // 341 ÷ 76
      "Assists per Game": 4.7,  // 361 ÷ 76
      "Field Goal %": 44.2,
      "Three Point %": 38.4,
      "Free Throw %": 83.9
    },
    scoring: {
      twoPoints: 159 * 2,  // 318
      threePoints: 265 * 3,// 795
      ftPoints: 135,
      totalPoints: 1248
    },
    shooting: {}
  },
  "Kyrie Irving": {
    pos: "SG",
    stats: {
      "Points per Game": 24.7,  // 1234 ÷ 50
      "Rebounds per Game": 4.8, // 240 ÷ 50
      "Assists per Game": 4.6,  // 231 ÷ 50
      "Field Goal %": 47.3,
      "Three Point %": 40.1,
      "Free Throw %": 91.6
    },
    scoring: {
      twoPoints: 303 * 2,  // 606
      threePoints: 144 * 3,// 432
      ftPoints: 196,
      totalPoints: 1234
    },
    shooting: {}
  },
  "RJ Barrett": {
    pos: "SF",
    stats: {
      "Points per Game": 21.1,  // 1223 ÷ 58
      "Rebounds per Game": 6.3, // 366 ÷ 58
      "Assists per Game": 5.4,  // 314 ÷ 58
      "Field Goal %": 46.8,
      "Three Point %": 35.0,
      "Free Throw %": 63.0
    },
    scoring: {
      twoPoints: 353 * 2,  // 706
      threePoints: 107 * 3,// 321
      ftPoints: 196,
      totalPoints: 1223
    },
    shooting: {}
  },
  "Deni Avdija": {
    pos: "SF",
    stats: {
      "Points per Game": 16.9,  // 1219 ÷ 72
      "Rebounds per Game": 7.3, // 522 ÷ 72
      "Assists per Game": 3.9,  // 281 ÷ 72
      "Field Goal %": 47.6,
      "Three Point %": 36.5,
      "Free Throw %": 78.0
    },
    scoring: {
      twoPoints: 277 * 2,  // 554
      threePoints: 125 * 3,// 375
      ftPoints: 290,
      totalPoints: 1219
    },
    shooting: {}
  },
  "Christian Braun": {
    pos: "SG",
    stats: {
      "Points per Game": 15.4,  // 1218 ÷ 79
      "Rebounds per Game": 5.2, // 410 ÷ 79
      "Assists per Game": 2.6,  // 205 ÷ 79
      "Field Goal %": 58.0,
      "Three Point %": 39.7,
      "Free Throw %": 82.7
    },
    scoring: {
      twoPoints: 387 * 2,  // 774
      threePoints: 89 * 3, // 267
      ftPoints: 177,
      totalPoints: 1218
    },
    shooting: {}
  },
  "Paolo Banchero": {
    pos: "PF",
    stats: {
      "Points per Game": 25.9,  // 1191 ÷ 46
      "Rebounds per Game": 7.5, // 345 ÷ 46
      "Assists per Game": 4.8,  // 219 ÷ 46
      "Field Goal %": 45.2,
      "Three Point %": 32.0,
      "Free Throw %": 72.7
    },
    scoring: {
      twoPoints: 325 * 2,  // 650
      threePoints: 87 * 3, // 261
      ftPoints: 280,
      totalPoints: 1191
    },
    shooting: {}
  },
  "Stephon Castle": {
    pos: "PG",
    stats: {
      "Points per Game": 14.7,  // 1190 ÷ 81
      "Rebounds per Game": 3.7, // 297 ÷ 81
      "Assists per Game": 4.1,  // 332 ÷ 81
      "Field Goal %": 42.8,
      "Three Point %": 28.5,
      "Free Throw %": 72.4
    },
    scoring: {
      twoPoints: 328 * 2,  // 656
      threePoints: 95 * 3, // 285
      ftPoints: 249,
      totalPoints: 1190
    },
    shooting: {}
  },
  "LaMelo Ball": {
    pos: "PG",
    stats: {
      "Points per Game": 25.2,  // 1184 ÷ 47
      "Rebounds per Game": 4.9, // 232 ÷ 47
      "Assists per Game": 7.4,  // 346 ÷ 47
      "Field Goal %": 40.5,
      "Three Point %": 33.9,
      "Free Throw %": 84.3
    },
    scoring: {
      twoPoints: 227 * 2,  // 454
      threePoints: 179 * 3,// 537
      ftPoints: 193,
      totalPoints: 1184
    },
    shooting: {}
  },
   "CJ McCollum": {
    pos: "PG",
    stats: {
      "Points per Game": 21.1,  // 1183 ÷ 56
      "Rebounds per Game": 3.8, // 212 ÷ 56
      "Assists per Game": 4.1,  // 227 ÷ 56
      "Field Goal %": 44.4,
      "Three Point %": 37.3,
      "Free Throw %": 71.7
    },
    scoring: {
      twoPoints: 273 * 2,  // 546
      threePoints: 171 * 3,// 513
      ftPoints: 124,
      totalPoints: 1183
    },
    shooting: {}
  },
  "Ja Morant": {
    pos: "PG",
    stats: {
      "Points per Game": 23.2,  // 1159 ÷ 50
      "Rebounds per Game": 4.1, // 205 ÷ 50
      "Assists per Game": 7.3,  // 364 ÷ 50
      "Field Goal %": 45.4,
      "Three Point %": 30.9,
      "Free Throw %": 82.4
    },
    scoring: {
      twoPoints: 316 * 2,  // 632
      threePoints: 88 * 3, // 264
      ftPoints: 263,
      totalPoints: 1159
    },
    shooting: {}
  },
  "Collin Sexton": {
    pos: "SG",
    stats: {
      "Points per Game": 18.4,  // 1159 ÷ 63
      "Rebounds per Game": 2.7, // 171 ÷ 63
      "Assists per Game": 4.2,  // 264 ÷ 63
      "Field Goal %": 48.0,
      "Three Point %": 40.6,
      "Free Throw %": 86.5
    },
    scoring: {
      twoPoints: 306 * 2,  // 612
      threePoints: 110 * 3,// 330
      ftPoints: 217,
      totalPoints: 1159
    },
    shooting: {}
  },
  "Bennedict Mathurin": {
    pos: "SF",
    stats: {
      "Points per Game": 16.1,  // 1156 ÷ 72
      "Rebounds per Game": 5.3, // 383 ÷ 72
      "Assists per Game": 1.9,  // 136 ÷ 72
      "Field Goal %": 45.8,
      "Three Point %": 34.0,
      "Free Throw %": 83.1
    },
    scoring: {
      twoPoints: 293 * 2,  // 586
      threePoints: 98 * 3, // 294
      ftPoints: 276,
      totalPoints: 1156
    },
    shooting: {}
  },
  "Payton Pritchard": {
    pos: "PG",
    stats: {
      "Points per Game": 14.3,  // 1144 ÷ 80
      "Rebounds per Game": 3.8, // 307 ÷ 80
      "Assists per Game": 3.5,  // 279 ÷ 80
      "Field Goal %": 47.2,
      "Three Point %": 40.7,
      "Free Throw %": 84.5
    },
    scoring: {
      twoPoints: 154 * 2,  // 308
      threePoints: 255 * 3,// 765
      ftPoints: 71,
      totalPoints: 1144
    },
    shooting: {}
  },
  "Naz Reid": {
    pos: "C",
    stats: {
      "Points per Game": 14.2,  // 1138 ÷ 80
      "Rebounds per Game": 6.0, // 480 ÷ 80
      "Assists per Game": 2.3,  // 181 ÷ 80
      "Field Goal %": 46.2,
      "Three Point %": 37.9,
      "Free Throw %": 77.6
    },
    scoring: {
      twoPoints: 251 * 2,  // 502
      threePoints: 175 * 3,// 525
      ftPoints: 111,
      totalPoints: 1138
    },
    shooting: {}
  },
  "Keyonte George": {
    pos: "PG",
    stats: {
      "Points per Game": 16.8,  // 1125 ÷ 67
      "Rebounds per Game": 3.8, // 253 ÷ 67
      "Assists per Game": 5.6,  // 377 ÷ 67
      "Field Goal %": 39.1,
      "Three Point %": 34.3,
      "Free Throw %": 81.8
    },
    scoring: {
      twoPoints: 185 * 2,  // 370
      threePoints: 174 * 3,// 522
      ftPoints: 233,
      totalPoints: 1125
    },
    shooting: {}
  },
  "Trey Murphy III": {
    pos: "SF",
    stats: {
      "Points per Game": 21.2,  // 1124 ÷ 53
      "Rebounds per Game": 5.1, // 268 ÷ 53
      "Assists per Game": 3.5,  // 188 ÷ 53
      "Field Goal %": 45.4,
      "Three Point %": 36.1,
      "Free Throw %": 88.7
    },
    scoring: {
      twoPoints: 223 * 2,  // 446
      threePoints: 158 * 3,// 474
      ftPoints: 204,
      totalPoints: 1124
    },
    shooting: {}
  },
  "Myles Turner": {
    pos: "C",
    stats: {
      "Points per Game": 15.6,  // 1120 ÷ 72
      "Rebounds per Game": 6.5, // 471 ÷ 72
      "Assists per Game": 1.5,  // 111 ÷ 72
      "Field Goal %": 48.1,
      "Three Point %": 39.6,
      "Free Throw %": 77.3
    },
    scoring: {
      twoPoints: 234 * 2,  // 468
      threePoints: 156 * 3,// 468
      ftPoints: 184,
      totalPoints: 1120
    },
    shooting: {}
  },
  "Malik Monk": {
    pos: "SG",
    stats: {
      "Points per Game": 17.2,  // 1117 ÷ 65
      "Rebounds per Game": 3.8, // 245 ÷ 65
      "Assists per Game": 5.6,  // 362 ÷ 65
      "Field Goal %": 43.9,
      "Three Point %": 32.5,
      "Free Throw %": 86.5
    },
    scoring: {
      twoPoints: 273 * 2,  // 546
      threePoints: 139 * 3,// 417
      ftPoints: 154,
      totalPoints: 1117
    },
    shooting: {}
  },
    "Victor Wembanyama": {
    pos: "C",
    stats: {
      "Points per Game": 24.3,  // 1116 ÷ 46
      "Rebounds per Game": 11.0, // 506 ÷ 46
      "Assists per Game": 3.7,   // 168 ÷ 46
      "Field Goal %": 47.6,
      "Three Point %": 35.2,
      "Free Throw %": 83.6
    },
    scoring: {
      twoPoints: 266 * 2,  // 532
      threePoints: 142 * 3,// 426
      ftPoints: 158,
      totalPoints: 1116
    },
    shooting: {}
  },
  "Jarrett Allen": {
    pos: "C",
    stats: {
      "Points per Game": 13.5,  // 1103 ÷ 82
      "Rebounds per Game": 9.7, // 798 ÷ 82
      "Assists per Game": 1.9,  // 158 ÷ 82
      "Field Goal %": 70.6,
      "Three Point %": 0.0,
      "Free Throw %": 71.8
    },
    scoring: {
      twoPoints: 452 * 2,  // 904
      threePoints: 0 * 3,  // 0
      ftPoints: 199,
      totalPoints: 1103
    },
    shooting: {}
  },
  "Quentin Grimes": {
    pos: "SG",
    stats: {
      "Points per Game": 14.6,  // 1092 ÷ 75
      "Rebounds per Game": 4.3, // 324 ÷ 75
      "Assists per Game": 3.0,  // 228 ÷ 75
      "Field Goal %": 46.7,
      "Three Point %": 38.5,
      "Free Throw %": 75.7
    },
    scoring: {
      twoPoints: 222 * 2,  // 444
      threePoints: 162 * 3,// 486
      ftPoints: 162,
      totalPoints: 1092
    },
    shooting: {}
  },
  "De'Andre Hunter": {
    pos: "SF",
    stats: {
      "Points per Game": 17.0,  // 1088 ÷ 64
      "Rebounds per Game": 4.0, // 258 ÷ 64
      "Assists per Game": 1.4,  // 92 ÷ 64
      "Field Goal %": 47.0,
      "Three Point %": 40.5,
      "Free Throw %": 84.6
    },
    scoring: {
      twoPoints: 201 * 2,  // 402
      threePoints: 157 * 3,// 471
      ftPoints: 215,
      totalPoints: 1088
    },
    shooting: {}
  },
  "Andrew Wiggins": {
    pos: "SF",
    stats: {
      "Points per Game": 18.0,  // 1078 ÷ 60
      "Rebounds per Game": 4.5, // 269 ÷ 60
      "Assists per Game": 2.6,  // 158 ÷ 60
      "Field Goal %": 44.8,
      "Three Point %": 37.4,
      "Free Throw %": 76.3
    },
    scoring: {
      twoPoints: 246 * 2,  // 492
      threePoints: 130 * 3,// 390
      ftPoints: 196,
      totalPoints: 1078
    },
    shooting: {}
  },
  "Dyson Daniels": {
    pos: "SG",
    stats: {
      "Points per Game": 14.1,  // 1073 ÷ 76
      "Rebounds per Game": 5.9, // 449 ÷ 76
      "Assists per Game": 4.4,  // 333 ÷ 76
      "Field Goal %": 49.3,
      "Three Point %": 34.0,
      "Free Throw %": 59.3
    },
    scoring: {
      twoPoints: 375 * 2,  // 750
      threePoints: 80 * 3, // 240
      ftPoints: 83,
      totalPoints: 1073
    },
    shooting: {}
  },
  "Cameron Johnson": {
    pos: "PF",
    stats: {
      "Points per Game": 18.8,  // 1070 ÷ 57
      "Rebounds per Game": 4.3, // 247 ÷ 57
      "Assists per Game": 3.4,  // 194 ÷ 57
      "Field Goal %": 47.5,
      "Three Point %": 39.0,
      "Free Throw %": 89.3
    },
    scoring: {
      twoPoints: 196 * 2,  // 392
      threePoints: 159 * 3,// 477
      ftPoints: 201,
      totalPoints: 1070
    },
    shooting: {}
  },
  "Dillon Brooks": {
    pos: "SF",
    stats: {
      "Points per Game": 14.0,  // 1053 ÷ 75
      "Rebounds per Game": 3.7, // 275 ÷ 75
      "Assists per Game": 1.7,  // 128 ÷ 75
      "Field Goal %": 42.9,
      "Three Point %": 39.7,
      "Free Throw %": 81.8
    },
    scoring: {
      twoPoints: 198 * 2,  // 396
      threePoints: 186 * 3,// 558
      ftPoints: 99,
      totalPoints: 1053
    },
    shooting: {}
  },
  "Josh Hart": {
    pos: "SG",
    stats: {
      "Points per Game": 13.6,  // 1051 ÷ 77
      "Rebounds per Game": 9.6, // 737 ÷ 77
      "Assists per Game": 5.9,  // 453 ÷ 77
      "Field Goal %": 52.5,
      "Three Point %": 33.3,
      "Free Throw %": 77.6
    },
    scoring: {
      twoPoints: 320 * 2,  // 640
      threePoints: 84 * 3, // 252
      ftPoints: 159,
      totalPoints: 1051
    },
    shooting: {}
  },
  "Brook Lopez": {
    pos: "C",
    stats: {
      "Points per Game": 13.0,  // 1041 ÷ 80
      "Rebounds per Game": 5.0, // 401 ÷ 80
      "Assists per Game": 1.8,  // 143 ÷ 80
      "Field Goal %": 50.9,
      "Three Point %": 37.3,
      "Free Throw %": 82.6
    },
    scoring: {
      twoPoints: 255 * 2,  // 510
      threePoints: 139 * 3,// 417
      ftPoints: 114,
      totalPoints: 1041
    },
    shooting: {}
  },
    "Devin Vassell": {
    pos: "SG",
    stats: {
      "Points per Game": 16.3,  // 1041 ÷ 64
      "Rebounds per Game": 4.0, // 255 ÷ 64
      "Assists per Game": 2.9,  // 183 ÷ 64
      "Field Goal %": 44.3,
      "Three Point %": 36.8,
      "Free Throw %": 79.2
    },
    scoring: {
      twoPoints: 236 * 2,  // 472
      threePoints: 158 * 3,// 474
      ftPoints: 95,
      totalPoints: 1041
    },
    shooting: {}
  },
  "Josh Giddey": {
    pos: "PG",
    stats: {
      "Points per Game": 14.6,  // 1022 ÷ 70
      "Rebounds per Game": 8.1, // 566 ÷ 70
      "Assists per Game": 7.2,  // 503 ÷ 70
      "Field Goal %": 46.5,
      "Three Point %": 37.8,
      "Free Throw %": 78.1
    },
    scoring: {
      twoPoints: 266 * 2,  // 532
      threePoints: 105 * 3,// 315
      ftPoints: 175,
      totalPoints: 1022
    },
    shooting: {}
  },
  "Harrison Barnes": {
    pos: "PF",
    stats: {
      "Points per Game": 12.3,  // 1011 ÷ 82
      "Rebounds per Game": 3.8, // 310 ÷ 82
      "Assists per Game": 1.7,  // 136 ÷ 82
      "Field Goal %": 50.8,
      "Three Point %": 43.3,
      "Free Throw %": 80.9
    },
    scoring: {
      twoPoints: 191 * 2,  // 382
      threePoints: 156 * 3,// 468
      ftPoints: 161,
      totalPoints: 1011
    },
    shooting: {}
  },
  "Klay Thompson": {
    pos: "SF",
    stats: {
      "Points per Game": 14.0,  // 1005 ÷ 72
      "Rebounds per Game": 3.4, // 246 ÷ 72
      "Assists per Game": 2.0,  // 145 ÷ 72
      "Field Goal %": 41.2,
      "Three Point %": 39.1,
      "Free Throw %": 90.5
    },
    scoring: {
      twoPoints: 145 * 2,  // 290
      threePoints: 216 * 3,// 648
      ftPoints: 67,
      totalPoints: 1005
    },
    shooting: {}
  },
  "Tobias Harris": {
    pos: "PF",
    stats: {
      "Points per Game": 13.7,  // 1002 ÷ 73
      "Rebounds per Game": 5.9, // 432 ÷ 73
      "Assists per Game": 2.2,  // 162 ÷ 73
      "Field Goal %": 47.7,
      "Three Point %": 34.5,
      "Free Throw %": 86.1
    },
    scoring: {
      twoPoints: 293 * 2,  // 586
      threePoints: 91 * 3, // 273
      ftPoints: 143,
      totalPoints: 1002
    },
    shooting: {}
  },
  "Jaden McDaniels": {
    pos: "PF",
    stats: {
      "Points per Game": 12.2,  // 1000 ÷ 82
      "Rebounds per Game": 5.7, // 470 ÷ 82
      "Assists per Game": 2.0,  // 163 ÷ 82
      "Field Goal %": 47.7,
      "Three Point %": 33.0,
      "Free Throw %": 81.3
    },
    scoring: {
      twoPoints: 298 * 2,  // 596
      threePoints: 100 * 3,// 300
      ftPoints: 104,
      totalPoints: 1000
    },
    shooting: {}
  },
  "Russell Westbrook": {
    pos: "PG",
    stats: {
      "Points per Game": 13.3,  // 994 ÷ 75
      "Rebounds per Game": 4.9, // 370 ÷ 75
      "Assists per Game": 6.1,  // 457 ÷ 75
      "Field Goal %": 44.9,
      "Three Point %": 32.3,
      "Free Throw %": 66.1
    },
    scoring: {
      twoPoints: 279 * 2,  // 558
      threePoints: 94 * 3, // 282
      ftPoints: 154,
      totalPoints: 994
    },
    shooting: {}
  },
  "Onyeka Okongwu": {
    pos: "C",
    stats: {
      "Points per Game": 13.4,  // 988 ÷ 74
      "Rebounds per Game": 8.9, // 660 ÷ 74
      "Assists per Game": 2.3,  // 168 ÷ 74
      "Field Goal %": 56.7,
      "Three Point %": 32.4,
      "Free Throw %": 75.9
    },
    scoring: {
      twoPoints: 340 * 2,  // 680
      threePoints: 48 * 3, // 144
      ftPoints: 164,
      totalPoints: 988
    },
    shooting: {}
  },
  "Dennis Schröder": {
    pos: "PG",
    stats: {
      "Points per Game": 13.1,  // 980 ÷ 75
      "Rebounds per Game": 2.6, // 198 ÷ 75
      "Assists per Game": 5.4,  // 404 ÷ 75
      "Field Goal %": 40.6,
      "Three Point %": 34.2,
      "Free Throw %": 83.8
    },
    scoring: {
      twoPoints: 209 * 2,  // 418
      threePoints: 127 * 3,// 381
      ftPoints: 181,
      totalPoints: 980
    },
    shooting: {}
  },
  "Keldon Johnson": {
    pos: "SF",
    stats: {
      "Points per Game": 12.7,  // 979 ÷ 77
      "Rebounds per Game": 4.8, // 371 ÷ 77
      "Assists per Game": 1.6,  // 125 ÷ 77
      "Field Goal %": 48.2,
      "Three Point %": 31.8,
      "Free Throw %": 77.3
    },
    scoring: {
      twoPoints: 284 * 2,  // 568
      threePoints: 87 * 3, // 261
      ftPoints: 150,
      totalPoints: 979
    },
    shooting: {}
  },
    "Amen Thompson": {
    pos: "SF",
    stats: {
      "Points per Game": 14.1,  // 970 ÷ 69
      "Rebounds per Game": 8.2, // 564 ÷ 69
      "Assists per Game": 3.8,  // 265 ÷ 69
      "Field Goal %": 55.7,
      "Three Point %": 27.5,
      "Free Throw %": 68.4
    },
    scoring: {
      twoPoints: 363 * 2,  // 726
      threePoints: 25 * 3, // 75
      ftPoints: 169,
      totalPoints: 970
    },
    shooting: {}
  },
  "Jimmy Butler": {
    pos: "SF",
    stats: {
      "Points per Game": 17.5,  // 964 ÷ 55
      "Rebounds per Game": 5.4, // 296 ÷ 55
      "Assists per Game": 5.4,  // 298 ÷ 55
      "Field Goal %": 50.4,
      "Three Point %": 30.8,
      "Free Throw %": 84.2
    },
    scoring: {
      twoPoints: 269 * 2,  // 538
      threePoints: 32 * 3, // 96
      ftPoints: 330,
      totalPoints: 964
    },
    shooting: {}
  },
  "Kyle Kuzma": {
    pos: "PF",
    stats: {
      "Points per Game": 14.8,  // 964 ÷ 65
      "Rebounds per Game": 5.7, // 370 ÷ 65
      "Assists per Game": 2.3,  // 152 ÷ 65
      "Field Goal %": 43.6,
      "Three Point %": 30.7,
      "Free Throw %": 63.4
    },
    scoring: {
      twoPoints: 274 * 2,  // 548
      threePoints: 96 * 3, // 288
      ftPoints: 128,
      totalPoints: 964
    },
    shooting: {}
  },
  "Keegan Murray": {
    pos: "PF",
    stats: {
      "Points per Game": 12.4,  // 942 ÷ 76
      "Rebounds per Game": 6.7, // 507 ÷ 76
      "Assists per Game": 1.4,  // 109 ÷ 76
      "Field Goal %": 44.4,
      "Three Point %": 34.3,
      "Free Throw %": 83.3
    },
    scoring: {
      twoPoints: 210 * 2,  // 420
      threePoints: 154 * 3,// 462
      ftPoints: 60,
      totalPoints: 942
    },
    shooting: {}
  },
  "Zaccharie Risacher": {
    pos: "SF",
    stats: {
      "Points per Game": 12.6,  // 942 ÷ 75
      "Rebounds per Game": 3.6, // 268 ÷ 75
      "Assists per Game": 1.2,  // 92 ÷ 75
      "Field Goal %": 45.8,
      "Three Point %": 35.5,
      "Free Throw %": 71.1
    },
    scoring: {
      twoPoints: 235 * 2,  // 470
      threePoints: 122 * 3,// 366
      ftPoints: 106,
      totalPoints: 942
    },
    shooting: {}
  },
  "Jalen Duren": {
    pos: "C",
    stats: {
      "Points per Game": 11.8,  // 918 ÷ 78
      "Rebounds per Game": 10.3,// 807 ÷ 78
      "Assists per Game": 2.7,  // 209 ÷ 78
      "Field Goal %": 69.2,
      "Three Point %": 0.0,
      "Free Throw %": 66.9
    },
    scoring: {
      twoPoints: 378 * 2,  // 756
      threePoints: 0,
      ftPoints: 162,
      totalPoints: 918
    },
    shooting: {}
  },
  "Naji Marshall": {
    pos: "SF",
    stats: {
      "Points per Game": 13.2,  // 914 ÷ 69
      "Rebounds per Game": 4.8, // 328 ÷ 69
      "Assists per Game": 3.0,  // 208 ÷ 69
      "Field Goal %": 50.8,
      "Three Point %": 27.5,
      "Free Throw %": 81.3
    },
    scoring: {
      twoPoints: 302 * 2,  // 604
      threePoints: 60 * 3, // 180
      ftPoints: 130,
      totalPoints: 914
    },
    shooting: {}
  },
  "Aaron Wiggins": {
    pos: "SG",
    stats: {
      "Points per Game": 12.0,  // 914 ÷ 76
      "Rebounds per Game": 3.9, // 295 ÷ 76
      "Assists per Game": 1.8,  // 134 ÷ 76
      "Field Goal %": 48.8,
      "Three Point %": 38.3,
      "Free Throw %": 83.1
    },
    scoring: {
      twoPoints: 225 * 2,  // 450
      threePoints: 130 * 3,// 390
      ftPoints: 74,
      totalPoints: 914
    },
    shooting: {}
  },
  "Buddy Hield": {
    pos: "SG",
    stats: {
      "Points per Game": 11.1,  // 912 ÷ 82
      "Rebounds per Game": 3.2, // 264 ÷ 82
      "Assists per Game": 1.6,  // 134 ÷ 82
      "Field Goal %": 41.7,
      "Three Point %": 37.0,
      "Free Throw %": 82.8
    },
    scoring: {
      twoPoints: 125 * 2,  // 250
      threePoints: 203 * 3,// 609
      ftPoints: 53,
      totalPoints: 912
    },
    shooting: {}
  },
  "Kelly Oubre Jr.": {
    pos: "SF",
    stats: {
      "Points per Game": 15.1,  // 906 ÷ 60
      "Rebounds per Game": 6.1, // 368 ÷ 60
      "Assists per Game": 1.8,  // 108 ÷ 60
      "Field Goal %": 47.0,
      "Three Point %": 29.3,
      "Free Throw %": 75.1
    },
    scoring: {
      twoPoints: 277 * 2,  // 554
      threePoints: 71 * 3, // 213
      ftPoints: 139,
      totalPoints: 906
    },
    shooting: {}
  },
    "Bradley Beal": {
    pos: "SG",
    stats: {
      "Points per Game": 17.0,  // 902 ÷ 53
      "Rebounds per Game": 3.3, // 177 ÷ 53
      "Assists per Game": 3.7,  // 195 ÷ 53
      "Field Goal %": 49.7,
      "Three Point %": 38.6,
      "Free Throw %": 80.3
    },
    scoring: {
      twoPoints: 243 * 2,  // 486
      threePoints: 102 * 3,// 306
      ftPoints: 110,
      totalPoints: 902
    },
    shooting: {}
  },
  "Lauri Markkanen": {
    pos: "PF",
    stats: {
      "Points per Game": 19.0,  // 892 ÷ 47
      "Rebounds per Game": 5.9, // 278 ÷ 47
      "Assists per Game": 1.5,  // 70 ÷ 47
      "Field Goal %": 42.3,
      "Three Point %": 34.6,
      "Free Throw %": 87.6
    },
    scoring: {
      twoPoints: 158 * 2,  // 316
      threePoints: 138 * 3,// 414
      ftPoints: 162,
      totalPoints: 892
    },
    shooting: {}
  },
  "Toumani Camara": {
    pos: "PF",
    stats: {
      "Points per Game": 11.3,  // 882 ÷ 78
      "Rebounds per Game": 5.8, // 450 ÷ 78
      "Assists per Game": 2.2,  // 175 ÷ 78
      "Field Goal %": 45.8,
      "Three Point %": 37.5,
      "Free Throw %": 72.2
    },
    scoring: {
      twoPoints: 193 * 2,  // 386
      threePoints: 135 * 3,// 405
      ftPoints: 91,
      totalPoints: 882
    },
    shooting: {}
  },
  "Ty Jerome": {
    pos: "SG",
    stats: {
      "Points per Game": 12.5,  // 878 ÷ 70
      "Rebounds per Game": 2.5, // 173 ÷ 70
      "Assists per Game": 3.4,  // 237 ÷ 70
      "Field Goal %": 51.6,
      "Three Point %": 43.9,
      "Free Throw %": 87.2
    },
    scoring: {
      twoPoints: 208 * 2,  // 416
      threePoints: 111 * 3,// 333
      ftPoints: 129,
      totalPoints: 878
    },
    shooting: {}
  },
  "Spencer Dinwiddie": {
    pos: "PG",
    stats: {
      "Points per Game": 11.0,  // 872 ÷ 79
      "Rebounds per Game": 2.6, // 209 ÷ 79
      "Assists per Game": 4.4,  // 349 ÷ 79
      "Field Goal %": 41.6,
      "Three Point %": 33.4,
      "Free Throw %": 80.2
    },
    scoring: {
      twoPoints: 175 * 2,  // 350
      threePoints: 109 * 3,// 327
      ftPoints: 195,
      totalPoints: 872
    },
    shooting: {}
  },
  "Alex Sarr": {
    pos: "C",
    stats: {
      "Points per Game": 13.0,  // 869 ÷ 67
      "Rebounds per Game": 6.5, // 435 ÷ 67
      "Assists per Game": 2.4,  // 161 ÷ 67
      "Field Goal %": 39.4,
      "Three Point %": 30.8,
      "Free Throw %": 67.9
    },
    scoring: {
      twoPoints: 221 * 2,  // 442
      threePoints: 105 * 3,// 315
      ftPoints: 112,
      totalPoints: 869
    },
    shooting: {}
  },
  "Rudy Gobert": {
    pos: "C",
    stats: {
      "Points per Game": 12.0,  // 866 ÷ 72
      "Rebounds per Game": 10.9,// 785 ÷ 72
      "Assists per Game": 1.8,  // 127 ÷ 72
      "Field Goal %": 66.9,
      "Three Point %": 0.0,
      "Free Throw %": 67.4
    },
    scoring: {
      twoPoints: 341 * 2,  // 682
      threePoints: 0,
      ftPoints: 184,
      totalPoints: 866
    },
    shooting: {}
  },
  "Tim Hardaway Jr.": {
    pos: "SG",
    stats: {
      "Points per Game": 11.0,  // 844 ÷ 77
      "Rebounds per Game": 2.4, // 183 ÷ 77
      "Assists per Game": 1.6,  // 123 ÷ 77
      "Field Goal %": 40.6,
      "Three Point %": 36.8,
      "Free Throw %": 85.5
    },
    scoring: {
      twoPoints: 108 * 2,  // 216
      threePoints: 168 * 3,// 504
      ftPoints: 124,
      totalPoints: 844
    },
    shooting: {}
  },
  "Fred VanVleet": {
    pos: "PG",
    stats: {
      "Points per Game": 14.1,  // 844 ÷ 60
      "Rebounds per Game": 3.7, // 221 ÷ 60
      "Assists per Game": 5.6,  // 333 ÷ 60
      "Field Goal %": 37.8,
      "Three Point %": 34.5,
      "Free Throw %": 81.0
    },
    scoring: {
      twoPoints: 128 * 2,  // 256
      threePoints: 159 * 3,// 477
      ftPoints: 111,
      totalPoints: 844
    },
    shooting: {}
  },
  "Jonas Valančiūnas": {
    pos: "C",
    stats: {
      "Points per Game": 10.4,  // 843 ÷ 81
      "Rebounds per Game": 7.7, // 627 ÷ 81
      "Assists per Game": 2.0,  // 164 ÷ 81
      "Field Goal %": 55.0,
      "Three Point %": 21.6,
      "Free Throw %": 87.9
    },
    scoring: {
      twoPoints: 337 * 2,  // 674
      threePoints: 8 * 3,  // 24
      ftPoints: 145,
      totalPoints: 843
    },
    shooting: {}
  },
  "Keon Johnson": {
    pos: "SG",
    stats: {
      "Points per Game": 10.6,  // 839 ÷ 79
      "Rebounds per Game": 3.8, // 297 ÷ 79
      "Assists per Game": 2.2,  // 175 ÷ 79
      "Field Goal %": 38.9,
      "Three Point %": 31.4,
      "Free Throw %": 77.0
    },
    scoring: {
      twoPoints: 177 * 2,  // 354
      threePoints: 126 * 3,// 378
      ftPoints: 107,
      totalPoints: 839
    },
    shooting: {}
  },
  "Scoot Henderson": {
    pos: "PG",
    stats: {
      "Points per Game": 12.7,  // 837 ÷ 66
      "Rebounds per Game": 3.0, // 198 ÷ 66
      "Assists per Game": 5.1,  // 335 ÷ 66
      "Field Goal %": 41.9,
      "Three Point %": 35.4,
      "Free Throw %": 76.7
    },
    scoring: {
      twoPoints: 182 * 2,  // 364
      threePoints: 105 * 3,// 315
      ftPoints: 158,
      totalPoints: 837
    },
    shooting: {}
  },
  "P.J. Washington": {
    pos: "PF",
    stats: {
      "Points per Game": 14.7,  // 836 ÷ 57
      "Rebounds per Game": 7.8, // 442 ÷ 57
      "Assists per Game": 2.3,  // 131 ÷ 57
      "Field Goal %": 45.3,
      "Three Point %": 38.1,
      "Free Throw %": 72.2
    },
    scoring: {
      twoPoints: 210 * 2,  // 420
      threePoints: 91 * 3, // 273
      ftPoints: 143,
      totalPoints: 836
    },
    shooting: {}
  },
  "Obi Toppin": {
    pos: "PF",
    stats: {
      "Points per Game": 10.5,  // 833 ÷ 79
      "Rebounds per Game": 4.0, // 318 ÷ 79
      "Assists per Game": 1.6,  // 128 ÷ 79
      "Field Goal %": 52.9,
      "Three Point %": 36.5,
      "Free Throw %": 78.1
    },
    scoring: {
      twoPoints: 207 * 2,  // 414
      threePoints: 110 * 3,// 330
      ftPoints: 89,
      totalPoints: 833
    },
    shooting: {}
  },
  "Tyus Jones": {
    pos: "PG",
    stats: {
      "Points per Game": 10.2,  // 829 ÷ 81
      "Rebounds per Game": 2.4, // 196 ÷ 81
      "Assists per Game": 5.3,  // 429 ÷ 81
      "Field Goal %": 44.8,
      "Three Point %": 41.4,
      "Free Throw %": 89.5
    },
    scoring: {
      twoPoints: 140 * 2,  // 280
      threePoints: 166 * 3,// 498
      ftPoints: 51,
      totalPoints: 829
    },
    shooting: {}
  },
  "Jakob Poeltl": {
    pos: "C",
    stats: {
      "Points per Game": 14.5,  // 824 ÷ 57
      "Rebounds per Game": 9.6, // 547 ÷ 57
      "Assists per Game": 2.8,  // 158 ÷ 57
      "Field Goal %": 62.7,
      "Three Point %": 33.3,
      "Free Throw %": 67.4
    },
    scoring: {
      twoPoints: 362 * 2,  // 724
      threePoints: 1 * 3,  // 3
      ftPoints: 97,
      totalPoints: 824
    },
    shooting: {}
  },
  "Gary Trent Jr.": {
    pos: "SG",
    stats: {
      "Points per Game": 11.1,  // 824 ÷ 74
      "Rebounds per Game": 2.3, // 168 ÷ 74
      "Assists per Game": 1.2,  // 87 ÷ 74
      "Field Goal %": 43.1,
      "Three Point %": 41.6,
      "Free Throw %": 84.8
    },
    scoring: {
      twoPoints: 103 * 2,  // 206
      threePoints: 180 * 3,// 540
      ftPoints: 78,
      totalPoints: 824
    },
    shooting: {}
  },
  "Jaylen Wells": {
    pos: "SG",
    stats: {
      "Points per Game": 10.4,  // 823 ÷ 79
      "Rebounds per Game": 3.4, // 268 ÷ 79
      "Assists per Game": 1.7,  // 135 ÷ 79
      "Field Goal %": 42.5,
      "Three Point %": 35.2,
      "Free Throw %": 82.2
    },
    scoring: {
      twoPoints: 149 * 2,  // 298
      threePoints: 138 * 3,// 414
      ftPoints: 111,
      totalPoints: 823
    },
    shooting: {}
  },
  "Kristaps Porziņģis": {
    pos: "C",
    stats: {
      "Points per Game": 19.5,  // 818 ÷ 42
      "Rebounds per Game": 6.8, // 284 ÷ 42
      "Assists per Game": 2.1,  // 87 ÷ 42
      "Field Goal %": 48.3,
      "Three Point %": 41.2,
      "Free Throw %": 80.9
    },
    scoring: {
      twoPoints: 174 * 2,  // 348
      threePoints: 103 * 3,// 309
      ftPoints: 161,
      totalPoints: 818
    },
    shooting: {}
  },
  "Duncan Robinson": {
    pos: "SF",
    stats: {
      "Points per Game": 11.0,  // 817 ÷ 74
      "Rebounds per Game": 2.3, // 167 ÷ 74
      "Assists per Game": 2.4,  // 176 ÷ 74
      "Field Goal %": 43.7,
      "Three Point %": 39.3,
      "Free Throw %": 88.7
    },
    scoring: {
      twoPoints: 100 * 2,  // 200
      threePoints: 190 * 3,// 570
      ftPoints: 47,
      totalPoints: 817
    },
    shooting: {}
  },
    "Julian Champagnie": {
    pos: "SF",
    stats: {
      "Points per Game": 9.9,
      "Rebounds per Game": 3.9,
      "Assists per Game": 1.4,
      "Field Goal %": 41.5,
      "Three Point %": 37.1,
      "Free Throw %": 90.4
    },
    scoring: {
      twoPoints: 196,  // (276 - 178) × 2
      threePoints: 534, // 178 × 3
      ftPoints: 85,
      totalPoints: 815
    },
    shooting: {}
  },
  "Santi Aldama": {
    pos: "PF",
    stats: {
      "Points per Game": 12.5,
      "Rebounds per Game": 6.4,
      "Assists per Game": 2.9,
      "Field Goal %": 48.3,
      "Three Point %": 36.8,
      "Free Throw %": 69.1
    },
    scoring: {
      twoPoints: 386,  
      threePoints: 360,
      ftPoints: 65,
      totalPoints: 811
    },
    shooting: {}
  },
  "Bub Carrington": {
    pos: "PG",
    stats: {
      "Points per Game": 9.8,
      "Rebounds per Game": 4.2,
      "Assists per Game": 4.4,
      "Field Goal %": 40.1,
      "Three Point %": 33.9,
      "Free Throw %": 81.2
    },
    scoring: {
      twoPoints: 486,  
      threePoints: 414,
      ftPoints: 69,
      totalPoints: 807
    },
    shooting: {}
  },
  "Kawhi Leonard": {
    pos: "SF",
    stats: {
      "Points per Game": 21.5,
      "Rebounds per Game": 5.9,
      "Assists per Game": 3.1,
      "Field Goal %": 49.8,
      "Three Point %": 41.1,
      "Free Throw %": 81.0
    },
    scoring: {
      twoPoints: 464,  
      threePoints: 234,
      ftPoints: 98,
      totalPoints: 796
    },
    shooting: {}
  },
  "Georges Niang": {
    pos: "PF",
    stats: {
      "Points per Game": 9.9,
      "Rebounds per Game": 3.4,
      "Assists per Game": 1.4,
      "Field Goal %": 46.1,
      "Three Point %": 40.6,
      "Free Throw %": 79.3
    },
    scoring: {
      twoPoints: 240,  
      threePoints: 498,
      ftPoints: 46,
      totalPoints: 784
    },
    shooting: {}
  },
  "Derrick Jones Jr.": {
    pos: "SF",
    stats: {
      "Points per Game": 10.1,
      "Rebounds per Game": 3.4,
      "Assists per Game": 0.8,
      "Field Goal %": 52.6,
      "Three Point %": 35.6,
      "Free Throw %": 70.3
    },
    scoring: {
      twoPoints: 464,  
      threePoints: 234,
      ftPoints: 83,
      totalPoints: 781
    },
    shooting: {}
  },
  "Scotty Pippen Jr.": {
    pos: "PG",
    stats: {
      "Points per Game": 9.9,
      "Rebounds per Game": 3.3,
      "Assists per Game": 4.4,
      "Field Goal %": 48.0,
      "Three Point %": 39.7,
      "Free Throw %": 71.3
    },
    scoring: {
      twoPoints: 396,  
      threePoints: 261,
      ftPoints: 122,
      totalPoints: 779
    },
    shooting: {}
  },
  "Gradey Dick": {
    pos: "SG",
    stats: {
      "Points per Game": 14.4,
      "Rebounds per Game": 3.6,
      "Assists per Game": 1.8,
      "Field Goal %": 41.0,
      "Three Point %": 35.0,
      "Free Throw %": 85.8
    },
    scoring: {
      twoPoints: 302,  
      threePoints: 342,
      ftPoints: 133,
      totalPoints: 777
    },
    shooting: {}
  },
  "Caris LeVert": {
    pos: "SG",
    stats: {
      "Points per Game": 12.1,
      "Rebounds per Game": 3.2,
      "Assists per Game": 3.4,
      "Field Goal %": 46.7,
      "Three Point %": 37.3,
      "Free Throw %": 71.0
    },
    scoring: {
      twoPoints: 348,  
      threePoints: 318,
      ftPoints: 110,
      totalPoints: 776
    },
    shooting: {}
  },
  "Rui Hachimura": {
    pos: "PF",
    stats: {
      "Points per Game": 13.1,
      "Rebounds per Game": 5.0,
      "Assists per Game": 1.4,
      "Field Goal %": 50.9,
      "Three Point %": 41.3,
      "Free Throw %": 77.0
    },
    scoring: {
      twoPoints: 382,  
      threePoints: 306,
      ftPoints: 87,
      totalPoints: 775
    },
    shooting: {}
  },
  "Nickeil Alexander-Walker": {
    pos: "SG",
    stats: {
      "Points per Game": 9.4,
      "Rebounds per Game": 3.2,
      "Assists per Game": 2.7,
      "Field Goal %": 43.8,
      "Three Point %": 38.1,
      "Free Throw %": 78.0
    },
    scoring: {
      twoPoints: 258,  
      threePoints: 423,
      ftPoints: 92,
      totalPoints: 773
    },
    shooting: {}
  },
  "Brice Sensabaugh": {
    pos: "SF",
    stats: {
      "Points per Game": 10.9,
      "Rebounds per Game": 3.0,
      "Assists per Game": 1.5,
      "Field Goal %": 45.9,
      "Three Point %": 42.2,
      "Free Throw %": 89.0
    },
    scoring: {
      twoPoints: 236,  
      threePoints: 471,
      ftPoints: 65,
      totalPoints: 772
    },
    shooting: {}
  },
  "Kevin Porter Jr.": {
    pos: "SG",
    stats: {
      "Points per Game": 10.3,
      "Rebounds per Game": 3.7,
      "Assists per Game": 3.4,
      "Field Goal %": 44.9,
      "Three Point %": 31.1,
      "Free Throw %": 76.9
    },
    scoring: {
      twoPoints: 476,  
      threePoints: 165,
      ftPoints: 130,
      totalPoints: 771
    },
    shooting: {}
  },
  "Guerschon Yabusele": {
    pos: "C",
    stats: {
      "Points per Game": 11.0,
      "Rebounds per Game": 5.6,
      "Assists per Game": 2.1,
      "Field Goal %": 50.1,
      "Three Point %": 38.0,
      "Free Throw %": 72.5
    },
    scoring: {
      twoPoints: 356,  
      threePoints: 312,
      ftPoints: 100,
      totalPoints: 768
    },
    shooting: {}
  },
  "John Collins": {
    pos: "PF",
    stats: {
      "Points per Game": 18.9,
      "Rebounds per Game": 8.2,
      "Assists per Game": 2.0,
      "Field Goal %": 52.7,
      "Three Point %": 39.9,
      "Free Throw %": 84.8
    },
    scoring: {
      twoPoints: 442,  
      threePoints: 177,
      ftPoints: 139,
      totalPoints: 758
    },
    shooting: {}
  },
  "Isaiah Joe": {
    pos: "SG",
    stats: {
      "Points per Game": 10.2,
      "Rebounds per Game": 2.1,
      "Assists per Game": 1.6,
      "Field Goal %": 44.0,
      "Three Point %": 41.2,
      "Free Throw %": 82.1
    },
    scoring: {
      twoPoints: 134,  
      threePoints: 576,
      ftPoints: 46,
      totalPoints: 756
    },
    shooting: {}
  },
  "Jalen Wilson": {
    pos: "PF",
    stats: {
      "Points per Game": 9.5,
      "Rebounds per Game": 3.4,
      "Assists per Game": 1.8,
      "Field Goal %": 39.7,
      "Three Point %": 33.7,
      "Free Throw %": 81.8
    },
    scoring: {
      twoPoints: 248,  
      threePoints: 366,
      ftPoints: 135,
      totalPoints: 749
    },
    shooting: {}
  },
  "Max Christie": {
    pos: "SG",
    stats: {
      "Points per Game": 9.6,
      "Rebounds per Game": 3.3,
      "Assists per Game": 1.9,
      "Field Goal %": 42.7,
      "Three Point %": 36.6,
      "Free Throw %": 85.5
    },
    scoring: {
      twoPoints: 274,  
      threePoints: 345,
      ftPoints: 130,
      totalPoints: 749
    },
    shooting: {}
  },
  "Aaron Gordon": {
    pos: "PF",
    stats: {
      "Points per Game": 14.7,
      "Rebounds per Game": 4.8,
      "Assists per Game": 3.2,
      "Field Goal %": 53.1,
      "Three Point %": 43.6,
      "Free Throw %": 81.0
    },
    scoring: {
      twoPoints: 378,  
      threePoints: 225,
      ftPoints: 145,
      totalPoints: 748
    },
    shooting: {}
  },
  "Brandin Podziemski": {
    pos: "SG",
    stats: {
      "Points per Game": 11.7,
      "Rebounds per Game": 5.1,
      "Assists per Game": 3.4,
      "Field Goal %": 44.5,
      "Three Point %": 37.2,
      "Free Throw %": 75.8
    },
    scoring: {
      twoPoints: 330,  
      threePoints: 345,
      ftPoints: 72,
      totalPoints: 747
    },
    shooting: {}
  },
    "Anthony Black": {
    pos: "PG",
    stats: {
      "Points per Game": 9.4,
      "Rebounds per Game": 3.0,
      "Assists per Game": 3.1,
      "Field Goal %": 42.3,
      "Three Point %": 31.8,
      "Free Throw %": 76.1
    },
    scoring: {
      twoPoints: 400,   // (262 - 62) × 2
      threePoints: 186, // 62 × 3
      ftPoints: 150,
      totalPoints: 736
    },
    shooting: {}
  },
  "D'Angelo Russell": {
    pos: "PG",
    stats: {
      "Points per Game": 12.6,
      "Rebounds per Game": 2.8,
      "Assists per Game": 5.1,
      "Field Goal %": 39.0,
      "Three Point %": 31.4,
      "Free Throw %": 83.4
    },
    scoring: {
      twoPoints: 272,
      threePoints: 339,
      ftPoints: 121,
      totalPoints: 732
    },
    shooting: {}
  },
  "Bilal Coulibaly": {
    pos: "SF",
    stats: {
      "Points per Game": 12.3,
      "Rebounds per Game": 5.0,
      "Assists per Game": 3.4,
      "Field Goal %": 42.1,
      "Three Point %": 28.1,
      "Free Throw %": 74.6
    },
    scoring: {
      twoPoints: 400,
      threePoints: 189,
      ftPoints: 138,
      totalPoints: 727
    },
    shooting: {}
  },
  "Nic Claxton": {
    pos: "C",
    stats: {
      "Points per Game": 10.3,
      "Rebounds per Game": 7.4,
      "Assists per Game": 2.2,
      "Field Goal %": 56.3,
      "Three Point %": 23.8,
      "Free Throw %": 51.3
    },
    scoring: {
      twoPoints: 630,
      threePoints: 15,
      ftPoints: 79,
      totalPoints: 724
    },
    shooting: {}
  },
  "Moses Moody": {
    pos: "SG",
    stats: {
      "Points per Game": 9.8,
      "Rebounds per Game": 2.6,
      "Assists per Game": 1.3,
      "Field Goal %": 43.3,
      "Three Point %": 37.4,
      "Free Throw %": 79.7
    },
    scoring: {
      twoPoints: 240,
      threePoints: 378,
      ftPoints: 106,
      totalPoints: 724
    },
    shooting: {}
  },
  "Donte DiVincenzo": {
    pos: "SG",
    stats: {
      "Points per Game": 11.7,
      "Rebounds per Game": 3.7,
      "Assists per Game": 3.6,
      "Field Goal %": 42.2,
      "Three Point %": 39.7,
      "Free Throw %": 77.8
    },
    scoring: {
      twoPoints: 152,
      threePoints: 522,
      ftPoints: 49,
      totalPoints: 723
    },
    shooting: {}
  },
  "Chris Paul": {
    pos: "PG",
    stats: {
      "Points per Game": 8.8,
      "Rebounds per Game": 3.6,
      "Assists per Game": 7.4,
      "Field Goal %": 42.7,
      "Three Point %": 37.7,
      "Free Throw %": 92.4
    },
    scoring: {
      twoPoints: 327,
      threePoints: 420,
      ftPoints: 85,
      totalPoints: 723
    },
    shooting: {}
  },
  "T.J. McConnell": {
    pos: "PG",
    stats: {
      "Points per Game": 9.1,
      "Rebounds per Game": 2.4,
      "Assists per Game": 4.4,
      "Field Goal %": 51.9,
      "Three Point %": 30.6,
      "Free Throw %": 74.0
    },
    scoring: {
      twoPoints: 618,
      threePoints: 45,
      ftPoints: 57,
      totalPoints: 720
    },
    shooting: {}
  },
  "Luguentz Dort": {
    pos: "SF",
    stats: {
      "Points per Game": 10.1,
      "Rebounds per Game": 4.1,
      "Assists per Game": 1.6,
      "Field Goal %": 43.5,
      "Three Point %": 41.2,
      "Free Throw %": 71.7
    },
    scoring: {
      twoPoints: 264,
      threePoints: 510,
      ftPoints: 33,
      totalPoints: 719
    },
    shooting: {}
  },
  "Jonathan Kuminga": {
    pos: "PF",
    stats: {
      "Points per Game": 15.3,
      "Rebounds per Game": 4.6,
      "Assists per Game": 2.2,
      "Field Goal %": 45.4,
      "Three Point %": 30.5,
      "Free Throw %": 66.8
    },
    scoring: {
      twoPoints: 424,
      threePoints: 138,
      ftPoints: 157,
      totalPoints: 719
    },
    shooting: {}
  },
  "Dalton Knecht": {
    pos: "SF",
    stats: {
      "Points per Game": 9.0,
      "Rebounds per Game": 2.3,
      "Assists per Game": 0.8,
      "Field Goal %": 46.1,
      "Three Point %": 37.6,
      "Free Throw %": 76.2
    },
    scoring: {
      twoPoints: 258,
      threePoints: 384,
      ftPoints: 64,
      totalPoints: 706
    },
    shooting: {}
  },
  "Corey Kispert": {
    pos: "SF",
    stats: {
      "Points per Game": 11.6,
      "Rebounds per Game": 3.0,
      "Assists per Game": 1.7,
      "Field Goal %": 45.1,
      "Three Point %": 36.4,
      "Free Throw %": 85.2
    },
    scoring: {
      twoPoints: 270,
      threePoints: 360,
      ftPoints: 75,
      totalPoints: 705
    },
    shooting: {}
  },
  "Daniel Gafford": {
    pos: "C",
    stats: {
      "Points per Game": 12.3,
      "Rebounds per Game": 6.8,
      "Assists per Game": 1.4,
      "Field Goal %": 70.2,
      "Three Point %": 0.0,
      "Free Throw %": 68.9
    },
    scoring: {
      twoPoints: 566,
      threePoints: 0,
      ftPoints: 135,
      totalPoints: 701
    },
    shooting: {}
  },
  "Jabari Smith Jr.": {
    pos: "PF",
    stats: {
      "Points per Game": 12.2,
      "Rebounds per Game": 7.0,
      "Assists per Game": 1.1,
      "Field Goal %": 43.8,
      "Three Point %": 35.4,
      "Free Throw %": 82.5
    },
    scoring: {
      twoPoints: 300,
      threePoints: 294,
      ftPoints: 104,
      totalPoints: 698
    },
    shooting: {}
  },
  "Amir Coffey": {
    pos: "SG",
    stats: {
      "Points per Game": 9.7,
      "Rebounds per Game": 2.2,
      "Assists per Game": 2.2,
      "Field Goal %": 47.1,
      "Three Point %": 40.9,
      "Free Throw %": 89.1
    },
    scoring: {
      twoPoints: 278,
      threePoints: 303,
      ftPoints: 115,
      totalPoints: 696
    },
    shooting: {}
  },
  "Kyle Filipowski": {
    pos: "C",
    stats: {
      "Points per Game": 9.6,
      "Rebounds per Game": 6.1,
      "Assists per Game": 1.9,
      "Field Goal %": 50.2,
      "Three Point %": 35.0,
      "Free Throw %": 65.0
    },
    scoring: {
      twoPoints: 366,
      threePoints: 231,
      ftPoints: 93,
      totalPoints: 690
    },
    shooting: {}
  },
  "Matas Buzelis": {
    pos: "SF",
    stats: {
      "Points per Game": 8.6,
      "Rebounds per Game": 3.5,
      "Assists per Game": 1.0,
      "Field Goal %": 45.4,
      "Three Point %": 36.1,
      "Free Throw %": 81.5
    },
    scoring: {
      twoPoints: 312,
      threePoints: 288,
      ftPoints: 88,
      totalPoints: 688
    },
    shooting: {}
  },
  "Tari Eason": {
    pos: "PF",
    stats: {
      "Points per Game": 12.0,
      "Rebounds per Game": 6.4,
      "Assists per Game": 1.5,
      "Field Goal %": 48.7,
      "Three Point %": 34.2,
      "Free Throw %": 76.0
    },
    scoring: {
      twoPoints: 418,
      threePoints: 189,
      ftPoints: 79,
      totalPoints: 686
    },
    shooting: {}
  },
  "Jrue Holiday": {
    pos: "PG",
    stats: {
      "Points per Game": 11.1,
      "Rebounds per Game": 4.3,
      "Assists per Game": 3.9,
      "Field Goal %": 44.3,
      "Three Point %": 35.3,
      "Free Throw %": 90.9
    },
    scoring: {
      twoPoints: 294,
      threePoints: 324,
      ftPoints: 70,
      totalPoints: 686
    },
    shooting: {}
  },
    "Kevin Huerter": {
    pos: "SG",
    stats: {
      "Points per Game": 9.9,
      "Rebounds per Game": 3.0,
      "Assists per Game": 2.3,
      "Field Goal %": 42.5,
      "Three Point %": 33.8,
      "Free Throw %": 71.4
    },
    scoring: {
      twoPoints: 250,   // (257 - 132) × 2
      threePoints: 396, // 132 × 3
      ftPoints: 35,
      totalPoints: 681
    },
    shooting: {}
  },
  "Grayson Allen": {
    pos: "SG",
    stats: {
      "Points per Game": 10.6,
      "Rebounds per Game": 3.0,
      "Assists per Game": 2.1,
      "Field Goal %": 44.8,
      "Three Point %": 42.6,
      "Free Throw %": 81.6
    },
    scoring: {
      twoPoints: 140,
      threePoints: 447,
      ftPoints: 93,
      totalPoints: 680
    },
    shooting: {}
  },
  "Jalen Johnson": {
    pos: "SF",
    stats: {
      "Points per Game": 18.9,
      "Rebounds per Game": 10.0,
      "Assists per Game": 5.0,
      "Field Goal %": 50.0,
      "Three Point %": 31.2,
      "Free Throw %": 74.6
    },
    scoring: {
      twoPoints: 454,
      threePoints: 132,
      ftPoints: 94,
      totalPoints: 680
    },
    shooting: {}
  },
  "Royce O'Neale": {
    pos: "SF",
    stats: {
      "Points per Game": 9.1,
      "Rebounds per Game": 4.7,
      "Assists per Game": 2.2,
      "Field Goal %": 42.3,
      "Three Point %": 40.6,
      "Free Throw %": 73.1
    },
    scoring: {
      twoPoints: 124,
      threePoints: 537,
      ftPoints: 19,
      totalPoints: 680
    },
    shooting: {}
  },
  "Bobby Portis": {
    pos: "PF",
    stats: {
      "Points per Game": 13.9,
      "Rebounds per Game": 8.4,
      "Assists per Game": 2.1,
      "Field Goal %": 46.6,
      "Three Point %": 36.5,
      "Free Throw %": 83.6
    },
    scoring: {
      twoPoints: 424,
      threePoints: 195,
      ftPoints: 61,
      totalPoints: 680
    },
    shooting: {}
  },
  "Terry Rozier": {
    pos: "PG",
    stats: {
      "Points per Game": 10.6,
      "Rebounds per Game": 2.8,
      "Assists per Game": 2.6,
      "Field Goal %": 39.1,
      "Three Point %": 29.5,
      "Free Throw %": 85.2
    },
    scoring: {
      twoPoints: 314,
      threePoints: 273,
      ftPoints: 92,
      totalPoints: 679
    },
    shooting: {}
  },
  "Jerami Grant": {
    pos: "PF",
    stats: {
      "Points per Game": 14.4,
      "Rebounds per Game": 3.5,
      "Assists per Game": 2.1,
      "Field Goal %": 37.3,
      "Three Point %": 36.5,
      "Free Throw %": 84.9
    },
    scoring: {
      twoPoints: 212,
      threePoints: 324,
      ftPoints: 141,
      totalPoints: 677
    },
    shooting: {}
  },
  "Kentavious Caldwell-Pope": {
    pos: "SG",
    stats: {
      "Points per Game": 8.7,
      "Rebounds per Game": 2.2,
      "Assists per Game": 1.8,
      "Field Goal %": 43.9,
      "Three Point %": 34.2,
      "Free Throw %": 86.3
    },
    scoring: {
      twoPoints: 252,
      threePoints: 339,
      ftPoints: 82,
      totalPoints: 673
    },
    shooting: {}
  },
  "Mark Williams": {
    pos: "C",
    stats: {
      "Points per Game": 15.3,
      "Rebounds per Game": 10.2,
      "Assists per Game": 2.5,
      "Field Goal %": 60.4,
      "Three Point %": 0.0,
      "Free Throw %": 80.4
    },
    scoring: {
      twoPoints: 540,
      threePoints: 0,
      ftPoints: 131,
      totalPoints: 671
    },
    shooting: {}
  },
  "Ochai Agbaji": {
    pos: "SG",
    stats: {
      "Points per Game": 10.4,
      "Rebounds per Game": 3.8,
      "Assists per Game": 1.5,
      "Field Goal %": 49.8,
      "Three Point %": 39.9,
      "Free Throw %": 70.8
    },
    scoring: {
      twoPoints: 330,
      threePoints: 303,
      ftPoints: 34,
      totalPoints: 667
    },
    shooting: {}
  },
  "Keon Ellis": {
    pos: "SG",
    stats: {
      "Points per Game": 8.3,
      "Rebounds per Game": 2.7,
      "Assists per Game": 1.5,
      "Field Goal %": 48.9,
      "Three Point %": 43.3,
      "Free Throw %": 84.9
    },
    scoring: {
      twoPoints: 176,
      threePoints: 417,
      ftPoints: 73,
      totalPoints: 666
    },
    shooting: {}
  },
  "Paul George": {
    pos: "PF",
    stats: {
      "Points per Game": 16.2,
      "Rebounds per Game": 5.3,
      "Assists per Game": 4.3,
      "Field Goal %": 43.0,
      "Three Point %": 35.8,
      "Free Throw %": 81.4
    },
    scoring: {
      twoPoints: 298,
      threePoints: 288,
      ftPoints: 79,
      totalPoints: 665
    },
    shooting: {}
  },
  "Yves Missi": {
    pos: "C",
    stats: {
      "Points per Game": 9.1,
      "Rebounds per Game": 8.2,
      "Assists per Game": 1.4,
      "Field Goal %": 54.7,
      "Three Point %": 0.0,
      "Free Throw %": 62.3
    },
    scoring: {
      twoPoints: 538,
      threePoints: 0,
      ftPoints: 127,
      totalPoints: 665
    },
    shooting: {}
  },
  "Taurean Prince": {
    pos: "SF",
    stats: {
      "Points per Game": 8.2,
      "Rebounds per Game": 3.6,
      "Assists per Game": 1.9,
      "Field Goal %": 45.7,
      "Three Point %": 43.9,
      "Free Throw %": 81.3
    },
    scoring: {
      twoPoints: 176,
      threePoints: 441,
      ftPoints: 39,
      totalPoints: 656
    },
    shooting: {}
  },
  "Andrew Nembhard": {
    pos: "SG",
    stats: {
      "Points per Game": 10.0,
      "Rebounds per Game": 3.3,
      "Assists per Game": 5.0,
      "Field Goal %": 45.8,
      "Three Point %": 29.1,
      "Free Throw %": 79.4
    },
    scoring: {
      twoPoints: 392,
      threePoints: 153,
      ftPoints: 108,
      totalPoints: 653
    },
    shooting: {}
  },
  "Walker Kessler": {
    pos: "C",
    stats: {
      "Points per Game": 11.1,
      "Rebounds per Game": 7.6,
      "Assists per Game": 1.7,
      "Field Goal %": 66.3,
      "Three Point %": 17.6,
      "Free Throw %": 52.0
    },
    scoring: {
      twoPoints: 544,
      threePoints: 18,
      ftPoints: 79,
      totalPoints: 641
    },
    shooting: {}
  },
  "Isaiah Hartenstein": {
    pos: "C",
    stats: {
      "Points per Game": 11.2,
      "Rebounds per Game": 10.7,
      "Assists per Game": 3.8,
      "Field Goal %": 58.1,
      "Three Point %": 0.0,
      "Free Throw %": 67.5
    },
    scoring: {
      twoPoints: 558,
      threePoints: 0,
      ftPoints: 79,
      totalPoints: 637
    },
    shooting: {}
  },
  "Ziaire Williams": {
    pos: "SF",
    stats: {
      "Points per Game": 10.0,
      "Rebounds per Game": 4.6,
      "Assists per Game": 1.3,
      "Field Goal %": 41.2,
      "Three Point %": 34.1,
      "Free Throw %": 82.1
    },
    scoring: {
      twoPoints: 222,
      threePoints: 309,
      ftPoints: 101,
      totalPoints: 632
    },
    shooting: {}
  },
  "Cole Anthony": {
    pos: "PG",
    stats: {
      "Points per Game": 9.4,
      "Rebounds per Game": 2.4,
      "Assists per Game": 2.9,
      "Field Goal %": 42.4,
      "Three Point %": 35.3,
      "Free Throw %": 82.3
    },
    scoring: {
      twoPoints: 306,
      threePoints: 231,
      ftPoints: 93,
      totalPoints: 630
    },
    shooting: {}
  },
  "Wendell Carter Jr.": {
    pos: "C",
    stats: {
      "Points per Game": 9.1,
      "Rebounds per Game": 7.2,
      "Assists per Game": 2.0,
      "Field Goal %": 46.0,
      "Three Point %": 23.4,
      "Free Throw %": 73.7
    },
    scoring: {
      twoPoints: 378,
      threePoints: 111,
      ftPoints: 129,
      totalPoints: 618
    },
    shooting: {}
  },
    "Jeremy Sochan": {
    pos: "PF",
    stats: {
      "Points per Game": 11.4,
      "Rebounds per Game": 6.5,
      "Assists per Game": 2.4,
      "Field Goal %": 53.5,
      "Three Point %": 30.8,
      "Free Throw %": 69.6
    },
    scoring: {
      twoPoints: 446,
      threePoints: 84,
      ftPoints: 87,
      totalPoints: 617
    },
    shooting: {}
  },
  "Isaiah Collier": {
    pos: "PG",
    stats: {
      "Points per Game": 8.7,
      "Rebounds per Game": 3.3,
      "Assists per Game": 6.3,
      "Field Goal %": 42.2,
      "Three Point %": 24.9,
      "Free Throw %": 68.2
    },
    scoring: {
      twoPoints: 384,
      threePoints: 126,
      ftPoints: 105,
      totalPoints: 615
    },
    shooting: {}
  },
  "Draymond Green": {
    pos: "PF",
    stats: {
      "Points per Game": 9.0,
      "Rebounds per Game": 6.1,
      "Assists per Game": 5.6,
      "Field Goal %": 42.4,
      "Three Point %": 32.5,
      "Free Throw %": 68.7
    },
    scoring: {
      twoPoints: 272,
      threePoints: 240,
      ftPoints: 101,
      totalPoints: 613
    },
    shooting: {}
  },
  "Miles McBride": {
    pos: "PG",
    stats: {
      "Points per Game": 9.5,
      "Rebounds per Game": 2.5,
      "Assists per Game": 2.9,
      "Field Goal %": 40.6,
      "Three Point %": 36.9,
      "Free Throw %": 81.3
    },
    scoring: {
      twoPoints: 214,
      threePoints: 345,
      ftPoints: 52,
      totalPoints: 611
    },
    shooting: {}
  },
  "Zach Edey": {
    pos: "C",
    stats: {
      "Points per Game": 9.2,
      "Rebounds per Game": 8.3,
      "Assists per Game": 1.0,
      "Field Goal %": 58.0,
      "Three Point %": 34.6,
      "Free Throw %": 70.9
    },
    scoring: {
      twoPoints: 466,
      threePoints: 54,
      ftPoints: 90,
      totalPoints: 610
    },
    shooting: {}
  },
  "Sam Hauser": {
    pos: "PF",
    stats: {
      "Points per Game": 8.5,
      "Rebounds per Game": 3.2,
      "Assists per Game": 0.9,
      "Field Goal %": 45.1,
      "Three Point %": 41.6,
      "Free Throw %": 100.0
    },
    scoring: {
      twoPoints: 96,
      threePoints: 498,
      ftPoints: 11,
      totalPoints: 605
    },
    shooting: {}
  },
  "Jordan Hawkins": {
    pos: "SG",
    stats: {
      "Points per Game": 10.8,
      "Rebounds per Game": 2.8,
      "Assists per Game": 1.2,
      "Field Goal %": 37.2,
      "Three Point %": 33.1,
      "Free Throw %": 81.6
    },
    scoring: {
      twoPoints: 194,
      threePoints: 330,
      ftPoints: 80,
      totalPoints: 604
    },
    shooting: {}
  },
  "Jordan Clarkson": {
    pos: "SG",
    stats: {
      "Points per Game": 16.2,
      "Rebounds per Game": 3.2,
      "Assists per Game": 3.7,
      "Field Goal %": 40.8,
      "Three Point %": 36.2,
      "Free Throw %": 79.7
    },
    scoring: {
      twoPoints: 117,
      threePoints: 252,
      ftPoints: 114,
      totalPoints: 600
    },
    shooting: {}
  },
  "Cam Thomas": {
    pos: "SG",
    stats: {
      "Points per Game": 24.0,
      "Rebounds per Game": 3.3,
      "Assists per Game": 3.8,
      "Field Goal %": 43.8,
      "Three Point %": 34.9,
      "Free Throw %": 88.1
    },
    scoring: {
      twoPoints: 393,
      threePoints: 204,
      ftPoints: 133,
      totalPoints: 599
    },
    shooting: {}
  },
  "Kel'el Ware": {
    pos: "C",
    stats: {
      "Points per Game": 9.3,
      "Rebounds per Game": 7.4,
      "Assists per Game": 0.9,
      "Field Goal %": 55.4,
      "Three Point %": 31.5,
      "Free Throw %": 68.7
    },
    scoring: {
      twoPoints: 444,
      threePoints: 105,
      ftPoints: 46,
      totalPoints: 595
    },
    shooting: {}
  },
  "Ausar Thompson": {
    pos: "SF",
    stats: {
      "Points per Game": 10.1,
      "Rebounds per Game": 5.1,
      "Assists per Game": 2.3,
      "Field Goal %": 53.5,
      "Three Point %": 22.4,
      "Free Throw %": 64.1
    },
    scoring: {
      twoPoints: 470,
      threePoints: 33,
      ftPoints: 91,
      totalPoints: 594
    },
    shooting: {}
  },
  "Nick Smith Jr.": {
    pos: "SG",
    stats: {
      "Points per Game": 9.9,
      "Rebounds per Game": 2.1,
      "Assists per Game": 2.4,
      "Field Goal %": 39.1,
      "Three Point %": 34.0,
      "Free Throw %": 93.5
    },
    scoring: {
      twoPoints: 236,
      threePoints: 312,
      ftPoints: 43,
      totalPoints: 591
    },
    shooting: {}
  },
  "Kyshawn George": {
    pos: "SG",
    stats: {
      "Points per Game": 8.7,
      "Rebounds per Game": 4.2,
      "Assists per Game": 2.5,
      "Field Goal %": 37.2,
      "Three Point %": 32.2,
      "Free Throw %": 75.3
    },
    scoring: {
      twoPoints: 178,
      threePoints: 342,
      ftPoints: 70,
      totalPoints: 590
    },
    shooting: {}
  },
  "Julian Strawther": {
    pos: "SG",
    stats: {
      "Points per Game": 9.0,
      "Rebounds per Game": 2.2,
      "Assists per Game": 1.3,
      "Field Goal %": 43.2,
      "Three Point %": 34.9,
      "Free Throw %": 82.2
    },
    scoring: {
      twoPoints: 232,
      threePoints: 282,
      ftPoints: 74,
      totalPoints: 588
    },
    shooting: {}
  },
  "Davion Mitchell": {
    pos: "PG",
    stats: {
      "Points per Game": 7.9,
      "Rebounds per Game": 2.3,
      "Assists per Game": 4.9,
      "Field Goal %": 46.8,
      "Three Point %": 39.8,
      "Free Throw %": 69.0
    },
    scoring: {
      twoPoints: 278,
      threePoints: 252,
      ftPoints: 58,
      totalPoints: 588
    },
    shooting: {}
  },
  "Bogdan Bogdanović": {
    pos: "SG",
    stats: {
      "Points per Game": 10.8,
      "Rebounds per Game": 2.9,
      "Assists per Game": 2.7,
      "Field Goal %": 42.7,
      "Three Point %": 36.3,
      "Free Throw %": 87.9
    },
    scoring: {
      twoPoints: 210,
      threePoints: 315,
      ftPoints: 58,
      totalPoints: 583
    },
    shooting: {}
  },
  "Mike Conley": {
    pos: "PG",
    stats: {
      "Points per Game": 8.2,
      "Rebounds per Game": 2.1,
      "Assists per Game": 4.5,
      "Field Goal %": 40.0,
      "Three Point %": 41.0,
      "Free Throw %": 90.0
    },
    scoring: {
      twoPoints: 120,
      threePoints: 381,
      ftPoints: 81,
      totalPoints: 582
    },
    shooting: {}
  },
  "Jose Alvarado": {
    pos: "PG",
    stats: {
      "Points per Game": 10.3,
      "Rebounds per Game": 2.4,
      "Assists per Game": 4.6,
      "Field Goal %": 39.2,
      "Three Point %": 35.9,
      "Free Throw %": 81.1
    },
    scoring: {
      twoPoints: 186,
      threePoints: 333,
      ftPoints: 60,
      totalPoints: 579
    },
    shooting: {}
  },
  "Deandre Ayton": {
    pos: "C",
    stats: {
      "Points per Game": 14.4,
      "Rebounds per Game": 10.2,
      "Assists per Game": 1.6,
      "Field Goal %": 56.6,
      "Three Point %": 18.8,
      "Free Throw %": 66.7
    },
    scoring: {
      twoPoints: 518,
      threePoints: 18,
      ftPoints: 40,
      totalPoints: 576
    },
    shooting: {}
  },
  "Luke Kennard": {
    pos: "SG",
    stats: {
      "Points per Game": 8.9,
      "Rebounds per Game": 2.8,
      "Assists per Game": 3.3,
      "Field Goal %": 47.8,
      "Three Point %": 43.3,
      "Free Throw %": 89.5
    },
    scoring: {
      twoPoints: 186,
      threePoints: 339,
      ftPoints: 51,
      totalPoints: 576
    },
    shooting: {}
  },
    "Johnny Juzang": {
    pos: "SG",
    stats: {
      "Points per Game": 8.9,
      "Rebounds per Game": 2.9,
      "Assists per Game": 1.1,
      "Field Goal %": 42.9,
      "Three Point %": 37.6,
      "Free Throw %": 84.9
    },
    scoring: {
      twoPoints: 172,   // (204 - 118) * 2
      threePoints: 354, // 118 * 3
      ftPoints: 45,
      totalPoints: 571
    },
    shooting: {}
  },
  "Jaime Jaquez Jr.": {
    pos: "SF",
    stats: {
      "Points per Game": 8.6,
      "Rebounds per Game": 4.4,
      "Assists per Game": 2.5,
      "Field Goal %": 46.1,
      "Three Point %": 31.1,
      "Free Throw %": 75.4
    },
    scoring: {
      twoPoints: 352,   // (213 - 37) * 2
      threePoints: 111, // 37 * 3
      ftPoints: 107,
      totalPoints: 570
    },
    shooting: {}
  },
  "Brandon Miller": {
    pos: "SF",
    stats: {
      "Points per Game": 21.0,
      "Rebounds per Game": 4.9,
      "Assists per Game": 3.6,
      "Field Goal %": 40.3,
      "Three Point %": 35.5,
      "Free Throw %": 86.1
    },
    scoring: {
      twoPoints: 188,   // (198 - 104) * 2
      threePoints: 312, // 104 * 3
      ftPoints: 68,
      totalPoints: 568
    },
    shooting: {}
  },
  "Cason Wallace": {
    pos: "SG",
    stats: {
      "Points per Game": 8.4,
      "Rebounds per Game": 2.3,
      "Assists per Game": 2.5,
      "Field Goal %": 47.4,
      "Three Point %": 35.6,
      "Free Throw %": 81.1
    },
    scoring: {
      twoPoints: 316,   // (232 - 74) * 2
      threePoints: 222, // 74 * 3
      ftPoints: 30,
      totalPoints: 568
    },
    shooting: {}
  },
  "Jalen Suggs": {
    pos: "PG",
    stats: {
      "Points per Game": 16.2,
      "Rebounds per Game": 4.0,
      "Assists per Game": 3.7,
      "Field Goal %": 41.0,
      "Three Point %": 31.4,
      "Free Throw %": 88.2
    },
    scoring: {
      twoPoints: 242,   // (197 - 76) * 2
      threePoints: 228, // 76 * 3
      ftPoints: 97,
      totalPoints: 567
    },
    shooting: {}
  },
  "Ayo Dosunmu": {
    pos: "SG",
    stats: {
      "Points per Game": 12.3,
      "Rebounds per Game": 3.5,
      "Assists per Game": 4.5,
      "Field Goal %": 49.2,
      "Three Point %": 32.8,
      "Free Throw %": 78.5
    },
    scoring: {
      twoPoints: 318,   // (221 - 62) * 2
      threePoints: 186, // 62 * 3
      ftPoints: 62,
      totalPoints: 566
    },
    shooting: {}
  },
  "Patrick Williams": {
    pos: "PF",
    stats: {
      "Points per Game": 9.0,
      "Rebounds per Game": 3.8,
      "Assists per Game": 2.0,
      "Field Goal %": 39.7,
      "Three Point %": 35.3,
      "Free Throw %": 72.3
    },
    scoring: {
      twoPoints: 218,   // (205 - 96) * 2
      threePoints: 288, // 96 * 3
      ftPoints: 60,
      totalPoints: 566
    },
    shooting: {}
  },
  "Immanuel Quickley": {
    pos: "PG",
    stats: {
      "Points per Game": 17.1,
      "Rebounds per Game": 3.5,
      "Assists per Game": 5.8,
      "Field Goal %": 42.0,
      "Three Point %": 37.8,
      "Free Throw %": 86.7
    },
    scoring: {
      twoPoints: 198,   // (184 - 85) * 2
      threePoints: 255, // 85 * 3
      ftPoints: 111,
      totalPoints: 564
    },
    shooting: {}
  },
  "Dalano Banton": {
    pos: "PG",
    stats: {
      "Points per Game": 8.3,
      "Rebounds per Game": 2.0,
      "Assists per Game": 2.4,
      "Field Goal %": 39.1,
      "Three Point %": 32.4,
      "Free Throw %": 72.8
    },
    scoring: {
      twoPoints: 252,   // (198 - 72) * 2
      threePoints: 216, // 72 * 3
      ftPoints: 91,
      totalPoints: 559
    },
    shooting: {}
  },
  "Peyton Watson": {
    pos: "SF",
    stats: {
      "Points per Game": 8.1,
      "Rebounds per Game": 3.4,
      "Assists per Game": 1.4,
      "Field Goal %": 47.7,
      "Three Point %": 35.3,
      "Free Throw %": 69.3
    },
    scoring: {
      twoPoints: 312,   // (204 - 48) * 2
      threePoints: 144, // 48 * 3
      ftPoints: 95,
      totalPoints: 551
    },
    shooting: {}
  },
  "Dorian Finney-Smith": {
    pos: "PF",
    stats: {
      "Points per Game": 8.7,
      "Rebounds per Game": 3.9,
      "Assists per Game": 1.4,
      "Field Goal %": 44.8,
      "Three Point %": 41.1,
      "Free Throw %": 66.7
    },
    scoring: {
      twoPoints: 132,   // (195 - 129) * 2
      threePoints: 387, // 129 * 3
      ftPoints: 30,
      totalPoints: 549
    },
    shooting: {}
  },
  "Justin Champagnie": {
    pos: "SF",
    stats: {
      "Points per Game": 8.8,
      "Rebounds per Game": 5.7,
      "Assists per Game": 1.0,
      "Field Goal %": 51.1,
      "Three Point %": 38.3,
      "Free Throw %": 68.5
    },
    scoring: {
      twoPoints: 272,   // (210 - 74) * 2
      threePoints: 222, // 74 * 3
      ftPoints: 50,
      totalPoints: 544
    },
    shooting: {}
  },
  "Dejounte Murray": {
    pos: "PG",
    stats: {
      "Points per Game": 17.5,
      "Rebounds per Game": 6.5,
      "Assists per Game": 7.4,
      "Field Goal %": 39.3,
      "Three Point %": 29.9,
      "Free Throw %": 82.3
    },
    scoring: {
      twoPoints: 284,   // (194 - 52) * 2
      threePoints: 156, // 52 * 3
      ftPoints: 102,
      totalPoints: 542
    },
    shooting: {}
  },
  "A.J. Green": {
    pos: "SG",
    stats: {
      "Points per Game": 7.4,
      "Rebounds per Game": 2.4,
      "Assists per Game": 1.5,
      "Field Goal %": 42.9,
      "Three Point %": 42.7,
      "Free Throw %": 81.5
    },
    scoring: {
      twoPoints: 81,    // (182 - 155) * 2
      threePoints: 465, // 155 * 3
      ftPoints: 22,
      totalPoints: 541
    },
    shooting: {}
  },
  "Aaron Nesmith": {
    pos: "SF",
    stats: {
      "Points per Game": 12.0,
      "Rebounds per Game": 3.9,
      "Assists per Game": 1.6,
      "Field Goal %": 50.7,
      "Three Point %": 43.1,
      "Free Throw %": 91.3
    },
    scoring: {
      twoPoints: 216,   // (192 - 84) * 2
      threePoints: 252, // 84 * 3
      ftPoints: 73,
      totalPoints: 541
    },
    shooting: {}
  },
  "Jared Butler": {
    pos: "SG",
    stats: {
      "Points per Game": 9.0,
      "Rebounds per Game": 1.4,
      "Assists per Game": 3.7,
      "Field Goal %": 44.8,
      "Three Point %": 35.5,
      "Free Throw %": 82.4
    },
    scoring: {
      twoPoints: 286,   // (203 - 60) * 2
      threePoints: 180, // 60 * 3
      ftPoints: 75,
      totalPoints: 541
    },
    shooting: {}
  },
  "Al Horford": {
    pos: "C",
    stats: {
      "Points per Game": 9.0,
      "Rebounds per Game": 6.1,
      "Assists per Game": 2.1,
      "Field Goal %": 42.3,
      "Three Point %": 36.3,
      "Free Throw %": 89.5
    },
    scoring: {
      twoPoints: 162,   // (195 - 114) * 2
      threePoints: 342, // 114 * 3
      ftPoints: 34,
      totalPoints: 538
    },
    shooting: {}
  },
  "Brandon Clarke": {
    pos: "PF",
    stats: {
      "Points per Game": 8.3,
      "Rebounds per Game": 5.1,
      "Assists per Game": 1.0,
      "Field Goal %": 62.1,
      "Three Point %": 5.9,
      "Free Throw %": 70.1
    },
    scoring: {
      twoPoints: 470,   // (236 - 1) * 2
      threePoints: 3,   // 1 * 3
      ftPoints: 61,
      totalPoints: 534
    },
    shooting: {}
  },
  "Tristan Da Silva": {
    pos: "SF",
    stats: {
      "Points per Game": 7.2,
      "Rebounds per Game": 3.3,
      "Assists per Game": 1.5,
      "Field Goal %": 41.2,
      "Three Point %": 33.5,
      "Free Throw %": 87.3
    },
    scoring: {
      twoPoints: 238,   // (199 - 80) * 2
      threePoints: 240, // 80 * 3
      ftPoints: 55,
      totalPoints: 533
    },
    shooting: {}
  },
  "Jamal Shead": {
    pos: "PG",
    stats: {
      "Points per Game": 7.1,
      "Rebounds per Game": 1.5,
      "Assists per Game": 4.2,
      "Field Goal %": 40.5,
      "Three Point %": 32.3,
      "Free Throw %": 76.8
    },
    scoring: {
      twoPoints: 264,   // (204 - 72) * 2
      threePoints: 216, // 72 * 3
      ftPoints: 53,
      totalPoints: 533
    },
    shooting: {}
  },
  "Ricky Council IV": {
    pos: "SF",
    stats: {
      "Points per Game": 7.3,
      "Rebounds per Game": 2.9,
      "Assists per Game": 1.3,
      "Field Goal %": 38.2,
      "Three Point %": 25.8,
      "Free Throw %": 80.4
    },
    scoring: {
      twoPoints: 244,   // (177 - 55) * 2
      threePoints: 165, // 55 * 3
      ftPoints: 123,
      totalPoints: 532
    },
    shooting: {}
  },
  "Nick Richards": {
    pos: "C",
    stats: {
      "Points per Game": 9.3,
      "Rebounds per Game": 8.2,
      "Assists per Game": 0.9,
      "Field Goal %": 59.1,
      "Three Point %": 0.0,
      "Free Throw %": 74.4
    },
    scoring: {
      twoPoints: 410,   // (205 - 0) * 2
      threePoints: 0,   // no threes
      ftPoints: 119,
      totalPoints: 529
    },
    shooting: {}
  },
  "Jaden Ivey": {
    pos: "SG",
    stats: {
      "Points per Game": 17.6,
      "Rebounds per Game": 4.1,
      "Assists per Game": 4.0,
      "Field Goal %": 46.0,
      "Three Point %": 40.9,
      "Free Throw %": 73.3
    },
    scoring: {
      twoPoints: 254,   // (190 - 63) * 2
      threePoints: 189, // 63 * 3
      ftPoints: 85,
      totalPoints: 528
    },
    shooting: {}
  },
  "Jalen Smith": {
    pos: "C",
    stats: {
      "Points per Game": 8.2,
      "Rebounds per Game": 5.6,
      "Assists per Game": 1.0,
      "Field Goal %": 46.6,
      "Three Point %": 32.4,
      "Free Throw %": 80.9
    },
    scoring: {
      twoPoints: 236,   // (190 - 72) * 2
      threePoints: 216, // 72 * 3
      ftPoints: 72,
      totalPoints: 524
    },
    shooting: {}
  },
  "Tyrese Martin": {
    pos: "SG",
    stats: {
      "Points per Game": 8.7,
      "Rebounds per Game": 3.7,
      "Assists per Game": 2.0,
      "Field Goal %": 40.6,
      "Three Point %": 35.1,
      "Free Throw %": 79.3
    },
    scoring: {
      twoPoints: 180,   // (189 - 99) * 2
      threePoints: 297, // 99 * 3
      ftPoints: 46,
      totalPoints: 523
    },
    shooting: {}
  },
  "Ron Holland": {
    pos: "SF",
    stats: {
      "Points per Game": 6.4,
      "Rebounds per Game": 2.7,
      "Assists per Game": 1.0,
      "Field Goal %": 47.4,
      "Three Point %": 23.8,
      "Free Throw %": 75.4
    },
    scoring: {
      twoPoints: 322,   // (197 - 36) * 2
      threePoints: 108, // 36 * 3
      ftPoints: 92,
      totalPoints: 522
    },
    shooting: {}
  },
  "Terance Mann": {
    pos: "SG",
    stats: {
      "Points per Game": 7.7,
      "Rebounds per Game": 3.0,
      "Assists per Game": 1.8,
      "Field Goal %": 49.6,
      "Three Point %": 36.8,
      "Free Throw %": 69.1
    },
    scoring: {
      twoPoints: 290,   // (205 - 60) * 2
      threePoints: 180, // 60 * 3
      ftPoints: 47,
      totalPoints: 517
    },
    shooting: {}
  },
  "Ryan Dunn": {
    pos: "SF",
    stats: {
      "Points per Game": 6.9,
      "Rebounds per Game": 3.6,
      "Assists per Game": 0.8,
      "Field Goal %": 43.0,
      "Three Point %": 31.1,
      "Free Throw %": 48.7
    },
    scoring: {
      twoPoints: 246,   // (205 - 82) * 2
      threePoints: 246, // 82 * 3
      ftPoints: 19,
      totalPoints: 511
    },
    shooting: {}
  },
  "Sam Merrill": {
    pos: "SG",
    stats: {
      "Points per Game": 7.2,
      "Rebounds per Game": 2.2,
      "Assists per Game": 1.5,
      "Field Goal %": 40.6,
      "Three Point %": 37.2,
      "Free Throw %": 96.6
    },
    scoring: {
      twoPoints: 105,   // (172 - 137) * 2
      threePoints: 411, // 137 * 3
      ftPoints: 28,
      totalPoints: 509
    },
    shooting: {}
  },
  "Josh Green": {
    pos: "SG",
    stats: {
      "Points per Game": 7.4,
      "Rebounds per Game": 2.5,
      "Assists per Game": 1.6,
      "Field Goal %": 42.8,
      "Three Point %": 39.1,
      "Free Throw %": 68.1
    },
    scoring: {
      twoPoints: 166,   // (180 - 97) * 2
      threePoints: 291, // 97 * 3
      ftPoints: 49,
      totalPoints: 506
    },
    shooting: {}
  },
  "Goga Bitadze": {
    pos: "C",
    stats: {
      "Points per Game": 7.2,
      "Rebounds per Game": 6.6,
      "Assists per Game": 1.0,
      "Field Goal %": 61.1,
      "Three Point %": 10.7,
      "Free Throw %": 65.6
    },
    scoring: {
      twoPoints: 408,   // (207 - 3) * 2
      threePoints: 9,   // 3 * 3
      ftPoints: 85,
      totalPoints: 502
    },
    shooting: {}
  },
  "Chris Boucher": {
    pos: "PF",
    stats: {
      "Points per Game": 10.0,
      "Rebounds per Game": 4.5,
      "Assists per Game": 0.7,
      "Field Goal %": 49.2,
      "Three Point %": 36.3,
      "Free Throw %": 78.2
    },
    scoring: {
      twoPoints: 224,   // (182 - 70) * 2
      threePoints: 210, // 70 * 3
      ftPoints: 68,
      totalPoints: 502
    },
    shooting: {}
  },
  "Cameron Payne": {
    pos: "PG",
    stats: {
      "Points per Game": 6.9,
      "Rebounds per Game": 1.4,
      "Assists per Game": 2.8,
      "Field Goal %": 40.1,
      "Three Point %": 36.3,
      "Free Throw %": 90.7
    },
    scoring: {
      twoPoints: 172,   // (179 - 93) * 2
      threePoints: 279, // 93 * 3
      ftPoints: 49,
      totalPoints: 500
    },
    shooting: {}
  },
  "Jaden Hardy": {
    pos: "SG",
    stats: {
      "Points per Game": 8.7,
      "Rebounds per Game": 2.0,
      "Assists per Game": 1.6,
      "Field Goal %": 43.5,
      "Three Point %": 38.6,
      "Free Throw %": 69.8
    },
    scoring: {
      twoPoints: 208,   // (180 - 76) * 2
      threePoints: 228, // 76 * 3
      ftPoints: 60,
      totalPoints: 496
    },
    shooting: {}
  },
  "Nikola Jović": {
    pos: "PF",
    stats: {
      "Points per Game": 10.7,
      "Rebounds per Game": 3.9,
      "Assists per Game": 2.8,
      "Field Goal %": 45.6,
      "Three Point %": 37.1,
      "Free Throw %": 82.8
    },
    scoring: {
      twoPoints: 188,   // (172 - 78) * 2
      threePoints: 234, // 78 * 3
      ftPoints: 72,
      totalPoints: 494
    },
    shooting: {}
  },
  "Clint Capela": {
    pos: "C",
    stats: {
      "Points per Game": 8.9,
      "Rebounds per Game": 8.5,
      "Assists per Game": 1.1,
      "Field Goal %": 55.9,
      "Three Point %": 0.0,
      "Free Throw %": 53.6
    },
    scoring: {
      twoPoints: 436,   // (218 - 0) * 2
      threePoints: 0,
      ftPoints: 52,
      totalPoints: 488
    },
    shooting: {}
  },
  "Chet Holmgren": {
    pos: "C",
    stats: {
      "Points per Game": 15.0,
      "Rebounds per Game": 8.0,
      "Assists per Game": 2.0,
      "Field Goal %": 49.0,
      "Three Point %": 37.9,
      "Free Throw %": 75.4
    },
    scoring: {
      twoPoints: 246,   // (167 - 44) * 2
      threePoints: 132, // 44 * 3
      ftPoints: 101,
      totalPoints: 479
    },
    shooting: {}
  },
  "Haywood Highsmith": {
    pos: "SF",
    stats: {
      "Points per Game": 6.5,
      "Rebounds per Game": 3.4,
      "Assists per Game": 1.5,
      "Field Goal %": 45.8,
      "Three Point %": 38.2,
      "Free Throw %": 72.1
    },
    scoring: {
      twoPoints: 180,   // (179 - 89) * 2
      threePoints: 267, // 89 * 3
      ftPoints: 31,
      totalPoints: 478
    },
    shooting: {}
  },
  "Cam Whitmore": {
    pos: "SF",
    stats: {
      "Points per Game": 9.4,
      "Rebounds per Game": 3.0,
      "Assists per Game": 1.0,
      "Field Goal %": 44.4,
      "Three Point %": 35.5,
      "Free Throw %": 75.0
    },
    scoring: {
      twoPoints: 228,   // (179 - 65) * 2
      threePoints: 195, // 65 * 3
      ftPoints: 54,
      totalPoints: 477
    },
    shooting: {}
  },
  "Kris Dunn": {
    pos: "PG",
    stats: {
      "Points per Game": 6.4,
      "Rebounds per Game": 3.4,
      "Assists per Game": 6.5,
      "Field Goal %": 43.9,
      "Three Point %": 33.5,
      "Free Throw %": 68.2
    },
    scoring: {
      twoPoints: 234,   // (192 - 75) * 2
      threePoints: 225, // 75 * 3
      ftPoints: 15,
      totalPoints: 474
    },
    shooting: {}
  },
  "Max Strus": {
    pos: "SF",
    stats: {
      "Points per Game": 9.4,
      "Rebounds per Game": 4.3,
      "Assists per Game": 3.2,
      "Field Goal %": 44.2,
      "Three Point %": 38.6,
      "Free Throw %": 82.4
    },
    scoring: {
      twoPoints: 104,   // (165 - 113) * 2
      threePoints: 339, // 113 * 3
      ftPoints: 28,
      totalPoints: 471
    },
    shooting: {}
  },
  "Jarace Walker": {
    pos: "PF",
    stats: {
      "Points per Game": 6.1,
      "Rebounds per Game": 3.1,
      "Assists per Game": 1.5,
      "Field Goal %": 47.2,
      "Three Point %": 40.5,
      "Free Throw %": 66.7
    },
    scoring: {
      twoPoints: 190,   // (170 - 75) * 2
      threePoints: 225, // 75 * 3
      ftPoints: 46,
      totalPoints: 461
    },
    shooting: {}
  },
  "Gabe Vincent": {
    pos: "PG",
    stats: {
      "Points per Game": 6.4,
      "Rebounds per Game": 1.3,
      "Assists per Game": 1.4,
      "Field Goal %": 40.0,
      "Three Point %": 35.3,
      "Free Throw %": 71.4
    },
    scoring: {
      twoPoints: 118,   // (168 - 109) * 2
      threePoints: 327, // 109 * 3
      ftPoints: 15,
      totalPoints: 460
    },
    shooting: {}
  },
  "Jake LaRavia": {
    pos: "PF",
    stats: {
      "Points per Game": 6.9,
      "Rebounds per Game": 3.9,
      "Assists per Game": 2.4,
      "Field Goal %": 47.5,
      "Three Point %": 42.3,
      "Free Throw %": 67.8
    },
    scoring: {
      twoPoints: 200,   // (160 - 60) * 2
      threePoints: 180, // 60 * 3
      ftPoints: 78,
      totalPoints: 458
    },
    shooting: {}
  },
  "Jusuf Nurkić": {
    pos: "C",
    stats: {
      "Points per Game": 8.9,
      "Rebounds per Game": 7.8,
      "Assists per Game": 2.3,
      "Field Goal %": 47.7,
      "Three Point %": 30.5,
      "Free Throw %": 66.4
    },
    scoring: {
      twoPoints: 272,   // (168 - 32) * 2
      threePoints: 96,  // 32 * 3
      ftPoints: 85,
      totalPoints: 453
    },
    shooting: {}
  },
  "Joel Embiid": {
    pos: "C",
    stats: {
      "Points per Game": 23.8,
      "Rebounds per Game": 8.2,
      "Assists per Game": 4.5,
      "Field Goal %": 44.4,
      "Three Point %": 29.9,
      "Free Throw %": 88.2
    },
    scoring: {
      twoPoints: 234,   // (140 - 23) * 2
      threePoints: 69,  // 23 * 3
      ftPoints: 149,
      totalPoints: 452
    },
    shooting: {}
  }
};

// Function to calculate shooting breakdown
function calculateShootingBreakdown(player) {
  const { twoPoints, threePoints, ftPoints, totalPoints } = player.scoring;
  return {
    "Two Pointers": ((twoPoints / totalPoints) * 100).toFixed(1),
    "Three Pointers": ((threePoints / totalPoints) * 100).toFixed(1),
    "Free Throws": ((ftPoints / totalPoints) * 100).toFixed(1)
  };
}

// Auto-calc for all players
for (const name in playerStats) {
  playerStats[name].shooting = calculateShootingBreakdown(playerStats[name]);
}

const allPlayerNames = Object.keys(playerStats);


// --- Updated Team Standings Data ---
const standingsData = {
east: [
    { name: "Cleveland Cavaliers", record: "64-18", win: 0.780, ppg: 121.9, oppPpg: 112.4, class: "team-cavaliers" },
    { name: "Boston Celtics", record: "61-21", win: 0.744, ppg: 116.3, oppPpg: 107.2, class: "team-celtics" },
    { name: "New York Knicks", record: "51-31", win: 0.622, ppg: 115.8, oppPpg: 111.7, class: "team-knicks" },
    { name: "Indiana Pacers", record: "50-32", win: 0.610, ppg: 117.4, oppPpg: 115.1, class: "team-pacers" },
    { name: "Milwaukee Bucks", record: "48-34", win: 0.585, ppg: 115.5, oppPpg: 113.0, class: "team-bucks" },
    { name: "Detroit Pistons", record: "44-38", win: 0.537, ppg: 115.5, oppPpg: 113.6, class: "team-pistons" },
    { name: "Orlando Magic", record: "41-41", win: 0.500, ppg: 105.4, oppPpg: 105.5, class: "team-magic" },
    { name: "Atlanta Hawks", record: "40-42", win: 0.488, ppg: 118.2, oppPpg: 119.3, class: "team-hawks" },
    { name: "Chicago Bulls", record: "39-43", win: 0.476, ppg: 117.8, oppPpg: 119.4, class: "team-bulls" },
    { name: "Miami Heat", record: "37-45", win: 0.451, ppg: 110.6, oppPpg: 110.0, class: "team-heat" },
    { name: "Toronto Raptors", record: "30-52", win: 0.366, ppg: 110.9, oppPpg: 115.2, class: "team-raptors" },
    { name: "Brooklyn Nets", record: "26-56", win: 0.317, ppg: 105.1, oppPpg: 112.2, class: "team-nets" },
    { name: "Philadelphia 76ers", record: "24-58", win: 0.293, ppg: 109.6, oppPpg: 115.8, class: "team-76ers" },
    { name: "Charlotte Hornets", record: "19-63", win: 0.232, ppg: 105.1, oppPpg: 114.2, class: "team-hornets" },
    { name: "Washington Wizards", record: "18-64", win: 0.220, ppg: 108.0, oppPpg: 120.4, class: "team-wizards" },
],
west: [
    { name: "Oklahoma City Thunder", record: "68-14", win: 0.829, ppg: 120.5, oppPpg: 107.6, class: "team-thunder" },
    { name: "Houston Rockets", record: "52-30", win: 0.634, ppg: 114.3, oppPpg: 109.8, class: "team-rockets" },
    { name: "Los Angeles Lakers", record: "50-32", win: 0.610, ppg: 113.4, oppPpg: 112.2, class: "team-lakers" },
    { name: "Denver Nuggets", record: "50-32", win: 0.610, ppg: 120.8, oppPpg: 116.9, class: "team-nuggets" },
    { name: "Los Angeles Clippers", record: "50-32", win: 0.610, ppg: 112.9, oppPpg: 108.2, class: "team-clippers" },
    { name: "Minnesota Timberwolves", record: "49-33", win: 0.598, ppg: 114.3, oppPpg: 109.3, class: "team-timberwolves" },
    { name: "Golden State Warriors", record: "48-34", win: 0.585, ppg: 113.8, oppPpg: 110.5, class: "team-warriors" },
    { name: "Memphis Grizzlies", record: "48-34", win: 0.585, ppg: 121.7, oppPpg: 116.9, class: "team-grizzlies" },
    { name: "Sacramento Kings", record: "40-42", win: 0.488, ppg: 115.7, oppPpg: 115.3, class: "team-kings" },
    { name: "Dallas Mavericks", record: "39-43", win: 0.476, ppg: 114.2, oppPpg: 115.4, class: "team-mavericks" },
    { name: "Phoenix Suns", record: "36-46", win: 0.439, ppg: 113.6, oppPpg: 116.6, class: "team-suns" },
    { name: "Portland Trail Blazers", record: "36-46", win: 0.439, ppg: 110.9, oppPpg: 113.9, class: "team-trailblazers" },
    { name: "San Antonio Spurs", record: "34-48", win: 0.415, ppg: 113.9, oppPpg: 116.7, class: "team-spurs" },
    { name: "New Orleans Pelicans", record: "21-61", win: 0.256, ppg: 109.8, oppPpg: 119.3, class: "team-pelicans" },
    { name: "Utah Jazz", record: "17-65", win: 0.207, ppg: 111.9, oppPpg: 121.2, class: "team-jazz" },
]
};

// --- General Tab Switching ---
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Scroll to the top of the page on load
    window.scrollTo(0, 0);

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            navLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            const targetTab = e.target.closest('.nav-link').dataset.tab;
            document.getElementById(targetTab).classList.add('active');
            e.target.closest('.nav-link').classList.add('active');

            if (targetTab === 'dashboard') {
                renderDashboardChart();
                renderStandings('ALL');
            } else if (targetTab === 'compare') {
                if (selectedPlayer1 && selectedPlayer2) {
                    renderComparisonCharts(selectedPlayer1, selectedPlayer2);
                }
            }
        });
    });

    // Handle Standings Filters
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const conference = button.dataset.conference;
            renderStandings(conference);
        });
    });

    renderDashboardChart();
    populatePlayerDatalists();
    renderStandings('ALL');
});

// --- Dashboard Standings Table ---
const standingsTableBody = document.getElementById('standingsTableBody');

function renderStandings(conference) {
    standingsTableBody.innerHTML = '';

    let teamsToShow = [];
    if (conference === 'EAST') {
        teamsToShow = standingsData.east;
    } else if (conference === 'WEST') {
        teamsToShow = standingsData.west;
    } else {
        teamsToShow = [...standingsData.east, ...standingsData.west].sort((a, b) => b.win - a.win);
    }

    teamsToShow.forEach((team, index) => {
        const row = document.createElement('tr');
        const rank = index + 1;
        
        row.innerHTML = `
            <td>${rank}</td>
            <td><i class="fas fa-circle ${team.class}"></i> ${team.name}</td>
            <td>${team.record}</td>
            <td>${team.win.toFixed(3)}</td>
            <td>${team.ppg.toFixed(1)}</td>
            <td>${team.oppPpg.toFixed(1)}</td>
        `;
        standingsTableBody.appendChild(row);
    });
}


// --- Smooth Scroll for Explore Analytics Button ---
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

// --- Dashboard Chart ---
let dashboardChart;
function renderDashboardChart() {
    const ctx = document.getElementById('shootingChart').getContext('2d');
    if (dashboardChart) {
        dashboardChart.destroy();
    }
    const data = {
        labels: ['~ Two Pointers', '~ Three Pointers', '~ Free Throws'],
        datasets: [{
            data: [48, 46, 16],
            backgroundColor: [
                '#ff7e5f',
                '#6dd5ed',
                '#007bff'
            ],
            hoverBackgroundColor: [
                '#e66b4d',
                '#59c6dd',
                '#006ad5'
            ],
            borderColor: '#2a2a2a',
            borderWidth: 2
        }]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#e0e0e0',
                    font: { size: 14, family: 'Montserrat' },
                    boxWidth: 20,
                    padding: 20
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const label = tooltipItem.label || '';
                        const value = tooltipItem.parsed || 0;
                        return `${label}: ${value}%`;
                    }
                }
            }
        }
    };
    dashboardChart = new Chart(ctx, { type: 'doughnut', data: data, options: options });
}

// --- Player Comparison Logic ---
const player1SearchInput = document.getElementById('player1Search');
const player2SearchInput = document.getElementById('player2Search');
const player1OptionsDatalist = document.getElementById('player1-options');
const player2OptionsDatalist = document.getElementById('player2-options');
const player1SelectedTag = document.getElementById('player1Selected');
const player2SelectedTag = document.getElementById('player2Selected');
const player1NameHeader = document.getElementById('player1NameHeader');
const player2NameHeader = document.getElementById('player2NameHeader');
const comparisonTableBody = document.getElementById('comparisonTableBody');
const headToHeadSection = document.querySelector('.head-to-head-section');
const shootingChartsSection = document.querySelector('.shooting-charts-section');
const player1ChartHeader = document.getElementById('player1ChartHeader');
const player2ChartHeader = document.getElementById('player2ChartHeader');

let selectedPlayer1 = null;
let selectedPlayer2 = null;

let player1ShootingChart;
let player2ShootingChart;

function populatePlayerDatalists() {
    player1OptionsDatalist.innerHTML = '';
    player2OptionsDatalist.innerHTML = '';
    allPlayerNames.forEach(name => {
        const option1 = document.createElement('option');
        option1.value = name;
        player1OptionsDatalist.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = name;
        player2OptionsDatalist.appendChild(option2);
    });
}

function selectPlayer(playerNum, playerName) {
    const playerInput = playerNum === 1 ? player1SearchInput : player2SearchInput;
    const playerSelectedTag = playerNum === 1 ? player1SelectedTag : player2SelectedTag;

    if (!playerStats[playerName]) {
        alert("Player not found in our database. Please choose from the list.");
        playerInput.value = '';
        return;
    }

    if (playerNum === 1) {
        selectedPlayer1 = playerName;
        player1NameHeader.textContent = playerName;
        player1ChartHeader.textContent = `${playerName.split(' ')[0]}'s Shooting`;
    } else {
        selectedPlayer2 = playerName;
        player2NameHeader.textContent = playerName;
        player2ChartHeader.textContent = `${playerName.split(' ')[0]}'s Shooting`;
    }

    playerInput.style.display = 'none';
    playerSelectedTag.querySelector('.player-name-tag').textContent = playerName;
    playerSelectedTag.querySelector('.player-pos-tag').textContent = playerStats[playerName].pos;
    playerSelectedTag.style.display = 'flex';

    playerInput.value = '';

    if (selectedPlayer1 && selectedPlayer2) {
        displayComparison();
    }
}

function removePlayer(playerNum) {
    const playerInput = playerNum === 1 ? player1SearchInput : player2SearchInput;
    const playerSelectedTag = playerNum === 1 ? player1SelectedTag : player2SelectedTag;

    if (playerNum === 1) {
        selectedPlayer1 = null;
        player1NameHeader.textContent = 'Player 1';
        player1ChartHeader.textContent = 'Player 1 Shooting';
    } else {
        selectedPlayer2 = null;
        player2NameHeader.textContent = 'Player 2';
        player2ChartHeader.textContent = 'Player 2 Shooting';
    }

    playerSelectedTag.style.display = 'none';
    playerInput.style.display = 'block';

    if (!selectedPlayer1 || !selectedPlayer2) {
        headToHeadSection.style.display = 'none';
        shootingChartsSection.style.display = 'none';
    }
    destroyComparisonCharts();
}

function displayComparison() {
    comparisonTableBody.innerHTML = '';

    const stats1 = playerStats[selectedPlayer1].stats;
    const stats2 = playerStats[selectedPlayer2].stats;

    headToHeadSection.style.display = 'block';
    shootingChartsSection.style.display = 'flex';

    for (const statName in stats1) {
        const value1 = stats1[statName];
        const value2 = stats2[statName];

        const row = document.createElement('tr');
        const td1 = document.createElement('td');
        const tdStat = document.createElement('td');
        const td2 = document.createElement('td');

        tdStat.textContent = statName;

        let player1IsBetter = false;
        let player2IsBetter = false;

        if (statName.includes('%')) {
            if (parseFloat(value1) > parseFloat(value2)) player1IsBetter = true;
            else if (parseFloat(value2) > parseFloat(value1)) player2IsBetter = true;
        } else {
            if (value1 > value2) player1IsBetter = true;
            else if (value2 > value1) player2IsBetter = true;
        }
        
        td1.innerHTML = `${value1}${player1IsBetter ? ' <i class="fas fa-crown"></i>' : ''}`;
        td2.innerHTML = `${player2IsBetter ? '<i class="fas fa-crown"></i> ' : ''}${value2}`;
        
        row.appendChild(td1);
        row.appendChild(tdStat);
        row.appendChild(td2);
        comparisonTableBody.appendChild(row);
    }

    renderComparisonCharts(selectedPlayer1, selectedPlayer2);
}

function destroyComparisonCharts() {
    if (player1ShootingChart) {
        player1ShootingChart.destroy();
        player1ShootingChart = null;
    }
    if (player2ShootingChart) {
        player2ShootingChart.destroy();
        player2ShootingChart = null;
    }
}

function renderComparisonCharts(player1Name, player2Name) {
    destroyComparisonCharts();

    const p1ShootingData = playerStats[player1Name].shooting;
    const p2ShootingData = playerStats[player2Name].shooting;

    const ctx1 = document.getElementById('player1ShootingChart').getContext('2d');
    const ctx2 = document.getElementById('player2ShootingChart').getContext('2d');

    const labels = ['Two Pointers', 'Three Pointers', 'Free Throws'];
    const colors1 = ['#ff7e5f', '#fddb3a', '#e0e0e0'];
    const colors2 = ['#ff7e5d', '#fddb3a', '#e0e0e0'];

    const chartOptions = (chartLabels, chartColors) => ({
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
        legend: { display: false },
        tooltip: {
            callbacks: {
                label: function(tooltipItem) {
                    const label = chartLabels[tooltipItem.dataIndex] || '';
                    const value = tooltipItem.parsed || 0;
                    return `${label}: ${value}%`;
                }
            }
        }
    }
});

    player1ShootingChart = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: [p1ShootingData["Two Pointers"], p1ShootingData["Three Pointers"], p1ShootingData["Free Throws"]],
                backgroundColor: colors1,
                borderColor: '#2a2a2a',
                borderWidth: 2
            }]
        },
        options: chartOptions(labels, colors1)
    });

    player2ShootingChart = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: [p2ShootingData["Two Pointers"], p2ShootingData["Three Pointers"], p2ShootingData["Free Throws"]],
                backgroundColor: colors2,
                borderColor: '#2a2a2a',
                borderWidth: 2
            }]
        },
        options: chartOptions(labels, colors2)
    });
}

// Event Listeners for Player Search and Selection
player1SearchInput.addEventListener('change', (e) => selectPlayer(1, e.target.value));
player2SearchInput.addEventListener('change', (e) => selectPlayer(2, e.target.value));

document.querySelectorAll('.remove-player').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const playerNum = parseInt(e.target.dataset.player);
        removePlayer(playerNum);
    });
});

// Event Listeners for Popular Comparison Buttons
document.querySelectorAll('.popular-compare-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const p1Name = e.target.dataset.player1;
        const p2Name = e.target.dataset.player2;

        selectPlayer(1, p1Name);
        selectPlayer(2, p2Name);

        player1SearchInput.style.display = 'none';
        player1SelectedTag.style.display = 'flex';
        player1SelectedTag.querySelector('.player-name-tag').textContent = p1Name;
        player1SelectedTag.querySelector('.player-pos-tag').textContent = playerStats[p1Name].pos;

        player2SearchInput.style.display = 'none';
        player2SelectedTag.style.display = 'flex';
        player2SelectedTag.querySelector('.player-name-tag').textContent = p2Name;
        player2SelectedTag.querySelector('.player-pos-tag').textContent = playerStats[p2Name].pos;
    });

});
