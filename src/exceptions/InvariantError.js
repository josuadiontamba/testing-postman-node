const RequestError  = require('./RequestError');

class InvariantError extends RequestError {
    constructor(message) {
        super(message);
        this.name = 'InvariantError';
    }
}

module.exports = InvariantError;