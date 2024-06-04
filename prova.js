let numero = Number(prompt("Insira um número"));

if (isNaN(numero)) {
    console.log("Por favor, insira um número válido.");
} else if (numero < 0) {
    console.log("O fatorial não é definido para números negativos.");
} else {
    // Cálculo do fatorial
    let fatorial = 1;
    let numeros = [];

    for (let i = 1; i <= numero; i++) {
        numeros.push(i);
    }

    for (let num of numeros) {
        fatorial *= num;
    }

    console.log(`O fatorial de ${numero} é ${fatorial}.`);

    // Cálculo da sequência de Fibonacci
    let fibonacci = [0, 1];

    for (let i = 2; i <= numero; i++) {
        let nextFib = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(nextFib);
    }

    console.log(`A sequência de Fibonacci até ${numero} é: ${fibonacci.slice(0, numero + 1).join(', ')}.`);
}

