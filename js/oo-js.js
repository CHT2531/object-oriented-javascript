//Q1. Have a look at the following object literal.
const flight = {
    flightNumber: 2131,
    date: "2023-04-10",
    airline: {
        code: "FR",
        name: "Ryanair"
    },
    departure: {
        code: "MAN",
        name: "Manchester"
    },
    arrival: {
        code: "ACE",
        name: "Lanzarote"
    }
}

// Using this object literal, write console.log statements that will
// a) Output the flightNumber.
// b) Output the date. 
// c) Output the name of the arrival airport.
// d) Output the sentence 'Flight 2131 to Lanzarote will be departing from Manchester on 2023-04-10'


//Q2. Have a look at the following arrays of objects. 
//These flight objects have exactly the same properties as in Q1, I've just removed the spacing and line breaks.

const flights = [
    {flightNumber: 2131, date:"2023-04-10", airline: {code: "FR", name: "Ryanair"}, departure:{code: "MAN", name: "Manchester"}, arrival:{code: "ACE",name: "Lanzarote"}},
    {flightNumber: 318,date: "2023-03-05",airline: {code: "AF",name: "Air France"},departure:{code: "MAN",name: "Manchester"},arrival:{code: "CDG",name: "Paris"}},
    {flightNumber: 217,date: "2023-02-12", airline: {code: "LS",name: "Jet2"},departure:{code: "LBA",name: "Leeds"},arrival:{code: "MAH",name: "Menorca"}}
]

//Using this array, write console.log statements that will
//a) Using a forEach loop output the flight numbers i.e.
// 2131
// 318
// 217
//b) Output the airline code, flight number, date and airline name for each flight i.e.
// FR 2131 2023-04-10 Ryanair
// AF 318 2023-03-05 Air France
// LS 217 2023-02-12 Jet2
//c) Can you filter out the flights that depart from Manchester. Use a forEach to display these filtered flights.

//Q3. Have a look at the following object literal. 

const filmObj = {
    title: "Jaws",
    year: 1975,
    duration: 128,
    genres:["drama","thriller"],
    cast: [
        {
            actor: "Roy Scheider",
            character: "Chief Martin Brody"
        },
        {
            actor: "Robert Shaw",
            character: "Quint"
        },
        {
            actor: "Lorraine Gary",
            character: "Ellen Brody"
        }
    ],
    getAge: function(){
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        return currentYear - this.year;
    }
}
/*
Using this object literal, write console.log statements that will
a) Output the title of the film.
b) Output the sentence 'The film Jaws was released in 1975'. 
c) Using a forEach loop, output the genres of the film.
d) Output the name of the actor that plays Ellen Brody.
e) Output the age of the film (you will  need to call the getAge() method).
f) Using a forEach loop output the entire cast.
*/

//Q4. Create an object literal to represent a cake. 
//The object should have properties for type (a string), layers (a number), and ingredients (an array of strings). 
// Assign the newly created object to a variable named myCake. 
// Uncomment the following code to tests this works.
// console.log(myCake.type) // e.g. Sponge
// console.log(myCake.layers) // e.g. 2 
// console.log(myCake.ingredients) // e.g. ["flour","sugar","butter","eggs"]

//Q5. Add a bake()  method to the object. bake() should return a string using the type value. 
// Again, here's some code to tests it works.
// console.log(myCake.bake()) // e.g. The sponge cake is baking.

//Q6. Create a ```class``` to create instances of cake objects. 
//The class function should be named Cake, the constructor function should accept three arguments. 
// Again, uncomment the following to test your code
// const chocCake = new Cake("Chocolate", 3, ["flour", "sugar", "chocolate", "eggs"]);
// const fruitCake = new Cake("Fruit", 2, ["flour", "sugar", "sultanas", "eggs"]);
// console.log(chocCake.bake()); // The Chocolate cake is baking. 
// console.log(`The ${fruitCake.type} has ${fruitCake.layers} layers.`); // The Fruit cake has 2 layers.




