const ContactHandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: 'contact',
    version: '0.0.1',
    register: async (server, { contactService, validator }) => {
        const contactHandler = new ContactHandler(contactService, validator);
        server.route(routes(contactHandler));
    },
};