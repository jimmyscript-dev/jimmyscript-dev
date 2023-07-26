class Shape {
    constructor(color = 'Transparent') {
        this.color = color;
        this.type = 'Shape'
    }

    describe() {
        console.log(`A ${this.color} ${this.type}`)
    }
}

class Square extends Shape {
    constructor(color, sideLength) {
        super(color);
        this.sideLength = sideLength;
        this.type = 'Square';
    }

    area() {
        return this.sideLength * this.sideLength;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
        this.type = "Rectangle";
    }

    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
        this.type = 'Circle'
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    describe() {
        console.log(`A round and awesome ${this.color} ${this.type}`)
    }
}


const square = new Square('Blue', 2);
console.log(square.area());


const rectangle = new Rectangle('Red', 4, 5);
console.log(rectangle.area());

const circle = new Circle('Brown', 3);
console.log(circle.area());

for (const shape of [square, rectangle, circle]) shape.describe();