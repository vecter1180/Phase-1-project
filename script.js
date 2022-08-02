 
 console.log(document.querySelector(".searchbutton"))

 let weather = {
    /*make sure you get/give the key to use otherwise this won't work*/ 
    key:" ",
    fetchWeather: function (city) {
        fetch(
           "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.key 
        ) /* learn how to hide an api key in the project*/
          
              
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name }  = data;
        const { icon, description } = data.weather [0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        /*const { sunrise } = data.sys.sunrise;
        const { sunset } = data.sys.sunset; are not working*/
        

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "mp/h";
        /*document.querySelector(".sunrise").innerText ="Sunrise" + time + "a.m.";
        document.querySelector(".sunset").innerText = "Sunset" + time + "p.m.";*/

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name +"')";
    },

    
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value );
    }
};

    document.querySelector(".searchbutton").addEventListener("click", function (){
      
        console.log("click")
        weather.search();
})

    document.querySelector(".search-bar").addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            weather.search();
    }

})