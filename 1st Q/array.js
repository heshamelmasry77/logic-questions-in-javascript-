
var numbers = [1, 2, 31, 24, -67, 5, 3, 555, 79, -4, 21, 33, 89, -90];

var min = [];
var max = [];

console.log(numbers);
console.log(min);
console.log(max);
//


for (var i = 0; i < numbers.length; i++) {
    var x = numbers[i];
    if (x > 0) {
        max.push(x);

    } else {
        min.push(x);

    }
}

function sortNumber(a,b) {
    return a - b;
}

max.sort(sortNumber);


console.log(min.sort());
console.log(max);
//