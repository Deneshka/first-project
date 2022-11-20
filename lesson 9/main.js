// let element = document.createElement('div');
 let H = document.createElement('H1')
// element.setAttribute('class','element')
// console.log(element)
// console.log(H)
// element.append(H)

// // let input = document.querySelector(".input")
// // console.log(input)

// let btn = document.querySelector('.btn');
// let box = document.querySelector(".box");


// btn.onclick = () => {
//     alert("Я хочу чебурек")
//     }

let inp = document.querySelector('#secret-login');




inp.addEventListener('click',() => {
    inp.setAttribute('id','you were hacked') 
})
console.log(inp);