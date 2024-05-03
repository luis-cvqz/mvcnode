const { status } = require("express/lib/response")

const errorhandler = (err, req, res, next) => {
    console.log("Manejo de errores desde un middleware")
    const defaultmessage = 'La aplicación esta ocupada. Inténtelo nuevamente más tarde.'

    if (process.env.NODE_ENV) {
        const statusCode = err.statusCode || 500
        const message = err.message || defaultmessage
        res.status(statusCode).json({
            success: false,
            status: statusCode,
            message: message,
            stack: err.stack
        })
    } else {
        res.status(200).send(defaultmessage)
    }
}

module.exports = errorhandler