function calcdiff

* used for Fig. 3a

*xdfopen HadISST_sst_djfmean_1900_2014_remapbil_common.ctl
*xdfopen TS_LME_djfmean_fullforcings_1899_2004_remapbil_common.ctl

'reset'

'set lat -40 40'
'set vpage 0 11 0 3.5'
'set xlopts 1 8 0.29'
'set ylopts 1 8 0.29'
*set xlopts color <thickness <size>>

'ssthadmean=ave(sst.1+273.15,t=1,t=105)'
'sstlmemean=ave(sst.2,t=1,t=1060)'
'varhad=ave(pow(sst.1+273.15-ssthadmean,2),t=1,t=105)'
'varlme=ave(pow(sst.2-sstlmemean,2),t=1,t=1060)'

'sstdiff=sstlmemean-ssthadmean'
'tstat2d=abs(sstdiff)/sqrt(varhad/105.0+varlme/1060.0)'

'run /Users/martin/mbp1rsync.dir/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/rgbset.gs'

'set display color white'
'set grads off'
'set ylint 20'
'set xlint 60'
'set grid on 5 1'
'set mpdraw on'
'set rgb 17 80 80 80'
'set map 17 1 6'
'set gxout shaded'
*'set clevs -2. -1. -0.6 -0.2 0.2 0.6 1. 2.'
*'set ccols  48   46   44   42  0   22  24  26  68'
'set clevs -1.5 -1. -0.5 -0.05 0.05 0.5 1. 1.5'
'set ccols  47   45   43   42  0 62  64  66  68'
*'set rgb 16 180 180 180'
*'set rbcols 16'
*'set cmin 0.0'
*'d tstat2d-0'
'd maskout(sstdiff,tstat2d-2.)'

'run /Users/martin/mbp1rsync.dir/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/cbar.gs 1. 1 9.5 1.7'
* cbar.gs sf vert xmid ymid

'set gxout contour'
'set clab off'
'set cint 0.5'
'set cmax -0.1'
*'set ccolor 58'
'set ccolor 1'
*'set clevs -6 -4 -2 -1'
*'set clevs -0.1 -0.2'
*'set clopts -1 -1 0.15'
*'set clskip 2'
'set cstyle 2'
'set cthick 5'
'd sstdiff'
'set cint 0.5'
'set cmin 0.1'
'set cstyle 1'
*'set ccolor 79'
'set ccolor 1'
*'set clevs 1 2 4 6'
*'set clevs 0.2 0.4 0.6 0.8 1.0 1.2 1.4'
'set cthick 5'
'd sstdiff'

'basemap L 15 17 L'

*'set clab on'
*'set clevs 0'
*'set ccolor 1'
*'set cstyle 1'
*'set grads off'
*'set mpdraw off'
*'set cthick 8'
*'d reg2dz'

return
