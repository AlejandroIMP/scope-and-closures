// variables

var a; // undefined

var b = 'b'; // 'b'

b = 'bb'; // 'bb'

var a = 'a'; // 'a'


// Global Scope

var fruit = 'apple'; // global

function bestFruit() {
    console.log(fruit); // apple
}

bestFruit();


function countries() {
    country = 'Mexico';

    console.log(country); // Mexico
}

countries();
console.log(country)