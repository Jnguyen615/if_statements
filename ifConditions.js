// // // // // var name = "Usagi"
// // // // // var name2 = "Mamoru"
// // // // // var name3 = "Chibi-usa"
// // // // // var location = "Moon Kingdom"
// // // // // var age1 = 17
// // // // // var age2 = 21
// // // // // var age3 = (3 * 3)
// // // // // var message = `${name} and ${name2} live with their daughter ${name3} in the ${location}.`
// // // // // var message2 = `They are ${age1}, ${age2} and ${age3}.`

// // // // // console.log (message + message2) 

// // // // var cats = ["Chibi-star", "Sebastian", "Snickers", "BillyJean", "Peaches", "Krystle", "Abner", "Trixie"];
// // // // var new_array6 = cats.unshift("Aria")
// // // // console.log (new_array6)

// // var numbers = [1, 2, 3, 4, 5, 6, 7, 8,9, 10, 11, 12 ,13]
// // var new_array = numbers.unshift (0)
// // console.log (new_array)
// // var message = `${numbers} are the options for group numbers.`
// // console.log (message)
// // var y = `The numbers are ${numbers}`;
// // console.log (y)

// // var greet = "Hello, nice to meet you."
// // var greet2 = "I see you are a new user."
// // var greet3 = "Welcome back."
// // var name = "Chibi"
// // var name2 = "Billy"
// // if (name === "Peaches"){console.log (`${greet}`);
// // }

// // else if(name2 === "Krystle") {console.log(`${greet3}`);
// // }
// // else{console.log(`${greet2}`);
// // }


// // var name = "Kupo"
// // var age = 2 
// // var breed = "Doberman and great pyranees"
// // var message = `This is ${name}, he is a ${breed} and ${age} years old.`

// // console.log (message)

// var name = "Sebastian"
// var age = 3 
// var birthdate = "August 1st"
// var message = `Hello my name is ${name} and I am ${age} years old. My birthday is ${birthdate}.`
// var message2 = "Hello!"
// if (name === "Snickers") {console.log (`${message})`);
// }
// else {console.log (`${message2}`);
// } 

// var ages = [2, 3, 6, 8, 11, 36]
// var new_array = ages.slice(2,5);

// console.log(new_array)

// var name = "Sebastian"
// var age = 11
// var breed = "Egyptian Mau"

// if (name <= "Peaches") {console.log ("Hello, Peaches");
// }
// else {console.log (`Hello Sebastian, you are ${age} and an ${breed}`);
// }

// var age = 22
// var message = "Welcome to the website!"
// var message2 = "You are not quite old enough to visit, sorry."
// var message3 = "How are you even on this device?"

// if (age === 2) {console.log (`${message3}`);
// }
// else if (age < 21) {console.log(`${message2}`);
// }
// else {console.log(`${message}`);
// }

// var name = "Jennifer"

// if (name === "Oscar"){console.log("Hello, Oscar.");
// }
// else {console.log (`Nice to meet you ${name}.`);
// }
// console.log 

// for (var i = 3; i < 15; i++) {
//     console.log(i);
// }


// var password = "#0000000"


// console.log(password.length >= 8)

// if (password.length > 8) {console.log ("You need more characters and the symbol # in your password.");
    

// }else {
//     console.log ("Your password is the correct length.");

// }
   

// // 

var password = "098650#"
var needSymbol = "#";

console.log (password.length >= 8);
console.log (password.includes ("#"));

if (password.length >= 8 && password.includes (needSymbol)) {
    console.log (`Got it. Your password is ${password}`);
} else {
console.log("Sorry this password will not work.");
}

// var age = 12
// var ownsCar = true; 

// if (age >= 16 && ownsCar) {
//     console.log("She is old enough to drive and has her own car");
// } else {
//     console.log("She does not drive.")
// }
