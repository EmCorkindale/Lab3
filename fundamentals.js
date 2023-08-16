// //Exercise 1
// "" + 1 + 0 //expected outcome 10
// console.log("" + 1 + 0)
// "" - 1 + 0 //expected outcome -1
// console.log("" - 1 + 0)
// true + false //expected outcome 1
// console.log(true + false)
// !true //expected outcome false
// console.log(!true)
// 6 / "3" //expected outcome converts "3" to an integer and completes equation
// console.log(6 / "3")
// "2" * "3" /*expected outcome error because you cannot multiply two strings - 
// I was incorrect. JS performs typer coercion and runs the equation by converting "2" and "3" to ingtegers */
// console.log("2" * "3")
// 4 + 5 + "px" // expected outcome 9px - It will add the first two integers plus the string
// console.log(4 + 5 + "px")
// "$" + 4 + 5 // expected outcome $9 - I was incorrect. The string came first so they were all added as strings with the + serving to concatenate them rather than add them as integers.
// console.log("$" + 4 + 5)
// "4" - 2 // expected outcome 2 - 4 will be converted to an integer to run the equation.
// console.log("4" - 2)
// "4px" - 2 // expected outcome NaN 
// console.log("4px" - 2)
// " -9 " + 5 // expected outcome " -9 5" because 5 will become a string and + will concatenate the two strings.
// console.log(" -9 " + 5)
// " -9 " - 5 //expected outcome NaN - incorrect because JS converts -9 to an integer and then performs the equation.
// console.log(" -9 " - 5)
// null + 1 //expected outcome 1 because JS will treat null as 0.
// console.log(null + 1)
// undefined + 1 //expected outcome NaN because undefined is not a number so the equation can't be performed.
// console.log(undefined + 1)
// undefined == null // equates to true because null is equivalent to undefined.
// console.log(undefined == null)
// undefined === null //expected outcome false because they are equavalent but not equal to one another and === is for strict comparisons.
// console.log(undefined === null)
// " \t \n" - 2 // oucome -2 because JS ignores the white space characters.
// console.log(" \t \n" - 2)

// //Exercise 2
// /* let lessThan1 = three < four will result in false because the value of three and four are strings so they are compared letter-by-letter 
// which means three is actually greater than four because it comes first. It could be fixed by saying let lessThan1 = Number(three) < Number(four)*/
// let three = "3"
// let four = "4"
// let thirty = "30"
// let lessThan1 = Number(three) < Number(four)
// console.log(lessThan1)

//Exercise 3
/*if (0) console.log('#1 zero is true') This will not print because 0 is falsy
if ("0") console.log('#2 zero is true') This will print because the statement is truthy
if (null) console.log('null is true') Null is falsy so this will not print
if (-1) console.log('negative is true') This is truthy so it will print
if (1) console.log('positive is true') This is also truthy so it will print*/

//Exercise 4
let a = 2, b = 3;
let result = `${a} + ${b} is  ${a + b < 10 ? 'less than 10' : 'greater than 10'}`
console.log(result)

//Exercise 5