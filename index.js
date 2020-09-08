/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

function votingAge(num){
if (num > 18){
    console.log(true);
}
    }



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var a = 10
var b = 2*a 

if (a >= 10){
    b = 5 
}

for (let i=0; i<100; i++);



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
var x = "1999";
var y = parseInt(x);

console.log(Number("1999"))



//Task d: Write a function to multiply a*b 
function mult(a, b){
console.log(a*b);
}




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogYears(age){
console.log(age*7);
}



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2(.16) - 4(.32) months 10% of their body weight
// 4(.32) - 7(.583) months 5% of their body weight 
// 7(.583) - 12(1.0) months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function dogFeeder(weight, age){
    if (age > 1 && weight <= 5){
    console.log(weight * .05)
}
    else if (age > 1 &&  weight <10){
    console.log(weight * .04)
} 
    else if (age > 1 &&  weight < 15 ){
    console.log(weight * .03)
}
    else if (age > 1 && weight > 15){
    console.log(weight * .02)
}
    else if (age > .16 && age < .32){
    console.log(weight * .10)
}
    else if (age > .32 && age < .583){
    console.log(weight * .05)
}
    else if (age > .583 && age < 1.0){
    console.log(weight * .04)
}
}





/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

var compare = function(choice1, choice2){
    if(choice1 === choice2) {
        return "The result is a tie!";
    }
    if(choice1 === "rock"){
        if(choice2 === "scissors") {
        return "rock wins";
    } else {
        return "paper wins";
        }
    }
    if (choice1 === "paper"){
        if(choice2 === "rock"){
            return "paper wins";
        } else {
            if(choice2 === "scissors") {
                return "scissors wins";
            }
        }
    if(choice1 === "scissors") {
        if(choice2 === "rock") {
            return "rock wins";
        } else {
            if(choice2 === "paper") {
                return "scissors wins";
                }
            }
    }
    }
    };
    console.log("User Choice: ", Math.random(computer choice))   

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function toMiles(num){
console.log(num * 0.621371)
}

1km-0.621371miles




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function toCenti(num){
    console.log(num * 30.48)
}

1ft - 30.48cm



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  while(i = 99; i < 0; i --){
  console.log(i + 'bottles of soda on the wall, ' + i + ' bottles of soda, take one down pass it around ' i-- + 'bottles of soda on the wall' )
  }




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
function grader(grade){
if(grade > 90):
console.log(A)
else if(grade > 80):
console.log(B)
else if(grade > 70):
console.log(C)
else if (grade > 60):
console.log(D)
else:
console.log(F)
}

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





