const Joi = require('joi');

const PostContactPayloadSchema = Joi.object({
    name: Joi.string().required(),
    number: Joi.string().required(),
    email: Joi.string().email({ tlds: false }),
    groups: Joi.string()
});

const PutContactPayloadSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    number: Joi.string().required(),
    email: Joi.string().email({ tlds: false }),
    groups: Joi.string()
})

module.exports = {
    PostContactPayloadSchema,
    PutContactPayloadSchema
};