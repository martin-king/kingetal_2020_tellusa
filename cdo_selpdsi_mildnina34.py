import os,glob

print "module load cdo"

years002="0861,0870,0875,0879,0885,0894,0900,0916,0930,0947,0950,0964,0980,1006,1011,1018,1022,1030,1032,1049,1066,1067,1073,1086,1087,1088,1093,1102,1103,1116,1117,1135,1137,1152,1153,1156,1167,1180,1184,1194,1223,1229,1242,1243,1252,1258,1266,1273,1288,1295,1296,1297,1321,1331,1344,1365,1367,1368,1379,1386,1387,1401,1411,1412,1428,1431,1453,1455,1458,1459,1492,1506,1512,1521,1535,1536,1540,1544,1556,1557,1575,1583,1588,1596,1620,1621,1623,1624,1628,1653,1654,1680,1681,1683,1695,1698,1699,1701,1720,1732,1734,1749,1767,1771,1784,1799,1800,1803,1813,1820,1847,1855,1857,1861,1872,1881,1882,1885,1891,1897,1898,1907,1921,1933,1941,1964,1985,1986,1995"

#ensno=["001","002","003","004","005","006","007","008","009","010"]
ensno=["002"]

for number in ensno:
 yno="years"+number
 print "cdo selyear,"+eval(yno)+" PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.085008-200508_jjamean.nc rub"+number+".nc"
 print "cdo sub rub"+number+".nc PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.085008-200508_jjamean_ymonmean.nc pdsi"+number+"_jjamean_mildnina34.nc"
# print "cdo selyear,"+eval(yno)+" b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.PSL.084912-200412_jjamean.nc rub"+number+".nc"
# print "cdo sub rub"+number+".nc b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.PSL.084912-200412_jjamean_ymonmean.nc psl"+number+"_jjamean_mildstrongnino34.nc"
 print "rm rub"+number+".nc"
