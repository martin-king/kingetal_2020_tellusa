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
'modoki=aave(sst-meansst,lon=165,lon=220,lat=-10,lat=10)'
'modoki=modoki-0.5*aave(sst-meansst,lon=250,lon=290,lat=-15,lat=5)'
'modoki=modoki-0.5*aave(sst-meansst,lon=125,lon=145,lat=-10,lat=20)'

'set t 1'
'meanmodoki=ave(modoki,t=1,t='tmax')'
'stddev=sqrt(ave(pow(modoki-meanmodoki,2),t=1,t='tmax'))'

cad=''
while (t<=tmax)
 'set t 't
* say t
 'd modoki/stddev'
 line=sublin(result,1)
 val=subwrd(line,4)
* cad=year'      'val
 if (val>=2.1 & val<=20)
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
*rc=write('modokiwarm_extreme_LME_010_djfmean_0849_2004.txt',cad)

return
