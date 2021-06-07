// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// 2. Declare and initialize a multidimensional array
// representing the following matrix:


// var myArr = [

// [0 , 1 , 2, 3],
// [1 , 0 , 1, 2],
// [2 , 1, 0, 1],

// ]

// console.log(`My Array Result is ${myArr[[1]]}`)


// ERROR 404 !!! ERROR 404 !!! ERROR 404 !!! ERROR 404 !!! 


// .........................................................................


// 3. Write a program to print numeric counting from 1 to 10.


// var i = 1

// for(var i ; i<=10 ; i++){

//     console.log(i  , )

// }


// .........................................................................



// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.



// var tableNumber = +prompt(`Enter Table Number ` , `Type Table Number`);

// var tableLenght = +prompt(`Enter Table Lenght ` , `Type Table Lenght`);

// for(tableNumber = 1 ; tableNumber>tableLenght ; tableNumber++)  {

//     console.log(tableNumber);

// }

// .........................................................................



/* program to generate a multiplication table
with any number */

// take number 
// const number = parseInt(prompt('Enter an integer: '));

// take range 
// const range = parseInt(prompt('Enter a range: '));

// for(let i = 1; i <= range; i++) {
//     const result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }

// .........................................................................



// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]


// var fruits = ["apple" , "banana" , "mango " , "orange" , "strawberry"];

// document.write(`${fruits} </br></br></br>`);
// document.write(`Element at index 0 is   ${fruits[0]} </br>`);
// document.write(`Element at index 1 is ${fruits[1]} </br> `);
// document.write(`Element at index 2 is  ${fruits[2]} </br>`);
// document.write(`Element at index 3 is  ${fruits[3]} </br>`);
// document.write(`Element at index 4 is  ${fruits[4]} </br>`);


// .........................................................................


// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k



// var arrCounting = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] ;

// var arrReverseCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] ;


// var arrEven = [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20] ;

// var arrOdd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19] ;

// var arrSeries = ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"] ;


// document.write(`Counting : </br> ${arrCounting} <br><br>`);
// document.write(`Reverse Counting : </br> ${arrReverseCounting} <br><br>`);
// document.write(`Even : </br> ${arrEven} <br><br>`);
// document.write(`Odd : </br> ${arrOdd} <br><br>`);
// document.write(`Series : </br> ${arrSeries} <br><br>`);



// .........................................................................


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


// var bakery = [`cake`, `applepie`, `cookie`, `chips`, `patties`];

// var bakery = prompt(`Welcome To Awami Bakery, What Do you Want To Ordr Sir/Mam`, `Cake`);


// console.log(`Cake Is Avilable At Index (0) In Our Bakery ${bakery}`);
// console.log(`applepie Is Avilable At Index (1) In Our Bakery ${bakery[1]}`);
// console.log(`cookie Is Avilable At Index (2) In Our Bakery ${bakery[2]}`);
// console.log(`Chips Is Avilable At Index (3) In Our Bakery ${bakery[3]}`);
// console.log(`patties Is Avilable At Index (4) In Our Bakery ${bakery[4]}`);








// if (bakery == cake) {

//     document.write(`cake  is Available at index (0) in our bakery ${bakery[0]}`)

// }

// if (bakery == applepie) {

//     document.write(`applepie  is Available at index (1) in our bakery ${bakery[1]}`)

// }

// if (bakery == cookie) {

//     document.write(`cookie  is Available at index (2) in our bakery ${bakery[2]}`)

// }

// if (bakery == chips) {

//     document.write(`chips  is Available at index (3) in our bakery ${bakery[3]}`)

// }

// if (bakery == patties) {

//     document.write(`patties  is Available at index (4) in our bakery ${bakery[4]}`)

// }
// else{


//     document.write(`Hy Everone`)

// }



// ....................................................................................


// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].


// var A = [24, 53, 78, 91, 12];

// var largest = 0;

// for (i = 0; i <= largest; i++) {

//     if (A[i] > largest) {

//         var largest = A[i]


//     }

// }

// console.log(`Array Items : ${A}  
// The Largest Number Is : ${largest}`)



// ....................................................................................


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]



// var A = [24 , 53 , 78 ,91 ,12];

// var smallest = 0 ; 

// for(i = 0 ; i>=smallest ; i++ ){

// if (A[i] > smallest) {

//     var smallest = A[i]

// }
// }

// console.log(`Array Items : ${A} 
// The Smallest Number Is : ${smallest}
// `);


// ....................................................................................



// 10. Write a program to print multiples of 5 ranging 1 to
// 100.


// for(var i = 5 ; i<=100 ; i+=5){

//     document.write(`</br> ${i}`)
// }







// ....................................................................................
// ....................................................................................
// ....................................................................................
// ....................................................................................
// ....................................................................................
// ....................................................................................
// ....................................................................................
// ....................................................................................


// Chapter 21 to 25 
// STRING METHODS ......




// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.


