const ClientError = require('../../exceptions/RequestError');

class ContactHandler {
    constructor(contactService, validator) {
        this._contactService = contactService;
        this._validator = validator;

        this.getContactList = this.getContactList.bind(this);
        this.getContactById = this.getContactById.bind(this);
        this.createContact = this.createContact.bind(this);
        this.putContact = this.putContact.bind(this);
        this.deleteContactById = this.deleteContactById.bind(this);
    }

    async getContactList(request, h) {
        try {
            const contacts = await this._contactService.getContactList();
            return h.response({
                status: 'success',
                data: {
                    contacts,
                }
            });
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                    status: 'fail',
                    message: error.message,
                }).code(error.statusCode);
                return response;
            }

            // SERVERSIDE ERROR
            const response = h.response({
                status: 'error',
                message: 'Server Error',
            }).code(500);
            return response
        }
    }

    async getContactById(request, h) {
        try {
            const { id } = request.params;
            const contact = await this._contactService.getContactByParam("id", id);
            return h.response({
                status: 'success',
                message: 'Contact found',
                data: {
                    contact
                },
            });
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                    status: 'fail',
                    message: error.message,
                }).code(error.statusCode);
                return response;
            }

            // SERVERSIDE ERROR
            const response = h.response({
                status: 'error',
                message: 'Server Error',
            }).code(500);
            console.error('\n\t getContactById \n');
            console.error(error);
            return response
        }
    }

    async createContact(request, h) {
        try {
            await this._validator.validateCreateContactPayload(request.payload);
            const contactId = await this._contactService.createContact(request.payload);
            const response = h.response({
                status: 'success',
                message: 'New Contact Added',
                data: {
                    contactId,
                },
            }).code(201);
            return response;
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                    status: 'fail',
                    message: error.message,
                }).code(error.statusCode);
                return response;
            }

            // SERVERSIDE ERROR
            const response = h.response({
                status: 'error',
                message: 'Server Error',
            }).code(500);
            console.error('\n\t createContact \n');
            console.error(error);
            return response
        }
    }

    async putContact(request, h) {
        try {
            const payload = request.payload;
            await this._validator.validateUpdateContactPayload(payload);
            const contact = await this._contactService.updateContact(payload.id, payload);
            return h.response({
                status: 'success',
                message: 'Contact updated',
                data: {
                  contact,
                }
              });
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                    status: 'fail',
                    message: error.message,
                }).code(error.statusCode);
                return response;
            }

            // SERVERSIDE ERROR
            const response = h.response({
                status: 'error',
                message: 'Server Error',
            }).code(500);
            return response
        }
    }

    async deleteContactById(request, h) {
        try {
            const { id } = request.params;
            await this._contactService.deleteContactById(id);
            return h.response({
                status: 'success',
                message: 'Contact Deleted',
              });
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                    status: 'fail',
                    message: error.message,
                }).code(error.statusCode);
                return response;
            }

            // SERVERSIDE ERROR
            const response = h.response({
                status: 'error',
                message: 'Server Error',
            }).code(500);
            return response
        }
    }
}

module.exports = ContactHandler;
