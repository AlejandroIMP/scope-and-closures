function saludo() {
    let userName = 'Ana';
    console.log(userName)

    if (userName === 'Ana') {
        console.log(`Hola ${userName}`)
    }
}

saludo();

console.log(userName) // ReferenceError: userName is not defined