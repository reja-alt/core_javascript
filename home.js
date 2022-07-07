console.log('Welcome Java Script');
// alert('refesh');

//Vaeiables
var b = 'Name is: ';
console.log(b);

var numbers = 56;
console.log(numbers);

//prompt
// var storeName = prompt('What is your name ?');
// var age = prompt('What is your age');

// console.log(storeName);
// console.log(age);

// document.getElementById('smart').innerHTML = b + storeName;

/*Functions
1.create the function
2.call the function
*/

function introduce() {
    console.log('Introduce');
}

introduce();


function countNumbers(text, a, b) {
   var res = a + b;
   console.log(text + res);
}

countNumbers("Sum of a and b is : ", 498, 67);

//Introducing

function introducing() {
    var name = prompt('What is your name ?');
    var result = 'Welcome' + ' ' + name;  //String Concatenation
    return result;
}

// console.log(introducing());

function addNumbers(a , b) {
    var result = a + b;
    return result;
}

console.log(addNumbers('join', 'string'));

//While loop
// var number = 0;

// while(number < 100) {
//     number ++;
//     console.log(number);
// }

//For loop
 
// for(i = 0; i < 200; i++) {
    // console.log(i);
// }

//Data types

let name = 'reja';  //string
let age = 28;  //integer
let data = { first: 'vegetable', last: 'beef' };  //Object
let demo = false;  //boolean
let array = ['apple', 'banana', 'orange' , 'mango'];   // array
let variable;   //undefined
let value = null;   //nulled value
console.log(data.last);

let food = 'borhani, kacchi, khichuri,biriani';
console.log(food.length);
console.log(food.indexOf('hani'));
console.log(food.slice(2, 4));
console.log(food.replace('or', 'ui'));
console.log(food.toUpperCase());
console.log(food.toLowerCase());
console.log(food.charAt(4));
console.log(food.split(','));  //split by comma
console.log(food.split(''));   //split by character
console.log(food[3]);


//Array

let fruits = ['banana', 'apple', 'orange', 'pine-apple'];
let fruits2 = new Array('jack-fruit', 'strawbery', 'water-melon');

console.log(fruits2);
console.log(fruits[3]);

// fruits[2] = fruits[3];
// console.log(fruits);


for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


//Array common method
let array1 = ['jack-fruit', 'strawbery', 'water-melon'];

console.log(fruits.toString());
console.log(fruits.join('-'));
console.log(fruits.pop(), fruits);
console.log(fruits.push(array1[2], array1[1], array1[0]), fruits);

console.log(fruits);
fruits.shift();  //Remove first element from an Array
console.log(fruits);
fruits.unshift('mango');  //add first element from an Array
console.log(fruits);

let vegetables = ['tomato', 'ladies-finger', 'potato', 'red-chilli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);

console.log(allGroceries.slice(2,6));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let allNumbers = [45,35,6,34,7,09,45,34,36,7,84,4,56,8];
console.log(allNumbers.sort());
console.log(allNumbers.sort(function(a,b) {return a - b} ));   //sortrd array by assending order
console.log(allNumbers.sort(function(a,b) {return b - a} ));   //sortrd array by desending order

let emptyArray = new Array();
for(let num = 0; num <= 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);

//Objects in java script

let student = {
    first:'reja', 
    last:'khan', 
    age:28, 
    height: 5.8,
    studentInfo: function(){
        return this.first + '\n' + this.last  + '\n' + this.age;
    }
};

console.log(student.first,student.last,student.age);
student.age= 27; //change value
student.last= 'rahman'; //change value
console.log(student.age);
console.log(student.last);
console.log(student.studentInfo());

//Conditionals control flows (if else)

// let ageCheck = prompt('What is your age ?');

// if((ageCheck <= 35 && ageCheck >= 18)) {
//     statusShow = 'target audience';
//     console.log(statusShow);
// } else {
//     statusShow = 'not in range';
//     console.log(statusShow);
// }


//switch

switch(2) {
    case 6:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    default:
        text = 'weekday'
}
console.log(text);
