// //1)
 function Palin(num){
  if(num === num.split("").reverse().join('')){
     return true
  }else{
     return false
  }
 }
 console.log(Palin('1213'))

 //2)
 let arr = [1,2,3]
 arr = Array.from(arr);
 let copy = Object.values(arr)
 let mas =[].concat(copy,[arr.slice(0)])

 console.log(mas)

 //3)
  function ReverseNum(obj){
         obj = obj + ""
     return obj.split("").reverse().join("")
 }
 let rev = (2133)
 console.log(ReverseNum(rev))

