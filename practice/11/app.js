const cart = document.querySelector('.cart');
const insBtn = document.querySelector('.insert');
const inputItem = document.querySelector('.inputItem');
const inputPrice = document.querySelector('.inputPrice');
const displayTotalPrice = document.querySelector('.totalPrice');

insBtn.addEventListener('click', add);
let connectDisplay = false;

const items = [
    {item: "Apple", price: 1},
    {item: "Chocolates", price: 5},
    {item: "Fish", price: 10}    
]

// TEST (if you want to test something do here) // 

//how to edit in multiple stuff
items[0].item = "Orange";
console.log(items[0].item)

//simple push
//items.push({item: "asdsd", price: 23});

//TEST END//








//display

function display()
{
    //converting it, so js textNode can read it if not it returns [object OBJECT]

    //getting all the value of array of item
    const itemNames =  items.map((item) => {
        return item.item
    })

    //getting all the value of array of price
    const itemPrice =  items.map((item) => {
        return item.price
    })


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
       
        //create text according to the array
        const text = `Item: ${i + 1} ${itemNames[i]} = Price: ${itemPrice[i]}`
        
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
        newEditbtn.addEventListener('click', edit)
        
        newLi.appendChild(newEditbtn);
    
        }
        connectDisplay = false;
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
            
            items.push({ item: `${itemName}`, price: parseInt(priceValue) });

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
    const Items = document.querySelectorAll('.delBtn');
    const editItems = document.querySelectorAll('.editBtn')
    for (i = 0; i < items.length; i++)
    {
        //for deleting stuff
        Items[i].value = i;

        //for editing stuff
        editItems[i].value = i;
    }

    //assign the value of index when the user click the del/edit button
    indexItems = parseInt(e.target.value);
    editbtnValue = parseInt(e.target.value);

    // console.log(`This is editBtn Value:` + editbtnValue)
    // console.log(`This is deleteBtn Value:` + indexItems)
})  

//del function and total calculation

cart.addEventListener('click', (e) =>{
    
    //if the target contains className "delBtn" do this
    if(e.target.classList.contains("delBtn"))
    {  
       
        //delete the array item itself
        
        let delUpdatedItemIndex = function()
        {
            items.splice(indexItems, 1)
            return items
        }   
        console.log(delUpdatedItemIndex());

        //delete the display
        let li = e.target.parentElement;
        cart.removeChild(li);
    }

    //then go to total function
    total()
})











function total()
{
    //get the total
    let totalPrice = items.reduce((currentTotal, item) => {
        return item.price + currentTotal;
    }, 0)

    //display the total
    displayTotalPrice.innerHTML = totalPrice;
}

//update one first to display current total
total()


//edit

let clicks = 0;

function edit(e)
{   
    const itemLi = document.querySelectorAll('.Items')
    //disable all buttons
    const editButtons = document.querySelectorAll(".editBtn");
    editButtons.forEach((item) =>{
        item.disabled = true;
    })

    //do when editing
    if (clicks != 1)
    {
        clicks++;
        e.target.innerHTML = "Done"

        //enable the target button
        e.target.disabled = false;

        const nameInput = document.createElement('input');
        const priceInput = document.createElement('input');

        nameInput.className = "nameInput";
        priceInput.className = "priceInput";

        nameInput.placeholder = "Edit Name";
        priceInput.placeholder = "Edit Price";

        const targetLi = itemLi[editbtnValue];

        targetLi.appendChild(nameInput);
        targetLi.appendChild(priceInput);
    }

    //do when done
    else 
    {
        //set text
        e.target.innerHTML = "Edit"

        //enable all buttons
        editButtons.forEach((item) =>{
            item.disabled = false;
        })


        //get the input dom
        const nameInput = document.querySelector('.nameInput');
        const priceInput = document.querySelector('.priceInput');

        
        //editing the Price\\

        let val = parseInt(priceInput.value);

        let checkNan = isNaN(parseInt(priceInput.value));
        
        //check if the priceInput data type is correct
        if(checkNan === true)
        {
            //if there's characters warn user, if there's nothing don't
            if(priceInput.value.length >= 1)
            {
                alert("Wrong Parameters");
                priceInput.value = null;
            }
        }

        //if correct then change the value of the array   
        else if (typeof val == "number")
        {   
            items[editbtnValue].price = val; 
        }
        else{
            alert('Wrong Value!')
        }

        //editing the name\\

        if(nameInput.value.length >= 1)
        {
            items[editbtnValue].item = nameInput.value;
        }

        //clear previous items
        clearPrevItem()
        connectDisplay = true;
        display();

        //remove the input node to the dom
        nameInput.remove();
        priceInput.remove();

        clicks = 0
        
    }
}







function clearPrevItem()
{
    //clear prevItem
    const prevItems = document.querySelectorAll(".Items");  
    prevItems.forEach((item) =>{
        cart.removeChild(item);
    })
}





//main display
connectDisplay = true;
display();
