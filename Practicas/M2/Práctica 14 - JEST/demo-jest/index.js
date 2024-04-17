const calcularTotal = (getItems) => {
    const items = getItems();

    let total = 0;
    for(const item of items) total += item.quantity * item.price;

    return total;
};

module.exports = { calcularTotal };