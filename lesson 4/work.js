//  function funk(){
//     mass=[1,-2,3,-10,20,13-6]}
//     for(i = 0; i<mass.length; i++)
//     if(mass[i]<0){
//     console.log(mass[0]=null)
//  }funk()

//  let Funkthree = function() {
//     let arr= [1,2,3]
//     for(let i = 0; i < arr.length;i++){
// console.log(arr[i]*2)
//     }
//  }
// Funkthree()
let arr = [4, 6, 'Ivan', 5, 'Denis '];

for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === "string"){
        arr[i] = null
    }

}

console.log(arr)