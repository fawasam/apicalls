let promise =new Promise((resolve,reject)=>{
    let a= 1+1
    if(a==2){
        resolve("successyyyyyyyyyyyyyyyyyyyyyyyy")
    }
    else{
        reject("failed")
    }
})
promise.then ((message)=>{
    console.log(message);
})
.catch((message)=>{
    console.log(message);
})
user=false
admin=false
function newPromise(){
    return new Promise((resolve,reject)=>{
        if(user){
            reject({name:"user left",message:":("})
        }
        else if(admin){
            reject({name:"admin here",message:"cammon"})
        }else{
            resolve("go hell")
        }
    })
}
newPromise().then((message)=>{
    console.log("success"+ message)
})
.catch((error)=>{
    console.log(error.name);
})