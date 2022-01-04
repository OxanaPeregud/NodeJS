var rect = {
    perimeter: (x, y) => (2 * (x + y)),
    area: (x, y) => (x * y)
};

function solveRect(a, b) {
    console.log("Solving for rectangle with a = " + a + " and b = " + b);

    if (a <= 0 || b <= 0) {
        console.log("Rectangle dimensions should be greater than zero: a = " + a + " and b = " + b);
    } else {
        console.log("The area of the rectangle is " + rect.area(a, b));
        console.log("The perimeter of the rectangle is " + rect.perimeter(a, b));
    }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
