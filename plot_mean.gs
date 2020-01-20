function plotmean

* used for Fig. 3

*xdfopen sst_djfmean_mildstrongnino34_1899-2003_timmean.ctl
*xdfopen sst_djfmean_mildstrongnino34_1899-2003_timvar.ctl
*LME mild strong 98 events
*LME extreme 13 events
*Had mild strong 17 events
*Had extreme 3 events
*Had all la ninas 18 events

'reset'

'set lat -60 60'
'set vpage 0 11 0 4.5'
'set xlopts 1 8 0.29'
'set ylopts 1 8 0.29'
*set xlopts color <thickness <size>>

'tstat2d=abs(sst.1)/sqrt(sst.2/18)'

'run /Users/martin/mbp1rsync.dir/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/rgbset.gs'

'set display color white'
'set grads off'
'set ylint 30'
'set xlint 60'
'set grid on 5 1'
'set mpdraw on'
'set rgb 17 80 80 80'
'set map 17 1 6'
'set gxout shaded'
'set clevs -1.5 -1. -0.5 -0.05 0.05 0.5 1. 1.5'
'set ccols  47   45   43   42  0 62  64  66  68'
*'set clevs -3. -2. -1 -0.05 0.05 1. 2. 3.'
*'set ccols  47   45   43   42  0 62  64  66  68'

*'set rgb 16 180 180 180'
*'set rbcols 16'
*'set cmin 0.0'
*'d tstat2d-0'
'd maskout(sst.1,tstat2d-3.)'

*'run /Users/martin/mbp1rsync.dir/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/cbar.gs 1. 1 9.5 2.2'
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
'd maskout(sst.1,5-abs(sst.1))'
'set cint 0.5'
'set cmin 0.1'
'set cstyle 1'
*'set ccolor 79'
'set ccolor 1'
*'set clevs 1 2 4 6'
*'set clevs 0.2 0.4 0.6 0.8 1.0 1.2 1.4'
'set cthick 5'
'd maskout(sst.1,5-abs(sst.1))'

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
