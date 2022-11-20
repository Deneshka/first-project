let button = document.querySelector('#likes')
let count_likes = document.querySelector('#h1')
let text = Number(count_likes)
let tex = text - 1
button.addEventListener('click',() => {
count_likes.innerHTML = count_likes.innerHTML - 1
})
