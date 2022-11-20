let input = document.querySelector('.input');
let btn = document.querySelector('.btn');

let obj = {
    name:'codify',
    address:'Bishkek city',
    street:'Isanova'
}


btn.addEventListener('click',() => {
    let text = {
        words: input.value
    }
    
    localStorage.setItem('todo',JSON.stringify(text))
    
})




// localStorage.setItem('first',JSON.stringify(obj));
// let getObj = localStorage.length;
// console.log(getObj);