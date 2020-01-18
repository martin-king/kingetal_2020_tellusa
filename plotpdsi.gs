function xxx

* use for plotting Fig. 4
* e.g. xdfopen pdsi_djfmean_mildstrongnino34.ctl 

'reset'

'set vpage 0. 11 0. 7'
'set mpdraw on'
'set rgb 17 90 90 90'
'set map 17 1 6'
'set grid on 5 1'
'set xlopts 1 6 0.32'
'set ylopts 1 6 0.35'
'set font 0'
'set xlint 10'
'set ylint 10'
*'set xlint 15'
*'set ylint 15'
'set grads off'
'set display color white'
*Europe
'set lon -15 45'
'set lat 35 75'

'run /Users/martin/mbp1rsync.dir/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/rgbset.gs'

'pdsiave=ave(pdsi,t=1,t=984)'
'variance=ave(pow(pdsi-pdsiave,2),t=1,t=984)'
'tvalue=abs(pdsiave)/sqrt(variance/984)'

'set gxout grfill'
'set csmooth off'
'set clevs -1. -0.8 -0.6  -0.4  -0.2 -0.1 0.1 0.2  0.4  0.6 0.8 1.'
'set ccols 79  78 77 25  24  23  0  32  36 38 43 44 45 48'
'd pdsiave'

'run /Users/martin/mbp1rsync.dir/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/cbar.gs 1.1 1 9.2 3.5'
* cbar.gs sf vert xmid ymid

*set tile number type <width <height <lwid <fgcolor <bgcolor>>>>>
'set tile 1 4 10 10 4 1'
'set rgb 81 tile 1'
'set ccols 81 81'
'set clevs 0.'
'd maskout(pdsiave,tvalue-2.)'

'basemap O 15 17 L'
'set gxout contour'
'set cmin 100'
'd pdsiave'


return
