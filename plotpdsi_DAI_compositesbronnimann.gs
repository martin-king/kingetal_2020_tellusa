function xxx

* used for Fig. 1
* used with pdsisc_dai_jjamean_maps_1850_2014_fawc1_r2_5x2_5_ipe2.ctl, etc

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
'set grads off'
'set display color white'
'set lon -15 45'
'set lat 35 75'

*Bronnimann El Ninos excluding extremes
*'compo=pdsi(t=1)+pdsi(t=7)+pdsi(t=13)+pdsi(t=16)+pdsi(t=20)+pdsi(t=27)+pdsi(t=32)+pdsi(t=41)+pdsi(t=42)+pdsi(t=53)+pdsi(t=59)+pdsi(t=67)+pdsi(t=78)+pdsi(t=88)+pdsi(t=104)'
*'compo=compo/15.'
*Bronnimann extreme El Ninos
*'compo=pdsi(t=74)+pdsi(t=84)+pdsi(t=99)'
*'compo=compo/3.'
*
'compo=pdsi(t=124)+pdsi(t=134)+pdsi(t=149)'
'compo=compo/3.'
*
*Bronnimann La Ninas excluding extremes
*'compo=pdsi(t=11)+pdsi(t=18)+pdsi(t=26)+pdsi(t=35)+pdsi(t=44)+pdsi(t=51)+pdsi(t=57)+pdsi(t=69)+pdsi(t=72)+pdsi(t=75)+pdsi(t=77)+pdsi(t=86)+pdsi(t=90)+pdsi(t=101)'
*'compo=compo/14.'

* for El Ninos above
*'variance=(pow(pdsi(t=1)-compo,2)+pow(pdsi(t=7)-compo,2)+pow(pdsi(t=13)-compo,2)+pow(pdsi(t=16)-compo,2)+pow(pdsi(t=20)-compo,2)+pow(pdsi(t=27)-compo,2)+pow(pdsi(t=32)-compo,2)+pow(pdsi(t=41)-compo,2)+pow(pdsi(t=42)-compo,2)+pow(pdsi(t=53)-compo,2)+pow(pdsi(t=59)-compo,2)+pow(pdsi(t=67)-compo,2)+pow(pdsi(t=78)-compo,2)+pow(pdsi(t=88)-compo,2)+pow(pdsi(t=104)-compo,2))/15.'
*'tvalue=abs(compo)/sqrt(variance/15)'
*
* for La Ninas above
*'variance=(pow(pdsi(t=11)-compo,2)+pow(pdsi(t=18)-compo,2)+pow(pdsi(t=26)-compo,2)+pow(pdsi(t=35)-compo,2)+pow(pdsi(t=44)-compo,2)+pow(pdsi(t=51)-compo,2)+pow(pdsi(t=57)-compo,2)+pow(pdsi(t=69)-compo,2)+pow(pdsi(t=72)-compo,2)+pow(pdsi(t=75)-compo,2)+pow(pdsi(t=77)-compo,2)+pow(pdsi(t=86)-compo,2)+pow(pdsi(t=90)-compo,2)+pow(pdsi(t=101)-compo,2))/14.'
*'tvalue=abs(compo)/sqrt(variance/14)'

'variance=(pow(pdsi(t=124)-compo,2)+pow(pdsi(t=134)-compo,2)+pow(pdsi(t=149)-compo,2))/3.'
'tvalue=abs(compo)/sqrt(variance/3)'

'run /Users/martin/mbp1rsync.dir/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/rgbset.gs'
'set gxout grfill'
'set csmooth off'
'set clevs -1. -0.8 -0.6  -0.4  -0.2 -0.1 0.1 0.2  0.4  0.6 0.8 1.'
'set ccols 79  78 77  25  24  23  0  32  36 38 43 44 45 48'
'd compo'
*'d maskout(compo,tvalue-2.)'
'run /Users/martin/mbp1rsync.dir/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/cbar.gs 1.1 1 9.3 3.5'
* cbar.gs sf vert xmid ymid

*set tile number type <width <height <lwid <fgcolor <bgcolor>>>>>
'set tile 1 4 10 10 2 1'
'set rgb 81 tile 1'
'set ccols 81 81'
'set clevs 0.'
'd maskout(compo,tvalue-2.)'

*'set gxout contour'
*'set clab off'
*'set cint 0.2'
*'set cmax -0.1'
*'set cstyle 2'
*'set ccolor 79'
*'set cthick 7'
*'d compo'
*'set cmin 0.1'
*'set cstyle 1'
*'set ccolor 48'
*'set cthick 7'
*'d compo'
*'set clevs 0'
*'set cstyle 1'
*'set ccolor 1'
*'set cthick 7'
*'set clab on'
*'set clopts -1 -1 0.15'
*'d compo'

*'run /Users/martinpeterking/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/cbar.gs 1.1 1 9.3 3.5'
* cbar.gs sf vert xmid ymid

'basemap O 15 17 L'
'set gxout contour'
'set cmin 100'
'd compo'

return