// var firstName = prompt(`Enter First Name : ` , `Type`);
// var lastName = prompt(`Enter Last Name : ` , `Type`);

// var fullName = (firstName + ` ` +lastName);

// document.write(`Your Full Name Is : ${fullName}`);


// ..................................................................................

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser


// var favPhone = prompt(`Enter Your Favourite Phone Model : ` , `Enter Mobile Name`);

// var favPhoneLength = favPhone.length ;

// console.log(`Your Favourite Mobile Phone Model Is : ${favPhone}   (Lenght Of Mobile Phone String is :)  ${favPhoneLength}`)


// ..................................................................................


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .



// var country = "Pakistani"

// var countryIndexFind = country.indexOf("n");

// console.log(`String : ${country}
// Index Of "n" : ${countryIndexFind}`)


// ..................................................................................



// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.


// var greet = `Hello World` ;

// var findstr = greet.lastIndexOf(`l`);
// console.log(`String : ${greet} 
// Last Index Of "l" : ${findstr}`)


// ..................................................................................



// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


// var countryPerson = "Pakistani" ;

// var findPerson = countryPerson.charAt(3);


// console.log(`String : ${countryPerson} 
// Character at Index 3 :  ${findPerson}`)


// ..................................................................................


// 6. Repeat Q1 using string concat() method.


// var fName = `Haris` ; 
// var lName = `Sohail` ; 

// var fullName = fName.concat(" "+lName);

// console.log(`Your Full Name is ${fullName}`);

// ..................................................................................


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


// var pakCity1 = `Hyderabad` ; 

// var pakCity2 = pakCity1.replace(`Islamabad`) ;

// console.log(`City : ${pakCity1} 
// After Replacement  : ${pakCity2}`)


// ..................................................................................



// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;


// var message = `.Ali and Sami are best friends. They play cricket and football together`;

// var newMessage = message.replace(/and/g , "&");


// console.log(`Your Old Message Is : 

// ${message}


// Message Are Changed :  

// ${newMessage}`)


// ..................................................................................



// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


// var number = "472";

// var number2 = parseInt(number);

// console.log(` Value : ${number}

// ` ,
//     `Type :`, typeof (number), `

// ` ,
//     `Value : ${number2}`, `

// `

//     , `Type :`, typeof (number2)
// )


// ..................................................................................

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.



// var userInput = prompt(`Enter Bakery Item Names : ` , `Type`);

// var userInput2 = userInput.toUpperCase();

// console.log(`User Input : ${userInput} 
// Upper Case : ${userInput2}
// `);


// ..................................................................................


// 11. Write a program that takes user input. Convert and
// show the input in title case.


// var userInput = prompt(`Enetr Value ` , `Type`) ;

// var userInput2 = userInput.split(); 

// console.log(`Here Your Prompt Value : 
// ${userInput2}
// `)

// ERROR 404 !!! ERROR 404 !!!ERROR 404 !!!ERROR 404 !!!


// ..................................................................................


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num = 35.36 ;
// var num2 = num.toString().replace("." , "") ;


// console.log(`Number : ${num} 
// Result : ${num2}
// `)


// ..................................................................................


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .


// var userName = prompt(`Enter Your Name :` , `Enter Name`) ;

// if (userName === prompt("") & ) {
    
// }



// ERROR 404 !!! ERROR 404 !!!ERROR 404 !!!ERROR 404 !!!



// ..................................................................................





































// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.



// var university = `University of Karachi`;

// var urduUniversity = university.split(``);


// console.log(`${urduUniversity}`);




// console.log(`${urduUniversity.length}`)


// ..................................................................................



// 17. Write a program to display the last character of a user
// input


// var userValue = prompt(`Enter Value : ` , `Enter Value`) ;

// var userValue2 = userValue[userValue.length -1];

// console.log(`${userValue2}`)


// ...............................................................
// DETAILS !!!  DETAILS !!!DETAILS !!!DETAILS !!!DETAILS !!!
// QUESTION NO 17 ......................





// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


// var string = `The quick brown fox jumps over the lazy dog ` ;

// var string2 = string.fi



































// for(var i = 0 ; i<=100 ; i++){

//     console.log(`${i}`);

//     }







// Practice Code 

// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;

// for (i=0; i<=largest;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }

// console.log(largest);







// var userName=prompt("Enter your Input: ");
// checkValidName(userName);
// function checkValidName(un)
// {
//     var message;
//     var split=[];
//     var arr=[];
//     for(var i=0;i<un.length;i++)
//     {
//         split[i]=un.split("&nbsp;");
//         arr[i]=un.charCodeAt(i);
//         if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//         {
//                 message="Correct User Name";
//         }
//         while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//         {
//             alert("please enter a valid userName");                                                                                                                   
//             userName=prompt("Enter your Input: ");
//             split[i]=un.split("&nbsp;");
//             arr[i]=un.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 message="correct in";
//                 break;
//             }
//         }

//     }
//     alert(message);
// }
