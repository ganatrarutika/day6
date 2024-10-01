function triangleType(side1, side2, side3) {
    
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        console.log("Not a valid triangle");
        return;
    }

    switch (true) {
        case (side1 === side2 && side2 === side3):
            console.log("Equilateral");
            break;
        case (side1 === side2 || side1 === side3 || side2 === side3):
            console.log("Isosceles");
            break;
        default:
            console.log("Scalene");
    }
}

triangleType(5, 5, 8); 
