class HelloHandler {
    constructor() { }

    async hello(request, h) {
        return h.response("Hello World");
    }

    async about(request, h) {
        return h.response('<h1>This is About Page</h1><h2>Follow Me at Any.Where</h2>')
    }

    async sapa(request, h) {
        let { name } = request.params;
        if (name === undefined) {
            name = "Stranger"
        }
        return h.response(h.response(`<h1>Sapa-sapa</h1><h2>Hello, ${name}</h2>`))
    }
}

module.exports = HelloHandler;