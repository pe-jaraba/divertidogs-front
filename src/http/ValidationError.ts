export default class ValidationError extends Error {
    failedValidations: Array<string>;

    constructor(failedValidations: Array<string>) {
        super(failedValidations.join("."));

        this.failedValidations = failedValidations;

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ValidationError.prototype);
    }

    getFailedValidations() {
        return this.failedValidations;
    }
}