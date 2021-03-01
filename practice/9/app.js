//Learning recursion

//recursion has two parts:
//Base Case (Stopping condition)
//Recursive call to the same function

function processDoll(doll)//take the thing you want to process
{
    // 1) Base case
    if (doll <= 0) {
        return "we've found the chocolate";
    }
    // 2) if fail, call the function again (recursive)
    return processDoll(doll - 1)
}
console.log(processDoll(5));


function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    console.log(n + " * " + (n - 1))

    return n * factorial(n - 1);

    //will write as a (5 * factorial (5 - 1))  
    //then (4 * factorial (4 - 1)) and so on until it became 1
}
console.log(factorial(5));

//this is really what happens

//this gets executes first

//factorial(5);
    //5 * factorial(4)
        //4 * factorial (3)
            //3 * factorial (2)
                //2* 1 factorial (1)

                    //then this happens

                    //when n became 1 , it will bubble up (executes factorial(2 - 1) then mulityplied to n)
                    //return 1;

                //2 * 1 = 2
            //3 * 2 = 6
        //4 * 6 = 24
    //5 * 24 = 120


function hello(name, repeats)
{
    if(repeats >= 3)
    {
        return `Hello ${name}: repeated: ${repeats}`
    }
    return hello(name, repeats + 1);
} 

const alwaysZero = 0;
console.log(hello("yohoo", alwaysZero)) //using recursion we can get the result only rather than a whole process do in other loops

function test(numbers, name)
{
    console.log(`${arguments[0]} ${arguments[1]}`);
}

test(23, "yow")

function pow(x,n)
{
    result = 1;
    for (let i = 0; i < n; i++)
    {
        result *= x;
    }
    return result;
}
console.log(pow(6,3))

function pow(x,n)
{
    if(n === 1)//limiter
    {
        return x;
    }
    return x * pow(x, n - 1);
}
console.log(`recursion: ${pow(6,3)}`);

function add(n,container)
{
    if (n === 1)
    {
        return container
    }
    return container + add(container, n - 1);
}

console.log(add(5, 1))


function loopArray(ArrayX , n)
{
    let result;
    for(let i = 0; i < n; i++)
    {
        result = ArrayX[i]
    }
    return result;
}
let myArray = [1,2,3,4,5];
console.log(loopArray(myArray, 5))

//accessing arrays with recursion

function loopArray2(ArrayX, n)
{
    if (n === 1)
    {
        return ArrayX[n];
    }
    return loopArray2(ArrayX, n - 1)
}
console.log(loopArray2(myArray, 1))

