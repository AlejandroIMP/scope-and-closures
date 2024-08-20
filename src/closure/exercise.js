 function sumWithClosure(firstNum) {
    let num1 = firstNum ?? 0;
    
    const sum = (secondNum) => {
    let num2 = secondNum ?? 0;
    return num1 + num2;    
    };
    return sum;
  }
  
console.log(sumWithClosure()(4))