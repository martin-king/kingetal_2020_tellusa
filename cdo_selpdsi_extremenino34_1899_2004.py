import os,glob

# used in Fig. 3.

print "module load cdo"

years001="1993"
years002="1980,2000"
years003="1910,1971"
years004="1989,1993,2003"
years005=""
years006=""
years007="1990"
years008="1953,1997"
years009="1913"
years010="1981"

ensno=["001","002","003","004","005","006","007","008","009","010"]

for number in ensno:
 yno="years"+number
# print "cdo selyear,"+eval(yno)+" PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.085011-200511_sonmean.nc rub"+number+".nc"
# print "cdo sub rub"+number+".nc PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.085011-200511_sonmean_ymonmean.nc pdsi"+number+"_sonmean_mildstrongnino34.nc"
# print "cdo selyear,"+eval(yno)+" b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.PSL.084912-200412_jjamean.nc rub"+number+".nc"
# print "cdo sub rub"+number+".nc b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.PSL.084912-200412_jjamean_ymonmean.nc psl"+number+"_jjamean_mildstrongnino34.nc"
 print "cdo selyear,"+eval(yno)+" b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.TS.084912-200412_djfmean_1899-2003.nc rub"+number+".nc"
 print "cdo sub rub"+number+".nc b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.TS.084912-200412_djfmean_1899-2003_ymonmean.nc sst"+number+"_djfmean_extremenino34_1899-2003.nc"
 print "rm rub"+number+".nc"
