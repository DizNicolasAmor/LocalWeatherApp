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

  //convert cel to fahrenheit. 
  function celToFahr(num){
    var fahr = parseInt(num * (9 / 5) + 32);
    return fahr;
  }

  //convert cel to fahrenheit. 
  function fahrToCel(num2){
    var cel = parseInt( (num2-32) * 5 / 9);
    return cel; 
  }

  
  $.getJSON('https://ipinfo.io', function(data){
    //loc is an array with lat = loc[0] && lon = loc[1]
    loc = data.loc.split(",");

    $.getJSON("https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat="+loc[0]+"&lon="+loc[1]+"&appid="+myAppid, function(weatherData){
console.log(weatherData);     
      var iconVar = weatherData.weather[0].icon;
      
      //the API gives me the temp in kelvin. Remember that cel = kelvin - 273;
      var tempCel = parseInt(weatherData.main.temp - 273);
      var tempFahr = parseInt( (tempCel-32) * 5 / 9 );
      var tempMinCel = parseInt(weatherData.main.temp_min - 273);
      var tempMaxCel = parseInt(weatherData.main.temp_max - 273);

      $("#city").html(weatherData.name+", "+weatherData.sys.country);
      $("#icon").html("<img src='https://openweathermap.org/img/w/"+iconVar+".png' height='100'>");
      $("#description").html(weatherData.weather[0].description);
      $("#temperature").html(tempCel + "ºC"); 
      $("#minTemp").html("Min.: " + tempMinCel + " ºC"); 
      $("#maxTemp").html("Max.: " + tempMaxCel + " ºC"); 
      
      //convert cel to fahr && fahr to cel
      $("#convert").click(function () {
        if ($('#temperature').text().indexOf('F') > -1) {
          $('#temperature').text(tempCel + '° C');
          $("#minTemp").text("Min.: " + tempMinCel + '° C');
          $("#maxTemp").text("Max.: " + tempMaxCel + '° C');
        } else {
          $('#temperature').text(celToFahr(tempCel) + '° F');
          $("#minTemp").text("Min.: " + celToFahr(tempMinCel) + '° F');
          $("#maxTemp").text("Max.: " + celToFahr(tempMaxCel) + '° F');
        }
      });

    })  // get JSON weatherData
    
  })  //get JSON ipinfo
  
})  //document ready
