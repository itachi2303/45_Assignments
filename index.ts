// task 2
// Personal Message: Store a person’s name in a variable, and print a message to that person.
//  Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

// solution:
let name = "aliyan"
console.log(`hello ${name} would u like to learn some python today?`);


// task 3
// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.

// solution:
let name = "Aliyan khan";
console.log("uppercase:",name.toUpperCase());
console.log("lowercase:",name.toLowerCase());
console.log("titlecase:",name.replace(/\b\w/g,a=>a.toUpperCase()));



// task 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//  Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

// solution
let author ="Albert Einstein";
let quotation = "A person who never made a mistake never tried anything new.";
console.log(`${author} once said, "${quotation}"`);


// tasl 5
// Famous Quote 2: Repeat Exercise 4,
//  but this time store the famous person’s name in a variable called famous_person.
//   Then compose your message and store it in a new variable called message. Print your message.

//solution
let famous_person = "Albert einstein"
let message ="A person who never made a mistake never tried anything new.";
console.log(`${famous_person} once said,"${message}"`);
// task 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//  Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
//  Then print the name after striping the white spaces.


// solution

let person_name:string ="\t\n aliyan khan \n\t";
console.log("Orignal:",  person_name);
console.log("stripped:", person_name.trim());

// task 7 and 8
// Number Eight: Write addition, subtraction
// , multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.



console.log(5+3);
console.log(10 - 2);
console.log(4*2);
console.log(16/2);

// task 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favorite_num = 5;
console.log(`my favorite name is ${favorite_num}`);

// task 10 
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// author:[aliyan khan]
// date :[tuesday, april 23 2024]

// task 9 :printing my favorite number.

let favorite_num = 5;
// reveling my favorite number in a message
console.log(`my favorite name is ${favorite_num}`);



// task 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time

let names:string[] = ["aliyan","asim","mairaj"]
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);


// task 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
//  print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let names :string[] = ["aliyan","mairaj","asim"]
let message :string = "would you like to play football?"
console.log(names[0] +" "+ message);
console.log(names[1] +" "+ message);
console.log(names[2] +" "+ message);

// task 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”

let transportation : string [] = ["bmw","porche","lamborgini"]
transportation.map((items)=> console.log(`would u like to own a ${items}`));

// task 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, 
// inviting them to dinner.

let transportation : string [] = ["ali","imran","awais"]
transportation.map((items)=> console.log(`Dear ${items} you are invited to the dinner`));
// task 15 
let guestarr :string[] = ["aliyan","ali","asim","huzaifa",]
let cannotcome:string = "asim";
let newguest:string = "rohan";
guestarr[guestarr.indexOf(cannotcome)] = newguest;
guestarr.map((items) => console.log(`Dear ${items} u are invited to the dinner`));


// task 16
let guestarr :string[] = ["rohhan","aliyan","ali","asim","huzaifa",]
let cannotcome:string = "ali";
let newarr:string ="saafia";

guestarr[guestarr.indexOf(cannotcome)] = newarr;
guestarr.map((items) => console.log(`Dear ${items} i found a bigger dinner so i invited more people`));

console.log(guestarr);


// part 2
let guest = "wajid";
guestarr.unshift(guest)
console.log(guestarr);

// part 3
let middleguest:string = "ashmaan";
let middleindex= guestarr.length / 2;
guestarr.splice(middleindex,0,middleguest);
console.log(guestarr);

// part 4 
guestarr.push("zeshaan")
console.log(guestarr);

// part 5
guestarr.map((items)=> (console.log(`Dear ${items} you are invited from more guests category`)
))
console.log(guestarr);


// task 17
let guests:string[]=["aliyan","wajid","hamzha","afiyan","toolu pakoray wala"]
console.log("We have limited seats so only two people can go in the party");


while(guests.length > 2)
{  
    const removeelement = guests.pop()
    console.log(`${removeelement} we are really sorry u cant come to the party`)
 
}


// // printing invitations

let guests:string[] = ["aliyan","wajid"]
guests.forEach((guest) => console.log(`Dear ${guest} you are still invited so the party`)
)
 

// //removing the last two names from the list

 guests.pop()
 guests.pop()

// // final list

console.log("final list :",guests);

