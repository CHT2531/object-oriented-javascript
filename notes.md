
# Object Oriented Programming
An object is simply a collection of variables and functions that we group together (previously we have only worked with objects that store data). Objects allow us to deal with complexity in programs. They provide a way of organising and structuring code. 

## Simple objects
The simplest way to create objects is by using an object literal.  Here's an example: 

```javascript
const anEmployee={
    name: "Jane",
    wage: 8.50
}
```
We call the variables that are part of the object (in this example ```name``` and ```wage```) *properties*. To work with an object we use dot-notation syntax, *objectName.property*. Here are some examples:

```javascript
console.log(anEmployee.name); //Jane
console.log(`${anEmployee.name} has a wage of £${anEmployee.wage} an hour`); //Jane has a wage of £8.50 an hour. 
```

## Objects can have a nested structure
Object properties can any type of data including arrays or even other objects. In the following example the ```workingDays``` property is an array.

```javascript
const anEmployee={
    name: "Jane",
    wage: 8.50,
    workingDays: ["Monday", "Tuesday", "Wednesday"]
}


console.log(anEmployee.workingDays[1]); // Tuesday

// outputs Monday Tuesday Wednesday
anEmployee.workingDays.forEach(function(workingDay){
    console.log(workingDay) 
})
```

In this example the property ```contactDetails``` is itself an object

```javascript
const anEmployee={
    name: "Jane",
    wage: 8.50,
    contactDetails: {
        tel: "34651",
        email: "jane@xyz.co.uk"
    }
}
```
To access the ```tel``` property we chain together properties using the dot notation.

```javascript
console.log(anEmployee.contactDetails.tel); //34651
```
## Object methods
Methods are functions that belong to an object. In the following example ```calcWeeklyWage()``` is a method.

```javascript
const anEmployee={
    name: "Jane",
    wage: 8.50,
    calcWeeklyWage: function(hours){
        return hours * this.wage
    },
}
```
Note the use of the keyword ```this``` in the ```calcWeeklyWage()``` method. It simply means the current object. To work with an object's method we use dot-notation syntax, *objectName.method()*. Here's an example:

```javascript
console.log(anEmployee.calcWeeklyWage(40)); //340
console.log(`${anEmployee.name} earnt £${anEmployee.calcWeeklyWage(2)}`); //Jane earnt £17
```

## Creating lots of instances
If we only want to create a single instance of an object, the above is all we need to know. The complexity in OOP comes when we want to create lots of different instances of an object. If we take the approach shown above, creating lots of similar objects involves lots of duplicate code. Have a look at the following where there are two employee objects. 

```javascript
const anEmployee={
    name: "Jane",
    wage: 8.50,
    calcWeeklyWage: function(hours){
        return hours * this.wage
    }
}
const anotherEmployee={
    name: "Pete",
    wage: 7.50,
    calcWeeklyWage: function(hours){
        return hours * this.wage
    }
}

console.log(anEmployee.calcWeeklyWage(40)) //340
console.log(anotherEmployee.calcWeeklyWage(45)) //337.5
```
What if we had 100s of employee objects that we needed to create? Clearly, the above approach isn't very DRY. There are many different approaches to this problem of efficiently creating many objects of the same type. There are a number of different approaches to OOP in JavaScript. The main ones are:
    * Using the prototype chain.
    * Using constructor functions.
    * ES2015 Classes.

The following looks at using ES2015 classes.

### ES2015 Classes
More recent versions of JavaScript provide a ```class``` syntax. This is to make OOP in JavaScript look a bit more like other OOP languages. 

```javascript
class Employee{
    constructor(name, wage){
        this.name = name;
        this.wage = wage;
    }
    talk(){
        return `Hi, my name is ${this.name}.`;
    }
    calcWeeklyWage(hours){
        return hours * this.wage
    }
}
const employee1 = new Employee("Pete",7.50);
const employee2 = new Employee("Ghulam",11.25);
const employee3 = new Employee("Anna",10.20);

console.log(employee1.talk()); //Hi, my name is Pete
console.log(`${employee2.name} has earnt £${employee2.calcWeeklyWage(40)}.`); //Ghulam has earnt £450.
console.log(`${employee3.name} has a wage of £${employee2.wage} an hour.`); //Anna has a wage of £11.25 an hour.
```

