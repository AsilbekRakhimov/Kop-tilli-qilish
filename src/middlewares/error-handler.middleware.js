export const ErrorHandlerMiddleware = (err, req, res, next) => {
    if (err.isException) {
        res.status(err.status).send({
            message: err.message,
            name: err.name
        })
        return;
    }

    res.status(500).send({
        message:"Error with server"
    })
}