const app = require('./app') //import another file
console.log(app)
console.log(app.z)
console.log(x) //another file app.js
console.log(y)  //another file app.js



console.log("Hello world")

var a=20
let b='30'
const c=50

//c=60 error
console.log(a+b+c)
//console.warm(a+b+c)
console.error(a+b+c)

if(a===20)
{
    console.log("Matched")
}

if(b==30)
{
    console.log("Matched")
}

for(i=0;i<10;i++){
    console.log(i)
}

const arr=[2,4,7,1,3,8,3]
console.log(arr)
console.log(arr[0])

arr.filter((item)=>{  //filter function automatic loop execute
    console.log(item)
    
})

let result =arr.filter((item)=>{  //filter function automatic loop execute
    return item===3
    
})
console.warm(result)

let result2 =arr.filter((item)=>{  //filter function automatic loop execute
    return item>=3
    
})
console.warm(result)





