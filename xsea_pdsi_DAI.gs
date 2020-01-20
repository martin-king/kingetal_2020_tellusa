function xsea

* used for Fig. 1

'reset'
'set x 1 144'
'set y 1 55'
'set z 1'
'set t 1'

'set fwrite -le pdsi_zeromean_DAI_djfmean_1850_2014.grd'
'mean=ave(pdsi,t=51,t=165)'

t=1
tmax=165

while(t<=tmax)
 'set t 't
 say t
 'set gxout fwrite'
 'd pdsi-mean'
 t=t+1
endwhile

'disable fwrite'

return
