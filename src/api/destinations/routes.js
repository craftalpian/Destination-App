const routes = (handler) => [
    {
        method: 'GET',
        path: '/destinations',
        handler: handler.getAllDestinationsHandler,
    }
]

module.exports = routes;