/*
LocalWeatherApp
- - - - - - - - - -
http://codepen.io/DizNicolasAmor/pen/XpqoQz
Author:  Diz, Nicolás Amor (https://github.com/DizNicolasAmor)
This project is a challenge posed by FreeCodeCamp.
API from http://openweathermap.org/api
*/


$(document).ready(function() {
  
  var loc;
//My API key:   f0c304536bcea0bc10f6fdb0a3dd88b2  
  var myAppid = "f0c304536bcea0bc10f6fdb0a3dd88b2";

  $.getJSON('http://ipinfo.io', function(data){
    //loc is an array with lat = loc[0] && lon = loc[1]
    loc = data.loc.split(",");
    
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+loc[0]+"&lon="+loc[1]+"&appid="+myAppid, function(weatherData){
     
      $("#description").html(weatherData.weather[0].description),
      $("#city").html(weatherData.name+", "+weatherData.sys.country),
      $("#temperature").html(weatherData.main.temp), 
      $("#maxTemp").html(weatherData.main.temp_max),        
      $("#minTemp").html(weatherData.main.temp_min),
      $("#wind").html(weatherData.wind.speed);

    })  // get JSON weatherData
    
  })  //get JSON ipinfo
  
})  //document ready
  
  //To do.  Change background according to the data. 
//  var body = getElementById('body'); 
//  body.style.backgroundColor =  //.......
