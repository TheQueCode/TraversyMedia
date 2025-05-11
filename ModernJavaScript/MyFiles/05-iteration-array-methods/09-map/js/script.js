/*
const arr = [1, 4, 9, 16];

const mapArr = arr.map(x => x * 2);

console.log(mapArr); // [2, 8, 18, 32]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNums = numbers.map(number => number * 2)

console.log(doubledNums);

// Same with forEach

const doubledNumbers = [];
numbers.forEach(number =>
{
  doubledNumbers.push(number * 2);
});

console.log(doubledNumbers);
*/

const companies = [
  {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
  {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
  {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
  {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
  {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
  {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
  {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
  {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
  {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];

// Create an array of company names
/*
const companyNames = companies.map(company => company.name);
console.log(companyNames);
*/

// Create an array of objects with just company and category
/*
const companyInfo = companies.map(company =>
{
  return {
    name: company.name,
    category: company.category
  }
});

console.log(companyInfo);
*/
// create an array of objects with the name of the company and the length of each company in years
/*
const companyYears = companies.map(company =>
{
  return {
    name: company.name,
    length: company.end - company.start + ' years'
  }
});
console.log(companyYears);
*/

// Chain map methods

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
const squareAndDouble = numbers.map(number => (Math.sqrt(number)) * 2);

console.log(squareAndDouble);

const another = numbers
  .map(number => Math.sqrt(number))
  .map(sqrt => sqrt * 2)

console.log(another);

//long version

const squareAndDoubleLV = numbers
  .map(function (number)
  {
    return Math.sqrt(number)
  })
  .map(function (sqrt)
  {
    return sqrt * 2;
  });

console.log(squareAndDoubleLV);
*/

// Chaining different methods - get even numbers, then double those numbers

const evenNums = numbers
  .filter(number => number % 2 === 0) // [2, 4, 6, 8, 10]
  .map(even => even * 2);

console.log(evenNums); // [4, 8, 12, 16, 20]