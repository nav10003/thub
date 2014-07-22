#!/usr/bin/python

import cgitb, cgi, json
cgitb.enable()

form  = cgi.FieldStorage()
name = 'Default'
if form.has_key('name'): name = form['name']

print 'Content-type: text/html\n\n'
print json.dumps({'name':name, 'value': 101 }, sort_keys=True,
                 indent=4,seperators=(',',': '))