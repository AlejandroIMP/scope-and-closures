// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(10);
// moneyBox(5);

function moneyBox() {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(5)
myMoneyBox(10)
myMoneyBox(15)

const moneyBoxAna = moneyBox();

moneyBoxAna(10)
moneyBoxAna(20)