#### typeof
typeof is a JavaScript keyword that will return the type of a variable when you call it.

#### What is the typeof function?
The TypeOf function is an important tool when dealing with complex code. It allows a programmer to quickly check a variable's data type—or whether it's “undefined” or “null”—without going through the code line by line! Additionally, the TypeOf function can also check whether an operand is an object or not.

arrays and null both are type of objects.

type of data type tells about the...

```
const whatIsMyType = 111111111111111111111n
const typ = (typeof whatIsMyType)
console.log(typ)
```

#### Math Operators

```
const myAge = 24

const nextYearAge = myAge + 1

console.log(nextYearAge)
```

#### Increamenting and Decreamenting
these are type preincreament and postincreament
these specially use in loop 

```
let myAge = 22

myAge++ // myAge--
console.log(myAge)
```

#### functions in JS

```
function helloFunction() {
    console.log("hello javascript funnction");
}

helloFunction() // calling of function
```

how to pass parameters
in javascript we dont have to define type of parameters, just pass into the function.

```
function addToMyAge(increamentBy, multiplyBy) {
    console.log
    myAge = (myAge + increamentBy) * multiplyBy
}

addsToMyAge(5,2)

console.log(myAge)
```

#### return statement
```
return
```
#### if-else statement

#### logical operators
&& -> logical and, || -> logical or

#### Arrays

#### for loop

#### break, continue and return

#### equality checks with JS

```
console.log(1===1) // return true

or

const result = 1 // assigning 1 to result

and 

const result = 1 === 1 // checks equality 
```

#### Objects

```
const myObject = {
    'keyname' : 'value',
    'keyname1': '1211'
    'hello': {
        'name': 'lokesh',
        'sing': 'sing'
    }
}
```

#### call by refernce and call by value

#### Scoping

scope is bound between open and close braces.

```
functio x() {
    const hello = 'world'
}
```
#### Variable Shadowing


#### Document object model

1. document.querySelectror
2. document.querySelectorAll 
    (nodeList)
    nodeList is same as arrayList there for we can iterate 
    over it using for loop.
    ```
    const heading = document.querySelector('h1');;

    heading.innerText = 'Hello lokesh';

    const allListItems = document.querySelectorAll('ul li')

    for( let i = 0; i < allListItems.length; i++){
        const listItem = allListItems[i];
        listItem.innerText = 'Hello lokesh';
    }
    console.log(heading);
    console.log(allListItems);
    ```
3. introduction to event listener
    ```
    its listen or click which we makes through the buttons

4. create elements dynamically javascrpt
5. change html attribute with javascript
6. change css styles with javascript

```
const heading = document.querySelector('h1');;

heading.innerText = 'Hello lokesh';
consolr.log(heading);
```


## mordern javascript ES6

1. destructuring
2. Arrow function
3. New array method
4. Template literals
5. Promises and fetch

#### 1. Destructuring 

```
const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = [...arr1, ...arr2]

console.log(arr3)
```
#### 2. Arrow Function 

hoist
```
const arrowFunction = () => 200
```

