window.addEventListener("DOMContentLoaded", () => {
    const queryDom = (value) => document.querySelector(`${value}`);
  
    const weather = {
      /*make sure you get/give the key to use otherwise this won't work*/
      key: "c60365652dec51df2f047860c419b678",
      fetchWeather: function (city) {
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=imperial&appid=" +
            weather.key /* weather.key*/
        ) /* learn how to hide an api key in the project*/
          .then((response) => response.json())
          .then((data) => this.displayWeather(data));
      },
      displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
  
        const city = queryDom(".city");
        city.innerText = "Weather in " + name;
  
        const displayIcon = queryDom(".display-icon");
        displayIcon.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  
        const displayDescription = queryDom(".description");
        displayDescription.innerText = description;
  
        const displayTemp = queryDom(".temp");
        displayTemp.innerText = temp + "°F";
  
        const displayHumidity = queryDom(".humidity");
        displayHumidity.innerText = "Humidity: " + humidity + "%";
  
        const displayWind = queryDom(".wind");
        displayWind.innerText = "Wind speed: " + speed + "mp/h";
  
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/1600x900/?" + name + "')";
      },
  
      search: function () {
        const searchBar = queryDom(".search-bar").value;
        this.fetchWeather(searchBar);
      },
    };
  
    const searchButton = queryDom(".searchbutton");
    searchButton.addEventListener("click", () => weather.search());
  
    const searchBar = queryDom(".search-bar");
    searchBar.addEventListener("keyup", (e) => {
      if (e.key === "Enter") weather.search();
    });
  
    const dropDrop = queryDom("#dropdrop");
  
    function overmouse() {
      dropDrop.style.backgroundColor = "orange";
    }
  
    dropDrop.addEventListener("mouseover", overmouse);
  
    function offmouse() {
      dropDrop.style.backgroundColor = "grey";
    }
  
    dropDrop.addEventListener("mouseout", offmouse);
  
    const getRandomCity = async (e) => {
      const res = await fetch("https://countriesnow.space/api/v0.1/countries");
      const data = await res.json();
      const randomCountry =
        data.data[Math.floor(Math.random() * data.data.length)];
      const randomCity =
        randomCountry.cities[
          Math.floor(Math.random() * randomCountry.cities.length)
        ];
      const randomVacationSpot = queryDom(".random-vacation-spot");
      randomVacationSpot.innerText = randomCity;
    };
  
    const randomVacationSpotBtn = queryDom(".random-vacation-spot-btn");
  
    randomVacationSpotBtn.addEventListener("click", (e) => {
      getRandomCity(e);
    });
  });
  