This does have the advantage of making our code cleaner and neater. 

## Inheritance
If you are familiar with the idea of OOP, you will know about inheritance. The idea that we can create new classes using an existing parent class as a starting point. We can do the same thing using ES2015 classes. 

```javascript
class Employee{
    constructor(name, wage){
        this.name = name;
        this.wage = wage;
    }
    talk(){
        return `Hi, my name is ${this.name}.`;
    }
    calcWeeklyWage(hours){
        return hours * this.wage
    }
}
class Manager extends Employee{
    constructor(name, wage, dept){
        super(name, wage); //this calls the Employee constructor function
        this.dept = dept;
    }
    attendMeeting (){
        return `${this.name} is in a meeting`;
    }
}
const employee1 = new Employee("Pete", 7.50);
const employee2 = new Employee("Ghulam", 11.25);
const manager1 = new Manager("Karla", 35.80, "HR");

console.log(employee1.talk()); //Hi, my name is Pete
console.log(`${employee2.name} has earnt £${employee2.calcWeeklyWage(40)}.`); //Ghulam has earnt £450.
console.log(`${manager1.name} has earnt £${manager1.calcWeeklyWage(40)}.`); //Karla has earnt £450.
console.log(`${manager1.name} runs ${manager1.dept}.`); //Karla runs HR.
console.log(manager1.attendMeeting()); //Karla is in a meeting.
```

## Using OOP
Nearly all tutorials on OOP use toy examples based on real world concepts (films, employees etc.), just like I have above. This can make OOP concepts easier to understand, and they keep things simple. However, it can be difficult to see how or when we would use OOP in our own applications. 

The following is an example of how OOP could be used in an actual JavaScript application.

```html
<form>
        <div>
            <label for="txtBox">Enter some text:</label>
            <input type="text" id="txtBox">
            <span id="txtBoxErr"></span>
        </div>
        <div>
            <label for="chkBox">You must check this box:</label>
            <input type="checkbox" id="chkBox">
            <span id="chkBoxErr"></span>
        </div>
        <input type="button" id="submitBtn" value="Validate the Form">
    </form>
```

Above is a simple HTML form. We might want to test if the user has completed all the fields using JavaScript. Taking an OO approach we can create a ```FormCtrlValidator``` object that can be used to test if the user has entered something into the text box, and display a message if they haven't. 

```javascript
class FormCtrlValidator{
    constructor(formId, errMsgId, errorMsg){
        this.formControl = document.querySelector("#"+formId); //the form control to validate
        this.errMsgEl = document.querySelector("#"+errMsgId); //the HTML element that will display the error message
        this.errorMsg = errorMsg; //the actual error message
    }
    validate(){
        if(this.formControl.value === ""){
            this.errMsgEl.textContent = this.errorMsg;
        }else{
            this.errMsgEl.textContent = "";
        }
    }
}
const txtBoxValidator = new FormCtrlValidator("txtBox","txtBoxErr","This text box can't be empty");
```
When the user submits the form, we can call the ```validate()``` method.

```javascript
txtBoxValidator.validate();
```

The complexity for validating the form control has been abstracted into an object. We could build on this by using inheritance to validate other types of form control.

```javascript
class ChkBoxValidator extends FormCtrlValidator{
    constructor(formId, errMsgId, errorMsg){
        super(formId, errMsgId, errorMsg); // call the constructor on the parent class
    }
    validate(){
        if(!this.formControl.checked){
            this.errMsgEl.textContent = this.errorMsg;
            this.isValid = false;
        }else{
            this.errMsgEl.textContent = "";
            this.isValid = true;
        }
    }
}
```
We could then create multiple validation objects, and store them in an array.

```javascript
const validators = [];
validators.push(new FormCtrlValidator("txtBox","txtBoxErr","This text box can't be empty"));
validators.push(new ChkBoxValidator("chkBox","chkBoxErr","You must tick this box"));
```

