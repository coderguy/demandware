# Overview

The Demandware OC API Boilerplate is aimed at becoming a SiteGenesis for the Open Commerce APIs.  It is built using Backbone.js on the front end and Node.js on the backend.  While the project uses Node.js as a lightweight server and build tool, the end product is a single page application that can be served from a Demandware instance or another http server of your choice (Apache, IIS, Nginx).

This document will cover the technologies used, installation instructions, and some example use cases.

# Technologies

## Javascript Libraries

### Backbone.js

Backbone.js is a popular choice for developing single page applications.  It handles the front end routing and data synchronization between the server and front end.

### jQuery

jQuery is a powerful library used for DOM quering and manipulation.  It is used by Backbone.js.

### Dust.js

Dust.js is a javascript based templating engine.  It is used to render the templates.

## Node.js

A lightweight Node.js express server is used for local development.  The use of the Node.js server is optional.  You could also put the public directory on any web server and the site would serve fine.  Some additional configuration might be needed to support the push state urls.

## Grunt.js

Grunt.js is a javascript based build tool.  It is used to build a single javascript and a single css file.  It can be run in a watcher mode to automatically detect changes to your Javascript or Less (CSS) files and rebuild them on the fly.

### Snockets

Snockets is a Node.js version of Sprockets.  Snockets adds the ability to include files into javascript.  Snockets is run by grunt.js and helps us to be able to organize our code into smaller files and then combine and minify them into a single file.

### JSHint

To improve the quality of the code all of the Javascript files in the javascript folder are linted with the JSHint library.  The only files that are excluded from the linter are those in app/javascript/libs.  The files in the libs folder should be third party code that you didn't write yourself.

### LESS (CSS)

Less is a superset of CSS.  It adds features such as nested css rules and includes.  It is used by grunt.js to aid the building of a single minified css file.

## Demandware Open Commerce APIs

The Demandware Open Commerce APIs give us access to the data that powers our store.  Currently the project only supports the "shop flow" APIs, which deal with categories, products and product search.  As future aspects of the Demandware Platform are exposed via the OC APIs they will be added to this project.

# Installation

## Install Node.js

You must have [node.js](http://nodejs.org/) installed to run the included web server and build tool.  This system has only been tested using node.js 0.6.x branch on the Mac OS X.  I am unsure of how well it will work on windows.

## Getting the Code

Once you have node installed, please checkout the code from the github repo:

```
cd some/folder/on/your/machine
git clone git@github.com:coderguy/demandware-oc-api-boilerplate.git
```

## Install NPM Packages

```
cd demandware-oc-api-boilerplate
npm install
npm install grunt -g
```

## Build the CSS & JS

```
cd demandware-oc-api-boilerplate
grunt
```

## Start the server

```
bin/server.js
```

## View the site

Visit [http://localhost:8080/](http://localhost:8080)

# Development

To develop the code you will want to run both the server and the watcher.

```
cd demandware-oc-api-boilerplate
grunt
bin/server.js &
grunt watch
```

As you make changes to your javascript or stylesheets files in the javascripts folder they will be linted (jshint), combined and minfied.  These combined and minified files are placed in the public folder.

Note: The & on the end of server command will make it run in the background.  To stop the web server run:

```
node killall
```
# Deployment

## Apache

1. Run the grunt command to build the css and javascript files.
2. Copy the public folder to the web root of your Apache server.
3. Add an .htaccess file with the following rules:

```
<ifModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_URI} !index
  RewriteRule (.*) index.html [L]
</ifModule>
```

## Other Environments

Coming soon.

# Demo

[View live demo](http://www.dicebin.com).

## Example Screenshot

![](https://github.com/coderguy/demandware/raw/master/docs/images/screenshot.png)

# Credits

This project was developed by Daniel Ice:

```
email: dice at coderguy dot com
website: http://coderguy.com
twitter: coderguy64
```

If you need help getting it setup feel free to email me.

# License (MIT License)

Copyright (c) 2012 Daniel Ice

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.