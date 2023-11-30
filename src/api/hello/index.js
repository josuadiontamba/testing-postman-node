const HelloHandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: 'hello',
    version: '0.0.1',
    register: async (server, { }) => {
        const helloHandler = new HelloHandler();
        server.route(routes(helloHandler));
    },
};