// task Q18
let favplaces:string[] = ["japan","south korea","singapore","USA","UK"]
// Print your array in its original order.
console.log("Orginal form:", favplaces);
// print your array in alphabetical order without modifying the actual list.
console.log("alphabetical order:", [...favplaces].sort());
// show that your array is still in its orginal form
console.log("Orginal list after sorting:",favplaces);
//  Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order:",[...favplaces].sort().reverse());
// // show that your array is still in its orginal form
console.log("orginal form after sorting:", favplaces);
// // show reversed order
favplaces.reverse()
console.log("reversed order:",favplaces);
// // reverse the order of the list again to get back to the orignal order 
favplaces.reverse()
console.log("back to orginal order:",favplaces);

// sort the array in alphabetical order
 favplaces.sort()
 console.log("sorted in alphabetical order:",favplaces);
//  sort the array in reverse alphabetical order
favplaces.sort((a,b)=> b.localeCompare(a))
console.log("sorted by reserse alphabetical order",favplaces);

// task 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, 
// inviting them to dinner.

let transportation : string [] = ["ali","imran","awais"]
transportation.map((items)=> console.log(`Dear ${items} you are invited to the dinner`));
console.log("total number of guests invited is =>",transportation.length);

// task 20
// Think of something you could store in a array. For example, 
// you could make a list of mountains, rivers, countries, cities, languages,
//  or anything else you’d like. Write a program that creates a list containing these items.

// soluton

let transportation : string [] = ["ali","imran","awais"]
transportation.map((items)=> console.log(`Dear ${items} you are invited to the dinner`));
let myfavcars:string[] = ["BWM M5","SUPRA mk4","R35 gtr","lamborgini"]
console.log("list of favorite cars:",myfavcars);

// task 21
// They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.


type information = {
    name:string;
    age:number;
    gender:string;

}
let info:information= {
    name : "aliyan khan",
    age:15,
    gender:"male"

}
console.log(info);

// task 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
//  Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let days:string[] = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday",]
console.log(days{7});  //error
console.log(days[5]);

// task 23
// • Create at least 10 tests.
//  Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = "subaru";

// true statments

console.log("is car =='subaru'? predict true");
console.log(car == 'subaru');

console.log("is car !=='Honda civic'? predict true");
console.log(car !== 'Honda civic');

console.log("is car !=='subaru brothers? predict true");
console.log(car !== 'subarus brothers');

console.log("is car !=='subaru fathers'? predict true");
console.log(car !== 'subaru fathers');

console.log("is car !=='Subaru'? predict false");
console.log(car !== 'Subaru');





// false statements 
console.log("is car =='SUBARU'? predict false ");
console.log(car == 'SUBARU');

console.log("is car =='subaru brother? predict false");
console.log(car == 'subarus brother');

console.log("is car =='Subaru'? predict false");
console.log(car == 'Subaru');

console.log("is car =='Honda civic'? predict false");
console.log(car == 'Honda civic');

console.log("is car == 'mehran'? predict true");
console.log(car == 'mehran');

// task 24

// • Tests for equality and inequality with strings
let name1:string = "hello"
let name2:string = "Hello"

console.log(name1 === name2);
console.log(name1 !== name2);

//  • Tests using the lower case function
let string1:string = "Aliyan"
let string2:string = "aliyan"

console.log(string1.toLowerCase() === string2.toLocaleLowerCase() );
console.log(string1.toLowerCase() !== string2.toLocaleLowerCase() );

// Numerical tests involving equality and inequality, greater than and less than,
//  greater than or equal to, and less than or equal to

let num1:number = 10;
let num2:number = 5;
//  part 1
console.log(num1 === num2);
console.log(num2 !== num1);
// part 2
console.log(num1 < num2);
console.log(num2 < num1);
// part 3
console.log(num1 <= num2);
console.log(num2 <= num1);

// • Tests using "and" and "or" operators

let boolean1:boolean = true;
let boolean2:boolean = false;

console.log(boolean1 && boolean2);
console.log(boolean1 || boolean2);

// • Test whether an item is in a array

let numarray:number[] = [2,3,4,5,6,7]
console.log(numarray.includes(4));

// • Test whether an item is not in a array
let names:string[] = ["aliyan","afiyan","baba"]
console.log(names.includes("mama"));

