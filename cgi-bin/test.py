#!/usr/bin/python

import cgitb, cgi, json, sys
cgitb.enable()
#local ref modules and classes attahc path variable here
sys.path.insert(1, 'C:\\inetpub\\wwwroot\\thub\\cgi-bin\\')
import mssql

form  = cgi.FieldStorage()
uid,pwd = form.getvalue('uid', 'default'),form.getvalue('pwd','default')

#do some DB testing
db_response = {}
if uid=='test' and pwd=='db': #will replace with some basic user authentication mech
    with mssql.MSSQL('{SQL Server}','arc-gis','tHUB','dbread','tHUB2013@') as my_mssql:
        #test query, should return 100x3 table from ACS_T_Age
        i,F = 0, {0:'geoid',1:'median',2:'total'}
        sql = "SELECT TOP 100 [geoid],[median],[total] FROM [ACS_T_Age] WHERE [acsyear]=2011"
        v = []
        response = my_mssql.query(sql,v,True)
        for r in response:
            l = list(r)
            if len(l)==len(F):
                db_response[i] = {F[k]:l[k] for k in F}
                i+=1

print 'Content-type: application/json\n\n'
print json.dumps(db_response, sort_keys=True,
                 indent=4,separators=(',',': '))