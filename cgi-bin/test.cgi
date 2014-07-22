#!/usr/bin/python

import cgitb, cgi, json
cgitb.enable()

form  = cgi.FieldStorage()
name,age = form.getvalue('name', 'default'),form.getvalue('age','default')

print 'Content-type: application/json\n\n'
print json.dumps({'name': name, 'age': age ,'headers': form.headers}, sort_keys=True,
                 indent=4,separators=(',',': '))