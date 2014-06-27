#!/usr/bin/python

import cgitb
import cgi

cgitb.enable()

def printall(text):
    text = text.split('\n')
    for i in text: print i

text="""Content-type: text/html

<html>
  <head>
    <title>CGI 101</title>
  </head>
  <body>
  <h1>A First CGI Python example</h1>
  <p>Hello CGI World!</p>
  </body>
</html>
"""

printall(text)