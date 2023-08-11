function parseCount (item) {
    const value = parseFloat(item);
    if (isNoN(value)){
    throw new Error("Невалидное значение")
    }
    return value;
}

function validateCount (item) {
    try {
    return parseCount(item);
    } catch (error) {
    return error;
    }
}


class Triangle {
 constructor(a, b, c) {
    if (a + b < c 
    || a + c < b
    || b + c < a) {
    throw new Error ("Треугольник с такими сторонами не существует")
    }
    this.a = a;
    this.a = b;
    this.a = c;
    }
    
     getPerimeter() { 
        return this.a + this.b + this.c;
     }

     getArea() {
        const p = this.perimeter / 2;
     return +Math.sqrt(x: p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(fractionDigits: 3);
     }
    }


    function getTriangle(a,b,c) {
       try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            getArea() {
            return "Ошибка! Треугольник не существует";
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}