function xsea

* used for analysis required for Fig. 2

'reset'
'set x 1 34'
'set y 1 27'
'set z 1'
'set t 1'

'set fwrite -le mada_pdsi_jun_1871_2005.grd'
'mean=ave(pdsi,t=572,t=706)'

t=572
tmax=706

while(t<=tmax)
 'set t 't
 say t
 'set gxout fwrite'
 'd pdsi-mean'
 t=t+1
endwhile

'disable fwrite'

return
