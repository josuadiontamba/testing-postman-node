class RequestError extends Error {
    constructor(message, statusCode=400){
        super(message);
        this.statusCode = statusCode;
        this.name = 'RequestError';
    }
}

module.exports = RequestError;