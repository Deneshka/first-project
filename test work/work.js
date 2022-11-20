//1)
function move(arr){
    let zeroend = arr.filter(el =>el !==0);
    return zeroend.concat(Array(arr.length - zeroend.length).fill(0))
}
let zero = [0,0,32,4,5]
console.log(move(zero))

//2)
let modal = document.getElementById("modal-wind");
let btn = document.getElementById("window-open");
let span = document.getElementsByClassName("window-close")[0];
let body = document.getElementsByClassName("body")

btn.onclick = function() {
  modal.style.display = "block";
  document.body.classList.add("shadow")
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
