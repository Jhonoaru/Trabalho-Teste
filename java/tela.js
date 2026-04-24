class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Não é possível dividir por zero");
        }
        return a / b;
    }
}

// Exemplo de uso
const calc = new Calculator();

console.log("Soma:", calc.add(10, 5));
console.log("Subtração:", calc.subtract(10, 5));
console.log("Multiplicação:", calc.multiply(10, 5));
console.log("Divisão:", calc.divide(10, 5));