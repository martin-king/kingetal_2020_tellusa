function xxx

* use for plotting Fig. 5.
* example: xdfopen psl_djfmean_mildstrongnino34.ctl
'reset'

'set vpage 0. 11 0. 4'
'set mpdraw on'
'set rgb 17 90 90 90'
'set map 17 1 6'
*'set grid on 5 1'
'set grid off'
'set xlopts 1 6 0.32'
'set ylopts 1 6 0.35'
'set font 0'
'set xlint 60'
'set ylint 30'
'set grads off'
'set display color white'
*Europe
'set lon -360 60'
'set lat -30 90'

'run /Users/martin/mbp1rsync.dir/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/rgbset.gs'

'pslave=ave(psl,t=1,t=984)'
'variance=ave(pow(psl-pslave,2),t=1,t=984)'
'tvalue=abs(pslave)/sqrt(variance/984)'

*'run /Users/martinpeterking/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/cbar.gs 1.1 1 9.2 3.5'
* cbar.gs sf vert xmid ymid

'set gxout shaded'
'set rgb 16 200 200 200'
'set rbcols 16'
'set cmin 0.0'
'd tvalue-2.'

'set gxout contour'
'set clab off'
'set cint 100'
'set cmax -0.01'
'set ccolor 58'
'set cstyle 2'
'set cthick 9'
'd pslave'
'set cint 100'
'set cmin 0.01'
'set cstyle 1'
'set ccolor 28'
'd pslave'
'set clevs 0'
'set ccolor 1'
'set cstyle 1'
'set grads off'
*'set mpdraw off'
*'set cthick 12'
*'set clopts -1 -1 0.15'
*'set clab on'
*'d pslave'

*'basemap O 15 17 L'
*'set gxout contour'
*'set cmin 100'
*'d pslave'


return
