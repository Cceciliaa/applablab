// our lucky draw
// console.log(Math.floor(Math.random()*21)

// let name = `Brett`;
// let cups = 10;
// let order = `Americano`;

// let coffeeOrder = function makeCoffee(name, cups, order) {
//     //put some code to make coffee here
//     console.log(`${name} ordered ${cups} cups of ${order}`)
// }

// coffeeOrder(name, cups, order);

let makeCoffee = (quantity, coffeeStrength) => {
    switch(coffeeStrength) {
        case 'Strong': {console.log (`grind ${quantity * 5} pounds of beans`)}
        break;

        case 'Medium': {console.log(`grind ${quantity * 2} pounds of beans`)}
        break;
    }
}

makeCoffee(3,'Strong')
makeCoffee(3,'Medium')