function write

* used to calculate nino index and print out selected years to the txt file.
* used in analysis to create Figs. 4 and 5.

'reset'
t=1
tmax=1156
year=850
count=0

'set t 1 '
'meansst=ave(sst,t=1,t='tmax')'
'set t 1 'tmax
'nino34=aave(sst-meansst,lon=190,lon=240,lat=-5,lat=5)'
'set t 1'
'meannino34=ave(nino34,t=1,t='tmax')'
'stddev=sqrt(ave(pow(nino34-meannino34,2),t=1,t='tmax'))'

cad=''
while (t<=tmax)
 'set t 't
* say t
 'd nino34/stddev'
 line=sublin(result,1)
 val=subwrd(line,4)
* cad=year'      'val
 if (val>=-0.7 & val<-0.5)
    if (year<1000)
      cad=cad',0'year
    else
      cad=cad','year
    endif
    count=count+1
    say count
*    rc=write('nino34_LME_001_djfmean_0849_2004.txt',cad,append)
 endif
 t=t+1
 year=year+1
endwhile
say count
say cad
*rc=write('nina34_extremeextreme_LME_001_djfmean_0849_2004.txt',cad)

return
