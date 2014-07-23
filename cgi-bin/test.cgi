#!/usr/bin/python

import cgitb, cgi, json
import mssql

cgitb.enable()

form  = cgi.FieldStorage()
uid,pwd = form.getvalue('uid', 'default'),form.getvalue('pwd','default')

#do some DB testing
db_response = {}
if uid=='test' and pwd=='db': #will replace with some basic user authentication mech
    with mssql.MSSQL('{SQL Server}','arc-gis','tHUB','dbread','tHUB2013@') as my_mssql:
        #test query, should return 100x3 table from ACS_T_Age
        sql = "SELECT TOP 100 [geoid],[median],[total] FROM [ACS_T_Age] WHERE [acsyear]==2011"
        v = []
        response = my_mssql.query(sql,v,True)
        for r in response:
            l = list(r)
            if len(l)>0 and not db_response.has_key(l[0]): db_response[l[0]]=l[1:]

print 'Content-type: application/json\n\n'
print json.dumps(db_response, sort_keys=True,
                 indent=4,separators=(',',': '))