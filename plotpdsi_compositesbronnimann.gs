function xxx

* used for Fig. 1.

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

*el nino excluding extreme and volcanic years from 1889 to 2002
*'compo=pdsi(t=1001)+pdsi(t=1007)+pdsi(t=1013)+pdsi(t=1016)+pdsi(t=1020)+pdsi(t=1027)+pdsi(t=1032)+pdsi(t=1041)+pdsi(t=1042)+pdsi(t=1053)+pdsi(t=1059)+pd*si(t=1067)+pdsi(t=1078)+pdsi(t=1088)'
*'compo=compo/14'
*
*el nino excluding extreme and volcanic years from 1718 to 1878
*'compo=pdsi(t=819)+pdsi(t=822)+pdsi(t=824)+pdsi(t=861)+pdsi(t=868)+pdsi(t=885)+pdsi(t=893)+pdsi(t=894)+pdsi(t=896)+pdsi(t=901)+pdsi(t=905)+pdsi(t=916)+pdsi(t=922)+pdsi(t=930)+pdsi(t=947)+pdsi(t=953)+pdsi(t=957)+pdsi(t=970)'
*'compo=compo/18'
*
*extreme el nino
*'compo=pdsi(t=934)+pdsi(t=978)+pdsi(t=979)+pdsi(t=990)+pdsi(t=1074)+pdsi(t=1084)+pdsi(t=1099)'
*'compo=compo/7.'
*'compo=pdsi(t=1074)+pdsi(t=1084)+pdsi(t=1099)'
*'compo=compo/3.'
*
*el nino excluding extreme and volcanic years from 1511 to 1702
*'compo=(pdsi(t=612)+pdsi(t=612)+pdsi(t=619)+pdsi(t=620)+pdsi(t=621)+pdsi(t=627)+pdsi(t=631)+pdsi(t=640)+pdsi(t=651)+pdsi(t=657)+pdsi(t=687)+pdsi(t=695)+pdsi(t=711)+pdsi(t=719)+pdsi(t=722)+pdsi(t=740)+pdsi(t=741)+pdsi(t=753)+pdsi(t=758)+pdsi(t=763)+pdsi(t=767)+pdsi(t=778)+pdsi(t=782)+pdsi(t=783)+pdsi(t=792)+pdsi(t=803))/26.'

*la nina inc extreme (but no extreme exists) but not volcanic years from 1887 to 2000
'compo=pdsi(t=988)+pdsi(t=991)+pdsi(t=994)+pdsi(t=1011)+pdsi(t=1018)+pdsi(t=1026)+pdsi(t=1035)+pdsi(t=1044)+pdsi(t=1051)+pdsi(t=1057)+pdsi(t=1069)+pdsi(t=1072)+pdsi(t=1075)+pdsi(t=1077)+pdsi(t=1086)+pdsi(t=1090)+pdsi(t=1101)'
'compo=compo/17'
*
*la nina inc extreme but not volcanic years (but no volcanic eruption) from 1717 to 1872
*'compo=pdsi(t=818)+pdsi(t=826)+pdsi(t=853)+pdsi(t=858)+pdsi(t=859)+pdsi(t=891)+pdsi(t=898)+pdsi(t=902)+pdsi(t=921)+pdsi(t=923)+pdsi(t=936)+pdsi(t=943)+pdsi(t=948)+pdsi(t=964)+pdsi(t=973)'
*'compo=compo/15'

'run /Users/martin/mbp1rsync.dir/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/rgbset.gs'

