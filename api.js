// 4 WAYS TO CALL API_KEY


// XMLHttpRequest and fetch both build in function in window object 
//------------------------------------------------------------------------------- XMLHttpRequest api call method 

const request =new XMLHttpRequest ();
request.open("GET","https://jsonplaceholder.typicode.com/users")
request.send()
request.onload= ()=>{
    if(request.status === 200){
      //  console.log(JSON.parse(request.response));
    }else{
      //  console.log(`error : ${request.status}`);
    }
}


//----------------------------------------------------------------------------------fetch api

// promise method 
fetch("https://jsonplaceholder.typicode.com/users")
.then(response =>{
   return response.json()
})
.then(data =>{
    console.log(data);
})

//second approach
async function getUsers(){
    let response =await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await response.json()
    return data
}
getUsers().then(res =>{
    console.log(res);
})


//-------------------------------------------------------------------------------------axios js library

axios.get("https://jsonplaceholder.typicode.com/users")
.then(data =>{
    console.log(data);
},err=>{
    console.log(err);
}
)
