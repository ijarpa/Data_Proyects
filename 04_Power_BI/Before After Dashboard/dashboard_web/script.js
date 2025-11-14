document.addEventListener('DOMContentLoaded', function () {
    const salesData = `fecha_venta,id_producto,modelo,categoría,canal_venta,cliente,unidades,precio_unitario,monto_total
2024-01-01,INF-006,Cargo Pants Tactical Fit,Inferior,TikTok Shop,Cliente_107,2,37384,74768
2024-01-01,CAL-011,Air Force 1 ‘07 Triple White,Calzado,Tienda Física,Cliente_67,4,33964,135856
2024-01-01,CAL-011,Air Force 1 ‘07 Triple White,Calzado,Instagram,Cliente_31,5,25009,125045
2024-01-01,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,Tienda Física,Cliente_122,1,39483,39483
2024-01-01,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Instagram,Cliente_137,5,25909,129545
2024-01-01,SUP-004,Classic Polo Black,Superior,Instagram,Cliente_186,5,22617,113085
2024-01-01,SUP-002,Skateboarding Logo Hoodie,Superior,Tienda Física,Cliente_67,1,25117,25117
2024-01-02,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,TikTok Shop,Cliente_61,2,24229,48458
2024-01-02,INF-009,Track Pants “Streets”,Inferior,Tienda Física,Cliente_36,3,33694,101082
2024-01-02,CAL-013,Old Skool Black/White,Calzado,Tienda Física,Cliente_57,2,21174,42348
2024-01-02,SUP-002,Skateboarding Logo Hoodie,Superior,Tienda Física,Cliente_18,5,37906,189530
2024-01-02,INF-008,Sweatpants Classic Grey,Inferior,TikTok Shop,Cliente_184,1,37674,37674
2024-01-02,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,Instagram,Cliente_57,5,36964,184820
2024-01-02,SUP-002,Skateboarding Logo Hoodie,Superior,Tienda Física,Cliente_200,3,25552,76656
2024-01-02,SUP-003,Graphic Crewneck “Astro Drift”,Superior,TikTok Shop,Cliente_94,5,16164,80820
2024-01-03,INF-010,Biker Shorts Urban Black,Inferior,Instagram,Cliente_77,1,44361,44361
2024-01-03,ACC-019,Cinturón de lona con hebilla,Accesorios,Tienda Física,Cliente_137,4,37820,151280
2024-01-03,ACC-017,Crossbody Bag Mini Messenger,Accesorios,Tienda Online,Cliente_123,1,21213,21213
2024-01-03,ACC-017,Crossbody Bag Mini Messenger,Accesorios,Tienda Física,Cliente_73,3,27506,82518
2024-01-03,ACC-016,Bucket Hat “Street Jungle”,Accesorios,TikTok Shop,Cliente_128,5,30345,151725
2024-01-03,SUP-003,Graphic Crewneck “Astro Drift”,Superior,TikTok Shop,Cliente_16,2,16933,33866
2024-01-04,CAL-011,Air Force 1 ‘07 Triple White,Calzado,TikTok Shop,Cliente_109,4,20679,82716
2024-01-05,INF-010,Biker Shorts Urban Black,Inferior,Tienda Física,Cliente_58,5,32666,163330
2024-01-05,SUP-005,Denim Jacket Vintage Wash,Superior,TikTok Shop,Cliente_136,4,29264,117056
2024-01-05,SUP-001,Essentials Oversized Tee,Superior,Tienda Online,Cliente_107,5,24477,122385
2024-01-05,SUP-004,Classic Polo Black,Superior,TikTok Shop,Cliente_51,5,16731,83655
2024-01-06,CAL-013,Old Skool Black/White,Calzado,Tienda Online,Cliente_151,5,41700,208500
2024-01-06,ACC-017,Crossbody Bag Mini Messenger,Accesorios,Tienda Física,Cliente_172,2,38817,77634
2024-01-06,SUP-001,Essentials Oversized Tee,Superior,Tienda Online,Cliente_98,2,27833,55666
2024-01-06,SUP-005,Denim Jacket Vintage Wash,Superior,Tienda Física,Cliente_81,5,18559,92795
2024-01-06,SUP-003,Graphic Crewneck “Astro Drift”,Superior,Instagram,Cliente_63,2,39837,79674
2024-01-06,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Tienda Física,Cliente_7,5,42292,211460
2024-01-06,ACC-017,Crossbody Bag Mini Messenger,Accesorios,Instagram,Cliente_177,4,15289,61156
2024-01-07,CAL-013,Old Skool Black/White,Calzado,Instagram,Cliente_82,2,22063,44126
2024-01-07,INF-006,Cargo Pants Tactical Fit,Inferior,TikTok Shop,Cliente_172,5,31654,158270
2024-01-07,INF-008,Sweatpants Classic Grey,Inferior,TikTok Shop,Cliente_60,5,42152,210760
2024-01-07,ACC-017,Crossbody Bag Mini Messenger,Accesorios,TikTok Shop,Cliente_72,3,36924,110772
2024-01-07,INF-009,Track Pants “Streets”,Inferior,Instagram,Cliente_35,5,43408,217040
2024-01-07,INF-008,Sweatpants Classic Grey,Inferior,Instagram,Cliente_128,4,21183,84732
2024-01-07,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,TikTok Shop,Cliente_30,4,42179,168716
2024-01-08,SUP-002,Skateboarding Logo Hoodie,Superior,Tienda Física,Cliente_118,1,22874,22874
2024-01-08,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Instagram,Cliente_82,5,41046,205230
2024-01-08,INF-010,Biker Shorts Urban Black,Inferior,TikTok Shop,Cliente_150,3,21877,65631
2024-01-08,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Instagram,Cliente_113,2,31834,63668
2024-01-09,CAL-011,Air Force 1 ‘07 Triple White,Calzado,Instagram,Cliente_100,2,17065,34130
2024-01-09,ACC-016,Bucket Hat “Street Jungle”,Accesorios,Tienda Física,Cliente_142,5,17308,86540
2024-01-09,CAL-013,Old Skool Black/White,Calzado,Instagram,Cliente_145,5,21523,107615
2024-01-10,SUP-001,Essentials Oversized Tee,Superior,Tienda Física,Cliente_112,5,37120,185600
2024-01-10,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Tienda Online,Cliente_52,4,17596,70384
2024-01-11,SUP-003,Graphic Crewneck “Astro Drift”,Superior,Instagram,Cliente_66,4,35096,140384
2024-01-11,ACC-016,Bucket Hat “Street Jungle”,Accesorios,TikTok Shop,Cliente_35,1,38887,38887
2024-01-11,INF-010,Biker Shorts Urban Black,Inferior,Tienda Física,Cliente_147,5,44219,221095
2024-01-11,INF-010,Biker Shorts Urban Black,Inferior,Tienda Online,Cliente_178,4,38824,155296
2024-01-11,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Tienda Física,Cliente_121,4,27981,111924
2024-01-11,SUP-003,Graphic Crewneck “Astro Drift”,Superior,TikTok Shop,Cliente_119,4,33593,134372
2024-01-11,CAL-013,Old Skool Black/White,Calzado,Tienda Online,Cliente_52,3,29684,89052
2024-01-11,CAL-013,Old Skool Black/White,Calzado,Instagram,Cliente_148,2,36454,72908
2024-01-12,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Tienda Online,Cliente_134,5,33307,166535
2024-01-12,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,TikTok Shop,Cliente_70,4,19052,76208
2024-01-12,CAL-013,Old Skool Black/White,Calzado,Tienda Física,Cliente_55,1,17007,17007
2024-01-12,CAL-015,RS-X Efekt Gradient,Calzado,Tienda Física,Cliente_117,3,35793,107379
2024-01-13,INF-008,Sweatpants Classic Grey,Inferior,Instagram,Cliente_12,2,36158,72316
2024-01-13,SUP-003,Graphic Crewneck “Astro Drift”,Superior,Instagram,Cliente_168,3,42895,128685
2024-01-13,INF-006,Cargo Pants Tactical Fit,Inferior,Instagram,Cliente_15,2,17804,35608
2024-01-13,CAL-011,Air Force 1 ‘07 Triple White,Calzado,Tienda Online,Cliente_55,4,44401,177604
2024-01-14,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,TikTok Shop,Cliente_133,1,25273,25273
2024-01-14,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,Instagram,Cliente_11,4,26169,104676
2024-01-14,ACC-016,Bucket Hat “Street Jungle”,Accesorios,Tienda Online,Cliente_2,4,39108,156432
2024-01-14,ACC-019,Cinturón de lona con hebilla,Accesorios,TikTok Shop,Cliente_170,3,27340,82020
2024-01-14,SUP-004,Classic Polo Black,Superior,Tienda Online,Cliente_101,4,22544,90176
2024-01-14,INF-008,Sweatpants Classic Grey,Inferior,Tienda Online,Cliente_8,1,38519,38519
2024-01-14,CAL-011,Air Force 1 ‘07 Triple White,Calzado,TikTok Shop,Cliente_159,3,44998,134994
2024-01-15,CAL-015,RS-X Efekt Gradient,Calzado,TikTok Shop,Cliente_117,3,41260,123780
2024-01-15,SUP-003,Graphic Crewneck “Astro Drift”,Superior,Tienda Física,Cliente_106,3,40305,120915
2024-01-15,INF-010,Biker Shorts Urban Black,Inferior,Tienda Online,Cliente_36,5,36168,180840
2024-01-15,CAL-015,RS-X Efekt Gradient,Calzado,Tienda Online,Cliente_98,4,37473,149892
2024-01-15,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,TikTok Shop,Cliente_10,5,30827,154135
2024-01-15,INF-010,Biker Shorts Urban Black,Inferior,Tienda Online,Cliente_36,3,25508,76524
2024-01-15,CAL-015,RS-X Efekt Gradient,Calzado,TikTok Shop,Cliente_154,4,24138,96552
2024-01-15,CAL-015,RS-X Efekt Gradient,Calzado,TikTok Shop,Cliente_79,5,24420,122100
2024-01-16,CAL-015,RS-X Efekt Gradient,Calzado,TikTok Shop,Cliente_76,4,30566,122264
2024-01-16,ACC-019,Cinturón de lona con hebilla,Accesorios,Instagram,Cliente_33,5,29754,148770
2024-01-16,INF-010,Biker Shorts Urban Black,Inferior,Instagram,Cliente_13,4,26506,106024
2024-01-16,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,Tienda Online,Cliente_125,4,42792,171168
2024-01-16,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,TikTok Shop,Cliente_85,5,39294,196470
2024-01-16,SUP-002,Skateboarding Logo Hoodie,Superior,Tienda Física,Cliente_148,5,15572,77860
2024-01-17,INF-006,Cargo Pants Tactical Fit,Inferior,TikTok Shop,Cliente_21,3,39758,119274
2024-01-17,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,TikTok Shop,Cliente_2,2,29291,58582
2024-01-17,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,TikTok Shop,Cliente_13,5,18628,93140
2024-01-17,INF-008,Sweatpants Classic Grey,Inferior,Tienda Física,Cliente_153,3,32372,97116
2024-01-17,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,Tienda Física,Cliente_37,5,18153,90765
2024-01-17,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,TikTok Shop,Cliente_154,2,19633,39266
2024-01-18,INF-010,Biker Shorts Urban Black,Inferior,Instagram,Cliente_129,3,16777,50331
2024-01-18,ACC-017,Crossbody Bag Mini Messenger,Accesorios,Tienda Física,Cliente_80,1,25164,25164
2024-01-18,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,Tienda Física,Cliente_10,1,44182,44182
2024-01-18,ACC-017,Crossbody Bag Mini Messenger,Accesorios,Instagram,Cliente_171,2,26713,53426
2024-01-18,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Instagram,Cliente_158,2,19358,38716
2024-01-18,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Tienda Online,Cliente_61,2,38999,77998
2024-01-19,SUP-005,Denim Jacket Vintage Wash,Superior,TikTok Shop,Cliente_93,4,24902,99608
2024-01-19,CAL-015,RS-X Efekt Gradient,Calzado,Tienda Física,Cliente_136,2,30772,61544
2024-01-19,ACC-017,Crossbody Bag Mini Messenger,Accesorios,Tienda Online,Cliente_152,1,15459,15459
2024-01-20,INF-010,Biker Shorts Urban Black,Inferior,Tienda Online,Cliente_84,3,22086,66258
2024-01-20,INF-009,Track Pants “Streets”,Inferior,TikTok Shop,Cliente_70,3,26444,79332
2024-01-21,SUP-005,Denim Jacket Vintage Wash,Superior,TikTok Shop,Cliente_121,1,32396,32396
2024-01-21,ACC-019,Cinturón de lona con hebilla,Accesorios,TikTok Shop,Cliente_97,4,31956,127824
2024-01-21,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Tienda Física,Cliente_69,1,44056,44056
2024-01-21,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Tienda Online,Cliente_100,3,41028,123084
2024-01-21,SUP-005,Denim Jacket Vintage Wash,Superior,Tienda Física,Cliente_6,5,34018,170090
2024-01-21,ACC-019,Cinturón de lona con hebilla,Accesorios,Tienda Física,Cliente_189,5,29832,149160
2024-01-22,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,TikTok Shop,Cliente_161,3,43506,130518
2024-01-22,CAL-011,Air Force 1 ‘07 Triple White,Calzado,Instagram,Cliente_108,4,33026,132104
2024-01-22,INF-008,Sweatpants Classic Grey,Inferior,Tienda Física,Cliente_147,2,30688,61376
2024-01-22,ACC-016,Bucket Hat “Street Jungle”,Accesorios,Tienda Física,Cliente_116,2,39554,79108
2024-01-22,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,Tienda Online,Cliente_114,3,15272,45816
2024-01-22,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Tienda Online,Cliente_48,5,29975,149875
2024-01-22,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,TikTok Shop,Cliente_102,2,40230,80460
2024-01-22,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,Instagram,Cliente_5,5,24945,124725
2024-01-23,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Instagram,Cliente_52,2,18283,36566
2024-01-23,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Tienda Online,Cliente_122,4,29684,118736
2024-01-23,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Tienda Online,Cliente_114,4,36705,146820
2024-01-23,CAL-015,RS-X Efekt Gradient,Calzado,Instagram,Cliente_200,3,18451,55353
2024-01-23,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,TikTok Shop,Cliente_36,4,29901,119604
2024-01-24,ACC-016,Bucket Hat “Street Jungle”,Accesorios,Tienda Física,Cliente_186,1,26200,26200
2024-01-24,ACC-016,Bucket Hat “Street Jungle”,Accesorios,Tienda Física,Cliente_121,4,23143,92572
2024-01-24,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Instagram,Cliente_120,1,25974,25974
2024-01-24,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Tienda Online,Cliente_187,5,22523,112615
2024-01-24,SUP-001,Essentials Oversized Tee,Superior,Tienda Física,Cliente_145,2,17279,34558
2024-01-24,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,TikTok Shop,Cliente_169,3,25186,75558
2024-01-24,SUP-005,Denim Jacket Vintage Wash,Superior,Tienda Física,Cliente_47,1,15353,15353
2024-01-25,ACC-017,Crossbody Bag Mini Messenger,Accesorios,Tienda Online,Cliente_53,1,44158,44158
2024-01-25,ACC-019,Cinturón de lona con hebilla,Accesorios,TikTok Shop,Cliente_183,3,36863,110589
2024-01-25,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,Tienda Física,Cliente_124,2,25776,51552
2024-01-25,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,Instagram,Cliente_88,3,36991,110973
2024-01-25,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Tienda Física,Cliente_113,4,18782,75128
2024-01-25,CAL-015,RS-X Efekt Gradient,Calzado,Tienda Física,Cliente_187,5,40229,201145
2024-01-25,SUP-004,Classic Polo Black,Superior,Instagram,Cliente_24,1,24320,24320
2024-01-25,SUP-004,Classic Polo Black,Superior,Tienda Online,Cliente_81,5,22004,110020
2024-01-26,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,Tienda Física,Cliente_121,2,44496,88992
2024-01-26,SUP-002,Skateboarding Logo Hoodie,Superior,Tienda Online,Cliente_74,4,28273,113092
2024-01-27,CAL-015,RS-X Efekt Gradient,Calzado,TikTok Shop,Cliente_90,1,32773,32773
2024-01-27,CAL-015,RS-X Efekt Gradient,Calzado,TikTok Shop,Cliente_129,4,32294,129176
2024-01-27,SUP-005,Denim Jacket Vintage Wash,Superior,Instagram,Cliente_9,1,36856,36856
2024-01-28,ACC-016,Bucket Hat “Street Jungle”,Accesorios,Tienda Física,Cliente_148,1,35056,35056
2024-01-28,CAL-011,Air Force 1 ‘07 Triple White,Calzado,Instagram,Cliente_126,4,23125,92500
2024-01-28,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,Instagram,Cliente_91,5,33486,167430
2024-01-28,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Tienda Física,Cliente_150,4,27728,110912
2024-01-28,ACC-019,Cinturón de lona con hebilla,Accesorios,TikTok Shop,Cliente_57,2,41084,82168
2024-01-28,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,Tienda Online,Cliente_167,3,32737,98211
2024-01-28,ACC-019,Cinturón de lona con hebilla,Accesorios,Tienda Online,Cliente_188,5,30492,152460
2024-01-28,SUP-005,Denim Jacket Vintage Wash,Superior,Tienda Online,Cliente_183,2,34374,68748
2024-01-29,SUP-002,Skateboarding Logo Hoodie,Superior,Tienda Física,Cliente_184,2,27654,55308
2024-01-29,ACC-019,Cinturón de lona con hebilla,Accesorios,Tienda Online,Cliente_10,3,43261,129783
2024-01-29,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Instagram,Cliente_22,5,39009,195045
2024-01-29,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,TikTok Shop,Cliente_156,2,22460,44920
2024-01-29,SUP-002,Skateboarding Logo Hoodie,Superior,Tienda Física,Cliente_48,2,23995,47990
2024-01-29,CAL-015,RS-X Efekt Gradient,Calzado,Tienda Física,Cliente_75,1,24712,24712
2024-01-30,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Tienda Física,Cliente_87,5,26767,133835
2024-01-30,SUP-001,Essentials Oversized Tee,Superior,Tienda Online,Cliente_163,1,18427,18427
2024-01-31,INF-010,Biker Shorts Urban Black,Inferior,Tienda Física,Cliente_68,5,39760,198800
2024-02-01,CAL-013,Old Skool Black/White,Calzado,Instagram,Cliente_154,2,19150,38300
2024-02-01,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Tienda Física,Cliente_32,2,24248,48496
2024-02-01,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,TikTok Shop,Cliente_178,5,25852,129260
2024-02-01,INF-009,Track Pants “Streets”,Inferior,Tienda Física,Cliente_87,2,30213,60426
2024-02-01,INF-006,Cargo Pants Tactical Fit,Inferior,TikTok Shop,Cliente_73,3,44215,132645
2024-02-01,CAL-011,Air Force 1 ‘07 Triple White,Calzado,Tienda Física,Cliente_22,1,36970,36970
2024-02-01,SUP-001,Essentials Oversized Tee,Superior,Tienda Física,Cliente_15,1,18524,18524
2024-02-02,INF-006,Cargo Pants Tactical Fit,Inferior,Tienda Física,Cliente_111,4,33533,134132
2024-02-03,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Instagram,Cliente_179,5,40498,202490
2024-02-03,SUP-005,Denim Jacket Vintage Wash,Superior,TikTok Shop,Cliente_185,3,36561,109683
2024-02-03,ACC-017,Crossbody Bag Mini Messenger,Accesorios,Instagram,Cliente_70,2,18653,37306
2024-02-03,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Tienda Física,Cliente_28,1,15423,15423
2024-02-03,INF-009,Track Pants “Streets”,Inferior,Tienda Física,Cliente_115,1,22741,22741
2024-02-04,SUP-004,Classic Polo Black,Superior,Instagram,Cliente_123,4,32549,130196
2024-02-04,CAL-011,Air Force 1 ‘07 Triple White,Calzado,TikTok Shop,Cliente_32,5,24376,121880
2024-02-04,INF-009,Track Pants “Streets”,Inferior,TikTok Shop,Cliente_123,3,44524,133572
2024-02-04,ACC-016,Bucket Hat “Street Jungle”,Accesorios,Tienda Online,Cliente_52,1,17085,17085
2024-02-04,SUP-001,Essentials Oversized Tee,Superior,Instagram,Cliente_171,2,44917,89834
2024-02-04,SUP-001,Essentials Oversized Tee,Superior,Instagram,Cliente_98,2,31867,63734
2024-02-04,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Instagram,Cliente_186,4,38806,155224
2024-02-04,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Tienda Física,Cliente_128,2,28406,56812
2024-02-05,SUP-005,Denim Jacket Vintage Wash,Superior,Instagram,Cliente_45,2,40193,80386
2024-02-05,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Instagram,Cliente_129,4,19980,79920
2024-02-05,CAL-015,RS-X Efekt Gradient,Calzado,Instagram,Cliente_38,3,42581,127743
2024-02-05,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,TikTok Shop,Cliente_154,1,20556,20556
2024-02-05,INF-010,Biker Shorts Urban Black,Inferior,Tienda Online,Cliente_104,2,18406,36812
2024-02-06,INF-008,Sweatpants Classic Grey,Inferior,Instagram,Cliente_182,1,31676,31676
2024-02-06,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Tienda Online,Cliente_149,4,15492,61968
2024-02-06,ACC-019,Cinturón de lona con hebilla,Accesorios,Tienda Física,Cliente_178,4,42415,169660
2024-02-07,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Tienda Online,Cliente_184,2,20383,40766
2024-02-07,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Tienda Online,Cliente_191,4,20825,83300
2024-02-07,SUP-004,Classic Polo Black,Superior,TikTok Shop,Cliente_65,3,29800,89400
2024-02-07,SUP-001,Essentials Oversized Tee,Superior,Tienda Online,Cliente_19,2,26644,53288
2024-02-08,INF-006,Cargo Pants Tactical Fit,Inferior,TikTok Shop,Cliente_165,3,39695,119085
2024-02-08,CAL-013,Old Skool Black/White,Calzado,TikTok Shop,Cliente_153,4,29768,119072
2024-02-08,SUP-001,Essentials Oversized Tee,Superior,Tienda Física,Cliente_141,4,21129,84516
2024-02-08,SUP-003,Graphic Crewneck “Astro Drift”,Superior,Tienda Física,Cliente_187,3,23425,70275
2024-02-08,ACC-019,Cinturón de lona con hebilla,Accesorios,Tienda Online,Cliente_80,4,39876,159504
2024-02-08,SUP-002,Skateboarding Logo Hoodie,Superior,Instagram,Cliente_182,3,32185,96555
2024-02-09,ACC-017,Crossbody Bag Mini Messenger,Accesorios,Instagram,Cliente_146,5,28172,140860
2024-02-10,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,TikTok Shop,Cliente_69,4,38849,155396
2024-02-10,INF-009,Track Pants “Streets”,Inferior,Tienda Física,Cliente_196,5,42280,211400
2024-02-10,ACC-019,Cinturón de lona con hebilla,Accesorios,Instagram,Cliente_29,3,40495,121485
2024-02-10,SUP-005,Denim Jacket Vintage Wash,Superior,TikTok Shop,Cliente_70,1,30301,30301
2024-02-10,INF-008,Sweatpants Classic Grey,Inferior,Instagram,Cliente_110,1,32165,32165
2024-02-10,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Tienda Física,Cliente_124,5,26174,130870
2024-02-11,SUP-003,Graphic Crewneck “Astro Drift”,Superior,Instagram,Cliente_193,3,25661,76983
2024-02-11,INF-009,Track Pants “Streets”,Inferior,TikTok Shop,Cliente_45,2,37050,74100
2024-02-11,CAL-013,Old Skool Black/White,Calzado,Instagram,Cliente_151,3,22757,68271
2024-02-11,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,Instagram,Cliente_157,3,23620,70860
2024-02-11,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,Tienda Física,Cliente_56,3,15651,46953
2024-02-11,SUP-002,Skateboarding Logo Hoodie,Superior,Instagram,Cliente_90,3,25483,76449
2024-02-11,ACC-017,Crossbody Bag Mini Messenger,Accesorios,Instagram,Cliente_190,1,44151,44151
2024-02-12,INF-010,Biker Shorts Urban Black,Inferior,Tienda Física,Cliente_76,2,32048,64096
2024-02-12,CAL-011,Air Force 1 ‘07 Triple White,Calzado,TikTok Shop,Cliente_132,4,34370,137480
2024-02-12,CAL-011,Air Force 1 ‘07 Triple White,Calzado,Tienda Online,Cliente_57,2,19517,39034
2024-02-12,SUP-003,Graphic Crewneck “Astro Drift”,Superior,TikTok Shop,Cliente_26,1,39357,39357
2024-02-12,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Instagram,Cliente_10,1,31019,31019
2024-02-13,CAL-011,Air Force 1 ‘07 Triple White,Calzado,TikTok Shop,Cliente_160,3,22025,66075
2024-02-13,ACC-017,Crossbody Bag Mini Messenger,Accesorios,TikTok Shop,Cliente_191,2,21644,43288
2024-02-13,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Tienda Online,Cliente_119,1,15520,15520
2024-02-13,SUP-003,Graphic Crewneck “Astro Drift”,Superior,TikTok Shop,Cliente_157,1,40290,40290
2024-02-13,SUP-004,Classic Polo Black,Superior,Tienda Física,Cliente_144,5,36522,182610
2024-02-14,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,TikTok Shop,Cliente_29,2,38940,77880
2024-02-15,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Tienda Física,Cliente_179,5,37151,185755
2024-02-15,SUP-002,Skateboarding Logo Hoodie,Superior,Tienda Física,Cliente_147,2,43538,87076
2024-02-15,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Tienda Física,Cliente_95,1,30870,30870
2024-02-15,SUP-001,Essentials Oversized Tee,Superior,TikTok Shop,Cliente_44,5,16324,81620
2024-02-15,SUP-005,Denim Jacket Vintage Wash,Superior,Tienda Online,Cliente_183,3,26431,79293
2024-02-16,CAL-011,Air Force 1 ‘07 Triple White,Calzado,TikTok Shop,Cliente_38,2,33070,66140
2024-02-16,SUP-001,Essentials Oversized Tee,Superior,Tienda Física,Cliente_155,5,24955,124775
2024-02-16,INF-010,Biker Shorts Urban Black,Inferior,Tienda Física,Cliente_62,5,31748,158740
2024-02-17,SUP-003,Graphic Crewneck “Astro Drift”,Superior,Instagram,Cliente_134,2,43660,87320
2024-02-17,ACC-017,Crossbody Bag Mini Messenger,Accesorios,Instagram,Cliente_162,3,39635,118905
2024-02-17,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,TikTok Shop,Cliente_189,3,27508,82524
2024-02-17,INF-008,Sweatpants Classic Grey,Inferior,Tienda Física,Cliente_27,4,18010,72040
2024-02-17,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,TikTok Shop,Cliente_95,2,42123,84246
2024-02-17,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,Instagram,Cliente_62,3,20735,62205
2024-02-17,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Tienda Física,Cliente_31,4,42077,168308
2024-02-17,SUP-002,Skateboarding Logo Hoodie,Superior,Tienda Online,Cliente_6,3,42914,128742
2024-02-18,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,Tienda Física,Cliente_49,5,35227,176135
2024-02-18,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Tienda Online,Cliente_43,2,20231,40462
2024-02-19,ACC-016,Bucket Hat “Street Jungle”,Accesorios,Tienda Online,Cliente_13,2,38989,77978
2024-02-19,INF-008,Sweatpants Classic Grey,Inferior,TikTok Shop,Cliente_112,1,28694,28694
2024-02-19,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Tienda Online,Cliente_164,3,20215,60645
2024-02-19,INF-009,Track Pants “Streets”,Inferior,Instagram,Cliente_17,1,17845,17845
2024-02-19,ACC-017,Crossbody Bag Mini Messenger,Accesorios,TikTok Shop,Cliente_59,4,42621,170484
2024-02-19,CAL-015,RS-X Efekt Gradient,Calzado,TikTok Shop,Cliente_109,1,22314,22314
2024-02-19,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,TikTok Shop,Cliente_105,2,19457,38914
2024-02-19,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Instagram,Cliente_52,2,37007,74014
2024-02-20,INF-008,Sweatpants Classic Grey,Inferior,Tienda Online,Cliente_77,2,32391,64782
2024-02-20,SUP-001,Essentials Oversized Tee,Superior,Tienda Física,Cliente_48,4,22381,89524
2024-02-20,CAL-015,RS-X Efekt Gradient,Calzado,Instagram,Cliente_120,3,26295,78885
2024-02-20,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,TikTok Shop,Cliente_34,4,38952,155808
2024-02-20,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Tienda Física,Cliente_85,4,32125,128500
2024-02-20,ACC-019,Cinturón de lona con hebilla,Accesorios,Tienda Online,Cliente_192,3,19649,58947
2024-02-20,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Tienda Física,Cliente_8,3,27068,81204
2024-02-21,CAL-011,Air Force 1 ‘07 Triple White,Calzado,Tienda Física,Cliente_48,1,25661,25661
2024-02-21,ACC-016,Bucket Hat “Street Jungle”,Accesorios,Tienda Online,Cliente_127,5,17965,89825
2024-02-21,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,Tienda Online,Cliente_11,4,26639,106556
2024-02-21,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,Tienda Física,Cliente_32,2,25911,51822
2024-02-21,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,Tienda Física,Cliente_158,3,16728,50184
2024-02-22,ACC-019,Cinturón de lona con hebilla,Accesorios,Tienda Física,Cliente_170,3,31104,93312
2024-02-22,SUP-003,Graphic Crewneck “Astro Drift”,Superior,Instagram,Cliente_34,2,27035,54070
2024-02-22,SUP-005,Denim Jacket Vintage Wash,Superior,Tienda Física,Cliente_135,4,30445,121780
2024-02-22,SUP-003,Graphic Crewneck “Astro Drift”,Superior,TikTok Shop,Cliente_57,1,30149,30149
2024-02-22,INF-006,Cargo Pants Tactical Fit,Inferior,TikTok Shop,Cliente_64,2,19303,38606
2024-02-23,INF-009,Track Pants “Streets”,Inferior,Tienda Física,Cliente_172,2,28677,57354
2024-02-24,SUP-005,Denim Jacket Vintage Wash,Superior,TikTok Shop,Cliente_14,2,26801,53602
2024-02-24,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Instagram,Cliente_47,1,38494,38494
2024-02-24,SUP-005,Denim Jacket Vintage Wash,Superior,Tienda Física,Cliente_77,2,41947,83894
2024-02-24,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,Tienda Física,Cliente_12,3,28461,85383
2024-02-24,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,Tienda Física,Cliente_48,5,26269,131345
2024-02-25,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Tienda Online,Cliente_54,3,25300,75900
2024-02-25,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,Instagram,Cliente_93,5,42163,210815
2024-02-26,SUP-001,Essentials Oversized Tee,Superior,Tienda Física,Cliente_21,3,37214,111642
2024-02-26,ACC-017,Crossbody Bag Mini Messenger,Accesorios,TikTok Shop,Cliente_77,3,30257,90771
2024-02-27,SUP-003,Graphic Crewneck “Astro Drift”,Superior,Instagram,Cliente_143,3,22425,67275
2024-02-27,INF-010,Biker Shorts Urban Black,Inferior,Tienda Online,Cliente_46,4,26437,105748
2024-02-27,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,Instagram,Cliente_46,2,29874,59748
2024-02-28,SUP-001,Essentials Oversized Tee,Superior,TikTok Shop,Cliente_141,2,20508,41016
2024-02-28,CAL-013,Old Skool Black/White,Calzado,TikTok Shop,Cliente_185,3,18272,54816
2024-02-28,SUP-003,Graphic Crewneck “Astro Drift”,Superior,TikTok Shop,Cliente_165,1,28578,28578
2024-02-28,ACC-019,Cinturón de lona con hebilla,Accesorios,Tienda Online,Cliente_190,3,36664,109992
2024-02-28,CAL-011,Air Force 1 ‘07 Triple White,Calzado,Tienda Online,Cliente_90,1,20440,20440
2024-02-29,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,Tienda Física,Cliente_176,1,42194,42194
2024-02-29,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Instagram,Cliente_177,1,27231,27231
2024-03-01,ACC-017,Crossbody Bag Mini Messenger,Accesorios,Tienda Online,Cliente_191,1,32305,32305
2024-03-01,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Tienda Online,Cliente_9,5,32678,163390
2024-03-01,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,Tienda Física,Cliente_200,2,17338,34676
2024-03-01,ACC-017,Crossbody Bag Mini Messenger,Accesorios,TikTok Shop,Cliente_109,3,40646,121938
2024-03-01,SUP-001,Essentials Oversized Tee,Superior,Tienda Física,Cliente_33,1,27682,27682
2024-03-01,ACC-016,Bucket Hat “Street Jungle”,Accesorios,Instagram,Cliente_176,5,31852,159260
2024-03-01,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,Instagram,Cliente_23,1,33231,33231
2024-03-01,CAL-011,Air Force 1 ‘07 Triple White,Calzado,TikTok Shop,Cliente_139,3,35191,105573
2024-03-02,CAL-013,Old Skool Black/White,Calzado,TikTok Shop,Cliente_129,4,32452,129808
2024-03-02,CAL-013,Old Skool Black/White,Calzado,Tienda Online,Cliente_195,3,22379,67137
2024-03-02,CAL-011,Air Force 1 ‘07 Triple White,Calzado,Instagram,Cliente_87,4,19946,79784
2024-03-02,SUP-002,Skateboarding Logo Hoodie,Superior,Instagram,Cliente_43,1,25465,25465
2024-03-03,SUP-001,Essentials Oversized Tee,Superior,TikTok Shop,Cliente_81,3,36124,108372
2024-03-03,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,Instagram,Cliente_23,3,35639,106917
2024-03-04,SUP-001,Essentials Oversized Tee,Superior,Tienda Física,Cliente_88,2,39639,79278
2024-03-04,SUP-003,Graphic Crewneck “Astro Drift”,Superior,Instagram,Cliente_5,1,39291,39291
2024-03-04,CAL-011,Air Force 1 ‘07 Triple White,Calzado,Instagram,Cliente_192,5,32208,161040
2024-03-04,CAL-013,Old Skool Black/White,Calzado,Tienda Física,Cliente_174,5,23989,119945
2024-03-04,SUP-005,Denim Jacket Vintage Wash,Superior,Tienda Física,Cliente_125,4,42068,168272
2024-03-04,ACC-017,Crossbody Bag Mini Messenger,Accesorios,Instagram,Cliente_108,3,25674,77022
2024-03-04,INF-008,Sweatpants Classic Grey,Inferior,TikTok Shop,Cliente_61,2,16719,33438
2024-03-05,ACC-016,Bucket Hat “Street Jungle”,Accesorios,Tienda Física,Cliente_182,1,16063,16063
2024-03-05,ACC-019,Cinturón de lona con hebilla,Accesorios,TikTok Shop,Cliente_130,1,15893,15893
2024-03-05,SUP-002,Skateboarding Logo Hoodie,Superior,Instagram,Cliente_62,2,39583,79166
2024-03-05,INF-008,Sweatpants Classic Grey,Inferior,TikTok Shop,Cliente_118,5,15963,79815
2024-03-05,CAL-013,Old Skool Black/White,Calzado,Tienda Física,Cliente_113,1,33644,33644
2024-03-05,ACC-019,Cinturón de lona con hebilla,Accesorios,Tienda Física,Cliente_79,4,30829,123316
2024-03-05,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,Tienda Física,Cliente_186,1,31819,31819
2024-03-06,ACC-017,Crossbody Bag Mini Messenger,Accesorios,Instagram,Cliente_115,1,21153,21153
2024-03-06,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,Tienda Online,Cliente_50,5,42398,211990
2024-03-06,SUP-004,Classic Polo Black,Superior,Tienda Física,Cliente_66,3,22143,66429
2024-03-07,SUP-002,Skateboarding Logo Hoodie,Superior,Tienda Física,Cliente_175,4,15961,63844
2024-03-07,SUP-002,Skateboarding Logo Hoodie,Superior,Tienda Física,Cliente_75,5,20694,103470
2024-03-07,ACC-017,Crossbody Bag Mini Messenger,Accesorios,TikTok Shop,Cliente_185,4,15014,60056
2024-03-07,INF-008,Sweatpants Classic Grey,Inferior,TikTok Shop,Cliente_38,2,39885,79770
2024-03-07,SUP-004,Classic Polo Black,Superior,Instagram,Cliente_66,2,27088,54176
2024-03-07,CAL-011,Air Force 1 ‘07 Triple White,Calzado,TikTok Shop,Cliente_63,4,35667,142668
2024-03-08,SUP-004,Classic Polo Black,Superior,Instagram,Cliente_81,3,35364,106092
2024-03-08,INF-008,Sweatpants Classic Grey,Inferior,Tienda Online,Cliente_90,1,21761,21761
2024-03-08,INF-010,Biker Shorts Urban Black,Inferior,Tienda Online,Cliente_61,3,37187,111561
2024-03-08,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,Tienda Física,Cliente_62,4,27865,111460
2024-03-08,SUP-001,Essentials Oversized Tee,Superior,Instagram,Cliente_171,3,35082,105246
2024-03-09,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Instagram,Cliente_121,1,19639,19639
2024-03-09,INF-009,Track Pants “Streets”,Inferior,Tienda Física,Cliente_196,4,36239,144956
2024-03-09,CAL-011,Air Force 1 ‘07 Triple White,Calzado,Instagram,Cliente_168,3,34201,102603
2024-03-09,INF-010,Biker Shorts Urban Black,Inferior,TikTok Shop,Cliente_74,1,29109,29109
2024-03-09,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,Tienda Online,Cliente_22,1,20102,20102
2024-03-10,ACC-019,Cinturón de lona con hebilla,Accesorios,Tienda Online,Cliente_179,1,23337,23337
2024-03-10,CAL-011,Air Force 1 ‘07 Triple White,Calzado,TikTok Shop,Cliente_129,5,26476,132380
2024-03-11,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Instagram,Cliente_35,3,43402,130206
2024-03-11,CAL-015,RS-X Efekt Gradient,Calzado,Tienda Física,Cliente_106,5,40669,203345
2024-03-11,INF-008,Sweatpants Classic Grey,Inferior,Instagram,Cliente_83,1,23074,23074
2024-03-11,INF-009,Track Pants “Streets”,Inferior,Tienda Online,Cliente_144,4,33308,133232
2024-03-11,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,TikTok Shop,Cliente_198,5,37173,185865
2024-03-11,SUP-001,Essentials Oversized Tee,Superior,TikTok Shop,Cliente_44,2,32801,65602
2024-03-11,SUP-001,Essentials Oversized Tee,Superior,Tienda Online,Cliente_73,1,42125,42125
2024-03-12,ACC-016,Bucket Hat “Street Jungle”,Accesorios,Tienda Física,Cliente_158,2,16684,33368
2024-03-12,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Tienda Online,Cliente_197,3,16062,48186
2024-03-12,SUP-005,Denim Jacket Vintage Wash,Superior,Tienda Online,Cliente_145,3,26691,80073
2024-03-12,CAL-013,Old Skool Black/White,Calzado,Tienda Física,Cliente_91,4,31902,127608
2024-03-12,ACC-019,Cinturón de lona con hebilla,Accesorios,TikTok Shop,Cliente_13,5,28138,140690
2024-03-13,ACC-019,Cinturón de lona con hebilla,Accesorios,Tienda Física,Cliente_43,5,33757,168785
2024-03-13,ACC-016,Bucket Hat “Street Jungle”,Accesorios,Tienda Física,Cliente_92,3,31885,95655
2024-03-14,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Tienda Online,Cliente_180,1,26908,26908
2024-03-14,INF-010,Biker Shorts Urban Black,Inferior,Instagram,Cliente_30,1,36722,36722
2024-03-14,SUP-001,Essentials Oversized Tee,Superior,TikTok Shop,Cliente_167,4,25749,102996
2024-03-15,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,TikTok Shop,Cliente_80,3,21140,63420
2024-03-15,SUP-002,Skateboarding Logo Hoodie,Superior,Tienda Física,Cliente_190,4,41955,167820
2024-03-15,INF-008,Sweatpants Classic Grey,Inferior,Instagram,Cliente_46,3,39371,118113
2024-03-15,SUP-003,Graphic Crewneck “Astro Drift”,Superior,Tienda Online,Cliente_83,1,15581,15581
2024-03-15,SUP-003,Graphic Crewneck “Astro Drift”,Superior,Tienda Física,Cliente_36,2,43923,87846
2024-03-15,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,Tienda Física,Cliente_129,5,29771,148855
2024-03-15,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Tienda Online,Cliente_53,2,24356,48712
2024-03-15,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,TikTok Shop,Cliente_100,3,36378,109134
2024-03-16,CAL-013,Old Skool Black/White,Calzado,TikTok Shop,Cliente_139,2,29071,58142
2024-03-16,ACC-017,Crossbody Bag Mini Messenger,Accesorios,Tienda Física,Cliente_163,2,37358,74716
2024-03-17,SUP-002,Skateboarding Logo Hoodie,Superior,Tienda Online,Cliente_190,3,16840,50520
2024-03-18,CAL-011,Air Force 1 ‘07 Triple White,Calzado,Instagram,Cliente_123,1,38013,38013
2024-03-18,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,TikTok Shop,Cliente_104,5,42115,210575
2024-03-18,ACC-019,Cinturón de lona con hebilla,Accesorios,Tienda Física,Cliente_44,1,25911,25911
2024-03-18,ACC-017,Crossbody Bag Mini Messenger,Accesorios,Instagram,Cliente_102,2,26766,53532
2024-03-18,ACC-016,Bucket Hat “Street Jungle”,Accesorios,Tienda Online,Cliente_170,3,38986,116958
2024-03-18,INF-006,Cargo Pants Tactical Fit,Inferior,Tienda Online,Cliente_9,1,25551,25551
2024-03-19,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Tienda Online,Cliente_70,2,36807,73614
2024-03-19,SUP-004,Classic Polo Black,Superior,TikTok Shop,Cliente_198,3,38495,115485
2024-03-19,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Tienda Online,Cliente_136,1,26374,26374
2024-03-19,SUP-004,Classic Polo Black,Superior,Tienda Online,Cliente_95,5,39683,198415
2024-03-20,INF-006,Cargo Pants Tactical Fit,Inferior,TikTok Shop,Cliente_149,2,28680,57360
2024-03-20,INF-009,Track Pants “Streets”,Inferior,Instagram,Cliente_62,4,32428,129712
2024-03-21,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Tienda Online,Cliente_99,3,21251,63753
2024-03-21,ACC-016,Bucket Hat “Street Jungle”,Accesorios,TikTok Shop,Cliente_136,4,23730,94920
2024-03-21,ACC-016,Bucket Hat “Street Jungle”,Accesorios,Tienda Física,Cliente_9,1,22310,22310
2024-03-21,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,TikTok Shop,Cliente_87,5,40339,201695
2024-03-21,CAL-012,Yeezy Boost 350 V2 Zebra,Calzado,Instagram,Cliente_73,1,29686,29686
2024-03-22,CAL-013,Old Skool Black/White,Calzado,TikTok Shop,Cliente_59,1,26599,26599
2024-03-22,ACC-019,Cinturón de lona con hebilla,Accesorios,Tienda Online,Cliente_80,1,24187,24187
2024-03-22,ACC-019,Cinturón de lona con hebilla,Accesorios,Tienda Física,Cliente_102,3,33640,100920
2024-03-22,SUP-002,Skateboarding Logo Hoodie,Superior,TikTok Shop,Cliente_105,4,26616,106464
2024-03-22,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,TikTok Shop,Cliente_143,5,24347,121735
2024-03-22,INF-008,Sweatpants Classic Grey,Inferior,Instagram,Cliente_159,2,43033,86066
2024-03-22,ACC-019,Cinturón de lona con hebilla,Accesorios,Instagram,Cliente_23,1,33522,33522
2024-03-23,INF-010,Biker Shorts Urban Black,Inferior,Tienda Física,Cliente_24,1,35824,35824
2024-03-23,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Tienda Física,Cliente_96,3,38666,115998
2024-03-23,INF-010,Biker Shorts Urban Black,Inferior,Tienda Física,Cliente_176,5,39283,196415
2024-03-24,SUP-005,Denim Jacket Vintage Wash,Superior,TikTok Shop,Cliente_14,2,15302,45906
2024-03-24,INF-008,Sweatpants Classic Grey,Inferior,Tienda Online,Cliente_45,4,15870,63480
2024-03-24,SUP-002,Skateboarding Logo Hoodie,Superior,Tienda Online,Cliente_16,1,33170,33170
2024-03-24,INF-010,Biker Shorts Urban Black,Inferior,Instagram,Cliente_99,3,24761,74283
2024-03-24,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Instagram,Cliente_171,3,38462,115386
2024-03-24,CAL-015,RS-X Efekt Gradient,Calzado,TikTok Shop,Cliente_75,1,36557,36557
2024-03-24,INF-006,Cargo Pants Tactical Fit,Inferior,Tienda Online,Cliente_141,2,28795,57590
2024-03-24,INF-006,Cargo Pants Tactical Fit,Inferior,Tienda Online,Cliente_198,5,21940,109700
2025-03-25,SUP-002,Skateboarding Logo Hoodie,Superior,TikTok Shop,Cliente_2,1,16336,16336
2025-03-25,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Tienda Física,Cliente_198,4,32455,129820
2025-03-25,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,Instagram,Cliente_78,4,26735,106940
2025-03-25,SUP-001,Essentials Oversized Tee,Superior,Tienda Física,Cliente_29,4,44938,179752
2025-03-25,SUP-002,Skateboarding Logo Hoodie,Superior,Tienda Física,Cliente_167,2,15881,31762
2025-03-25,CAL-015,RS-X Efekt Gradient,Calzado,Tienda Física,Cliente_1,1,36977,36977
2025-03-26,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,Tienda Online,Cliente_81,5,33964,169820
2025-03-26,INF-006,Cargo Pants Tactical Fit,Inferior,Tienda Física,Cliente_68,3,31205,93615
2025-03-26,SUP-005,Denim Jacket Vintage Wash,Superior,Tienda Online,Cliente_137,4,21784,87136
2025-03-26,ACC-018,Gafas de sol “Neo Matrix”,Accesorios,TikTok Shop,Cliente_66,5,38235,191175
2025-03-27,CAL-015,RS-X Efekt Gradient,Calzado,Tienda Física,Cliente_40,1,28040,28040
2025-03-27,INF-006,Cargo Pants Tactical Fit,Inferior,Tienda Online,Cliente_91,5,41983,209915
2025-03-27,ACC-017,Crossbody Bag Mini Messenger,Accesorios,TikTok Shop,Cliente_131,5,18502,92510
2025-03-27,INF-010,Biker Shorts Urban Black,Inferior,TikTok Shop,Cliente_55,2,35456,70912
2025-03-28,ACC-019,Cinturón de lona con hebilla,Accesorios,Tienda Física,Cliente_168,1,18710,18710
2025-03-29,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Instagram,Cliente_148,3,38904,116712
2025-03-29,CAL-013,Old Skool Black/White,Calzado,Tienda Física,Cliente_94,4,22388,89552
2025-03-29,SUP-003,Graphic Crewneck “Astro Drift”,Superior,Tienda Física,Cliente_19,2,23671,47342
2025-03-29,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,TikTok Shop,Cliente_172,4,33663,134652
2025-03-29,ACC-017,Crossbody Bag Mini Messenger,Accesorios,TikTok Shop,Cliente_8,1,39608,39608
2025-03-29,ACC-020,Cadena plateada Miami Cuban Link,Accesorios,Instagram,Cliente_163,5,41361,206805
2025-03-29,SUP-004,Classic Polo Black,Superior,Tienda Online,Cliente_152,3,25774,77322
2025-03-30,ACC-016,Bucket Hat “Street Jungle”,Accesorios,Tienda Física,Cliente_178,3,44887,134661
2025-03-30,INF-006,Cargo Pants Tactical Fit,Inferior,Tienda Física,Cliente_91,4,22083,88332
2025-03-30,CAL-015,RS-X Efekt Gradient,Calzado,Tienda Física,Cliente_147,1,27342,27342
2025-03-30,INF-007,Ripped Skinny Jeans 'No Mercy',Inferior,Instagram,Cliente_77,5,28922,144610
2025-03-31,CAL-013,Old Skool Black/White,Calzado,TikTok Shop,Cliente_50,4,29548,118192
2025-03-31,CAL-013,Old Skool Black/White,Calzado,Tienda Online,Cliente_198,2,19988,39976
2025-03-31,CAL-014,Chuck 70 Hi Canvas Natural,Calzado,Tienda Física,Cliente_48,3,43393,130179
`;

    const clientsData = `id_cliente,nombre,email,telefono,ciudad,tipo_cliente
cliente_1,Teresa Cynthia Castillo Ruiz,teresa.cynthia.castillo.ruiz.1@email.com,+56 2 3881 0244,La Serena,nuevo
cliente_2,Rosa Toro,rosa.toro.2@email.com,+56 9 6534 0426,Santiago,nuevo
cliente_3,Camila Lucila Araneda Apablaza,camila.lucila.araneda.apablaza.3@email.com,+56 2 3697 0842,Iquique,premium
cliente_4,George Maximiliano Hurtado Quiroga,george.maximiliano.hurtado.quiroga.4@email.com,+56 800 763 553,Santiago,nuevo
cliente_5,Miguel Ángel Norambuena Bustos,miguel.ángel.norambuena.bustos.5@email.com,+56 9 9563 1793,Puerto Montt,premium
cliente_6,Maite Vargas,maite.vargas.6@email.com,+56 53 210 9469,Rancagua,premium
cliente_7,Paulina María Aguilera Mella,paulina.maría.aguilera.mella.7@email.com,+56 53 286 4807,La Serena,premium
cliente_8,Gladys Reyes Mendoza,gladys.reyes.mendoza.8@email.com,+56 9 6958 2936,Puerto Montt,regular
cliente_9,Margarita Sánchez Gómez,margarita.sánchez.gómez.9@email.com,+56 2 3134 4720,Talca,regular
cliente_10,Salvador José Martinez Valenzuela,salvador.josé.martinez.valenzuela.10@email.com,+56 33 396 0523,Puerto Montt,nuevo
cliente_11,Luciana Ana Jorquera González,luciana.ana.jorquera.gonzález.11@email.com,+56 800 337 081,Talca,nuevo
cliente_12,Priscila Florencia Vargas Montoya,priscila.florencia.vargas.montoya.12@email.com,+56 2 2700 5753,Iquique,regular
cliente_13,Carolina Díaz Morales,carolina.díaz.morales.13@email.com,+56 9 8779 6224,Concepción,regular
cliente_14,Marie Tapia Tapia,marie.tapia.tapia.14@email.com,+56 2 2475 2824,Iquique,regular
cliente_15,Bryan Cornejo,bryan.cornejo.15@email.com,+56 600 859 868,Rancagua,regular
cliente_16,Patricio Silva Maldonado,patricio.silva.maldonado.16@email.com,+56 2 3827 4780,Temuco,premium
cliente_17,Sandra Aguilar Zambrano,sandra.aguilar.zambrano.17@email.com,+56 9 8371 8364,Rancagua,regular
cliente_18,Jason Gaete,jason.gaete.18@email.com,+56 9 5709 5315,Puerto Montt,regular
cliente_19,Catalina Galdames Salazar,catalina.galdames.salazar.19@email.com,+56 2 2177 5892,La Serena,premium
cliente_20,Williams Cristóbal Jiménez Salgado,williams.cristóbal.jiménez.salgado.20@email.com,+56 41 230 0590,Iquique,regular
cliente_21,Emilio Pedro Leyton Rosas,emilio.pedro.leyton.rosas.21@email.com,+56 2 2354 4959,Puerto Montt,regular
cliente_22,Ruth Dafne Hernández González,ruth.dafne.hernández.gonzález.22@email.com,+56 35 339 3080,Iquique,nuevo
cliente_23,Lorena Melany Salazar Norambuena,lorena.melany.salazar.norambuena.23@email.com,+56 2 2406 3121,Iquique,nuevo
cliente_24,Juan Muñoz-Godoy,juan.muñoz-godoy.24@email.com,+56 9 3893 6888,Puerto Montt,premium
cliente_25,James José Pardo Valencia,james.josé.pardo.valencia.25@email.com,+56 34 358 4748,La Serena,nuevo
cliente_26,Elena Juana Aguayo Arriagada,elena.juana.aguayo.arriagada.26@email.com,+56 800 116 108,Puerto Montt,regular
cliente_27,Max Arturo González Araya,max.arturo.gonzález.araya.27@email.com,+56 33 277 4309,Iquique,regular
cliente_28,Francisco Luis Tobar Villa,francisco.luis.tobar.villa.28@email.com,+56 600 797 763,Concepción,premium
cliente_29,Daniel Mario Gaete Salazar,daniel.mario.gaete.salazar.29@email.com,+56 2 2160 5682,Temuco,regular
cliente_30,Luis Robert Vega Lagos,luis.robert.vega.lagos.30@email.com,+56 2 3577 4923,Talca,regular
cliente_31,Dora Flores Piña,dora.flores.piña.31@email.com,+56 2 2805 2652,Concepción,regular
cliente_32,Cristóbal Efraín Garrido Oyarzo,cristóbal.efraín.garrido.oyarzo.32@email.com,+56 61 379 3204,Concepción,regular
cliente_33,María Rojas Oyarzún,maría.rojas.oyarzún.33@email.com,+56 42 221 4034,Valparaíso,premium
cliente_34,Javiera Ramírez,javiera.ramírez.34@email.com,+56 2 2452 2487,Concepción,regular
cliente_35,Constanza Cynthia Escobar Contreras,constanza.cynthia.escobar.contreras.35@email.com,+56 9 7133 4293,Antofagasta,nuevo
cliente_36,Celestino Sebastián Jara Vidal,celestino.sebastián.jara.vidal.36@email.com,+56 58 385 0183,Concepción,regular
cliente_37,Fabián Matías Ramírez Jara,fabián.matías.ramírez.jara.37@email.com,+56 34 396 2496,Iquique,premium
cliente_38,Cecilia Paola Donoso Castillo,cecilia.paola.donoso.castillo.38@email.com,+56 34 399 4632,Talca,nuevo
cliente_39,Marcelo Álvarez,marcelo.álvarez.39@email.com,+56 2 2408 3510,Concepción,premium
cliente_40,Montserrat Sandoval Salazar,montserrat.sandoval.salazar.40@email.com,+56 42 250 9940,Valparaíso,regular
cliente_41,María Antonella Retamal Bravo,maría.antonella.retamal.bravo.41@email.com,+56 9 3750 4209,Valparaíso,nuevo
cliente_42,Cristian Martínez,cristian.martínez.42@email.com,+56 61 382 2078,Puerto Montt,regular
cliente_43,Lucía Patricia Aguilar Aguilera,lucía.patricia.aguilar.aguilera.43@email.com,+56 42 388 9458,Temuco,nuevo
cliente_44,Roberto Bastián Alvarez Pérez,roberto.bastián.alvarez.pérez.44@email.com,+56 64 278 6237,Concepción,nuevo
cliente_45,Valentina Romero Molina,valentina.romero.molina.45@email.com,+56 2 3681 4437,Antofagasta,premium
cliente_46,Carlos Pérez Molina,carlos.pérez.molina.46@email.com,+56 600 694 341,Santiago,regular
cliente_47,Julieta Mansilla Mendoza,julieta.mansilla.mendoza.47@email.com,+56 600 706 739,Temuco,regular
cliente_48,Elizabeth Ana Bravo Pinto,elizabeth.ana.bravo.pinto.48@email.com,+56 2 3254 7726,Antofagasta,regular
cliente_49,Freddy Juan Quijada Tobar,freddy.juan.quijada.tobar.49@email.com,+56 52 340 0689,Temuco,nuevo
cliente_50,Jacob Álvaro Torres Catalán,jacob.álvaro.torres.catalán.50@email.com,+56 2 3323 0672,Puerto Montt,premium
cliente_51,Hernán Cristian Guajardo Palma,hernán.cristian.guajardo.palma.51@email.com,+56 2 2397 8732,Concepción,regular
cliente_52,Paulina Matamala Vásquez,paulina.matamala.vásquez.52@email.com,+56 41 240 9534,Rancagua,regular
cliente_53,Juan Hernández Maldonado,juan.hernández.maldonado.53@email.com,+56 9 4555 7659,La Serena,nuevo
cliente_54,Laura Navarrete Poblete,laura.navarrete.poblete.54@email.com,+56 2 2796 5045,Santiago,regular
cliente_55,Benjamin Luis Reyes Contreras,benjamin.luis.reyes.contreras.55@email.com,+56 41 327 2251,Antofagasta,regular
cliente_56,Rocío Paula Vallejos Molina,rocío.paula.vallejos.molina.56@email.com,+56 35 373 8872,La Serena,nuevo
cliente_57,María Isabella Flores Castillo,maría.isabella.flores.castillo.57@email.com,+56 32 225 2792,Rancagua,regular
cliente_58,Emanuel Araneda Toro,emanuel.araneda.toro.58@email.com,+56 57 339 9194,Concepción,regular
cliente_59,Teresa Catalina Alfaro Villarroel,teresa.catalina.alfaro.villarroel.59@email.com,+56 2 3314 7464,Puerto Montt,premium
cliente_60,Belén Elizabeth Castillo Seguel,belén.elizabeth.castillo.seguel.60@email.com,+56 800 102 706,Puerto Montt,premium
cliente_61,Allison Fernanda Martínez Ahumada,allison.fernanda.martínez.ahumada.61@email.com,+56 52 382 2106,Iquique,premium
cliente_62,Leonardo Leiva Pavez,leonardo.leiva.pavez.62@email.com,+56 2 3386 2868,Santiago,premium
cliente_63,Alejandra Pinto,alejandra.pinto.63@email.com,+56 43 370 9320,Rancagua,regular
cliente_64,Bruno Elvis Olguín Henríquez,bruno.elvis.olguín.henríquez.64@email.com,+56 63 235 1940,Santiago,premium
cliente_65,Vicente Luis Ulloa Vidal,vicente.luis.ulloa.vidal.65@email.com,+56 72 358 8694,Valparaíso,regular
cliente_66,Carla Figueroa Henríquez,carla.figueroa.henríquez.66@email.com,+56 32 345 7416,Concepción,nuevo
cliente_67,María Ruth Hernández Aros,maría.ruth.hernández.aros.67@email.com,+56 72 393 9950,La Serena,regular
cliente_68,Juan Armando Matus Oyarzo,juan.armando.matus.oyarzo.68@email.com,+56 33 320 9650,La Serena,nuevo
cliente_69,José Rodolfo Segura Arenas,josé.rodolfo.segura.arenas.69@email.com,+56 2 3358 2324,Talca,premium
cliente_70,Yanet Emily Zamorano Ruiz,yanet.emily.zamorano.ruiz.70@email.com,+56 34 247 4658,Rancagua,nuevo
cliente_71,Luis Martín Troncoso Espinoza,luis.martín.troncoso.espinoza.71@email.com,+56 2 2964 5869,Valparaíso,regular
cliente_72,Flor González Lizana,flor.gonzález.lizana.72@email.com,+56 61 274 6207,Concepción,regular
cliente_73,Humberto Christopher Moncada González,humberto.christopher.moncada.gonzález.73@email.com,+56 75 346 7765,Temuco,regular
cliente_74,María Catalán Sierra,maría.catalán.sierra.74@email.com,+56 42 242 1873,Talca,nuevo
cliente_75,Bastián Daniel Sepúlveda Meléndez,bastián.daniel.sepúlveda.meléndez.75@email.com,+56 2 2111 6934,Antofagasta,nuevo
cliente_76,Edgar Espinoza Yáñez,edgar.espinoza.yáñez.76@email.com,+56 9 3980 7426,Temuco,regular
cliente_77,Francisca Flores Naranjo,francisca.flores.naranjo.77@email.com,+56 2 2496 2788,La Serena,premium
cliente_78,Myriam Toledo,myriam.toledo.78@email.com,+56 2 3658 3697,Valparaíso,regular
cliente_79,Julián Jiménez Rojas,julián.jiménez.rojas.79@email.com,+56 65 318 9811,La Serena,premium
cliente_80,Alejandra Hurtado Candia,alejandra.hurtado.candia.80@email.com,+56 800 591 502,Puerto Montt,premium
cliente_81,Nora Javiera Saldaña Márquez,nora.javiera.saldaña.márquez.81@email.com,+56 33 287 1004,Talca,premium
cliente_82,Irma María Muñoz Oyarzún,irma.maría.muñoz.oyarzún.82@email.com,+56 51 315 8193,Concepción,regular
cliente_83,Jessica Agustina López Reyes,jessica.agustina.lópez.reyes.83@email.com,+56 32 331 3963,Concepción,regular
cliente_84,Rodrigo González,rodrigo.gonzález.84@email.com,+56 800 118 653,La Serena,regular
cliente_85,Miguel Astorga Suazo,miguel.astorga.suazo.85@email.com,+56 800 289 061,Concepción,nuevo
cliente_86,José Jorge Silva Tapia,josé.jorge.silva.tapia.86@email.com,+56 55 254 1247,Concepción,nuevo
cliente_87,Jaime José Arancibia Cortés,jaime.josé.arancibia.cortés.87@email.com,+56 9 4105 9152,Valparaíso,premium
cliente_88,Fabiola Mercado Bravo,fabiola.mercado.bravo.88@email.com,+56 600 121 332,Santiago,nuevo
cliente_89,Pedro Arévalo Burgos,pedro.arévalo.burgos.89@email.com,+56 9 2243 1443,Iquique,premium
cliente_90,Jorge Nicolás Sandoval Leal,jorge.nicolás.sandoval.leal.90@email.com,+56 9 2658 2034,Talca,regular
cliente_91,Constanza Muñoz,constanza.muñoz.91@email.com,+56 2 3493 8374,Talca,regular
cliente_92,Julia Emilia Pérez Moreno,julia.emilia.pérez.moreno.92@email.com,+56 9 9662 5896,Rancagua,premium
cliente_93,Brandon Neftalí Fuentes-Tapia Parra,brandon.neftalí.fuentes-tapia.parra.93@email.com,+56 2 3539 8613,Temuco,regular
cliente_94,Nelly Sara Garay Pereira,nelly.sara.garay.pereira.94@email.com,+56 32 265 4709,Talca,premium
cliente_95,Julio Gonzalo Zambrano López,julio.gonzalo.zambrano.lópez.95@email.com,+56 2 2736 7347,Talca,regular
cliente_96,Guillermo Lira-Carrasco,guillermo.lira-carrasco.96@email.com,+56 2 3883 1568,Rancagua,regular
cliente_97,Franco Hernández Barraza,franco.hernández.barraza.97@email.com,+56 2 3705 2112,Antofagasta,nuevo
cliente_98,José Pedro Cortés Martinez,josé.pedro.cortés.martinez.98@email.com,+56 41 359 4072,Valparaíso,premium
cliente_99,Francisco Samuel Aliaga Carrillo,francisco.samuel.aliaga.carrillo.99@email.com,+56 65 339 6630,Iquique,premium
cliente_100,Ángel Marco Salinas Vásquez,ángel.marco.salinas.vásquez.100@email.com,+56 800 969 639,Iquique,regular
cliente_101,Juan José Quezada Valenzuela,juan.josé.quezada.valenzuela.101@email.com,+56 800 237 023,Talca,nuevo
cliente_102,Valeria Constanza González González,valeria.constanza.gonzález.gonzález.102@email.com,+56 800 286 889,Iquique,nuevo
cliente_103,Florencia Amalia Hurtado Vera,florencia.amalia.hurtado.vera.103@email.com,+56 75 350 7855,Talca,regular
cliente_104,Marco Jorge Parra Riffo,marco.jorge.parra.riffo.104@email.com,+56 61 342 5624,Talca,regular
cliente_105,José Francisco Aravena Tapia,josé.francisco.aravena.tapia.105@email.com,+56 2 3328 6376,Antofagasta,premium
cliente_106,Juan Oyarzún Lucero,juan.oyarzún.lucero.106@email.com,+56 9 5535 2739,Santiago,premium
cliente_107,Ashley Mariela Berríos Sandoval,ashley.mariela.berríos.sandoval.107@email.com,+56 600 682 269,Iquique,premium
cliente_108,Evelyn Pérez,evelyn.pérez.108@email.com,+56 2 3580 2294,Rancagua,premium
cliente_109,Carolina Flora Cáceres Pérez,carolina.flora.cáceres.pérez.109@email.com,+56 33 297 4535,Rancagua,premium
cliente_110,Felipe Oñate,felipe.oñate.110@email.com,+56 9 5275 8794,Iquique,regular
cliente_111,Carolina Carvajal Díaz,carolina.carvajal.díaz.111@email.com,+56 2 2222 1027,Valparaíso,nuevo
cliente_112,Luz Catalán Cáceres,luz.catalán.cáceres.112@email.com,+56 33 376 9636,Talca,regular
cliente_113,Petronila Edith Sepúlveda Inostroza,petronila.edith.sepúlveda.inostroza.113@email.com,+56 2 2282 7558,La Serena,nuevo
cliente_114,Esteban Segundo Burgos Fierro,esteban.segundo.burgos.fierro.114@email.com,+56 9 3160 0712,Puerto Montt,nuevo
cliente_115,Hugo Castro Gutiérrez,hugo.castro.gutiérrez.115@email.com,+56 2 3311 2245,Valparaíso,nuevo
cliente_116,Benjamín Araya Altamirano,benjamín.araya.altamirano.116@email.com,+56 2 2318 9773,Valparaíso,regular
cliente_117,Anaís Mónica Arévalo García,anaís.mónica.arévalo.garcía.117@email.com,+56 600 701 853,Santiago,premium
cliente_118,Juan Leiva-Aravena Aguilera,juan.leiva-aravena.aguilera.118@email.com,+56 2 2709 8444,Temuco,nuevo
cliente_119,Augusto Luis Rodríguez Orellana,augusto.luis.rodríguez.orellana.119@email.com,+56 2 3228 8083,Concepción,nuevo
cliente_120,María Badilla Torres,maría.badilla.torres.120@email.com,+56 44 266 1312,Talca,nuevo
cliente_121,Franco Alonso Céspedes Neira,franco.alonso.céspedes.neira.121@email.com,+56 44 250 8843,Puerto Montt,regular
cliente_122,Katherinne Muñoz Acosta,katherinne.muñoz.acosta.122@email.com,+56 43 388 7976,Talca,regular
cliente_123,Blanca Jenniffer Briones Rojas,blanca.jenniffer.briones.rojas.123@email.com,+56 2 2985 0368,Talca,regular
cliente_124,Marcela Becerra,marcela.becerra.124@email.com,+56 32 299 2123,Valparaíso,premium
cliente_125,Sofía Alejandra Lobos Cárcamo,sofía.alejandra.lobos.cárcamo.125@email.com,+56 2 2797 5894,Puerto Montt,nuevo
cliente_126,Cristina Patricia Moraga Ortiz,cristina.patricia.moraga.ortiz.126@email.com,+56 600 281 139,La Serena,premium
cliente_127,Paola Raquel Jara Hormazábal,paola.raquel.jara.hormazábal.127@email.com,+56 2 3145 5405,Rancagua,nuevo
cliente_128,Camila Pino Medina,camila.pino.medina.128@email.com,+56 9 8840 6839,Rancagua,regular
cliente_129,Oscar Alarcón,oscar.alarcón.129@email.com,+56 2 2659 1620,Concepción,regular
cliente_130,Juan Meza Sepúlveda,juan.meza.sepúlveda.130@email.com,+56 51 327 1425,Iquique,nuevo
cliente_131,Zulema Torres,zulema.torres.131@email.com,+56 44 377 7427,Iquique,nuevo
cliente_132,Florencia Fuenzalida,florencia.fuenzalida.132@email.com,+56 2 3302 1386,Iquique,nuevo
cliente_133,Andrés Valdebenito Peña,andrés.valdebenito.peña.133@email.com,+56 2 3166 3854,Concepción,regular
cliente_134,David Gabriel Catalán Varela,david.gabriel.catalán.varela.134@email.com,+56 2 3564 4364,Puerto Montt,regular
cliente_135,José Jaime Jara Figueroa,josé.jaime.jara.figueroa.135@email.com,+56 45 288 8318,Talca,regular
cliente_136,Martha María Santibáñez Caballero,martha.maría.santibáñez.caballero.136@email.com,+56 34 353 8405,La Serena,nuevo
cliente_137,Aurora Venegas Maldonado,aurora.venegas.maldonado.137@email.com,+56 43 376 0263,Talca,regular
cliente_138,Ayelén Castro,ayelén.castro.138@email.com,+56 51 296 6057,Puerto Montt,regular
cliente_139,María Anahí González Jara,maría.anahí.gonzález.jara.139@email.com,+56 2 2948 9421,Antofagasta,regular
cliente_140,Oscar Vásquez,oscar.vásquez.140@email.com,+56 73 342 8576,Santiago,premium
cliente_141,Viviana Paola Jaramillo Rivera,viviana.paola.jaramillo.rivera.141@email.com,+56 800 232 887,Rancagua,regular
cliente_142,Roberto Alberto González Delgado,roberto.alberto.gonzález.delgado.142@email.com,+56 9 2643 1381,Rancagua,premium
cliente_143,Miriam Isidora Rivera Lagos,miriam.isidora.rivera.lagos.143@email.com,+56 64 276 0110,Rancagua,nuevo
cliente_144,Belén Antonella Araya Cea,belén.antonella.araya.cea.144@email.com,+56 2 2588 0260,Valparaíso,premium
cliente_145,Hernán Miranda Fredes,hernán.miranda.fredes.145@email.com,+56 2 3847 4730,Puerto Montt,premium
cliente_146,Carlos Juan Vivanco Lobos,carlos.juan.vivanco.lobos.146@email.com,+56 2 2627 2544,La Serena,regular
cliente_147,Rocío Isidora Yáñez Hernández,rocío.isidora.yáñez.hernández.147@email.com,+56 2 3578 5929,Valparaíso,premium
cliente_148,Angélica Javiera Contreras Fuentealba,angélica.javiera.contreras.fuentealba.148@email.com,+56 42 361 6627,Antofagasta,regular
cliente_149,Camila Luz Chávez Aburto,camila.luz.chávez.aburto.149@email.com,+56 41 258 0562,Rancagua,nuevo
cliente_150,Andrés Pedro Cabrera Muñoz,andrés.pedro.cabrera.muñoz.150@email.com,+56 32 217 4033,Antofagasta,regular
cliente_151,Vicente Pablo Villegas Díaz,vicente.pablo.villegas.díaz.151@email.com,+56 72 389 0623,Temuco,nuevo
cliente_152,Jorge Bastián Salas Cortés,jorge.bastián.salas.cortés.152@email.com,+56 800 908 980,Valparaíso,premium
cliente_153,Clara Bustos Valenzuela,clara.bustos.valenzuela.153@email.com,+56 57 333 4313,Valparaíso,regular
cliente_154,Ulises José Figueroa Meza,ulises.josé.figueroa.meza.154@email.com,+56 600 144 716,Concepción,premium
cliente_155,Mercedes Leiva Castro,mercedes.leiva.castro.155@email.com,+56 2 2136 9264,Iquique,premium
cliente_156,Teresa Vivanco,teresa.vivanco.156@email.com,+56 800 785 158,Temuco,premium
cliente_157,Gustavo Cristian Ortiz Paredes,gustavo.cristian.ortiz.paredes.157@email.com,+56 33 365 0271,Concepción,nuevo
cliente_158,Martina Trinidad Tapia Aguilar,martina.trinidad.tapia.aguilar.158@email.com,+56 800 891 812,La Serena,regular
cliente_159,Leonardo Octavio Alfaro Olea,leonardo.octavio.alfaro.olea.159@email.com,+56 800 454 011,Iquique,premium
cliente_160,Luis Giancarlo Godoy Sáez,luis.giancarlo.godoy.sáez.160@email.com,+56 600 129 386,Antofagasta,regular
cliente_161,John Marcelo Pino Cabezas,john.marcelo.pino.cabezas.161@email.com,+56 58 236 3781,Puerto Montt,regular
cliente_162,Isabel Chávez Bravo,isabel.chávez.bravo.162@email.com,+56 9 3317 3067,Talca,regular
cliente_163,Vicente Figueroa González,vicente.figueroa.gonzález.163@email.com,+56 2 3579 8602,Iquique,premium
cliente_164,Zulema Millaray Romero Bahamondes,zulema.millaray.romero.bahamondes.164@email.com,+56 2 2753 6598,Valparaíso,regular
cliente_165,José Gonzalo Toledo Núñez,josé.gonzalo.toledo.núñez.165@email.com,+56 9 8219 8079,Iquique,regular
cliente_166,Leidy Cecilia Bahamondes Hidalgo,leidy.cecilia.bahamondes.hidalgo.166@email.com,+56 600 653 732,La Serena,nuevo
cliente_167,Rodrigo Joel Caro Jiménez,rodrigo.joel.caro.jiménez.167@email.com,+56 2 3549 4791,Antofagasta,nuevo
cliente_168,Patricia Valeska López Valdés,patricia.valeska.lópez.valdés.168@email.com,+56 57 389 9001,Puerto Montt,regular
cliente_169,Fabián Isaac Salamanca Contreras,fabián.isaac.salamanca.contreras.169@email.com,+56 9 5510 4175,La Serena,nuevo
cliente_170,Magdalena Mondaca Paredes,magdalena.mondaca.paredes.170@email.com,+56 2 2234 7854,Temuco,nuevo
cliente_171,Jorge Aníbal González Riquelme,jorge.aníbal.gonzález.riquelme.171@email.com,+56 9 3909 0149,Concepción,premium
cliente_172,Leidy Ramos Bugueño,leidy.ramos.bugueño.172@email.com,+56 35 273 8722,La Serena,regular
cliente_173,María Claudia Jofré Acevedo,maría.claudia.jofré.acevedo.173@email.com,+56 32 275 3303,Santiago,regular
cliente_174,Marcela Díaz Tapia,marcela.díaz.tapia.174@email.com,+56 600 771 943,Iquique,nuevo
cliente_175,Alex Martín Carmona Contreras,alex.martín.carmona.contreras.175@email.com,+56 44 319 1668,Concepción,nuevo
cliente_176,Olga Paulina Flores Moreno,olga.paulina.flores.moreno.176@email.com,+56 52 276 3447,Talca,regular
cliente_177,Omar Christian González Ortiz,omar.christian.gonzález.ortiz.177@email.com,+56 2 2616 9149,Puerto Montt,regular
cliente_178,Erika Marjorie González Rodríguez,erika.marjorie.gonzález.rodríguez.178@email.com,+56 52 266 4695,Antofagasta,nuevo
cliente_179,Rosa Maricel Valencia Barría,rosa.maricel.valencia.barría.179@email.com,+56 2 3840 8248,Iquique,premium
cliente_180,Rolando Patricio Garrido Mansilla,rolando.patricio.garrido.mansilla.180@email.com,+56 9 4288 8314,Puerto Montt,regular
cliente_181,Marisol Alejandra Núñez Castro,marisol.alejandra.núñez.castro.181@email.com,+56 9 5141 8738,Rancagua,nuevo
cliente_182,Ignacio Martín Pérez Cárcamo,ignacio.martín.pérez.cárcamo.182@email.com,+56 43 387 0432,Talca,regular
cliente_183,Fernando Moreno,fernando.moreno.183@email.com,+56 2 2343 4486,Valparaíso,premium
cliente_184,René Miranda Andrade,rené.miranda.andrade.184@email.com,+56 57 217 1180,Iquique,regular
cliente_185,Valentina Lucrecia Briones Maldonado,valentina.lucrecia.briones.maldonado.185@email.com,+56 600 126 600,Puerto Montt,regular
cliente_186,Jorge Luis Bustos Riquelme,jorge.luis.bustos.riquelme.186@email.com,+56 32 256 3361,Concepción,nuevo
cliente_187,Eliseo Lucas Cerda Aguilera,eliseo.lucas.cerda.aguilera.187@email.com,+56 41 265 4398,Rancagua,premium
cliente_188,Hans Luciano Acevedo Rojas,hans.luciano.acevedo.rojas.188@email.com,+56 45 378 6993,Antofagasta,premium
cliente_189,Rodrigo Tomás Sanhueza Rojas,rodrigo.tomás.sanhueza.rojas.189@email.com,+56 61 387 4404,Santiago,premium
cliente_190,Raquel Paredes Ávila,raquel.paredes.ávila.190@email.com,+56 2 2422 6462,Puerto Montt,nuevo
cliente_191,Alejandro Vargas Maldonado,alejandro.vargas.maldonado.191@email.com,+56 2 2860 2645,Valparaíso,nuevo
cliente_192,Benjamín Ramírez,benjamín.ramírez.192@email.com,+56 800 622 890,Iquique,regular
cliente_193,Isabella Catalina Bravo Sánchez,isabella.catalina.bravo.sánchez.193@email.com,+56 9 7124 1602,Temuco,premium
cliente_194,Macarena Molina,macarena.molina.194@email.com,+56 42 393 9807,Santiago,nuevo
cliente_195,Santiago Esparza Muñoz,santiago.esparza.muñoz.195@email.com,+56 58 372 4462,La Serena,nuevo
cliente_196,Vicente Cofré,vicente.cofré.196@email.com,+56 2 2160 1375,Concepción,regular
cliente_197,Martina Mireya Ortiz De La Fuente,martina.mireya.ortiz.de.la.fuente.197@email.com,+56 600 476 617,Santiago,premium
cliente_198,Sofía Castillo,sofía.castillo.198@email.com,+56 9 7332 6087,Rancagua,premium
cliente_199,José Damián Martínez Inostroza,josé.damián.martínez.inostroza.199@email.com,+56 2 3730 0612,Temuco,nuevo
cliente_200,Martín Beltrán Cifuentes,martín.beltrán.cifuentes.200@email.com,+56 55 215 9744,La Serena,nuevo
`;

    const productsData = `ID;Modelo;Marca;Categoría;link_categoria
SUP-001;Essentials Oversized Tee;Fear of God;Superior;https://link.com
SUP-002;Skateboarding Logo Hoodie;Supreme;Superior;https://link.com
SUP-003;Graphic Crewneck Astro Drift;HUF;Superior;https://link.com
SUP-004;Classic Polo Black;Lacoste;Superior;https://link.com
SUP-005;Denim Jacket Vintage Wash;Levi’s;Superior;https://link.com
INF-006;Cargo Pants Tactical Fit;Nike ACG;Inferior;https://link.com
INF-007;Ripped Skinny Jeans No Mercy;Represent;Inferior;https://link.com
INF-008;Sweatpants Classic Grey;Champion;Inferior;https://link.com
INF-009;Track Pants Streets;Adidas Originals;Inferior;https://link.com
INF-010;Biker Shorts Urban Black;Puma;Inferior;https://link.com
CAL-011;Air Force 1 ‘07 Triple White;Nike;Calzado;https://link.com
CAL-012;Yeezy Boost 350 V2 Zebra;Adidas;Calzado;https://link.com
CAL-013;Old Skool Black/White;Vans;Calzado;https://link.com
CAL-014;Chuck 70 Hi Canvas Natural;Converse;Calzado;https://link.com
CAL-015;RS-X Efekt Gradient;Puma;Calzado;https://link.com
ACC-016;Bucket Hat Street Jungle;Carhartt WIP;Accesorios;https://link.com
ACC-017;Crossbody Bag Mini Messenger;Herschel;Accesorios;https://link.com
ACC-018;Gafas de sol Neo Matrix;Oakley;Accesorios;https://link.com
ACC-019;Cinturón de lona con hebilla;Dickies;Accesorios;https://link.com
ACC-020;Cadena plateada Miami Cuban Link;Vitaly;Accesorios;https://link.com
`;

    // Process data
    const sales = parseCsv(salesData, ',');
    const clients = parseCsv(clientsData, ',');
    const products = parseCsv(productsData, ';');

    // Process data
    const totalRevenue = sales.reduce((sum, sale) => sum + parseFloat(sale.monto_total), 0);
    const totalUnits = sales.reduce((sum, sale) => sum + parseInt(sale.unidades), 0);
    const averageTicket = totalRevenue / sales.length;

    const salesByCategory = processGroup(sales, 'categoría', 'monto_total');
    const salesByChannel = processGroup(sales, 'canal_venta', 'monto_total');
    
    const clientSales = sales.reduce((acc, sale) => {
        const client = clients.find(c => c.id_cliente === sale.cliente);
        if (client) {
            const clientType = client.tipo_cliente;
            if (!acc[clientType]) {
                acc[clientType] = 0;
            }
            acc[clientType] += parseFloat(sale.monto_total);
        }
        return acc;
    }, {});

    const topClients = getTop5(sales, 'cliente', 'monto_total');
    const topProducts = getTop5(sales, 'modelo', 'monto_total');

    // Render data
    document.getElementById('total-revenue').textContent = `$${totalRevenue.toLocaleString('es-CL')}`;
    document.getElementById('total-units').textContent = totalUnits.toLocaleString('es-CL');
    document.getElementById('average-ticket').textContent = `$${averageTicket.toLocaleString('es-CL', { maximumFractionDigits: 0 })}`;

    renderChart('sales-by-category-chart', 'bar', 'Ventas por Categoría', salesByCategory);
    renderChart('sales-by-channel-chart', 'pie', 'Ventas por Canal', salesByChannel);
    renderChart('sales-by-client-type-chart', 'doughnut', 'Ventas por Tipo de Cliente', clientSales);

    renderList('top-clients-list', topClients);
    renderList('top-products-list', topProducts);

    // Helper functions
    function parseCsv(data, delimiter) {
        const lines = data.trim().split('\n');
        const header = lines.shift().split(delimiter);
        return lines.map(line => {
            const values = line.split(delimiter);
            return header.reduce((obj, key, i) => {
                obj[key.trim()] = values[i].trim();
                return obj;
            }, {});
        });
    }

    function processGroup(data, groupKey, valueKey) {
        return data.reduce((acc, item) => {
            const key = item[groupKey];
            if (!acc[key]) {
                acc[key] = 0;
            }
            acc[key] += parseFloat(item[valueKey]);
            return acc;
        }, {});
    }

    function getTop5(data, groupKey, valueKey) {
        const groups = processGroup(data, groupKey, valueKey);
        return Object.entries(groups)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5)
            .reduce((acc, [key, value]) => {
                acc[key] = value;
                return acc;
            }, {});
    }

    function renderChart(canvasId, type, label, data) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, {
            type: type,
            data: {
                labels: Object.keys(data),
                datasets: [{
                    label: label,
                    data: Object.values(data),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    function renderList(listId, data) {
        const list = document.getElementById(listId);
        list.innerHTML = '';
        for (const [key, value] of Object.entries(data)) {
            const li = document.createElement('li');
            li.textContent = `${key}: $${value.toLocaleString('es-CL')}`;
            list.appendChild(li);
        }
    }
});