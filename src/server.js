const Hapi = require('@hapi/hapi');

// Hello
const hello = require('./api/hello');

// CONTACT
const contacts = require('./api/contacts');
const ContactService = require('./services/inMemory/ContactService');
const ContactValidator = require('./validator/contact');

const init = async () => {
    const contactService = new ContactService();

    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            }
        }
    });

    await server.register([
        {
            plugin: hello,
            options: {}
        },
        {
            plugin: contacts,
            options: {
                contactService,
                validator: ContactValidator,
            }
        }
    ]);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();