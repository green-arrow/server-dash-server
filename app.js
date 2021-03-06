var path = require('path'),
    hapi = require('hapi'),
    good = require('good'),
    server = new hapi.Server(),
    routes = require('./routes'),
    db = require('./services/db'),
    goodOptions = {
        opsInterval: 1000,
        reporters: [{
            reporter: require('good-console'),
            args:[{ log: '*', response: '*' }]
        }]
    };

server.connection({
    port: 3000,
    routes: {
        cors: {
            origin: [ 'http://localhost:4200' ],
            credentials: true
        }
    }
});

console.log('Attempting to connect to MongoDB via Mongoose...');
db.connect(function(valid) {
    if(valid) {
        console.log('Successfully connected to MongoDB via Mongoose!');

        // Application setup
        var argv = require('minimist')(process.argv.slice(2));

        if(argv['force-setup']) {
            require('shelljs/global');
            console.log('--force-setup flag detected, dropping server-dash database and running setup script.');
            exec('mongo server-dash --eval "db.dropDatabase()"');
        }

        var setup = require('./setup/setup.js');

        setup.userSetup(function() {
            setup.widgetSetup(function() {

                // Setup server
                server.register([{
                    register: require('good'),
                    options: goodOptions
                }, {
                    register: require('hapi-auth-cookie')
                }], function (err) {
                    if (err) {
                        throw err;
                    }

                    server.auth.strategy('session', 'cookie', {
                        password: 'Th!sAppR0cks!', // cookie secret
                        cookie: '_serverDashAuth', // cookie name
                        redirectTo: false,
                        isSecure: false,
                        ttl: 1000 * 60 * 60 * 24
                    });

                    routes.registerRoutes(server);

                    server.start(function () {
                        server.log('info', 'Server started at ' + server.info.uri);
                    });
                });
            });
        });
    } else {
        console.error('Error in Mongoose connection.');
    }
});
