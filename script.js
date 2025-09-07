const apikey="7506d7e49094c2470ac9f4d54b12c2a2";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");

async function checkweather(city){
    const response = await fetch(apiurl +city+ `&appid=${apikey}`)

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    var data =await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/hr";


    document.querySelector(".weather").style.display="block";
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})
checkweather();