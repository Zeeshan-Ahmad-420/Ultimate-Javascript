let name="Zeeshan"
console.log(name.length)
console.log(name[0])  // print Z
console.log(name[1])   // print e
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2,4))
console.log(name.slice(2))
console.log(name.replace("Zee","Wee"))

let frien="Numi"
console.log(name.concat(" is a friend of ", frien ," ok "))

let frien2= "        Nimmi          "
console.log(frien2.trim())  // remove extra space from string


let friend='jabeesh'
console.log(friend)
let myfriend=`Rohit`
console.log(myfriend)
// let myname="zee'  not allow like this both qoutes will be same

// template literals
let boy1="Sunny"
let boy2="Alladin"
let sentence=`${boy1} is a friend of ${boy2}`
console.log(sentence)


//escape sequence characters
let fruit='bana\'na'
console.log(fruit) 
fruit='bana\nna'
console.log(fruit)