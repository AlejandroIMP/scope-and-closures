function greeting() {
    let userName = 'John';

    function displayUserName(){
        return `Hello, ${userName}!`;
    }
    return displayUserName;
}

const g = greeting();

console.log(g()); // Hello, John!