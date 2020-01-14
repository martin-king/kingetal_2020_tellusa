import os,glob

# used in analyses for Figs. 4 and 5.

print "module load cdo"

years001="0921,1098,1172,1185,1208,1256,1377,1383,1420,1551,1665,1993"
years002="0863,0995,1077,1211,1249,1486,1499,1529,1538,1547,1830,1980,2000"
years003="1093,1112,1134,1139,1152,1240,1397,1430,1446,1549,1785,1910,1971"
years004="0853,0892,1020,1042,1103,1152,1328,1361,1550,1989,1993,2003"
years005="0877,0881,0971,1080,1109,1174,1185,1209,1214,1372,1429,1822"
years006="0852,0960,0988,1007,1028,1034,1147,1152,1248,1567,1572,1598"
years007="0867,0964,1079,1084,1104,1127,1165,1337,1451,1507,1860,1990"
years008="0974,1050,1093,1109,1156,1304,1415,1555,1702,1872,1953,1997"
years009="0927,0969,1044,1049,1092,1127,1154,1158,1176,1780,1913"
years010="0861,0952,0976,0999,1128,1142,1197,1249,1420,1446,1666,1981"

ensno=["001","002","003","004","005","006","007","008","009","010"]

for number in ensno:
 yno="years"+number
 print "cdo -O selyear,"+eval(yno)+" PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.085011-200511_sonmean.nc rub"+number+".nc"
 print "cdo -O sub rub"+number+".nc PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.085011-200511_sonmean_ymonmean.nc pdsi"+number+"_sonmean_extremenino34.nc"
# print "cdo selyear,"+eval(yno)+" PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.085005-200505_mammean.nc rub"+number+".nc"
# print "cdo sub rub"+number+".nc PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.085005-200505_mammean_ymonmean.nc pdsi"+number+"_mammean_extremenino34.nc"
 print "rm rub"+number+".nc"
