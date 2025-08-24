let p1=new Promise((resolve,reject)=>{
    console.log("Promise pending");
    setTimeout(()=>{
        console.log("Promise have been resolved");
        resolve(true)
    },3000);
});
let p2=new Promise((resolve,reject)=>{
    console.log("Promise pending");
    setTimeout(()=>{
        console.log("Promise have been rejected");
        reject(new Error("Some error occurred"));
    },3000);
});
// to get value
p1.then((value)=>{
    console.log(value);
});
// to catch error
p2.catch((error)=>{
    console.log('Error occurred in p2 by reject');
})