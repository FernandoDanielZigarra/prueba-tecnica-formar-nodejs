var miHonda = { color: 'red', ruedas: 4, motor: { cilindros: 4, cantidad: 2.2 } };
var miCoche = [miHonda, 2, 'Buen estado', 'comprado 1997'];
var nuevoCoche = miCoche.slice(0, 2);

//  Muestra los valores de myCar, newCar y el color de myHonda.
console.log('miCoche = ' + JSON.stringify(miCoche));
console.log('nuevoCoche = ' + JSON.stringify(nuevoCoche));
console.log('miCoche[0].color = ' + miCoche[0].color);
console.log('nuevoCoche[0].color = ' + nuevoCoche[0].color);