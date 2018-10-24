// const cats = ['Terry','Fredrick','Happy Tim'];

// cats.push('Phebi');
// console.log(cats.unshift('Bobby'));
// cats[cats.length] = ('Tiger');
// console.log(cats.filter(item => item != 'Terry'));

// for (i=0; i<cats.length; i++) {
//     console.log(i + ":" + cats[i])
// }

// console.log(cats);

// Challenge
// const pets = ['Bob Ross', 'Patches', 'Doofus']

// let newS = function addPet(name) {
//     pets.push(name);
//     console.log(pets);
// }

// let rmvS = function adoptPet(name) {
//     let namI = pets.indexOf(name);
//     pets.splice(1,namI);
//     console.log(pets);
// }

// let printL = function currentPets() {
//     // for (i=0; i<pets.length; i++) {
//     //     console.log(pets[i])
// //     // }

// //     // pets.forEach(function(item,index,array){
// //     //     console.log(item);
// //     // })

// //     pets.forEach(item => console.log(item));
// // }

// // newS('Phebe');
// // rmvS('Patches');
// // printL()

// // Challenge2
// const cats = [
//     {name:'Terry', likeCatnit: true},
//     {name:'Peter', likeCatnit: false},
//     {name:'Nota', likeCatnit: true},
// ];

// let catHabit = function(name) {
//     let findCat = cats.filter(function(item){
//         return item.name == name;
//     });
//     return findCat[0].likeCatnit;
// };

// console.log(catHabit('Peter'))

const data = [
    {orderTime: 2.90, waitTime: 1.33, numD: 1},
    {orderTime: 4.20, waitTime: 2.97, numD: 1},
    {orderTime: 1.67, waitTime: 2.78, numD: 1},
    {orderTime: 0.75, waitTime: 2.62, numD: 1},
    {orderTime: 0.80, waitTime: 2.13, numD: 2},
    {orderTime: 0.72, waitTime: 2.25, numD: 1},
    {orderTime: 0.77, waitTime: 1.37, numD: 1},
    {orderTime: 0.73, waitTime: 2.02, numD: 2},
    {orderTime: 0.57, waitTime: 1.67, numD: 1},
    {orderTime: 0.72, waitTime: 1.82, numD: 2},
    {orderTime: 2.87, waitTime: 2.15, numD: 4},
    {orderTime: 1.38, waitTime: 1.77, numD: 1},
    {orderTime: 1.00, waitTime: 1.12, numD: 1},
    {orderTime: 0.40, waitTime: 2.75, numD: 1},
    {orderTime: 1.22, waitTime: 1.85, numD: 1},
    {orderTime: 0.95, waitTime: 0.65, numD: 1},
    {orderTime: 1.65, waitTime: 1.38, numD: 2},
    {orderTime: 1.40, waitTime: 1.27, numD: 1},
    {orderTime: 3.10, waitTime: 4.75, numD: 1},
    {orderTime: 0.38, waitTime: 1.77, numD: 2},
    {orderTime: 0.70, waitTime: 1.82, numD: 1},
    {orderTime: 0.38, waitTime: 2.57, numD: 1},
    {orderTime: 0.52, waitTime: 0.43, numD: 1},
    {orderTime: 0.43, waitTime: 1.25, numD: 1},
    {orderTime: 1.02, waitTime: 1.60, numD: 2},
    {orderTime: 0.72, waitTime: 0.97, numD: 2},
    {orderTime: 0.83, waitTime: 2.67, numD: 2},
    {orderTime: 0.82, waitTime: 0.85, numD: 1},
    {orderTime: 0.62, waitTime: 0.60, numD: 2},
    {orderTime: 1.45, waitTime: 1.05, numD: 2},
]

const n = data.length;

//sum of x^2
const xSquaredSum = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = Math.pow(data[i].orderTime, 2) + count;
    }
    return count;
}

//sum of y^2
const ySquaredSum = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = Math.pow(data[i].waitTime, 2) + count;
    }
    return count;
}

//(sum of x)^2
const sumXSquared = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = data[i].orderTime + count;
    }
    return Math.pow(count,2);
}

//(sum of y)^2
const sumYSquared = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = data[i].waitTime + count;
    }
    return Math.pow(count,2);
}


//x*y
const sumXTimesY = function() {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = data[i].orderTime * data[i].waitTime + count;
    }
    return count;
}

//now plug into our formula
const pearsonCorrelation = () => {
    return (sumXTimesY() - sumXTimesY()/n) / ((Math.sqrt(xSquaredSum()) -(sumXSquared()/n)) * (Math.sqrt(ySquaredSum()) -(sumYSquared()/n)));
}

console.log(pearsonCorrelation());
