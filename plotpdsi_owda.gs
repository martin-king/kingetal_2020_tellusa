function xxx

* used for Fig. 2

'reset'

'set vpage 0. 11 0. 7'
*'set mpdset mres'
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

*number of points 175: sum(maskout(enso.2,enso.2-1)/maskout(enso.2,enso.2-1),t=1,t=1103)
*number of points 16: sum(maskout(enso.2,enso.2-2)/maskout(enso.2,enso.2-2),t=1,t=1103)
*number of points 176: sum(maskout(enso.2,-enso.2-1)/maskout(enso.2,-enso.2-1),t=1,t=1103)
*number of points 24: sum(maskout(enso.2,-enso.2-2)/maskout(enso.2,-enso.2-2),t=1,t=1103)


*el nino between 1 to 10 std dev:
*'compo=1.*ave(maskout(maskout(pdsi,enso.2-1.),-abs(enso.2)+2.),t=1,t=1103)'
*el nino above 2 std dev:
'compo=1.*ave(maskout(maskout(pdsi,enso.2-2.),-abs(enso.2)+20),t=1,t=1103)'
*la nina between 1 to 10 std dev:
*'compo=1.*ave(maskout(maskout(pdsi,-enso.2-1.),-abs(enso.2)+2.),t=1,t=1103)'
*la nina above 2 std dev:
*'compo=1.*ave(maskout(maskout(pdsi,-enso.2-2.),-abs(enso.2)+20.),t=1,t=1103)'

'run /Users/martin/mbp1rsync.dir/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/rgbset.gs'

'variance=ave(pow(maskout(maskout(pdsi,enso.2-1.),-abs(enso.2)+2.)-compo,2),t=1,t=1103)'
'tvalue=abs(compo)/sqrt(variance/16)'
*'pdsivar=ave(pow(pdsi,2),t=1001,t=1103)'

'set gxout grfill'
'set csmooth off'
'set clevs -1. -0.8 -0.6  -0.4  -0.2 -0.1 0.1 0.2  0.4  0.6 0.8 1.'
'set ccols 79  78 77  25  24  23  0  32  36 38 43 44 45 48'
*'set clevs 0. 1. 1.2 1.4 1.6 1.8 2.'
*'set ccols 0  32  36 38 43 44 45 48'
*'d sqrt(pdsivar)'
*'d maskout(compo,tvalue-1.7)'
'd compo'
*'compo=ave(pdsi,time=jun1340,time=jun1370)'
*'d compo'
*'d tvalue-1.7'

*'basemap O 15 17 L'
*'set clevs 0. 1. 1.2 1.4 1.6 1.8 2.'
*'set ccols 0  32  36 38 43 44 45 48'
*'d sqrt(pdsivar)'
*'set clevs -1. -0.8 -0.6  -0.4  -0.2 -0.1 0.1 0.2  0.4  0.6 0.8 1.'
*'set ccols 79  78 77  76  75  74  0  32  36 38 43 44 45 48'
*'d maskout(compo,tvalue-1.7)'
'basemap O 15 17 L'
'set gxout contour'
'set cmin 100'
'd compo'


return
