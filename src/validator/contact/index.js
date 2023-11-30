const { PostContactPayloadSchema, PutContactPayloadSchema } = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

const ContactValidator = {
    validateCreateContactPayload: (payload) => {
        const validationResult = PostContactPayloadSchema.validate(payload);
        if (validationResult.error) {
            throw new InvariantError(validationResult.error.message);
        }
    },
    validateUpdateContactPayload: (payload) => {
        const validationResult = PutContactPayloadSchema.validate(payload);
        if (validationResult.error) {
            throw new InvariantError(validationResult.error.message);
        }
    }

};

module.exports = ContactValidator;