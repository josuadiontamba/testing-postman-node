const routes = (handler) => [
    {
        method: 'GET',
        path: '/hello',
        handler: handler.hello,
    },
    {
        method: 'GET',
        path: '/about',
        handler: handler.about,
    },
    {
        method: 'GET',
        path: '/sapa/{name?}',
        handler: handler.sapa,
    },
]

module.exports = routes;