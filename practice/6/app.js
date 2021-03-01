class Car {
    constructor(brand, color) {
      this.carname = brand;
      this.carcolor = color;
    }
    present() {
      return 'I have a ' + this.carname + ', it is color ' + this.carcolor;
    }
  }
  
  class Model extends Car {
    constructor(brand, color, mod) {
      super(brand, color);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar = new Model("Ford", "red" , "Mustang");
  document.getElementById("demo").innerHTML = myCar.show();
  


//simple item listener

const container = document.querySelector('.container');
const myBtn = document.querySelector('#addContent');

let items = document.querySelectorAll('.items');
let totalItems = items.length;

myBtn.addEventListener('click', addVal)

function addVal()
{
  
  let getInput = document.querySelector('#myInput');

  const newLi = document.createElement('li');
  const TextNode = document.createTextNode('Item ' + (totalItems + 1) + " " + getInput.value);
  totalItems++;

  getInput.value = "";
  newLi.append(TextNode);
  container.append(newLi);
}

function myItems(item, index){
  console.log(index + ":" + item);
}

items.forEach(myItems)

