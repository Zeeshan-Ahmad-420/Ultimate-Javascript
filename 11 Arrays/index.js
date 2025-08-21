// Array
let a=[1,2,3,4,5,6,null]  // hold differnet type of value
console.log(a)
console.log(a[3])

// methods OF Array
let num=[1,2,3,4,5,6]
let num1=[1,32,34,24,54,46]
console.log(num) // length of array
let b=num.toString()
console.log(b)
let c=num.join(" - ")
console.log(c)
let r=num.pop() // remove last element
console.log(num ,r)

let newArray=num.concat(num1)
console.log(newArray) // concat two array

//sort method
let number=[1,32,34,24,54,46]
number.sort()
console.log(number)

// compare with sort
let compare=(a ,b)=>{
    return b - a
}
number.sort(compare)
// num.reverse()
console.log(number)

// splice and slice
let n=[3,8,4,5,6]
n.splice(2,3,11,12,13,14)
console.log(n)
