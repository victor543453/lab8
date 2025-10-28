// 1. Suma de tres valores
function sumarTres() {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const n3 = parseFloat(document.getElementById('num3').value);
    const suma = n1 + n2 + n3;
    document.getElementById('resSuma').textContent = 
        `La suma de los valores ingresados es: ${suma}`;
}

// 2. Cuadrado de un número
function calcularCuadrado() {
    const num = parseFloat(document.getElementById('numCuadrado').value);
    const cuadrado = num * num;
    document.getElementById('resCuadrado').textContent = 
        `El cuadrado de ${num} es: ${cuadrado}`;
}

// 3. Promedio de calificaciones
function calcularPromedio() {
    const nombre = document.getElementById('nombreEst').value;
    const c1 = parseFloat(document.getElementById('c1').value);
    const c2 = parseFloat(document.getElementById('c2').value);
    const c3 = parseFloat(document.getElementById('c3').value);
    const promedio = ((c1 + c2 + c3) / 3).toFixed(2);
    document.getElementById('resPromedio').textContent = 
        `El promedio de ${nombre} es: ${promedio} puntos.`;
}

// 4. Conversión de unidades (metros)
function convertirMetros() {
    const metros = parseFloat(document.getElementById('metros').value);
    const cm = metros * 100;
    const km = metros / 1000;
    document.getElementById('resConversion').textContent = 
        `${metros} metros equivalen a ${cm} centímetros y ${km} kilómetros.`;
}

// 5. Comparación de dos valores
function compararValores() {
    const a = parseFloat(document.getElementById('valorA').value);
    const b = parseFloat(document.getElementById('valorB').value);
    let mayor, menor, diferencia;

    if (a > b) {
        mayor = a; menor = b;
    } else {
        mayor = b; menor = a;
    }
    diferencia = Math.abs(a - b);
    document.getElementById('resComparacion').textContent =
        `El número mayor es ${mayor}, el menor es ${menor}, y su diferencia es ${diferencia}.`;
}
