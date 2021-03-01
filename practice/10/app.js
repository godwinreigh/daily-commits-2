//NOTES
//you can use const in items because the original value of the array is the address of the array
//in arrays, you can't change the value itself that's why there are methods like push, remove, splice, etc
//the original value is the address of array, for exmaple dx01
//in arrays you can only reference something but not overwriting the value

//basic array shit
const items = [
    {fruit: "apples" , price: 20},
    {fruit: "orange" , price: 15},
    {fruit: "grapes" , price: 25},
    {type: "exotic" , fruit: "rambutan" , price: 30},
    {fruit: "strawberry", price: 5}
]

console.log(items); // the push method gets executed first before logging but for some reason the array won't count it

items.push({fruit: "banana" , price: 10}) // the banana is already committed to the array before even logging but not counted

console.log(items); // but the length is not simmilar because it got updated? 






// 8 must know array methods

//1. FILTER => allows you to filter items in original array within the certain parameters and move it to new Array
//note: it won't change anything to original array

const filterItems = items.filter((item) => {
    return item.price <= 20 //all of the items has a price less than 20 will be in the new array
})

console.log(filterItems);
//\\//\\//\\//end//\\//\\//\\//\\

//test stuff\\

let a = new Array (filterItems);
console.log(a);

//\\//\\//\\//end//\\//\\//\\//\\


//2. MAP => takes all the variable value within array the put it to different array (like filter but only takes value)

//exmaple we can get the array value name by it's variable name using map

const itemNames = items.map((item) => {
    return item.fruit; 
})

console.log(itemNames) //returns all of the value name of the array

//if the varible of an object was not found in array, it returns false

//\\//\\//\\//end//\\//\\//\\//\\







//3. FIND => returns the item if the following item value in array was found
let findWhat = "banana";

const findItem = items.find((item) =>{
    return item.fruit === findWhat
})

console.log(findItem)

//\\//\\//\\//end//\\//\\//\\//\\






//4. FOREACH => easiest way to loop an array

items.forEach((item) =>{
    console.log(item.fruit);
})

//\\//\\//\\//end//\\//\\//\\//\\






//5. SOME => it is like filter but only returns true or false

//logic: if the array of items contains the following (condition) if it has return true if not return false

const hasInexpensiveItem = items.some((item) =>{
    return item.price <= 10
})
console.log(hasInexpensiveItem); //returns true

//\\//\\//\\//end//\\//\\//\\//\\


//6. EVERY => it is like some's logic but the only difference is all of the value must be true to return true if one is not then it will return false
const allhasPrice = items.every((item) =>{
    return item.price > 1;
})
console.log(allhasPrice) // returns true

//\\//\\//\\//end//\\//\\//\\//\\








//7. REDUCE => do operation in array and returning a combination of all of those different operations
//to get the total price of the array
const totalPrice = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;

}, 0) //0 is the end value when the iteration ends

console.log(totalPrice);

//argument currentTotal = 0 = counts or iterates
//argument item = the processed item;

const allNames = items.reduce((currentNames, item)=>{
    return item.fruit + " " + currentNames.toString()
}, "end")

console.log(allNames);

//\\//\\//\\//end//\\//\\//\\//\\


//8. INCLUDES => easiest to find something in your array but it returns only true or false
//const includesBanana = items.includes("banana");


const allFruitsinArray = items.map((item) =>{
    return item.fruit;
})

const includesBanana = allFruitsinArray.includes("banana");
console.log(includesBanana)//returns true


const liContainer = document.querySelector(".liContainer")

liContainer.addEventListener('click', removeItem);


function removeItem(e)
{
    if (e.target.classList.contains('delBtn'))
    {
        let li = e.target.parentElement;
        liContainer.removeChild(li);
    }
}

liContainer.addEventListener("mousemove", funcHover)
function funcHover(e){
   
    liContainer.style.backgroundColor = `rgb(${e.clientX}, ${e.clientX}, ${e.clientY})`;
}
