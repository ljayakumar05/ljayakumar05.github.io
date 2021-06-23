//   console.log('Hello wold 2');

//   function fruitProcessor(apple, orange){
//       console.log(apple, orange);
//       const juice = `Juice with ${apple} apple and ${orange} orange.`;
//       return juice; 
//   }

// const appleJuice = fruitProcessor(50, 55);
// console.log(appleJuice);

//   function calAge1(birthYear){
//       return 2021 - birthYear;
//   }

//   const age = calAge1(1992);
//   console.log(`My age is ${age}.`);

  //Function inside a function: Data flow

  const cutPieces = function (fruit) {
      return fruit * 4;
  }

  const fruitProcessor = function (apples, oranges) {
    
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;

  }
  
  console.log(fruitProcessor(2,3));