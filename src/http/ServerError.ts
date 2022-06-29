export default class ServerError extends Error {
     constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ServerError.prototype);
    }

}