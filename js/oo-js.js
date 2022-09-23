
//Q1. Have a look at the following object literal. 

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

//Q2. Create an object literal to represent a cake. 
//The object should have properties for type (a string), layers (a number), and ingredients (an array of strings). 
// Assign the newly created object to a variable named myCake. 
// Uncomment the following code to tests this works.
// console.log(myCake.type) // e.g. Sponge
// console.log(myCake.layers) // e.g. 2 
// console.log(myCake.ingredients) // e.g. ["flour","sugar","butter","eggs"]

//Q2. Add a bake()  method to the object. bake() should return a string using the type value. 
// Again, here's some code to tests it works.
// console.log(myCake.bake()) // e.g. The sponge cake is baking.

//Q3. Create a factory function that will create instances of cake objects. 
//The factory function should be named cake, it should accept three arguments and return a cake object. 
// Again, uncomment the following to test your code
// const chocCake = cakeFactory("Chocolate", 3, ["flour", "sugar", "chocolate", "eggs"]);
// const fruitCake = cakeFactory("Fruit", 2, ["flour", "sugar", "sultanas", "eggs"]);
// console.log(chocCake.bake()); // The Chocolate cake is baking. 
// console.log(`The ${fruitCake.type} has ${fruitCake.layers} layers.`); // The Fruit cake has 2 layers.

//Q4. Comment out the previous code. 
// Re-write this program to use a constructor function. Here are the tests:
// const chocCake = new Cake("Chocolate", 3, ["flour", "sugar", "chocolate", "eggs"]);
// const fruitCake = new Cake("Fruit", 2, ["flour", "sugar", "sultanas", "eggs"]);
// console.log(fruitCake.bake()); // The Fruit cake is baking. 
// console.log(`The ${chocCake.type} has ${chocCake.layers} layers.`); // The Chocolate cake has 3 layers.

//Q5. Comment out the previous code.
// Re-write the program to use ES2015 classes
// You can use the same tests as in Q4

//Q6. Write a series of console.log() statements that will output a complete description of the cake i.e. the name, no. of layers and all the ingredients.
// Make sure that you use a forEach loop to display the list of ingredients. 

//Q7. Create at least three cake objects and store them in an array
//Q5. Modify your factory function so that it accepts an object literal to specify values for the object properties and return an object featuring the same properties and methods as above. Again, here's an example:
//var fruitCake=cake({type:"Fruit",layers:2,ingredients:["flour","sugar","sultanas","eggs"]})
//cakePrinter.printDetails(fruitCake);

//Q5. Modify the above so that default values are used for name, layers and ingredients if any of these properties aren't specified. again here's an example of the function being called. 
//var someCake=cake({layers:2,ingredients:["flour","sugar","cherries","eggs"]})
//cakePrinter.printDetails(someCake); //still print the full detail but uses default value for the type of cake

// Q6. Modify the  printDetails method of the cakePrinter() so that it also accepts a CSS selector for an HTML element. Instead of printing the details in the console.log it should output the details in the HTML page. 
//cakePrinter.printDetails(myCake,"#output");

//Q3. Make a new object and call it cakePrinter. cakePrinter should feature a single method printDetails(). The method should accept a single argument, a cake object. The printDetails() method should print out the details of the cake in the console.log e.g.
//cakePrinter.printDetails(myCake); //Type:Sponge Layers:2 Ingredients: flour sugar butter eggs


