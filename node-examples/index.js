var rect = require("./rectangle")

function solveRect(a, b) {
    rect(a, b, (err, rectangle) => {
        if (err) {
            console.log("ERROR: ", err.message);
        } else {
            console.log("The area of the rectangle of dimensions: a = " + a + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions: a = " + a + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
