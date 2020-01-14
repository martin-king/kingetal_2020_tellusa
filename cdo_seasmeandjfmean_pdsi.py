import os,glob

# used in analyses for Figs. 4 and 5.

filelist = sorted(glob.glob("PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16.???.cam.h0.nc"))

for file in filelist:
  att_in=file.split('.')
#commented because needs to do only once  
# print "cdo seasmean "+file+" PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0_seasmean.nc"
#  print "cdo selmon,11 PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0_seasmean.nc PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.085011-200511_sonmean.nc"
#  print "cdo ymonmean PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.085011-200511_sonmean.nc PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.085011-200511_sonmean_ymonmean.nc"

 print "cdo selmon,11 PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0_seasmean.nc PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.085011-200511_sonmean.nc"
 print "cdo ymonmean PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.085011-200511_sonmean.nc PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.085011-200511_sonmean_ymonmean.nc"

#ctl is not really needed  print "cp PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16.001.cam.h0_085008-200508_jjamean_ymonmean.ctl"+" PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.084912-200412_mammean_ymonmean.ctl" 
#  print 'sed /"DSET"/s/"001"/"'+att_in[4]+'"/'+" PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.084912-200412_djfmean_ymonmean.ctl > ruba.ctl"
#  print 'cp ruba.ctl '+" PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.084912-200412_jjamean_ymonmean.ctl"
