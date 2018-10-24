// 1.
let reverse = function rvsWord(word) {
    let letters = word.split("");
    let rvsLetters = letters.reverse();
    let joinWord = rvsLetters.join("");
    return joinWord;
}

console.log(reverse("Hellow"))

// 2.
let countCon = function count(string) {
    let counts = 0;
    const vowel = ['a','e','i','o','u'];
    for (i=0; i<vowel.length; i++) {
        if (!(string.charAt(i) in vowel)) {
            counts += 1;
        }
    }
    return counts
}

console.log(countCon("asevsdtse"))

// 3.
let countChange = function change(totalDue, totalGiven) {
    let change = totalGiven - totalDue;
    return change
}

console.log(countChange(75,100))

// 4.
let repeatWord = function(word,time) {
    repeatedWord = '';
    for (i=0; i<time; i++) {
        repeatedWord += word;
    }
    return repeatedWord;
}

let printGra = function(n) {
    while (n>0) {
        console.log(repeatWord('&',n));
        n --;
    }
}

printGra(5);


// 5.
let countLine = function(stringOfNames) {
    let count = 0;
    for (i=0; i<stringOfNames.length; i++) {
        if (stringOfNames.charAt(i) === stringOfNames.charAt(i).toUpperCase()) {
            count += 1;
        }
    }
    return count;
}

console.log(countLine('AngelBeeCindyAngela'))

// 6. 
let replaceWord = function switchWord(word) {
    OriString = `she didn't like how heavy the rain was, so she decided to take her umbrella`;
    newStr = OriString.replace('umbrella',word)
    return newStr;
}

console.log(replaceWord('coat'))

// 7.
let drawGra = function(n) {
    let time = 0;
    for (i=0; i<n; i++) {
        strI = ' '.repeat(n-time/2-1) + '*'.repeat(time+1);
        time += 2;
        console.log(strI);
    }
}

drawGra(4)