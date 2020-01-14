import os,glob

# used in analysis for reply to reviewers

print "module load cdo"

years001="0971,1142,1208,1383,1597,1658,1727,1789,1942"
years002="0891,1196,1211,1393,1400,1448,1514,1717,1868,1938,1945,1980"
years003="0868,1000,1112,1152,1215,1240,1247,1368,1413,1486,1544,1549,1572,1679,1971,2001"
years004="1120,1177,1307,1322,1402,1512,1550,1568,1578,1614,1684,1914,1993"
years005="0908,1030,1080,1129,1168,1174,1178,1185,1231,1238,1511,1531,1536,1595,1656,1860,1884,1961,2000"
years006="0852,0883,0891,0932,0945,1000,1028,1081,1113,1121,1299,1360,1379,1508,1582,1901"
years007="0859,0867,0990,1006,1104,1116,1192,1351,1363,1437,1451,1544,1662,1868,1879,1990"
years008="1008,1059,1067,1093,1156,1510,1575,1611,1637,1734,1783,1803,1940,1975,1997"
years009="0958,0969,1096,1347,1413,1504,1625,1772,1955,1983,1989"
years010="0861,0867,0927,0952,0971,0976,1166,1197,1222,1230,1249,1273,1284,1531,1636,1647,1666,1973"

ensno=["001","002","003","004","005","006","007","008","009","010"]

for number in ensno:
 yno="years"+number
 print "cdo selyear,"+eval(yno)+" PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.085008-200508_jjamean.nc rub"+number+".nc"
 print "cdo sub rub"+number+".nc PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.085008-200508_jjamean_ymonmean.nc pdsi"+number+"_jjamean_extremenino3.nc"
# print "cdo selyear,"+eval(yno)+" b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.PSL.084912-200412_jjamean.nc rub"+number+".nc"
# print "cdo sub rub"+number+".nc b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.PSL.084912-200412_jjamean_ymonmean.nc psl"+number+"_jjamean_mildstrongnino3.nc"
 print "rm rub"+number+".nc"
