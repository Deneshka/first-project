//1)
let drinks =[
{name:"limonade", price: 50},
{name:"mohito", price: 70},
{name:"kola", price: 20}
]
function sort(arr){
arr.sort((a, b) => a.price > b.price ? 1 : -1)
}
sort(drinks)
console.log(drinks)


//2)
let arr = [1,2,3,4,5,6]
let array = [1,2,3,4]
let ar = arr/2
let r = [ar,array,ar]
console.log(arr/2);