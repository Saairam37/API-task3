var weatherContainer=document.getElementById("weatherContainer")
async function getWeatherData(){
    console.log(cityName)
    var cityName=document.getElementById('cityName').value
    let data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=20791595c1fdb8302bd692d9b7e453bb`)
    let res= await data.json()
    console.log(res)

var weatherContainer=document.getElementById('weatherContainer')
weatherContainer.innerHTML=`<div class="row g-0">
<div class="col-md-4 m-0">
<img src="https://res.cloudinary.com/dtpgi0zck/image/upload/s--JQWZZPHk--/c_fit,h_580,w_860/v1/EducationHub/photos/lightning-bolts.jpg" height="258" width="190">
</div>
<div class="col-md-8">
  <div class="card-body">
    <b><h5 class="card-title">Weather Data of ${cityName} is</h5></b>
    <b><p class="card-text"><small class="text-muted">City/country Name is: ${res.name}</small></p></b>
    <b><p class="card-text"><small class="text-muted">Temperature is: ${res.main.temp}</small></p></b>
    <b><p class="card-text"><small class="text-muted">Latitude is: ${res.coord.lat}</small></p></b>
    <b><p class="card-text"><small class="text-muted">Longitude is: ${res.coord.lon}</small></p></b>
    <b><p class="card-text"><small class="text-muted">Weather id is: ${res.weather[0].id}</small></p></b>
    <b><p class="card-text"><small class="text-muted">Description is: ${res.weather[0].description}</small></p></b>
   <b> <p class="card-text"><small class="text-muted">Humidity is: ${res.main.humidity}</small></p></b>
   <b><p class="card-text"><small class="text-muted">Speed is: ${res.wind.speed}</small></p></b>
  </div>
</div>
</div>`
}
