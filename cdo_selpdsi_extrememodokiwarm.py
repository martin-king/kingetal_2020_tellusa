import os,glob

print "module load cdo"

years001="1047,1068,1293,1329,1832,1851,1960"
years002="0956,0989,0994,1070,1120,1125,1307,1585,1909,1915,1956"
years003="0986,1005,1185,1323,1330,1516,1909"
years004="0860,0896,1113,1185,1253,1315,1360,1372,1451,1537,1566,1809,1819,1862,1936,1969"
years005="0917,0970,1051,1137,1145,1213,1281,1438"
years006="1273,1487,1614,1747,1985,1999"
years007="0887,0971,1268,1315,1372,1780,1973,1989"
years008="1146,1151,1376,1449,1655,1750,2002"
years009="0918,1003,1308,1368,1462,1572,1659,1667,1843,1854,1951,1982,2000"
years010="0942,1175,1214,1293,1320,1725,1939,1986,1987,2000"

ensno=["001","002","003","004","005","006","007","008","009","010"]

for number in ensno:
 yno="years"+number
# print "cdo selyear,"+eval(yno)+" PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.084912-200412_djfmean.nc rub"+number+".nc"
# print "cdo sub rub"+number+".nc PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.084912-200412_djfmean_ymonmean.nc pdsi"+number+"_djfmean_extrememodokiwarm.nc"
 print "cdo -O selyear,"+eval(yno)+" b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.PSL.084912-200412_djfmean.nc rub"+number+".nc"
 print "cdo -O sub rub"+number+".nc b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.PSL.084912-200412_djfmean_ymonmean.nc psl"+number+"_djfmean_extrememodokiwarm.nc"
 print "rm rub"+number+".nc"
