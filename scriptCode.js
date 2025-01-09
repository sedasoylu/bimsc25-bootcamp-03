console.log('Hello, World!');

const myConstVar = 5;

let foo = 5;
console.log(foo);

foo = "anything";
console.log(foo);

let foodArray = ['pizza', 'pasta', 'salad'];
console.log(foodArray);

let foodItem = foodArray[1];
console.log("foodItem:" , foodItem);

let objectVariable = {
    key: 'value',
    foods: 'foodArray',
};
console.log(objectVariable);

let foods = objectVariable['foods'];
console.log("foods:" , foods);

function AddTwoNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let mySum = AddTwoNumbers(5, -15);
console.log("mySum:" , mySum);


console.log("document:", document);


// CLICK BREAKFAST
let breakfastElement = document.getElementById('breakfast');
console.log("breakfastElement:", breakfastElement);


function breakfastClicked() {
    console.log('breakfast elements was clicked');
    let breakfastFoodsDiv = document.getElementById('breakfastFoods');
    breakfastFoodsDiv.style.display = 'flex';
    let lunchFoodsDiv = document.getElementById('lunchFoods');
    lunchFoodsDiv.style.display = 'none';

}

breakfastElement.addEventListener('click', breakfastClicked);



// CLICK LUNCH
let lunchElement = document.getElementById('lunch');
console.log("lunchElement:", lunchElement);


function lunchClicked() {
    console.log('lunch elements was clicked');
    let breakfastFoodsDiv = document.getElementById('breakfastFoods');
    breakfastFoodsDiv.style.display = 'none';
    let lunchFoodsDiv = document.getElementById('lunchFoods');
    lunchFoodsDiv.style.display = 'flex';

}

lunchElement.addEventListener('click', lunchClicked);