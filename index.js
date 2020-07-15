// Your code here
const mapToNegativize = (arr) => arr.map( (a) => -1 * a );
const mapToNoChange = (arr) => arr;
const mapToDouble = (arr) => arr.map( a => a * 2 );
const mapToSquare = (arr) => arr.map( a => Math.pow(a, 2));
const reduceToTotal = (arr, start=0) => start + arr.reduce( (sum, curr) => sum + curr);
const reduceToAllTrue = (arr) => arr.reduce( (sum=true, curr) => sum && !!curr);
const reduceToAnyTrue = (arr, sum=false) => arr.reduce( (sum, curr) => sum || !!curr);
