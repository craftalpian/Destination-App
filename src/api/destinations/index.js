const DestinationsHandler = require('./handler');
const routes = require('./routes');

// Create HAPI plugin
module.exports = {
    name: 'DestinationsAPI',
    version: '1.0.0',
    register: async(server, {
        destinationsService
    }) => {
        const Destinations = new DestinationsHandler(destinationsService);
        server.route(routes(Destinations));
    }
}