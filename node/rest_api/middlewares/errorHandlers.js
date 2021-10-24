const  logErrors = (err, req, res, next) => {
    console.error(err);
    next(err);
};

const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        err,
    })
}

module.exports = {logErrors, errorHandler}