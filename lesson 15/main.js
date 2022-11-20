let year = document.querySelector('#year')
let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')
let countdown = document.querySelector('#countdown')
let preloader = document.querySelector('#preloader')
let milliseconds = document.querySelector('#milliseconds')
//Расчет
let currentYear = new Date().getFullYear();
let nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.innerHTML = currentYear + 1;

function UpdateCounter(){
    let currentTime = new Date();
    let diff = nextYear - currentTime

    const daysLeft = Math.round(diff / 1000 / 60 / 60 / 24)
    
    const hoursLeft = Math.round(diff / 1000 / 60 / 60) % 24;

    const minutesLeft = Math.round(diff / 1000 / 60) % 60;

    const secondsLeft = Math.round(diff / 1000) % 60
    
    const millisecondsLeft = Math.round(diff) % 950
    function ocrug(val) {
        return Math.round(val / 100) * 100;
      }
      ocrug(millisecondsLeft)
    days.textContent = daysLeft < 10 ? '0' + daysLeft : daysLeft
    hours.textContent = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft 
    minutes.textContent = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft 
    seconds.textContent = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft
    milliseconds.textContent = millisecondsLeft < 10 ? '0' + millisecondsLeft : millisecondsLeft
}
setInterval(UpdateCounter,10)

setTimeout(function(){
    preloader.remove();
    countdown.style.display = "flex"
},1000)