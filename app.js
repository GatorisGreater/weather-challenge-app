const SEARCH_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const API_KEY = '9be13ca98f24eafcd8d9c1c5b856347b';
// APPID is your unique API key
//example API call: http://api.openweathermap.org/data/2.5/weather?q=Atlanta,GA&units=imperial&appid=9be13ca98f24eafcd8d9c1c5b856347b

let clouds1;
let temp1;
let precipPlayer1;
let clouds2;
let temp2;
let precipPlayer2;
let gameresult; 
let player1_score = 0;
let player2_score = 0;
let city1;
let city2;

//callback

// ajax logic

          const queryWeather1 = (searchCity, callbackFn) => {
            let params = {
              q: searchCity,
              units: "imperial",
              appid: API_KEY,
            };
            $.getJSON(SEARCH_URL, params, callbackFn)
          }

          const queryWeather2 = (searchCity, callbackFn) => {
            let params = {
              q: searchCity,
              units: "imperial",
              appid: API_KEY,
            };
            $.getJSON(SEARCH_URL, params, callbackFn)
          }

///////////////////////////////////////////////////////////////////////////////////////////////
// WIP - Promises                                                                        //////
// const getFromApi = (endpoint, searchCity1, searchCity2) => {                          //////

//   let params1 = {
//     q: searchCity1,
//     units: "imperial",
//     appid: API_KEY
//   };
//   let params2 = {
//     q: searchCity2,
//     units: "imperial",
//     appid: API_KEY
//   };
//   return fetch(SEARCH_URL)

// }
                                                                                                                                                                                  
// const firstPromise = fetch(SEARCH_URL, params).then(console.log(response));          //////
////////////////////////////////////////////////////////////////////////////////////////////////


//event listening logic

          $('#js-search1').submit(function(event){
                event.preventDefault();
                let searchCity = $(event.currentTarget).find('input').val();
                queryWeather1(searchCity, callbackStore1);
            })

          $('#js-search2').submit(function(event){
                event.preventDefault();
                let searchCity = $(event.currentTarget).find('input').val();
                queryWeather2(searchCity, callbackStore2);
            })

          $('#js-compare').submit(function(event) {
                event.preventDefault();
                gameresult = compare();
                console.log(gameresult);
                displayResult();
           })

//render functions
//must render weather data for each player AND render winner based upon comparrison of scores

          function displayWeather1() {
            $('.js-clouddata1').html(clouds1 + '%');
            $('.js-tempdata1').html(temp1);
            $('.js-precipdata1').html(precipPlayer1);
          }

          function displayWeather2(){
           $('.js-clouddata2').html(clouds2 + '%');
            $('.js-tempdata2').html(temp2);
            $('.js-precipdata2').html(precipPlayer2);
          }

          function displayResult(){
            $('#js-compare p').html(gameresult);
          }

          function callbackStore1(response) {
              city1 = response.name;
              if(response) {
                temp1 = response.main.temp;
                clouds1 = response.clouds.all;
                precipPlayer1 = response.weather["0"].main;
                console.log(response.weather);
              }
              return displayWeather1();
          }

          function callbackStore2(response) {
              city2 = response.name;
              if(response) {
                temp2 = response.main.temp;
                clouds2 = response.clouds.all;
                precipPlayer2 = response.weather["0"].main;
              }
              return displayWeather2();
          }


//Game Scores

          //Compare Temps and Update Scores
          function compareTemp() {
            if (temp1 > temp2) {
              player1_score += 1;
            }
            else if (temp2 > temp1) {
            player2_score += 1;
            }
            else temp1 = temp2;
          }
          //Compare Clouds and Update Scores
          function compareClouds() {
            if (clouds1 > clouds2) {
          player2_score += 1;
          }
          else if (clouds2 > clouds1) {
            player1_score += 1;
            }
          else clouds1 = clouds2;
          }

function compare () {
  compareTemp();
  compareClouds();
  if (player1_score > player2_score) {
  return `${city1} has better weather`;
  }
  else if (player1_score === player2_score){
    return `${city1} or ${city2} ? No matter`;
  }
  else {
    return `${city2} has better weather`;
  }
};
