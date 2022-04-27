const routes = (handler) => [
    {
        method: 'GET',
        path: '/destinations',
        handler: handler.getAllDestinationsHandler,
    },
    {
        method: 'GET',
        path: '/destinations/{id}',
        handler: handler.getSpecificDestinationHandler,
    },
    {
        method: 'PUT',
        path: '/destinations/{id}',
        handler: handler.putSpecificDestinationHandler,
    },
    {
        method: 'POST',
        path: '/destinations',
        handler: handler.postDestinationHandler,
    },
    {
        method: 'DELETE',
        path: '/destinations/{id}',
        handler: handler.deleteDestinationHandler,
    },
]

module.exports = routes;