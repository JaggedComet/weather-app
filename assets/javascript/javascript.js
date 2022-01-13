// Var for API key to call it
var apiKey = "650f52d00d0c4d9cb173bafc0fa2ec16";
// Tried to make a city var for text input, couldn't figure out
var city = document.querySelector(".search-bar").value;

// Function to get info about City
function fetchWeather(city) {
    var requestUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        apiKey;
    console.log(requestUrl);

    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
    
}

function displayWeather (data) {
    var name = data.name;
}
// Couldn't figure out how to get text input for this function
fetchWeather("Sacramento");
displayWeather();
