//1)
let arr = [0,2,4,6]
let i = arr
let array = i.concat(arr.slice(0,-1).reverse())
console.log(array)
//2)
let mas = ([4,3,2,1],"Asc")
function func(j){
    if(j.indexOf('Asc')){
        j.sort((a, b) => a - b)
    }else{
    }
}

console.log(func(([4,3,2,1],"Asc")))