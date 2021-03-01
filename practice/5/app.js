//get the container or you can create the container using another create element
const container = document.querySelector(".myContainer");

//create h1 element
let newElement = document.createElement('h1');

//create TextNode
let newText = document.createTextNode("Hello World")

//append the new text to newElement
newElement.append(newText);

//append the element to container
container.append(newElement);















//button increments a number

var clicks = 0;
var disValue = document.getElementById('display').getAttribute("value");
let num = 1;

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

btn1.addEventListener('click', increase)
btn2.addEventListener('click', decrease)

 function increase()

{
    //set num = 1 if it is not 0
    num = 1;

    //set clicks + value of num
    clicks += num;

    //set innerHTML = value of clicks
    document.getElementById('display').innerHTML = clicks;

    //set the disValue = clicks
    disValue = clicks;

    console.log(disValue)
    
    return disValue;
}

//increase() === 1 ? console.log('hello') : console.log('we');

 function decrease()
{
    //condition , so it won't go to negative 1
    disValue <= 0 ? num = 0 : num = 1;

    //decrement
    clicks-= num;

    //set innerHTML = value of clicks
    document.getElementById('display').innerHTML = clicks;

    //get tag value and set the tag value to clicks variable
    disValue = clicks;

    console.log(disValue)

    return disValue;
}






//div creator

const body = document.getElementsByTagName('body');

function Div(_color, _className, _content)
{
    this.color = _color,
    this.className = _className,
    this.content = _content,
    //create
    this.create = function ()
    {
        //create div
        let myDiv = document.createElement('div');

        //style
        myDiv.style.backgroundColor = _color;

        //class name
        let classDiv = myDiv.className = _className;
        
        //text node
        let textNode = document.createTextNode(_content);
        
        //append 
        myDiv.appendChild(textNode);

        container.append(myDiv);
        
    }
}
//create
let div1 = new Div("blue" , "myClass1", "content1").create();
let div2 = new Div("orange", "myClass2", "content2").create();
console.log(new Div());

let display2 = document.getElementById('display2');












//basic script for counter

let minsLimit = 0; //set mins
let secs = 20; //set secs
let hourLimit = 1;

let trueLimit = (minsLimit * 60) + (hourLimit * 3600) + secs; //add all

//let trueMins = trueLimit / 60;

let limitRef = 0;
let hourRef = 0;

let count = 0;
let mins = 0;
let hour = 0;


const secsToMinute = 60;
const secsToHour = 3600;

let adder = true;
let timeOut;

const getStart = document.getElementById('start');
const getPause = document.getElementById('pause');

getPause.disabled = true; //disable pauseBtn first enable when start

getStart.addEventListener('click', funcStart);
getPause.addEventListener('click', funcPause);



function counter()
{   
    //recursion type
    if (limitRef >= trueLimit)
    {
        setTimeout(enableStart, 1000);
        getPause.disabled = true;

        if(limitRef >= secsToHour)
        {
            display2.innerHTML = "I reached the Limit! in " + hour + " hour" + ", " + mins + " minutes " + "and " + count + " secs";

        }else if (limitRef >= secsToMinute){
            display2.innerHTML = "I reached the Limit! in " + mins + " minutes " + "and " + count + " secs";
        } 

        else{
            display2.innerHTML = "I reached the Limit! in " + count + " seconds";
        }

        //reset
        limitRef = 0;

        count = 0;
        mins = 0;
        hour = 0;

        adder = false;
        return; //use return to get out of the function
    }

    else if (adder === true)
    {
        timeOut = setTimeout(counter, 1000);//don't call the function, just reference 

        //limiters
        count += 1 ;
        limitRef += 1 ;
        hourRef += 1 ;

        console.log(limitRef);
        //display
        display2.innerHTML = hour + " hour" + ":" + mins  + "min" + ":" + count + " second";


        //seperate for secs (if secs is greater than 1 set sec to secs)
        if (count > 1)
        {
            display2.innerHTML =  hour + " hour" + ":" + mins + " min" + ":" + count  + " seconds";
        }
         //seperate for mins (if mins is greater than 1 set min to mins)

        if (hour > 1)
        {
            display2.innerHTML =  hour + " hours" + ":" + mins + " mins" + ":" + count + " second";
        }
 
        if (mins > 1)
        {
            display2.innerHTML =  hour  + " hour" + ":" + mins + " mins" + ":" + count + " second";
        }
        
        //add mins if the count went to 60 then set count to 0
        if (hourRef >= secsToHour)
        {
            mins = 0;
            count = 0;
            hourRef = 0;
            hour++;
            display2.innerHTML =  hour + " hour" + ":" + mins + " min" + ":" + count + " second";
        }

        else if (count >= secsToMinute)
        {
            count = 0;
            mins++;
            display2.innerHTML =  hour + " hour" + ":" + mins + " min" + ":" + count + " second";
        }
        //add hour if the mins went to 60 then set count to 0



       
    }
}

function enableStart()
{
    getStart.innerHTML = "Start";
    getPause.innerHTML = "Pause";
    getStart.disabled = false;
}

function enablePause()
{
    getPause.disabled = false;
    getStart.innerHTML = "Start";
    getPause.innerHTML = "Pause";
}


function funcStart()
{
    getStart.disabled = true;
    getStart.innerHTML = "Please wait too fast";
    getPause.innerHTML = "Please wait too fast";
    setTimeout(enablePause, 1000)
    adder = true;
    counter();
};


function funcPause()
{
    clearTimeout(timeOut);
    getPause.disabled = true;
    getStart.innerHTML = "Please wait too fast";
    getPause.innerHTML = "Please wait too fast";
    setTimeout(enableStart, 1000);
    adder = false;
};







// handling time

const myDate = document.querySelector('.myDate');
function dateLog()
{
    let d = new Date();
    myDate.innerHTML = d.toUTCString();
    setTimeout(dateLog, 1000);
}

dateLog();