*'variance=(pow(pdsi(t=1001)-compo,2)+pow(pdsi(t=1007)-compo,2)+pow(pdsi(t=1013)-compo,2)+pow(pdsi(t=1016)-compo,2)+pow(pdsi(t=1020)-compo,2)+pow(pdsi(t=1027)-compo,2)+pow(pdsi(t=1032)-compo,2)+pow(pdsi(t=1041)-compo,2)+pow(pdsi(t=1042)-compo,2)+pow(pdsi(t=1053)-compo,2)+pow(pdsi(t=1059)-compo,2)+pow(pdsi(t=1067)-compo,2)+pow(pdsi(t=1078)-compo,2)+pow(pdsi(t=1088)-compo,2))/14.'
*'tvalue=abs(compo)/sqrt(variance/14)'
*
*'variance=(pow(pdsi(t=819)-compo,2)+pow(pdsi(t=822)-compo,2)+pow(pdsi(t=824)-compo,2)+pow(pdsi(t=861)-compo,2)+pow(pdsi(t=868)-compo,2)+pow(pdsi(t=885)-compo,2)+pow(pdsi(t=893)-compo,2)+pow(pdsi(t=894)-compo,2)+pow(pdsi(t=896)-compo,2)+pow(pdsi(t=901)-compo,2)+pow(pdsi(t=905)-compo,2)+pow(pdsi(t=916)-compo,2)+pow(pdsi(t=922)-compo,2)+pow(pdsi(t=930)-compo,2)+pow(pdsi(t=947)-compo,2)+pow(pdsi(t=953)-compo,2)+pow(pdsi(t=957)-compo,2)+pow(pdsi(t=970)-compo,2))/18.'
*'tvalue=abs(compo)/sqrt(variance/18)'
*
*'variance=(pow(pdsi(t=934)-compo,2)+pow(pdsi(t=978)-compo,2)+pow(pdsi(t=979)-compo,2)+pow(pdsi(t=990)-compo,2)+pow(pdsi(t=1074)-compo,2)+pow(pdsi(t=1084)-compo,2)+pow(pdsi(t=1099)-compo,2))/7.'
*
*'variance=(pow(pdsi(t=1074)-compo,2)+pow(pdsi(t=1084)-compo,2)+pow(pdsi(t=1099)-compo,2))/3.'
*'tvalue=abs(compo)/sqrt(variance/3.)'
*
'variance=(pow(pdsi(t=988)-compo,2)+pow(pdsi(t=991)-compo,2)+pow(pdsi(t=994)-compo,2)+pow(pdsi(t=1011)-compo,2)+pow(pdsi(t=1018)-compo,2)+pow(pdsi(t=1026)-compo,2)+pow(pdsi(t=1035)-compo,2)+pow(pdsi(t=1044)-compo,2)+pow(pdsi(t=1051)-compo,2)+pow(pdsi(t=1057)-compo,2)+pow(pdsi(t=1069)-compo,2)+pow(pdsi(t=1072)-compo,2)+pow(pdsi(t=1075)-compo,2)+pow(pdsi(t=1077)-compo,2)+pow(pdsi(t=1086)-compo,2)+pow(pdsi(t=1090)-compo,2)+pow(pdsi(t=1101)-compo,2))/17.'
'tvalue=abs(compo)/sqrt(variance/17)'


'set gxout grfill'
'set csmooth off'
'set clevs -1. -0.8 -0.6  -0.4  -0.2 -0.1 0.1 0.2  0.4  0.6 0.8 1.'
'set ccols 79 78 77 25 24 23 0 32 36 38 43 44 45 49'
*'set clevs 0. 1. 1.2 1.4 1.6 1.8 2.'
*'set ccols 0  32  36 38 43 44 45 48'
*'d sqrt(pdsivar)'
'd compo'
'run /Users/martin/mbp1rsync.dir/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/cbar.gs 1.1 1 8.8 3.5'
* cbar.gs sf vert xmid ymid

*set tile number type <width <height <lwid <fgcolor <bgcolor>>>>>
'set tile 1 4 10 10 4 1'
'set rgb 81 tile 1'
'set ccols 81 81'
'set clevs 0.'
'd maskout(compo,tvalue-1.7)'

*'set gxout grfill'
*'set gxout contour'
*'set clab off'
*'set cint 0.1'
*'set cmax -0.1'
*'set cstyle 2'
*'set ccolor 1'
*'set cthick 7'
*'d compo'
*'set cmin 0.'
*'set clevs 0.'
*'set cstyle 1'
*'set ccolor 1'
*'set cthick 6'
*'d compo'
*'d tvalue-1.7'

*'basemap O 15 17 L'
**'set clevs 0. 1. 1.2 1.4 1.6 1.8 2.'
**'set ccols 0  32  36 38 43 44 45 48'
**'d sqrt(pdsivar)'
*'set clevs -1. -0.8 -0.6  -0.4  -0.2 -0.1 0.1 0.2  0.4  0.6 0.8 1.'
*'set ccols 79  78 77  76  75  74  0  32  36 38 43 44 45 48'
*'d maskout(compo,tvalue-3.)'
'basemap O 15 17 L'
'set gxout contour'
'set cmin 100'
'd compo'

return
