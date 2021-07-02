fetch('https://api.openweathermap.org/data/2.5/weather?q=Krasnodar,RU&appid=5ceb314e14a5b25c11a3b3a147b48191')
    .then(function (resp){ return resp.json() })
    .then(function (data){
        console.log(data);
        document.querySelector('.package-name').innerHTML=data.name;
        document.querySelector('.price').innerHTML=Math.round(data.main.temp-273)+'&deg';
        document.querySelector('.describtion').innerHTML=data.weather[0]['description'];
        document.querySelector('.pic').innerHTML=`<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="nopic">`;
        document.querySelector('.wind-var').innerHTML=data.wind.speed+' м/с';
        document.querySelector('.pressure-var').innerHTML=data.main.pressure+' мм рт. ст.';
        document.querySelector('.vetness-var').innerHTML=data.main.humidity+'%';
        document.querySelector('.probability-var').innerHTML=data.clouds.all+'%';
    })
    .catch(function (){

    });
