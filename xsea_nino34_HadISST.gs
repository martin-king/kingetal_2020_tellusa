function xsea

* used for Fig. 2
* create nino3.4 timeseries values at every grid point of owda or mada.
* the resulted file is then used for calculating composites in GRADS.
* this is my 'stupid' method before I started to use cdo to extract events.

'reset'

'mean=ave(sst,t=1,t=135)'
'set t 1 135'
'nino34=aave(sst-mean,lon=190,lon=240,lat=-5,lat=5)'
*'nino34=aave(sst-mean,lon=210,lon=270,lat=-5,lat=5)'
'meannino34=ave(nino34,t=1,t=135)'
'nino34std=(nino34-meannino34)/sqrt(ave(pow(nino34-meannino34,2),t=1,t=135))'

'set dfile 2'
'set x 1 34'
'set y 1 27'
'set z 1'
'set t 1'

'set fwrite -le nino34_2D_mada_jjamean_1871_2005.grd'

t=1
tmax=135
while(t<=tmax)
 'set t 't
 say t
 'set gxout contour'
 'd nino34std'
 val=subwrd(result,4)
 say val
 'set gxout fwrite'
 'd 'val'*const(pdsi.2(t=1),1.0,-a)'
 t=t+1
endwhile

'disable fwrite'

return
