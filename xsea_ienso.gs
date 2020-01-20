function xsea

'reset'

'set x 1 114'
'set y 1 88'
'set z 1'

'set fwrite -le ienso_li_2dowda_jun_900_2002.grd'

t=1
tmax=1103
*'mean=ave(pdsi,t=900,t=2002)'

while(t<=tmax)
 'set t 't
 say t
   'set gxout contour'
   'd enso.2'
    val=subwrd(result,5)
   'set gxout fwrite'
   'd 'val'*const(pdsi.1(t=1),1.0,-a)'
* 'd pdsi-mean'
 t=t+1
endwhile

'disable fwrite'

return
