import os,glob

# used in analysis for Fig. 6

print "module load cdo"

years001="0856,0876,0900,0904,0909,0922,0961,0967,0973,0998,1011,1018,1026,1028,1029,1049,1055,1070,1075,1076,1083,1095,1100,1105,1117,1148,1155,1156,1168,1173,1187,1209,1220,1237,1247,1262,1273,1276,1295,1311,1320,1345,1355,1364,1365,1371,1378,1379,1385,1392,1396,1435,1455,1465,1476,1480,1486,1504,1531,1558,1589,1599,1603,1604,1616,1636,1640,1646,1650,1653,1660,1667,1668,1676,1690,1691,1696,1719,1729,1733,1734,1735,1739,1754,1762,1766,1779,1782,1816,1817,1828,1847,1856,1905,1919,1930,1944,1955,1971,1994,1995"
years002="0857,0860,0864,0884,0893,0903,0923,0928,0929,0946,0958,0972,0985,0986,1017,1079,1080,1094,1110,1127,1134,1144,1179,1188,1213,1233,1246,1250,1257,1261,1267,1268,1272,1286,1287,1293,1310,1342,1343,1348,1349,1378,1384,1395,1419,1426,1432,1444,1450,1466,1488,1500,1511,1516,1522,1530,1539,1542,1548,1581,1587,1600,1603,1605,1611,1617,1618,1631,1638,1641,1646,1659,1672,1682,1684,1694,1706,1713,1719,1728,1759,1761,1762,1766,1775,1787,1812,1814,1818,1824,1831,1841,1844,1849,1869,1870,1886,1904,1917,1920,1929,1939,1940,1946,1947,1953,1958,1963,1971,1996,2001"
years003="0869,0894,0915,0924,0925,0942,0950,0952,0956,0961,0971,0973,0984,0988,1002,1007,1018,1030,1038,1053,1064,1076,1082,1084,1090,1107,1113,1114,1121,1122,1135,1136,1140,1155,1166,1188,1216,1217,1236,1242,1248,1262,1273,1278,1287,1298,1312,1316,1325,1344,1365,1370,1388,1395,1399,1404,1414,1415,1416,1420,1424,1431,1433,1440,1448,1462,1488,1492,1518,1523,1528,1538,1545,1547,1551,1562,1569,1589,1594,1598,1603,1604,1624,1648,1655,1657,1663,1669,1670,1674,1677,1680,1689,1694,1697,1719,1733,1780,1782,1786,1791,1803,1829,1838,1882,1885,1911,1926,1940,1951,1954,1955,1973,1981,1994,2002,2003"
years004="0862,0876,0883,0888,0893,0898,0942,0971,0976,0987,0993,1005,1027,1039,1072,1083,1110,1122,1150,1154,1179,1190,1191,1206,1230,1232,1246,1255,1263,1266,1271,1280,1289,1304,1309,1317,1324,1329,1335,1356,1362,1382,1383,1417,1433,1434,1440,1453,1470,1475,1514,1517,1528,1539,1552,1553,1558,1563,1569,1570,1574,1580,1589,1595,1603,1616,1623,1626,1632,1638,1643,1644,1651,1677,1679,1680,1686,1702,1722,1740,1744,1750,1764,1785,1786,1802,1821,1824,1834,1868,1886,1891,1897,1898,1900,1906,1907,1925,1928,1932,1974,1979,1991"
years005="0878,0882,0891,0904,0909,0932,0942,0972,0989,1005,1032,1063,1074,1078,1081,1082,1093,1112,1114,1126,1162,1163,1170,1175,1180,1195,1201,1204,1216,1233,1240,1245,1256,1262,1276,1284,1289,1302,1308,1313,1341,1342,1359,1374,1391,1413,1430,1431,1441,1455,1456,1463,1465,1485,1486,1492,1512,1532,1537,1538,1565,1571,1584,1588,1591,1596,1597,1606,1613,1627,1634,1641,1658,1660,1661,1670,1672,1691,1695,1696,1701,1708,1717,1722,1732,1740,1747,1758,1761,1768,1773,1782,1796,1810,1818,1823,1833,1839,1856,1862,1868,1881,1886,1895,1924,1949,1953,1963,1967,1974,1979,1996"
years006="0854,0859,0867,0884,0885,0893,0898,0929,0933,0946,0947,0976,0990,0991,1001,1002,1013,1030,1035,1048,1058,1074,1083,1109,1114,1123,1154,1167,1173,1177,1204,1208,1214,1223,1249,1256,1262,1268,1279,1283,1295,1296,1301,1308,1313,1342,1346,1351,1356,1362,1369,1373,1381,1396,1427,1437,1456,1476,1500,1509,1510,1511,1521,1534,1550,1559,1573,1583,1588,1601,1604,1608,1619,1623,1629,1635,1679,1689,1698,1728,1729,1735,1742,1749,1759,1765,1779,1792,1804,1816,1819,1823,1827,1831,1832,1851,1852,1862,1873,1887,1894,1898,1903,1906,1930,1931,1935,1959,1964,1965,1969,1977,1987,2001,2002"
years007="0857,0861,0869,0873,0889,0893,0900,0917,0937,0955,0966,0967,0968,0976,0986,0991,0992,0998,1008,1027,1039,1090,1105,1106,1120,1138,1154,1167,1193,1194,1217,1253,1258,1261,1262,1263,1270,1271,1274,1279,1285,1287,1291,1296,1304,1317,1330,1354,1382,1390,1395,1408,1412,1417,1452,1454,1455,1489,1499,1503,1508,1509,1521,1525,1547,1555,1591,1596,1601,1604,1615,1621,1630,1644,1658,1663,1664,1666,1675,1680,1697,1708,1710,1711,1718,1737,1738,1743,1749,1752,1759,1760,1766,1770,1788,1818,1819,1829,1839,1852,1857,1869,1881,1887,1893,1900,1918,1925,1933,1940,1951,1961,1991,1992"
years008="0858,0862,0867,0875,0922,0957,0963,0975,0982,0998,1009,1011,1025,1038,1063,1069,1082,1094,1095,1125,1134,1144,1153,1158,1175,1224,1236,1249,1250,1257,1258,1262,1266,1271,1278,1285,1291,1299,1305,1313,1333,1336,1340,1344,1349,1367,1393,1399,1416,1417,1423,1432,1439,1445,1453,1455,1456,1465,1468,1488,1496,1511,1512,1518,1541,1552,1556,1577,1583,1592,1603,1605,1612,1639,1643,1657,1671,1688,1715,1719,1723,1728,1730,1747,1780,1785,1794,1795,1805,1813,1819,1821,1843,1861,1884,1901,1913,1934,1935,1941,1950,1993,1998,1999,2003"
years009="0855,0861,0905,0919,0946,0965,0971,0977,1010,1021,1040,1041,1046,1047,1050,1051,1064,1079,1098,1177,1183,1201,1205,1217,1227,1233,1262,1276,1284,1289,1291,1317,1325,1348,1349,1384,1385,1403,1415,1419,1456,1457,1464,1471,1477,1493,1497,1501,1502,1506,1514,1530,1536,1552,1555,1561,1595,1599,1603,1604,1610,1619,1620,1626,1627,1631,1680,1681,1710,1714,1715,1723,1727,1752,1774,1782,1787,1788,1793,1796,1804,1819,1835,1836,1840,1845,1856,1865,1898,1907,1914,1935,1941,1957,1964,1967,1978,1985,1991,2002"
years010="0858,0869,0906,0914,0929,0933,0949,0953,0958,0961,0978,0982,0991,0996,1000,1005,1015,1033,1061,1082,1094,1122,1130,1140,1168,1182,1183,1187,1195,1199,1202,1206,1217,1227,1232,1251,1252,1263,1269,1270,1275,1276,1277,1286,1317,1345,1386,1397,1421,1433,1448,1451,1453,1462,1475,1476,1481,1497,1500,1502,1506,1509,1516,1517,1534,1538,1542,1546,1565,1568,1579,1598,1602,1603,1608,1619,1638,1640,1643,1649,1663,1668,1678,1680,1692,1700,1710,1714,1715,1723,1768,1771,1793,1796,1805,1809,1816,1817,1855,1860,1888,1915,1927,1932,1940,1961,1969,1977,1983,1994,2002"

ensno=["001","002","003","004","005","006","007","008","009","010"]

for number in ensno:
 yno="years"+number
 print "cdo selyear,"+eval(yno)+" PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.085008-200508_jjamean.nc rub"+number+".nc"
 print "cdo sub rub"+number+".nc PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.085008-200508_jjamean_ymonmean.nc pdsi"+number+"_jjamean_mildstrongnina34.nc"
# print "cdo selyear,"+eval(yno)+" b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.PSL.084912-200412_jjamean.nc rub"+number+".nc"
# print "cdo sub rub"+number+".nc b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.PSL.084912-200412_jjamean_ymonmean.nc psl"+number+"_jjamean_mildstrongnino34.nc"
 print "rm rub"+number+".nc"