// task 25
// Alien Colors #1: Imagine an alien was just shot down in a game. 
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green.
//  If it is, print a message that the player just earned 5 points.

let alien_color = "green";
if (alien_color === "green")
    {
        console.log("player got 5 points");
    }

now
let alien_color:string = "red";
if (alien_color === "green")
    {
        console.log("no output"); 
    }

//task 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25,
//  and write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
 
let alien_color:string = "green";

if (alien_color === "green")
    {
        console.log("player got +5 points for shooting a green alien");
        
    }
else{
    console.log("player got +10 points for shooting a non-green alien ");
    
}

// • Write one version of this program that runs the if block and another that runs the else block.

let color_alien = "red"

if(color_alien ==="green")
    {
        console.log("player got +5 points for shooting a green alien");
        
    }
else{
    console.log("player got +10 points for shooting a non-green alien ");
    
    
}
// task 27
let alien_color:string = "yellow"

if (alien_color ==="green")
    {
        console.log("player earned 5 points");
        
    }else if(alien_color ==="yellow")
        {
            console.log("player got 10 points for shooting a yellow alien");
        }
        else{
            console.log("player got 15 points");
            
        }

// task 28
 
let age:number = 18;

if(age < 2 )
{
    console.log("you are a baby");
    
}else if (age < 4)
{
    console.log("You are a toodler");
    
}
if(age < 20)
    {
        console.log("you are a teenager");
        
    }else if(age < 65)
        {
            console.log("you are adult");
            
        }
    else{
        console.log("you are older");
        
    }

// task 29
// • Make a array of your three favorite fruits and call it favorite_fruits.

let favorite_fruits:string[]=["bananas","mangos","apple","Kiwi","orange"]

if(favorite_fruits.includes("bananas"))
    {
        console.log("your really like bananas");
        
    }
if (favorite_fruits.includes("mangos"))
    {
        console.log("you really like mangos");
        
    }
if (favorite_fruits.includes("apple"))
    {
        console.log("apple");
    }
if(favorite_fruits.includes("Kiwi"))
    {
        console.log("Kiwi");
        
    }
if(favorite_fruits.includes("orange"))
    {
        console.log("Orange");
        
    }
// task 30
// • If the username is 'admin', print a special greeting, such as Hello admin,
//  would you like to see a status report?

let names:string[] = ["admin","aliyan","afiyan","awais","wajid"];
const greet = (input:string[]) =>{
    for(let name of names){
        name.includes("admin")? console.log(`Hello ${name} would like to see status`):
        console.log(`hello ${name}`);
        
    }
}
greet(names)


// task 31
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.


// let  users:string[] = ["admin","aliyan","afiyan","wajid"]
let  users:string[] = []

if (users.length === 0)
    {
        console.log("we need to find some users!");
        
    }
    else{
        for(let user of users)

            {

                if(user.includes("admin"))
                    {
                    console.log("Hello admin, would you like to see a status report?");
                    
                    }
                else
                {
                    console.log(`${new_user} is available ${user} thanku for logging in again`);
                    
                }
                
            }

    }


// task 32
// • Loop through the new_users list to see if each new username has already been used.
//  If it has, print a message that the person will need to enter a new username. If a username has not been used,
//  print a message saying that the username is available.

let  current_users:string[] = ["Shariq","Aliyan","afiyan","wajid"]

let  new_users:string[] = ["Aliyan","asim","mairaj","Shariq","huzaifa"]
let current_users_lower = current_users.map((lower)=> lower.toLowerCase())
// now
for(let new_user of new_users)
    {
        if(current_users_lower.includes(new_user))
            {
                console.log(`The name {${new_user}} is already taken pls enter a new name!`);
                
            }
        else
        {
            console.log(`username:[${new_user}] is available!`);
            
        }
    }

