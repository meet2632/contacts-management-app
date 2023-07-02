// Error Handler in whole project

const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.messsage,
                stackTrace: err.stack 
            }); // Validation Failed
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack 
            }); // stackTrace is used to point out the error at point of the code
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.messsage,
                stackTrace: err.stack 
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.messsage,
                stackTrace: err.stack 
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "Serveer Error",
                message: err.messsage,
                stackTrace: err.stack 
            });
            break;
        default:
            console.log("No Error, good to go")
            break;
    }
};

module.exports = errorHandler;