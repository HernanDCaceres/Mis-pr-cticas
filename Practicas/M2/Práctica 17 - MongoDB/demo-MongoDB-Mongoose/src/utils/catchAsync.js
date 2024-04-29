//*Función de orden superior (recibe una funcion y le realiza una mejora)

const catchAsync = (controller) => {
    return (req, res, next) => {
        controller(req, res).catch((err) => next(err));
    };
};

module.exports = catchAsync;