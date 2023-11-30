const routes = (handler) => [
    {
        method: 'GET',
        path: '/contact',
        handler: handler.getContactList,
    },
    {
        method: 'GET',
        path: '/contact/{id}',
        handler: handler.getContactById,
    },
    {
        method: 'POST',
        path: '/contact',
        handler: handler.createContact,
    },
    {
        method: 'PUT',
        path: '/contact',
        handler: handler.putContact,
    },
    {
        method: 'DELETE',
        path: '/contact/{id}',
        handler: handler.deleteContactById,
    },
]

module.exports = routes;