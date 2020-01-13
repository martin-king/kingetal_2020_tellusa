import os,glob
# for analysis to create fig. 4
# go through all experiment members to create seasman and extract djfmean
# then create grads ctl to read it (not strictly necessary)

filelist = sorted(glob.glob("b.e11.BLMTRC5CN.f19_g16.???.cam.h0.TS.085001-200512.nc"))

for file in filelist:
  att_in=file.split('.')
  print "cdo seasmean "+file+" b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.TS.085001-200512_seasmean.nc"
  print "cdo selmon,02 b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.TS.085001-200512_seasmean.nc b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.TS.084912-200412_djfmean.nc"
  print "cp b.e11.BLMTRC5CN.f19_g16.001.cam.h0.TS.084912-200412_djfmean.ctl b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.TS.084912-200412_djfmean.ctl"
  print 'sed /"DSET"/s/"001"/"'+att_in[4]+'"/'+" b.e11.BLMTRC5CN.f19_g16."+att_in[4]+".cam.h0.TS.084912-200412_djfmean.ctl > ruba.ctl"
  print 'mv ruba.ctl b.e11.BLMTRC5CN.f19_g16.'+att_in[4]+'.cam.h0.TS.084912-200412_djfmean.ctl'
