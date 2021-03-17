const cart = document.querySelector('.cart');
const insBtn = document.querySelector('.insert');
const inputItem = document.querySelector('.inputItem');
const inputPrice = document.querySelector('.inputPrice');
const displayTotalPrice = document.querySelector('.totalPrice');

insBtn.addEventListener('click', add);
let connectDisplay = false;

//localStorage.clear()

const items = []
const localStorageLength = localStorage.length;

for(i = 0; localStorageLength > i; i++)
{
    const getItemPrice = localStorage.getItem("Price: " + i)
    const getItemName = localStorage.getItem("Name: " + i)

    items.push({NameOfItem: getItemName, PriceOfItem: parseInt(getItemPrice) })
}
for(i = 0; items.length - 1 > i; i++)
{
    items.pop()
}

console.log(items)
// for (i = 0; items.length - 2 > i; i++)
// {
//     items.splice(i, 1) 
// }
// TEST (if you want to test something do here) // 

//how to edit in multiple stuff
// items[0].item = "Orange";
// console.log(items[0].item)

//simple push
//items.push({item: "asdsd", price: 23});

//TEST END//


function clearPrevItem()
{
    //clear prevItem
    const prevItems = document.querySelectorAll(".Items");  
    prevItems.forEach((item) =>{
        cart.removeChild(item);
    })
}

//display

function display()
{
    //converting it, so js textNode can read it if not it returns [object OBJECT]

    // //getting all the value of array of item
    // const itemNames =  items.map((item) => {
    //     return item.NameOfItem
    // })

    // //getting all the value of array of price
    // const itemPrice =  items.map((item) => {
    //     return item.PriceOfItem
    // })

    if (connectDisplay == true)
    {
        for (let i = 0; i < items.length; i++)
        {

        //create new li and btn
        const newLi = document.createElement("li");
        const newBtn = document.createElement("button");
        
        //assign the className of btn and li and text
        newBtn.className = "delBtn"; 
        newBtn.innerHTML = "Delete";

        newLi.className = "Items";
        
        //create text according to the array, get the item from local storage
        const text = `Item: ${i + 1} ${localStorage.getItem("Name: " + i)} = Price: ${localStorage.getItem("Price: " + i)}`
        
        //assign the textNode
        const liText = document.createTextNode(text)
        
        //append stuff (update)
        newLi.append(liText); 
        cart.append(newLi);
        newLi.appendChild(newBtn);
        

        //for editing stuff
        const newEditbtn = document.createElement("button");
        newEditbtn.className = "editBtn";
        newEditbtn.innerHTML = "Edit";
        newEditbtn.addEventListener('click', editItem)
        
        newLi.appendChild(newEditbtn);
    
        }
        connectDisplay = false;
    }
}
document.querySelector('.delAll').addEventListener('click', delAll)

function delAll()
{
    if (confirm("Are you Sure?"))
    {
        localStorage.clear();
        location.reload();
    } 
}

function add()
{
    //clear prevItem
    clearPrevItem();

    //get the value
    let priceValue = parseInt(inputPrice.value, 10);
    let itemName = inputItem.value;

    //check the input if it has no items then do this
    if (priceValue === "" || itemName === "")
    {
        alert("NO ITEMS")
    }

    //check the data type (the user might enter a string)
    else if (typeof priceValue == "number" && typeof itemName == "string")
    {
        //use != when comparing NaN to another value of NaN to return it true if u use === in this like situation it returns false
        let notAnum = isNaN(priceValue);
        if(notAnum === true)
        {
            alert("Wrong Value");
        }
        else{
            
            let itemsJSON = {
                NameOfItem: itemName,
                PriceOfItem: priceValue
            }
            
            items.push(itemsJSON);
            console.log(items)

            //saving to localStorage

            localStorage.setItem(`Price: ${items.length - 1}`, JSON.stringify(items[items.length - 1].PriceOfItem) )
            localStorage.setItem(`Name: ${items.length - 1}`, items[items.length - 1].NameOfItem) 

           
            //clear input fields
            inputItem.value = null;
            inputPrice.value = null;

            //update total
            total()
        }
    }

    //catch (debugger)
    else
    {
        alert("Wrong Parameters")
    }

   //display the result
    connectDisplay = true;
    display()
}


//index updater (update the index when the user hovers to the list)

