const { nanoid } = require('nanoid');

const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');
let contactArray = require('../../../db/contactArray');

class ContactService {
    constructor() { }

    async getContactByParam(key, value) {
        const res = contactArray.find(item => item[key] === value);
        if (res === undefined) {
            throw new NotFoundError('Contact Not Found');
        }
        return res;
    }

    async checkContactByParam(key, value) {
        const res = contactArray.find(item => item[key] === value);
        if (res !== undefined) {
            throw new InvariantError('Number was added');
        }
    }

    async getContactList() {
        return contactArray;
    }

    async createContact(newValue) {
        await this.checkContactByParam("number", `${newValue.number}`);
        newValue.id = nanoid(5);
        contactArray.push(newValue);
        return newValue.id;
    }

    async updateContact(idToUpdate, updatedValue) {
        const newContact = contactArray.map(item => {
            if (item.id === idToUpdate) {
                return { ...item, ...updatedValue }
            }
            return item;
        });
        contactArray = newContact;
        return newContact;
    }

    async deleteContactById(idToDelete) {
        contactArray = contactArray.filter(item => item.id !== idToDelete);
        return contactArray;
    }
}

module.exports = ContactService;