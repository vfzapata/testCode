function fizzBuzz(n) {
  const multipleFive = 5;
  const multipleThree = 3;
 if(Number.isInteger(n) && n !== 0) {
 for(let i=1; i<=n; i++) {
   if ( i % multipleThree == 0 ) {
         console.log(`${i} Fizz`);
     }
      if ( i % multipleFive == 0 ) {
         console.log(`${i} Buzz`);
     }
     else{
       console.log(i);

      }
 }
 } else {
 console.log('Invalid value');
 }
}

function main () {
  let limitNumber = parseInt(prompt("Type a number (Integer)"));
fizzBuzz(limitNumber);
};

main();