//assign indexItems and editbtnValue to be global variable
let indexItems;
let editbtnValue;

cart.addEventListener('mouseover', (e) =>{

    //get the delBtn 
    const Items = document.querySelectorAll('.delBtn');
    const EditBtns = document.querySelectorAll('.editBtn');

    for (i = 0; i < items.length; i++)
    {
        //for deleting stuff
        Items[i].value = i;

        EditBtns[i].value = i
    }

    //assign the value of index when the user click the del/edit button
    indexItems = parseInt(e.target.value);
})  

//deleting stuff (active always)
cart.addEventListener('click', (e) =>{
    
    //if the target contains className "delBtn" do this
    if(e.target.classList.contains("delBtn"))
    {  
        //delete the array item itself
        items.splice(indexItems, 1)
        
        //delete the display
        let li = e.target.parentElement;
        cart.removeChild(li);

        //delete the localStorage item itself
        localStorage.removeItem("Price: " + indexItems)
        localStorage.removeItem("Name: " +  indexItems)

        //update the localStorage
        localStorage.clear()

        for(j = 0; items.length > j; j++)
        {
         localStorage.setItem("Price: " + j, items[j].PriceOfItem)
         localStorage.setItem("Name: " + j, items[j].NameOfItem)
        }

        //update the display
        clearPrevItem()

        connectDisplay = true;
        display()

        //then go to total function
        total()
    }
})


function total()
{
    //get the total
    let totalPrice = items.reduce((currentTotal, item) => {
        return item.PriceOfItem + currentTotal;
    }, 0)
    
    //display the total
    displayTotalPrice.innerHTML = totalPrice;
}

//update one first to display current total
total()


//edit

let clicks = 0;

function editItem(e)
{   
    const itemLi = document.querySelectorAll('.Items');
    
    //disable all buttons (to not cause a bug)
    const editBtn = document.querySelectorAll(".editBtn");
    const delBtn = document.querySelectorAll(".delBtn");

    editBtn.forEach((itemEditBtn) =>{
        itemEditBtn.disabled = true;
    })

    delBtn.forEach((itemDelBtn)=>{
        itemDelBtn.disabled = true;
    })
  
    //do when editing
    if (clicks != 1)
    {
        clicks++;
        e.target.innerHTML = "Done";

        //enable the target button
        e.target.disabled = false;

        const newnameInput = document.createElement('input');
        const newpriceInput = document.createElement('input');

        newnameInput.className = "nameInput";
        newpriceInput.className = "priceInput";

        newnameInput.placeholder = "Edit Name";
        newpriceInput.placeholder = "Edit Price";

        const targetLi = itemLi[indexItems];
        
        targetLi.appendChild(newnameInput);
        targetLi.appendChild(newpriceInput);
    
      
    }

    //do when done
    else 
    {
        //set text
        e.target.innerHTML = "Edit"

        //enable all buttons
        editBtn.forEach((item) =>{
            item.disabled = false;
        })

        //get the input dom
        const nameInput = document.querySelector('.nameInput');
        const priceInput = document.querySelector('.priceInput');

        
        //editing the Price\\

        //check if the priceInput data type is correct
        
        let val = parseInt(priceInput.value);
        
        let checkNan = isNaN(parseInt(priceInput.value));
        
        //if wrong do this
        if(checkNan === true)
        {
            //if there's stringcharacters warn user, if there's nothing don't
            if(priceInput.value.length >= 1)
            {
                //warn user
                alert("Wrong Parameters");

                //clear fields
                priceInput.value = null;
            }
        }

        //if correct then change the value of the array   
        else if (typeof val == "number")
        {   
            //edit the array
            items[indexItems].PriceOfItem = val;

            //save to local storage
            localStorage.setItem("Price: " + indexItems, val) 
        }

        else{
            //warn user
            alert('Wrong Value!')
        }

        //editing the name\\

        if(nameInput.value.length >= 1)
        {
            //edit the array
            items[indexItems].NameOfItem = nameInput.value;

            //save to local storage
            localStorage.setItem("Name: " + indexItems , nameInput.value)
        }

        //clear previous items
        clearPrevItem()

        //calculate total
        total()

        //update the display
        connectDisplay = true;
        display();

        //reset num of clicks
        clicks = 0
    }
}


//main display
 connectDisplay = true;
 display();
