let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("resolved after 2 sec");
        resolve(1);
    },2000);
});
p1.then((value)=>{
    console.log("Congratulations this is now resolved");
    let p2=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("promise 2");
        }, 2000);
        });
        return p2
    }).then((value)=>{
        console.log("We are done");
        return 2
    }).then((value)=>{
        console.log("Now we are Pakka done");
    });



