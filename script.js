 
 //console.log(document.querySelector(".searchbutton"))

 let weather = {
    /*make sure you get/give the key to use otherwise this won't work*/ 
    key:"c60365652dec51df2f047860c419b678",
    fetchWeather: function (city) {
        console.log('city = ', city);
        fetch(
           "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + weather.key /* weather.key*/ 
        ) /* learn how to hide an api key in the project*/

            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        console.log('data = ', data);
        const { name }  = data;
        const { icon, description } = data.weather [0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const sunrise = new Date(data.sys.sunrise).toLocaleTimeString('en-US');
        const sunset = new Date(data.sys.sunset).toLocaleTimeString('en-US');
console.log('sunrise = ', sunrise, 'sunset = ', sunset);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "mp/h";
        document.querySelector(".sunrise").innerText ="Sunrise: " + sunrise;
        document.querySelector(".sunset").innerText = "Sunset: " + sunset;

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name +"')";
    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value );
    } 
};
/* you need three eventlistners*/
document.querySelector(".searchbutton").addEventListener("click", function (){
        console.log("click")
        weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function (event){
    if (event.key === "Enter") 
        weather.search();
})

   
 /*remember  you need to make functions for eventlisteners to work!!*/      
function overmouse(){
    document.getElementById("dropdrop").style.backgroundColor = "orange";
}

document.getElementById("dropdrop").addEventListener("mouseover", overmouse);

function offmouse(){
    document.getElementById("dropdrop").style.backgroundColor = "grey";

}

document.getElementById("dropdrop").addEventListener("mouseout", offmouse);



//document.querySelector(".resultbox").innerText = "You should travel to:" + getRandomCity() ;

//randomCity()

function getRandomCity() {
    const cities = [   
        "Hong Kong",	
        "Singapore",
        "Bangkok",
        "London",
        "Macau",
        "Kuala Lumpur",	
        "Shenzhen",
        "New York City",
        "Antalya",
        "Paris",
        "Istanbul",
        "Rome",
        "Dubai",
        "Guangzhou",	
        "Phuket",
        "Mecca",
        "Pattaya",
        "Taipei	",
        "Prague",
        "Shanghai",
        "Las Vegas",	
        "Miami",
        "Barcelona",
        "Moscow",	
        "Beijing",	
        "Los Angeles",	
        "Budapest",
        "Vienna",	
        "Amsterdam",	
        "Sofia"
    ];
    
    let randomCity = cities.sort(() => Math.random() > 0.5 ? 1: -1).slice(0,1);
    weather.fetchWeather(randomCity[0]);
}

document.querySelector(".randomBtn").addEventListener("click", function(){
    console.log("click")
    getRandomCity();
});

// document.querySelector(".resultbox").innerText = "You should go to:" + getRandomCity();

 // document.querySelector('.randomBtn').style.backgroundColor = red



  //let randomBtn = document.querySelector('randomBtn');
//let result = document.querySelector('h2')

//randomBtn.addEventListener('click', () => {
  //  let index = getRandomCity(0, city.//length-1);
  //  result.innerText
//});

//function getRandomCity(min, max) {
//    let result = Math.floor(Math.random() * max - min + 1) + min 
//
//    return result
//}

//let random = city[Math.floor(Math.random() * city.length)]

//console.log(randomCity)
//document.querySelector(".resultbox").addEventListener("click", function (){
//    console.log("click")
//    randomCity()
//})


//function randomCity(){
//    document.getElementById("random").innerHTML = randomCity()
//    console.log(randomCity)
//
//  function randomCity(){
//    document.getElementById("test").innerHTML = randomCity
//    console.log(randomCity)
//  } 


//
//function getRandomNumber(min, max) {
//    let one = max-min + 1;
//    let two = Math=.random() * one;
//}
// }
//
//randomBtn.addEventListener('click', () => {
//    let index = getRandomNumber(0, users.length-1);
//    XPathResult.innerText = users[index];
//})




//document.querySelector("searchbutton2").addEventListener("click", function (){
//    console.log("click")
//})
//
//
//document.querySelector("search-bar2").addEventListener("keydown", function (event){
//    if (event.key === "Enter") 
//         
//})
//