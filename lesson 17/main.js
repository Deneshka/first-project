let inputCity = document.querySelector('#cityinput');
let btn = document.querySelector('#add');
let  city = document.querySelector('#cityoutput');
let desc = document.querySelector('#description');
let  temp = document.querySelector('#temp');
let  wind = document.querySelector('#wind');

let KEY = '6a13a3e0da5951e0d49805e3e4abbf52'
btn.addEventListener('click',function(){
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${KEY}`)
    .then(res => res.json())
    .then(data => {

        let CityName = data['name'];
        let Desc = data['weather']['0']['description'];
        let Temp = data['main']['temp'];
        let Speed = data['wind']['speed'];

    
        city.innerHTML = `Weather of <span>${CityName}</span>`
        temp.innerHTML =  `Temperature: <span>${Convertion(Temp)}</span>`
        desc.innerHTML = `Sky is <span>${Desc}</span>`
        wind.innerHTML =  `Wind speed <span>${Speed}</span>`

    });

})