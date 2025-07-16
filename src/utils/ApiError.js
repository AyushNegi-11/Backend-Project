class ApiError extends Error {
    constructor(
        statusCode, 
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if(stack){
            this.stack = stack;
        } else{
            Error.captureStackTrace(this, this.constructor) //Error.captureStackTrace(...)
            // A Node.js built-in function that captures the stack trace of an error.

            // Syntax: Error.captureStackTrace(targetObject, constructorFunction)
        }
    }
}

export {ApiError}