import os,glob

# used in analysis for reply to reviewers

print "module load cdo"

years001="0851,0907,1009,1047,1099,1147,1192,1256,1310,1860,1924,1982,1992"
years002="0926,1100,1109,1307,1528,1598,1864,1957,1999,2000"
years003="0851,0852,0876,0968,0986,1015,1022,1063,1164,1199,1221,1324,1939,2000"
years004="0853,0891,0892,0901,0920,0929,0964,0974,0975,0985,1075,1113,1128,1156,1185,1244,1253,1254,1537,1567,1809,1829,1873,1936,1944,1963,1999,2003"
years005="0869,0870,0917,0970,0984,1026,1060,1137,1184,1213,1282,1451,1838,1883,1973"
years006="0882,0931,1018,1069,1088,1165,1176,1206,1207,1255,1327,1487,1499,1782,1985,1986,1999,2005"
years007="0881,0970,0971,1146,1206,1302,1740,1780,2002,2003"
years008="0965,1028,1050,1376,1449,1655,1669,1899,1933,1957,2002"
years009="0851,0860,0904,0997,1092,1112,1117,1308,1315,1659,1667,1843,1962,1982,2000"
years010="0853,0873,0874,0909,1026,1080,1093,1097,1175,1257,1299,1563,1939,1986,1987,1997,2000,2001"

ensno=["001","002","003","004","005","006","007","008","009","010"]

for number in ensno:
 yno="years"+number
 print "cdo selyear,"+eval(yno)+" PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.085008-200508_jjamean.nc rub"+number+".nc"
 print "cdo sub rub"+number+".nc PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.085008-200508_jjamean_ymonmean.nc pdsi"+number+"_jjamean_extremenino4.nc"
# print "cdo selyear,"+eval(yno)+" b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.PSL.084912-200412_jjamean.nc rub"+number+".nc"
# print "cdo sub rub"+number+".nc b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.PSL.084912-200412_jjamean_ymonmean.nc psl"+number+"_jjamean_mildstrongnino3.nc"
 print "rm rub"+number+".nc"
