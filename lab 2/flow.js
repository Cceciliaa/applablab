//lab 2 -- program flow in JavaScript

// if (1+1==='2') {
//     console.log(`i evaluated to true!`);
// }

// the else statement
const canPaint = true;
const isCat = true;
const isBear = true;

if (isCat && canPaint) {
    console.log(`Let us name him Bob Ross the Cat`);
} else if (isCat) { 
    console.log(`Let us name him Tophet`);
} else if (canPaint || isBear) {
    console.log(`That could be a bear, or it could be a person 
    but boy can it paint!`);
} else {
    console.log(`That is a skunk, eeeeeeeck!`);
}