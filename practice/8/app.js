const imageSrc = document.querySelector('.myImage');
const getError = document.querySelector('.error');
const deleteBtn = document.querySelector('.delete');
const overlayCtnr = document.querySelector('.imgOverlay');

//console.log(imageSrc.getAttribute("src"));

let myImages = ["bgs/1.jpg", "bgs/2.jpg", "bgs/3.png", "asd", "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg" ];

//overlay
for (let i = 0; i <= myImages.length - 1; i++)
{
    console.log(myImages[i]);

    const newSpan = document.createElement('span');

    const overlayImg = document.createElement('img');

    overlayImg.src = myImages[i];

    overlayImg.className = "imgs"

    newSpan.append(overlayImg);

    overlayCtnr.append(newSpan);

    overlayImg.addEventListener('click', active);
   
    function active()
    {
        if(overlayImg.classList.contains('active'))
        {
            overlayImg.className = "imgs";
        }
        else{
            overlayImg.className = 'active';
        }
        //overlayImg.style.borderStyle = "solid"
    }
}




imageSrc.addEventListener('click', changeImg);
deleteBtn.addEventListener('click', funcDelete)

let imgIndex = 0;

function changeImg()
{
    getError.innerHTML = "";
    imgIndex++;
    if (imgIndex >= myImages.length)
    {
        imgIndex = 0;
    }
    //display
    imageSrc.src = myImages[imgIndex];
}

imageSrc.onerror = function()
{
    const imgIndex2 = myImages.indexOf(myImages[imgIndex]);
    myImages[imgIndex] = "https://i.stack.imgur.com/6M513.png";  
    
    imageSrc.src = myImages[imgIndex];
    myImages.splice(imgIndex2, 1);
}

function funcDelete()
{
    if (myImages.length <= 1)
    {
        deleteBtn.disabled = true;
    }
    else{
        deleteBtn.disabled = false;
    }

    delIndex()
    
    //delete myImages[imgIndex];
    
    //display
    imageSrc.src = myImages[imgIndex];
}

function delIndex()
 {
    const imgIndex2 = myImages.indexOf(myImages[imgIndex]);
    myImages.splice(imgIndex2, 1);
}

