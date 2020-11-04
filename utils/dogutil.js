
const request = require("postman-request")


let build_list = (amount)=>{


    let promise_list =  []
    for ( let i = 0; i < amount ; i++){
        promise_list.push(request_dog_info())
    }

    let dogInfoList = Promise.all(promise_list);

}

let request_dog_info = () =>{
    return new Promise((resolve,reject)=>{
        request("https://api.thedogapi.com/v1/images/search",(err,res,body)=>{
            if ( err ){
                reject(err)
            }
            resolve (body)
        });

    })
}


build_list(10,list=>{
    for ( i =0; i < list.length; i++){
        console.log(list[i])
    }
})


build_list(10)



module.exports = {
    request_dog_info: request_dog_info,
}