// task 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, 
// except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let numbers:string[] = ["1st","2nd", "3rd", "4th", "5th", "6th"," 7th", "8th","9th"]
for(let number of numbers)
    {
        if (number === "1st")
            {
                console.log(number);
                
            }
        else if(number === "2nd")
            {
                console.log(number);
                
            }
         else if(number === "3nd")
                {
                    console.log(number);
                    
                }
        else if(number === "4th")
                    {
                        console.log(number);
                        
                    }
        else if(number === "5th")
                        {
                            console.log(number);
                            
                        }
        else if(number === "6th")
                        {
                           console.log(number);
                                
                        }
        else if(number === "7th")
                        {
                         console.log(number);
                                    
                        }
        else if(number === "8th")
                        {
                         console.log(number);
                                        
                        }
        else if(number === "9th")
                        {
                         console.log(number);
                                            
                        }
        else if(number === "10th")
                        {
                         console.log(number);
                                                
                         }
    }



// task 34

// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let Pizzas :string[] = ["pepperoni","Fajita","Full cheese"]
for (let pizza of Pizzas)
    {
        // console.log(pizza);
        console.log(`i like ${pizza} pizza`);
        
    }
Pizzas.map((values)=> console.log(`i really love ${values} pizza!`)
)

// task 35
// Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
//  • Modify your program to print a statement about each animal, such as A dog would make a great pet.
//   • Add a line at the end of your program stating what these animals have in common.
//  You could print a sentence such as Any of these animals would make a great pet!

let pets:string[] = ["cat","Dog","cow"]
for (let pet of pets)
    {
        // console.log(pet);
        console.log(`A ${pet} have four legs`);
        
        
        
    }
    console.log("\n all these animals are great pets! but i love cats more");
    

 // tasl 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt (size:string,text:string)
{
    console.log(`U ordered a ${size} sized T-shirt with a {${text} } text on it `);
    
}
   
make_shirt("medium","i like typescript")

// task 37

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message,
//  and a shirt of any size with a different message.

function make_shirt(size:string = 'large',text:string = 'i love typescript')
 {
    console.log(`U ordered a ${size} sized T-shirt that says {${text}}`);
    
 }
//  make_shirt()
// make_shirt("medium")

// different message
make_shirt("small","node.js")

// task 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
// Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city:string,country:string = "pakistan")
{
    console.log(`${city} is in ${country}`);
    

}
describe_city("karachi")
describe_city("france","europe")


// task 39
// City Names: Write a function called city_country() that takes in the name of a city and its country.
//  The function should return a string formatted like this:

"Lahore, Pakistan"

function city_country(city:string,country:string):void
{
    console.log(`"${city},${country}"`);
    
}
city_country("karachi","pakistan")
city_country("tokyo","japan")
city_country("California","USA")

// task 40
// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title,
// and it should return a Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
// Make at least one new function call that includes the number of tracks on an album.

function make_album(artist:string,title:string):{artist:string;title:string}
{
    const dictionaries ={
        artist:artist.charAt(0).toUpperCase() + artist.slice(1),
        title:title.charAt(0).toUpperCase() + title.slice(1)
    }
    return dictionaries
}
console.log(make_album("aliyan","ETC")
);




// task 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.

// Define the show_magicians function
function show_magicians(magicians:string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians = ["Ali", "Arshad", "Zeeshan", "Haris"];
show_magicians(magicians);

// task 42
// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.

function show_magicians(magicians:string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function
function make_great(magicians:string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
let magicians = ['Ali', 'Arshad', 'Zeeshan', 'Haris'];
make_great(magicians);
show_magicians(magicians);



// task 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Define the make_great function


const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}
showMagicians(magicianNames);

function make_great(megicians:string[]):void {
    for (let i=0; i < magicianNames.length; i++){
        console.log(`The Great ${megicians[i]}`)
    }
}
make_great(magicianNames)


// task 44

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides,
//   and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.

function sandwich(...orders:string[])
{
    console.log("your orders:");
    
    for(let i = 0; i < orders.length; i++){
        console.log(`-${orders[i]}`);
    }
}
sandwich('cheese sandwich','mayo sandwich','tomato sandwich','chicken sandwich')


// task 45
// Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name.
//   It should then accept an arbitrary number of keyword arguments. 
//   Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
//  Print the Object that’s returned to make sure all the information was stored correctly.
type car = {
    manufacturer:string,
    model:string
    [key : string] :any
}

function carinfo(manufacturer:string,model:string,optional:Record<string,any>):car
{
    return {
        manufacturer,
        model,
        ...optional
    }
}
let mycar = carinfo("toyota","corolla",{color:"silver",year:2022})
console.log(mycar);








