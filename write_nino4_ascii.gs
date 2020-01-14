function write

* used in revision to reply reviewers.
* calculate an enso index, select years and output to txt file.

'reset'
t=1
tmax=1156
year=850
count=0

'set t 1 '
'meansst=ave(sst,t=1,t='tmax')'
'set t 1 'tmax
'nino4=aave(sst-meansst,lon=160,lon=210,lat=-5,lat=5)'

'set t 1'
'meannino4=ave(nino4,t=1,t='tmax')'
'stddev=sqrt(ave(pow(nino4-meannino4,2),t=1,t='tmax'))'

cad=''
while (t<=tmax)
 'set t 't
* say t
 'd nino4/stddev'
 line=sublin(result,1)
 val=subwrd(line,4)
* cad=year'      'val
 if (val>1.95 & val<=25)
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
rc=write('nino4_extreme_LME_010_djfmean_0849_2004.txt',cad)

return