Then, when validating the form, we can use a loop to validate the form controls.

```javascript
validators.forEach(function(validator){
   validator.validate();
})
```

Again, all the complexity has been moved into the validator objects.


## Reading/references
* [https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects] (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects) 
* [https://www.freecodecamp.org/news/a-beginners-guide-to-javascripts-prototype/](https://www.freecodecamp.org/news/a-beginners-guide-to-javascripts-prototype/)
* [http://eloquentjavascript.net/06_object.html](https://eloquentjavascript.net/06_object.html)
* [http://addyosmani.com/resources/essentialjsdesignpatterns/book](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)



<!-- three approaches, using the prototype chain, using constructor functions and using ES2015 Classes.  

> One of the really confusing things about learning JavaScript is that there are different ways, each with their own syntax, of achieving the same goal. It's useful to at least be aware of these different approaches so that you can make sense of JavaScript articles, tutorials, Stack Overflow posts etc.

## JavaScript is a prototype based language
Most object oriented programming languages e.g. Java, PHP use class based inheritence i.e. we define a class, and then use this class as a template to create objects. All instances of a class have fixed properties and methods. In JavaScript we make objects by taking an existing object and then 'bolting on' additional properties and methods. The object that we add to is known as the *prototype*. Have a look at the following example:

```javascript
//this is the prototype
const employeePrototype = {
    talk: function(){
        return `Hi, my name is ${this.name}`;
    },
    calcWeeklyWage: function(hours){
        return hours  *this.wage
    }
}
//specify the prototype for anEmployee
const anEmployee = Object.create(employeePrototype);
anEmployee.name = "Pete";
anEmployee.wage = 7.50;
console.log(anEmployee.talk()); //Hi, my name is Pete
console.log(`${anEmployee.name} earnt £${anEmployee.calcWeeklyWage(40)}`); //Pete earnt £300;
```

```Object.create()``` is an instruction to create a new object using existing object (in this case ```employeePrototype```). If we try and access a property or method of ```anEmployee```, and that method or property can't be found (e.g. ```talk()```), then JavaScript will ask the prototype for the method or property instead. We can create many different objects that all share and can use methods from the prototype. 

```javascript
//this is the prototype
const employeePrototype = {
    talk: function(){
        return `Hi, my name is ${this.name}`;
    },
    calcWeeklyWage: function(hours){
        return hours  *this.wage
    }
}
//specify the prototype for anEmployee
const anEmployee = Object.create(employeePrototype);
anEmployee.name = "Pete";
anEmployee.wage = 7.50;
console.log(anEmployee.talk()); //Hi, my name is Pete
console.log(`${anEmployee.name} earnt £${anEmployee.calcWeeklyWage(40)}`); //Pete earnt £300;

const someEmployee = Object.create(employeePrototype);
someEmployee.name = "Zara";
someEmployee.wage = 9.50;
console.log(someEmployee.talk()); //Hi, my name is Zara
console.log(`${someEmployee.name} earnt £${someEmployee.calcWeeklyWage(40)}`); //Zara earnt £380;

```


To make this more efficient we can use a factory function. 

```javascript
const employeePrototype = {
    talk: function(){
        return `Hi, my name is ${this.name}`;
    },
    calcWeeklyWage: function(hours){
        return hours  *this.wage
    }
}
//This is a factory function
function employeeFactory(name, wage){
    const newEmployee = Object.create(employeePrototype);
    newEmployee.name = name;
    newEmployee.wage = wage;
    return newEmployee;
}

//with a single line of code we can create new objects
const employee1 = employeeFactory("Pete",7.50);
const employee2 = employeeFactory("Ghulam",11.25);
const employee3 = employeeFactory("Anna",10.20);

//testing the new objects
console.log(employee1.talk()); //Hi, my name is Pete
console.log(`${employee2.name} has earnt £${employee2.calcWeeklyWage(40)}.`); //Ghulam has earnt £450.
console.log(`${employee3.name} has a wage of £${employee2.wage} an hour.`); //Anna has a wage of £11.25 an hour.
```

### Constructor functions
JavaScript can make the creation of objects a little easier with the use of *constructor* functions. If we use the keyword ```new``` when we call a function, an object is created automatically. We can then assign properties to this object. By using the ```prototype``` keyword we can specify functions (methods) that all objects of the same type can share. 

```javascript
//constructor function, by convention we use a capital letter at the start of the function name
function Employee(name, wage){
        this.name = name;
        this.wage = wage;
}

//add functions to Employee's prototype
//all Employee objects will be able to use the talk and calcWeeklyWage functions
Employee.prototype.talk = function(){
        return `Hi, my name is ${this.name}.`;
}
Employee.prototype.calcWeeklyWage = function(hours){
        return hours * this.wage
}

// Notice the use of the 'new' keyword
const employee1 = new Employee("Pete",7.50);
const employee2 = new Employee("Ghulam",11.25);
const employee3 = new Employee("Anna",10.20);

console.log(employee1.talk()); //Hi, my name is Pete
console.log(`${employee2.name} has earnt £${employee2.calcWeeklyWage(40)}.`); //Ghulam has earnt £450.
console.log(`${employee3.name} has a wage of £${employee2.wage} an hour.`); //Anna has a wage of £11.25 an hour.
```
### An array of objects
We can still store objects in an array. This example uses the constructor function from above to create Employee objects that are then stored in an array. 

```javascript
const employees = []
employees.push(new Employee("Pete",7.50));
employees.push(new Employee("Ghulam",11.25));
employees.push(new Employee("Anna",10.20));

// Outputs
// Hi, my name is Pete.
// Hi, my name is Ghulam.
// Hi, my name is Anna.
employees.forEach(function(employee){
    console.log(employee.talk())
})
```

If you are familiar with the idea of OOP, you will know about inheritance. The idea that we can create new classes using an existing parent class as a starting point. We can do the same thing using prototypes. In the following example, we can view ```employee``` as being the parent and ```manager``` as being the child i.e. ```manager``` inherits from ```employee```.The way in which we do this is by chaining together different prototypes using ```Object.setPrototypeOf()```. So when we create the object ```manager1``` and call the method ```calcWeeklyWage()```, first we look on ```manager1``` for the method. It can't be found so we look on ```manager1```'s prototype (```managerPrototype```), again it can't be found, so we move up the prototype chain to ```managerPrototype```'s prototype, ```employeePrototype```, where the method is called. 

```javascript
// define prototypes
const employeePrototype = {
    talk: function(){
        return `Hi, my name is ${this.name}.`;
    },
    calcWeeklyWage: function(hours){
        return hours * this.wage
    }
}
const managerPrototype = {
    attendMeeting: function(){
        return `${this.name} is in a meeting`;
    }
}

//set the prototype of managerPrototype to be employeePrototype
Object.setPrototypeOf(managerPrototype, employeePrototype);

function employeeFactory(name, wage){
    const newEmployee = Object.create(employeePrototype);
    newEmployee.name = name;
    newEmployee.wage = wage;
    return newEmployee;
}

function managerFactory(name, wage, dept){
    //create a new employee object
    const newManager = employeeFactory(name, wage);
    //make the prototype of the new object the managerPrototype
    Object.setPrototypeOf(newManager, managerPrototype);
    newManager.dept = dept;
    return newManager;
}

//create some objects
const employee1 = employeeFactory("Pete",7.50);
const employee2 = employeeFactory("Ghulam",11.25);
const manager1 = managerFactory("Karla",35.80,"HR");

console.log(employee1.talk()); //Hi, my name is Pete
console.log(`${employee2.name} has earnt £${employee2.calcWeeklyWage(40)}.`); //Ghulam has earnt £450.
console.log(`${manager1.name} has earnt £${manager1.calcWeeklyWage(40)}.`); //Karla has earnt £450.
console.log(`${manager1.name} runs ${manager1.dept}.`); //Karla runs HR.
console.log(manager1.attendMeeting()); //Karla is in a meeting.
```

Again, the new class based syntax makes this a bit easier:
-->


