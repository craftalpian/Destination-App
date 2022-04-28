// Import dotenv
require('dotenv').config();

// Import HAPI package
const Hapi = require('@hapi/hapi');

// Import DestinationsAPI
const DestinationsAPI = require('./api/destinations');

// Import service
const DestinationsService = require('./services/DestinationsService');

const init = async () => {
  // Destinations service
  const destinationsService = new DestinationsService();

  // Set HAPI server config
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: true,
    },
  });

  // Register api
  await server.register([
    {
      plugin: DestinationsAPI,
      options: {
        destinationsService,
      },
    },
  ]);

  // Start server
  await server.start();

  // Server was running
  console.log(`Server start on ${server.info.uri}`);
};

// Run
init();
