var latt, long;
var city_temp = "New York";
var city = "";
var flag = 0;

function findCoords() {
	console.log(city, "helo ");
	// document.getElementById('wait').style.display = "block";
	if (flag) {
		if (window.innerHeight < 500 || window.innerWidth < 500) {
			city = document.getElementById("city").value;
		} else {
			city = document.getElementById("alt-city").value;
		}
	}
	console.log(city);
	fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=fee9a6420fc2791c96cc952b75088ff8&units=metric")
	.then(response =>{
		return response.json();
	}).then(data =>{
		console.log(data);
		console.log(data.main.feels_like, data.main.humidity, data.main.pressure, data.main.temp, data.visibility, data.weather[0].description, data.weather[0].main, data.wind.deg, data.wind.speed);
		document.getElementById('feels_like').textContent = data.main.feels_like + "°C";
		document.getElementById('temp').textContent = data.main.temp + "°C";
		document.getElementById('city-name').textContent = city;
		document.getElementById('pressure').textContent = data.main.pressure + " vPa";
		document.getElementById('humidity').textContent = data.main.humidity + " %";
		document.getElementById('wind_deg').textContent = data.wind.deg + " (degree)";
		document.getElementById('wind_speed').textContent = data.wind.speed + " metre/sec";
		document.getElementById('weather_description').textContent = data.weather[0].description;
	})

}

function findCoords_load(){
	city = city_temp;
	console.log(city, city_temp);
	findCoords();
	flag = 1;
}


