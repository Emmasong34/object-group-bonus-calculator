const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );


// ### Employee Array
// Each **Employee** currently is configured in this way:

// * The `name` property holds the employees name.
// * The `employeeNumber` property has their employee number.
// * The `annualSalary` property contains their base annual salary.
// * The `reviewRating` property contains their review rating.

// ## Processing Employee Bonuses

// Loop over the `employees` array and do the following:

for( i = 0; i < employees.length; i++ ){

}

// * use each employee object as the input to the function described below.
// * `console.log` the results of each iteration.



// ## Function Logic

// Write a declared function that takes in one **Employee** object (as an argument to the function), 
//and returns a new **object** with the following properties:

// * The `name` property should contain the employee's name.
// * The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// * The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
// * The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.

     // test person below
// {
//   name: 'Atticus',
//   employeeNumber: '2405',
//   annualSalary: '47000',
//   reviewRating: 3
// },

function bonusRating( employees ){
  if( employees.reviewRating <= 2 ){
    return 'No bonus';
  }
  else if( employees.reviewRating == 3 ){
    return '4% bonus';
  }
  else if( employees.reviewRating == 4 ){
    return '6% bonus';
  }
  else if( employees.reviewRating == 5 ){
    return '10% bonus';
  }
}

console.log( bonusRating( employees[0] ) );
console.log( bonusRating( employees[1] ) );
console.log( bonusRating( employees[2] ) );
console.log( bonusRating( employees[3] ) );
console.log( bonusRating( employees[4] ) );
// ### Individual Bonus calculation
// - Those who have a rating of a 2 or below should not receive a bonus.
// - Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
// - Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
// - Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
// - If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
// and should receive an additional 5%.
// - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// - No bonus can be above 13% or below 0% total.

// NOTE: You may abstract out this bonus calculation into a second function if you like, but this is not mandatory.