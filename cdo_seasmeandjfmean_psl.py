import os,glob
#similar to cdo_seasmeandjfmean_sst.py
#used in analysis to create Fig. 5

filelist = sorted(glob.glob("b.e11.BLMTRC5CN.f19_g16.0??.cam.h0.PSL.085001-200512.nc"))

for file in filelist:
  att_in=file.split('.')
#commented because needs to do only once    print "cdo seasmean "+file+" b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.PSL.085001-200512.seasmean.nc"
  print "cdo selmon,07 b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.PSL.085001-200512.seasmean.nc b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.PSL.084912-200412_jjamean.nc"
  print "cdo ymonmean b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.PSL.084912-200412_jjamean.nc b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.PSL.084912-200412_jjamean_ymonmean.nc"

#ctl is not really needed  print "cp PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16.001.cam.h0_085008-200508_jjamean_ymonmean.ctl"+" PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.084912-200412_mammean_ymonmean.ctl" 
#  print 'sed /"DSET"/s/"001"/"'+att_in[4]+'"/'+" PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.084912-200412_djfmean_ymonmean.ctl > ruba.ctl"
#  print 'cp ruba.ctl '+" PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.084912-200412_jjamean_ymonmean.ctl"
