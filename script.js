let queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1dac4c3d1d0e6dfacafaa44994471dc9";


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
});