const fizzBuzz = num => {
    for(let i = 1; i <= num; i++) {
      // check if the number is a multiple of 3 and 5
      if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
      } // check if the number is a multiple of 3
        else if(i % 3 === 0) {
        console.log('fizz')
      } // check if the number is a multiple of 5
        else if(i % 5 === 0) {
        console.log('buzz')
      } else {
        console.log(i)
      }
    }
  }

// fizzBuzz(5)

const foodTypes =()=>{
const foodArray = [
    { name: 'Burrito' },
    { name: 'Pizza' },
    { name: 'Burger' },
    { name: 'Pasta' }
];

console.log("**********for loop***************")
for (let i = 0; i < foodArray.length; i++) {
    console.log(`i value: ${i} | Food Name:`, foodArray[i]);
}

console.log("**********for Each loop***************")
foodArray.forEach((food, index) => {
    console.log(`i value: ${index} | Food Name:`, food);
  });
  
}
foodTypes()