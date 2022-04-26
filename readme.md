### javascript variables

const, let, var
Until 2015, var was the only way we could declare a variable in JavaScript.
Today, a modern codebase will most likely just use const and let .

#### types of variables in javascript

In javascript there in no type of a variable, they are untype.
means we can assign int, char and string data types variable and JS identify itself.

in javascript we have main two kind types: primitive types and objects types.

- primitive types
    - numbers
    - strings
    - booleans
    - symbols
    and two special types are: null and undefined.

- object types
    object types have properties and also have methods that can act on those properties.

### JavaScript expressions

in JS we have equality and inequality but it is some difference as we have in c/cpp.

for assignment: ===
and for not equal: !==

we also have == and != but === and !== prevents from subtle problems.

### JavaScript conditionals
JS has same syntax as C/C++ language.

### JavaScript String
String is a sequence of characters.

string can be defined as string literals using quotes and double quotes:
    'A class'
    "Another String"

const name = 'Lokesh'

name.length //6
console.log(''.length); // 0

Two strings can be joined using "+" operator.

"A" + "String" 
console.log() // A String

'my name is ' + name //my name is Lokesh

A string can also define using template literals, define inside backticks. They are especially useful to make multiline strings much simpler

const string = `this is string 

defined using template literals`

Template literals are also great because they provide an easy way to
interpolate variables and expressions into strings.
```
const var = 'Lokesh'
const string = `${var} + Singh`

console.log(string);
```

We can define any expressions inside template literals.
example 
```
const string = `something ${1 + 2 + 3}`
const string2 = `something
${foo() ? 'x' : 'y'}`

```

### JavaScript Arrays
An array is a collection of similer data types elements.
Array in javascript are not a type on their on.
Arrays are objects.
we can initialize empty array in two ways:
```
const a = [] // literal synstax
const a = Array() // built in function
```

we can prefill the array using this syntax:
```
const a = [1,2,3]
const a = Array.of(1,2,3)
```

An array hold any value, even value of different type.
example:
```
const a = [1, 'leetcode', ['a', 'b']]
```
Since we can add array inside array, we can create multidimensional arrays(eg. matrix).
```
const mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
mat[2][0] // 7
```

We can initialize a new array with a set of values using this syntax, which first initializes an array of 12 elements, and fills each element with the 0 number:
```
Array(12).fill(0)

how to find length of the array

const a = [1,2,3]
a.length //3
```

Note that you can set the length of the array. If you assign a bigger number than the arrays current capacity, nothing happens. If you assign a smaller number, the array is cut at that position:
```
const a = [1, 2, 3]
a //[ 1, 2, 3 ]
a.length = 2
a //[ 1, 2 ]
```