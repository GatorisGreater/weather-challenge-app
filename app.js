var player1_score;
var player2_score;
var tempurature1;
var temperature2;
var clouds1
var clouds2
var precip1
var precip2

var SEARCH_URL = 'http://api.openweathermap.org/data/2.5/weather?';
var API_KEY = '9be13ca98f24eafcd8d9c1c5b856347b';
// APPID is your unique API key
//example API call: http://api.openweathermap.org/data/2.5/weather?q=Atlanta,GA&units=imperial&appid=9be13ca98f24eafcd8d9c1c5b856347b


// ajax logic
function queryWeather(searchCity, callbackFn) {
    var params = {
        q: searchCity,
        units: 'imperial',
        appid: API_KEY,
        }
    $.getJSON(SEARCH_URL, params, function(response){
      console.log(response);
    });
}

//event listening logic

 $('#js-search').submit(function(event){
      event.preventDefault();
      var searchCity = $(event.currentTarget).find('input').val();
      console.log(searchCity);
      console.log();
      queryWeather(searchCity);
  });


function submission(){
  $('#js-search').submit(function(event){
      event.preventDefault();
      var searchCity = $(event.currentTarget).find('input').val();

      console.log(queryWeather(searchCity, displayWeather()));
  })

}

//render function

// function displayWeather() {
//   var city1temp = main.temp;
//   // console.log(city1temp);
// }


// function compare_temp() {
//   if (tempurature1 > temperature2) {
//   player1_score +=1
// }
// else if (temperature2 > tempurature1) {
//   player2_score +=1
//   }
// }
//
// function compare_clouds() {
//   if ()
//
// }
//
// function compare_precip () {
//
//
// }
