let promises=new Promise((resolve,reject)=>{
        resolve(56)
})
console.log("promises")
setTimeout(() => {
    console.log("timeout")
}, 2000)
console.log("Zeeshan")
console.log(promises)