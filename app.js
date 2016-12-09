var SEARCH_URL = 'http://api.openweathermap.org/data/2.5/weather?';
var API_KEY = '9be13ca98f24eafcd8d9c1c5b856347b';
// APPID is your unique API key
//example API call: http://api.openweathermap.org/data/2.5/weather?q=Atlanta,GA&units=imperial&appid=9be13ca98f24eafcd8d9c1c5b856347b


// ajax logic
function queryWeather1(searchCity, callbackFn) {
    var params = {
        q: searchCity,
        units: "imperial",
        appid: API_KEY,
        }
    $.getJSON(SEARCH_URL, params, callbackStore1);
}

function queryWeather2(searchCity, callbackFn) {
    var params = {
        q: searchCity,
        units: "imperial",
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
      queryWeather1(searchCity);
      displayWeather1();
      // displayWeather2(clouds2, temp2, precip2);
// This may result in re-rendering Weather1 when we click Submit for Player2 weather because the two buttons are
//linked to the same class

  })
$('#js-compare').click(function(event) {
      event.preventDefault();
      gameresult = compare(compareClouds,compareTemp,comparePrecip);
      displayResult(gameresult);

 })

// function submission1()
//   $('#js-search').submit(function(event){
//       event.preventDefault();
//       var searchCity = $(event.currentTarget).find('input').val();

//     queryWeather(searchCity, callbackStore1);
//   })
// }

// function submission2(){
//   $('#js-search').submit(function(event){
//       event.preventDefault();
//       var searchCity = $(event.currentTarget).find('input').val();

//     queryWeather(searchCity, callbackStore2);
//   })
// }

//render functions
//must render weather data for each player AND render winner based upon comparrison of scores

function displayWeather1() {
  console.log(clouds1);
  $('#js-clouddata1').html(clouds1);
  $('#js-tempdata1').html(temp1);
  $('#js-precipdata1').html(precip1);
}

function displayWeather2(){
  $('#js-clouddata2').html(clouds2);
  $('#js-tempdata2').html(temp2);
  $('#js-precipdata2').html(precip2);
}

function displayResult(){
  $('#js-compare').html(gameresult);
}


//callback

function callbackStore1(response) {
   temp1 = response.main.temp
   clouds1 = response.clouds.all
   console.log(clouds1);
  if (response.weather["0"].main.indexOf('snow') != -1 || response.weather["0"].main.indexOf('rain') != -1) {
    precip1 = true;

  }  else {
    precip1 = false;
  }
}


function callbackStore2(response) {
  temp2 = response.main.temp
  clouds2 = response.clouds.all
  if (response.weather["0"].main.indexOf('snow') != -1 || response.weather["0"].main.indexOf('rain') != -1) {
   precip2 = true
  }
  else {
    precip2 = false
  }
}

//Game Scores

//Compare Temps and Update Scores
//How are we passing in globals
var player1_score = 0
var player2_score = 0

function compareTemp() {
  if (temp1 > temp2) {
  player1_score +=1
}
else if (temp2 > temp1) {
  player2_score +=1
  }
}
//Compare Clouds and Update Scores
function compareClouds() {
  if (clouds1 > clouds2) {
player2_score += 1
}
else if (clouds2 > clouds1) {
  player1_score +=1
  }
}

//Compare Precip Update Scores
function comparePrecip () {
  if (precip1 === true || precip2 === false) {
player2_score += 1
}
else if (precip2 === true || precip1 === false) {
  player1_score +=1
  }
}
function compare (compareClouds,compareTemp,comparePrecip) {

  if (player1_score > player2_score) {
  return "Player 1 has better weather";
  }
  else if (player1_score === player2_score){
    return "Same Weather";
  }
  else {
    return "Player 2 has better weather";
  }
};

console.log();
