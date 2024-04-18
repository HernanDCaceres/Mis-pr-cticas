const validateUser = (req, res, next) => {
    const { name } = req.body;

    if(!name){
        return res.status(400).json({
            error: "Falta el dato del nombre",
        })
    } else {
        next();
    }
};

module.exports = validateUser;

