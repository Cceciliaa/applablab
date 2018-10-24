const holdingPhone = true;
const isAlone = true;
let time = 0;
if (holdingPhone && isAlone) {
    time = 1.2; 
} else if (holdingPhone && !isAlone) {
    time = 2;
} else if (!holdingPhone && isAlone) {
    time = 1.8;
} else if (!holdingPhone && !isAlone) {
    time = 3;
}

console.log(`Estimated drink time: ${time} minutes`)