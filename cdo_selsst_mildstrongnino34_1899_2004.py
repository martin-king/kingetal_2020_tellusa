import os,glob

# used for Fig. 3

print "module load cdo"

years001="1911,1922,1930,1938,1945,1950,1956,1967,1972,1980,1986,1987,1988,1997"
years002="1902,1909,1915,1923,1924,1932,1937,1944,1956,1957,1966,1979"
years003="1909,1931,1938,1953,1964,1983,1987,2000"
years004="1913,1918,1924,1936,1939,1963,1969,1977,1988"
years005="1906,1933,1944,1948,1965,1984,1991,1994"
years006="1901,1934,1937,1962,1975,1986,1992,1999"
years007="1910,1931,1949,1973,1989,1995,1996,2002"
years008="1911,1927,1944,1958,1979,1988,2001,2002"
years009="1920,1927,1948,1951,1962,1976,1982,1983,2004"
years010="1911,1922,1930,1938,1945,1950,1956,1967,1972,1980,1986,1987,1988,1997"

ensno=["001","002","003","004","005","006","007","008","009","010"]

for number in ensno:
 yno="years"+number
# print "cdo selyear,"+eval(yno)+" PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.085011-200511_sonmean.nc rub"+number+".nc"
# print "cdo sub rub"+number+".nc PDSI_Thornthwaite_b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.085011-200511_sonmean_ymonmean.nc pdsi"+number+"_sonmean_mildstrongnino34.nc"
# print "cdo selyear,"+eval(yno)+" b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.PSL.084912-200412_jjamean.nc rub"+number+".nc"
# print "cdo sub rub"+number+".nc b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.PSL.084912-200412_jjamean_ymonmean.nc psl"+number+"_jjamean_mildstrongnino34.nc"
 print "cdo selyear,"+eval(yno)+" b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.TS.084912-200412_djfmean.nc rub"+number+".nc"
 print "cdo sub rub"+number+".nc b.e11.BLMTRC5CN.f19_g16."+number+".cam.h0.TS.084912-200412_djfmean_ymonmean.nc sst"+number+"_djfmean_mildstrongnino34.nc"
 print "rm rub"+number+".nc"
