#!/usr/bin/python
import cgitb, cgi, json, sys, os
cgitb.enable()
#local ref modules and classes attahc path variable here
sys.path.insert(1, 'C:\\inetpub\\wwwroot\\thub\\cgi-bin\\')
import mssql

form  = cgi.FieldStorage()
uid,pwd = form.getvalue('uid', 'default'),form.getvalue('pwd','default')

#do some DB testing
db_response = {}
if uid=='test' and pwd=='db': #will replace with some basic user authentication mech
    with mssql.MSSQL('{SQL Server}','gis-srv.ad.engr.uconn.edu','thub','thub_dbreader','&thub_UCONN2014#') as my_mssql:
    #with mssql.MSSQL('{SQL Server}','arc-gis','tHUB','dbread','tHUB2013@') as my_mssql: 
        #code to read the table field names (will allow them to change)
        sql = "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'report' AND TABLE_SCHEMA='dbo'"
        v,L = [],[]
        response = my_mssql.query(sql,v,True)
        for r in response: L += r #take off the first value
        L = [str(i) for i in L]
        db_response[0] = L
        #test query, should return 100xcolumns table from ACS_T_Age
        i,F = 1,{k:L[k] for k in range(0,len(L))}
        sql = "SELECT TOP 100 * FROM report"
        v = []
        response = my_mssql.query(sql,v,True)
        for r in response:
            l = list(r)
            if len(l)==len(F):
                db_response[i] = {F[k]:l[k] for k in F}
                i+=1
        #
        #this will write files to the C:\temp\writetest.txt
        #filepath,s = 'C:\\temp\\writetest.txt',''
        #for i in range(0,len(db_response)): s += str(db_response[i])
        #with open(filepath, 'wb') as file: file.write(s)
            

print 'Content-type: application/json\n\n'
print json.dumps(db_response, sort_keys=True,
                 indent=4,separators=(',',': '))
