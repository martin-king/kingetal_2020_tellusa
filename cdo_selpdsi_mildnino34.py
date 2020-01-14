import os,glob

print "module load cdo"

years002="0876,0890,0907,0936,0944,0949,0963,0970,0999,1008,1023,1026,1037,1041,1068,1069,1090,1091,1092,1097,1108,1119,1121,1126,1132,1139,1146,1150,1166,1174,1208,1210,1219,1224,1239,1248,1264,1303,1313,1315,1316,1345,1370,1381,1392,1399,1414,1442,1447,1452,1471,1491,1494,1505,1509,1510,1545,1555,1563,1564,1577,1614,1630,1634,1636,1655,1657,1671,1677,1687,1703,1730,1731,1737,1756,1763,1780,1781,1795,1806,1807,1816,1828,1834,1839,1846,1851,1867,1893,1908,1943,1974,1981,1990,1994"

#ensno=["001","002","003","004","005","006","007","008","009","010"]
ensno=["002"]

for number in ensno:
 yno="years"+number
 print "cdo selyear,"+eval(yno)+" PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.085008-200508_jjamean.nc rub"+number+".nc"
 print "cdo sub rub"+number+".nc PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.085008-200508_jjamean_ymonmean.nc pdsi"+number+"_jjamean_mildnino34.nc"
# print "cdo selyear,"+eval(yno)+" b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.PSL.084912-200412_jjamean.nc rub"+number+".nc"
# print "cdo sub rub"+number+".nc b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.PSL.084912-200412_jjamean_ymonmean.nc psl"+number+"_jjamean_mildstrongnino34.nc"
 print "rm rub"+number+".nc"
