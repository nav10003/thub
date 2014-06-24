#!/usr/bin/python

import cgitb

cgitb.enable()

def print_each(text):
    lines = text.split('\n')
    for l in lines: print l
    
text = """
Content-type: text/html
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

print_each(text)
