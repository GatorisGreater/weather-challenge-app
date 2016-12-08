
var SEARCH_URL = 'api.openweathermap.org/data/2.5/weather?';
var API_KEY = '9be13ca98f24eafcd8d9c1c5b856347b';


// APPID is your unique API key 
//example API call: http://api.openweathermap.org/data/2.5/weather?q=Atlanta,GA&units=imperial&appid=9be13ca98f24eafcd8d9c1c5b856347b


function queryOpenWeather(city, callbackFn) {
	var params = {
		q: "Atlanta,GA",
		units: "imperial",
		key: API_KEY,
		}
	$.getJSON(SEARCH_URL, params, callbackFn);
}
