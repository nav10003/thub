#!/usr/bin/python

import cgitb
import cgi
cgitb.enable()

def printall(text):
    text = text.split('\n')
    for i in text: print i

form  = cgi.FieldStorage()
name = 'Default'
if form.has_key('name'): name = form['name']

text="""Content-type: text/html

<html>
  <head>
    <title>CGI 101</title>
  </head>
  <body>
  </body>
</html>
"""

text = text.replace('<body>\n</body>','<body>\n'+name+'</body>')

printall(text)