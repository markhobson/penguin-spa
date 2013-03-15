Penguin SPA
===========

Penguin is a simple application that helps coordinate merges into a [Git](http://git-scm.com/) repository.  This project
provides a Single-Page Application (SPA) client to the [web service](https://github.com/markhobson/penguin).

Getting Started
---------------

To run the Penguin SPA client:

1. Install [Node.js](http://nodejs.org/)
2. `git clone git://github.com/markhobson/penguin-spa.git`
3. `cd penguin-spa`
4. `npm install`
5. Run the [Penguin web service](https://github.com/markhobson/penguin) 
6. `node server`
7. Visit [http://localhost:8080/](http://localhost:8080/)

Command Line Options
--------------------

The following command line options are supported:

	-h, --help     Shows this help
	-p, --port     Sets the server port              [default: 8080]
	-s, --service  Sets the web service (host:port)  [default: "localhost:8081"]

Hosted Instance
---------------

Penguin is deployed to [Heroku](http://www.heroku.com/):  
[http://virtualpenguin.herokuapp.com/](http://virtualpenguin.herokuapp.com/)

Architecture
------------

The client is a single-page application that uses [Director](https://github.com/flatiron/director) as its router.  Views
use [Knockout.js](http://knockoutjs.com/) for UI bindings and are externalised using the
[Knockout.js External Template Engine](https://github.com/ifandelse/Knockout.js-External-Template-Engine).  AJAX REST
requests are performed by [jQuery](http://jquery.com/) and CSS is provided by
[Bootstrap](http://twitter.github.com/bootstrap/).

[RequireJS](http://requirejs.org/) is used as the JavaScript module loader.