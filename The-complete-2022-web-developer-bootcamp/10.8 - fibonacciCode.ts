function fibonacciGenerator (n: number) {
  let fiboNumbers: number[] = [];
  
	for(let number = 0; number < n; number++) {
    if(number === 0 || number === 1) {
      fiboNumbers.push(number);
    } else if(number === 2) {
      fiboNumbers.push(1);
    } else {
      const lastNumber = parseInt(fiboNumbers.slice(-1).toString());
      const secondLastNumber = parseInt(fiboNumbers.slice(-2).toString());
      
      const newNumber = lastNumber + secondLastNumber;
      
      fiboNumbers.push(newNumber);
    }
  }
  
  return fiboNumbers;
}

const arrayOf = fibonacciGenerator(9);

console.log(arrayOf)