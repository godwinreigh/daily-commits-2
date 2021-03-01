let secs = document.querySelector('#secs');
let ms = document.querySelector('#milsecs');
let mins = document.querySelector('#mins');

const btnStart = document.querySelector('.btnStart');
const btnStop = document.querySelector('.btnStop');
const btnReset = document.querySelector('.btnReset');

let timeMili = 0; 
let timeSecs = 0;
let timeMins = 0;

btnStart.addEventListener('click', start);
btnStop.addEventListener('click', stop);
btnReset.addEventListener('click', reset);

btnStop.disabled =  true;
btnReset.disabled = true;

let myInterval;

function start()
{
    myInterval = setInterval(count, 1)
    btnStart.disabled = true;
    setTimeout(enableStop, 500);
}

function stop()
{
    btnStop.disabled = true;
    clearInterval(myInterval);
    setTimeout(enableStart, 500);
}

function reset()
{
    btnStop.disabled = true;
    btnReset.disabled = true;
    btnStart.disabled = true;
    setTimeout(enableReset, 1000);
    setTimeout(enableStop, 1000);
    setTimeout(enableStart, 1000);
    clearInterval(myInterval);
    timeMili = 0 + "0";
    timeSecs = 0 + "0";
    timeMins = 0;
    ms.innerHTML = timeMili;
    secs.innerHTML = timeSecs;
    mins.innerHTML = timeMiins;
}

function enableStart()
{
    btnStart.disabled = false;
}
function enableStop()
{
    btnStop.disabled = false;
    btnStop.disabled =  false;
    btnReset.disabled = false;
}

function enableReset()
{
    btnReset.disabled = false;
    btnStop.disabled = false;
}

function count(){
    
    
    if (timeSecs >= 59)
    {
        timeMins++;
        timeSecs = 0;

        mins.innerHTML = "0" + timeMins + ':' + timeSecs;
        
        if(timeSecs >= 10 || timeMins >= 1)
        {
            secs.innerHTML = timeSecs + ':';
        }

        if(timeMins >= 10)
        {
            mins.innerHTML = timeMins + ':';
        }
    }

    if (timeMili > 99) {
        timeSecs+= 1;
        secs.innerHTML = "0" + timeSecs;
        timeMili = 0;

        if(timeSecs >= 10 || timeMins >= 1)
        {
            secs.innerHTML = timeSecs;
        }
    }

    timeMili++;
    ms.innerHTML = timeMili;
}