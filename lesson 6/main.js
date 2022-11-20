// // function func(num){
// //     return num
// // }
// // console.log(func(10))

// let arr = [1,2,3];

// // let num = arr.map((el,idx,arr)=>{
// //     return el
// // })
// // console.log(num)

// let num =arr.forEach((el, idx, arr)=>{
//     console.log(el)
// })
// console.log(num)

// let obj = {
//     name: "Chel",
//     age:32,
//     country: "KG",
//     arrNum:[1,2,3,4,5],
// }
// console.log(obj.name)

//  let objNum = {
//      five: 5,
//      six: 6,
//      seven:7,
//  }
//  console.log(objNum)

// for(let key in objNum){
//     console.log(objNum[key])
// }

// let user = new Object();





//1)
let obj = {
    name: "Значением свойства name является Chel",
    age: "Значением свойства age является23",
}
for(let key in obj){
    console.log(obj[key])
}


//2)
let arr = [{id: 1},{id: 2},{id: 3},{id: 4}]
let mas = arr.map((el,idx,arr)=>{
    return el.id
    
})
console.log(mas)

//3)
//    let Num = [1,2,3,4]
//   for(let i = 0; i < Num.length; i++){
//   }if(i = [2]){
//      console.log(Num[2])
//   }
console.log(object,entries(arr0bj))