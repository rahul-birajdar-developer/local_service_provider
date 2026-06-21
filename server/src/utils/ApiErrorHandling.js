class ApiErrorHandling extends Error {
    constructor(
        statusCode,
        message = "Something want wrong",
        errors = [],
        statck = ""
    ) {
        super(message)
        this.statusCode = statusCode,
            this.data = null,
            this.message = message,
            this.success = statusCode,
            this.errors = errors

        if (statck) {
            this.statck = statck
        } else {
            error.captureStatckTrace(this, this.constructor);
        }
    }
}

export default ApiErrorHandling;