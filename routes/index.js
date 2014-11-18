var authHandler = require('../handlers/authHandler'),
    profileHandler = require('../handlers/profileHandler'),
    profileWidgetHandler = require('../handlers/profileWidgetHandler'),
    userHandler = require('../handlers/userHandler'),
    widgetHandler = require('../handlers/widgetHandler');

module.exports.registerRoutes = function(server) {
/* Authentication */
    server.route({
        method: 'GET',
        path: '/api/session/logout',
        handler: authHandler.logout,
        config: {
            auth: 'session'
        }
    });

    server.route({
        method: 'POST',
        path: '/api/session/login',
        handler: authHandler.doLogin
    });

    server.route({
        method: 'POST',
        path: '/api/session/update',
        handler: authHandler.doUpdate,
        config: {
            auth: 'session'
        }
    });

    /* RESTful API */
    server.route({
        method: 'GET',
        path: '/api/users/current',
        handler: userHandler.findCurrent,
        config: {
            auth: {
                mode: 'try',
                strategy: 'session'
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/api/users/{id}',
        handler: userHandler.findOne,
        config: {
            auth: 'session'
        }
    });

    server.route({
        method: 'PUT',
        path: '/api/users',
        handler: userHandler.update,
        config: {
            auth: 'session'
        }
    });

    server.route({
        method: 'GET',
        path: '/api/users/validate',
        handler: userHandler.validate,
        config: {
            auth: 'session'
        }
    });

    server.route({
        method: 'GET',
        path: '/api/profiles',
        handler: profileHandler.index,
        config: {
            auth: 'session'
        }
    });

    server.route({
        method: 'GET',
        path: '/api/profileWidgets/{id}',
        handler: profileWidgetHandler.findOne,
        config: {
            auth: 'session'
        }
    });

    server.route({
        method: 'PUT',
        path: '/api/profileWidgets/{id}',
        handler: profileWidgetHandler.update,
        config: {
            auth: 'session'
        }
    });

    server.route({
        method: 'GET',
        path: '/api/widgets',
        handler: widgetHandler.index,
        config: {
            auth: 'session'
        }
    });

    server.route({
        method: 'GET',
        path: '/api/widgets/general',
        handler: widgetHandler.general,
        config: {
            auth: 'session'
        }
    });

    server.route({
        method: 'GET',
        path: '/api/widgets/diskusage',
        handler: widgetHandler.diskUsage,
        config: {
            auth: 'session'
        }
    });

    server.route({
        method: 'GET',
        path: '/api/widgets/process',
        handler: widgetHandler.process,
        config: {
            auth: 'session'
        }
    });
};
