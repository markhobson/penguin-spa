Penguin
=======

Penguin is a simple web application that helps coordinate merges into a [Git](http://git-scm.com/) repository.

Getting Started
---------------

To run Penguin:

1. Install [Node.js](http://nodejs.org/)
2. Install [MongoDB](http://docs.mongodb.org/manual/installation/)
3. `git clone git://github.com/markhobson/penguin.git`
4. `cd penguin`
5. `npm install`
6. `node server`
7. Visit [http://localhost:8080/](http://localhost:8080/)

Hosted Instance
---------------

Penguin is deployed to [Heroku](http://www.heroku.com/):  
[http://virtualpenguin.herokuapp.com/](http://virtualpenguin.herokuapp.com/)

Architecture
------------

The server is an [Express](http://expressjs.com/) web application running on [Node.js](http://nodejs.org/).  It provides
a RESTful interface to a [MongoDB](http://www.mongodb.org/) data persistence layer via the
[MongoDB Node.js driver](http://mongodb.github.com/node-mongodb-native/).

The client is a single-page application that uses [Director](https://github.com/flatiron/director) as its router.  Views
use [Knockout.js](http://knockoutjs.com/) for UI bindings and are externalised using the
[Knockout.js External Template Engine](https://github.com/ifandelse/Knockout.js-External-Template-Engine).  AJAX REST
requests are performed by [jQuery](http://jquery.com/) and CSS is provided by
[Bootstrap](http://twitter.github.com/bootstrap/).

[RequireJS](http://requirejs.org/) is used as the JavaScript module loader on both the client and the server.