module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        callback(new Error("Rectangle dimensions should be greater than zero: a = " + x + " and b = " + y), null);
    } else {
        callback(null, {
            perimeter: () => (2 * (x + y)),
            area: () => (x * y)
        });
    }
}
