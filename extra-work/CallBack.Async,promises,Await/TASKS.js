function hii(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Aakarsh")
            resolve()
        },2000
        )
    })
}
function hii2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Saxena");
            resolve()
        },3000)
    })
}
function hii3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("JI");
            resolve()
        },2000)
    })
}
async function demo(){
    try{
        await hii();
        await hii2();
        await hii3();
    }
    catch(error){
        console.log("error",error);
    }
    

console.log("All task are done");}
demo();
