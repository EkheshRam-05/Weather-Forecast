var latt, long;
var city_temp = "New York";
var city = "";
var flag = 0;

function findCoords() {
	console.log(city, "helo ");
	// document.getElementById('wait').style.display = "block";
	var window_height = window.innerHeight
	var window_width = window.innerWidth
	if (flag) {
		if (window_height < 500 || window_width < 500) {
			city = document.getElementById("city").value;
		} else {
			city = document.getElementById("alt-city").value;
		}
	}
	console.log(city);
	if (city == "" && window_width < 500) {
		document.querySelector('.error2').innerHTML = "Please Provide the location in the above field";
		document.querySelector('.error2').style.display = "inherit";
	} else if (city == "" && window_width > 500) {
		document.querySelector('.error1').innerHTML = "Please Provide the location in the above field";
		document.querySelector('.error1').style.display = "inherit";
	}
	else {
		document.querySelector('.error1').style.display = "none";
		document.querySelector('.error2').style.display = "none";
	}
	fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=fee9a6420fc2791c96cc952b75088ff8&units=metric")
		.then(response => {
			return response.json();
		}).then(data =>{
			if (data.cod == 404 && window_width < 500) {
				document.querySelector('.error2').style.display = "inherit";
				document.querySelector('.error2').innerHTML = "city not found";
			}
			else if (data.cod == 404 && window_width > 500){
				document.querySelector('.error1').innerHTML = "city not found";
				document.querySelector('.error1').style.display = "inherit";

			}
			else {
				// console.log(data.main.feels_like, data.main.humidity, data.main.pressure, data.main.temp, data.visibility, data.weather[0].description, data.weather[0].main, data.wind.deg, data.wind.speed);
				document.getElementById('feels_like').textContent = data.main.feels_like + "°C";
				document.getElementById('temp').textContent = data.main.temp + "°C";
				document.getElementById('city-name').textContent = city;
				document.getElementById('pressure').textContent = data.main.pressure + " vPa";
				document.getElementById('humidity').textContent = data.main.humidity + " %";
				document.getElementById('wind_deg').textContent = data.wind.deg + " (degree)";
				document.getElementById('wind_speed').textContent = data.wind.speed + " metre/sec";
				document.getElementById('weather_description').textContent = data.weather[0].description;
			}
		})

}

function findCoords_load(){
	city = city_temp;
	console.log(city, city_temp);
	findCoords();
	flag = 1;
}


