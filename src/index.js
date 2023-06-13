import "./style.css";

const searchForm = document.querySelector(".formsearch");
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchLocation();
});

async function searchLocation() {
  const locationInput = document.querySelector("#search-location").value;
  const errorDisplay = document.querySelector(".error");
  const loaderElement = document.querySelector(".loader");
  const weatherModalElement = document.querySelector(".content-weather");

  try {
    loaderElement.classList.remove("hide");
    const url = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=43de531f62bb4ccbb8961404230806&q=${locationInput}`,
      {
        mode: "cors",
      }
    );
    const responseURL = await url.json();
    loaderElement.classList.add("hide");
    errorDisplay.classList.add("hide");
    weatherModalElement.classList.remove("hide");
    const weatherInfo = {
      location: responseURL.location.name,
      country: responseURL.location.country,
      date: responseURL.location.localtime,
      temptF: responseURL.current.temp_f,
      temptC: responseURL.current.temp_c,
      condition: responseURL.current.condition.text,
      windDirection: responseURL.current.wind_dir,
      humidity: responseURL.current.humidity,
    };
    displayInfo(weatherInfo);
    console.log(responseURL);
  } catch (error) {
    weatherModalElement.classList.add("hide");
    loaderElement.classList.add("hide");
    errorDisplay.classList.remove("hide");
    errorDisplay.textContent = "location not found 😥";
  }
}

function displayInfo(weather) {
  const locationName = document.querySelector(".location-name");
  const countryName = document.querySelector(".country");
  const dateDisplay = document.querySelector(".date");
  const temptDisplay = document.querySelector(".tempt");
  const conditionDisplay = document.querySelector(".condition");
  const windDirDisplay = document.querySelector(".wind-dir");
  const humiditiyDisplay = document.querySelector(".humidity");
  const weatherIMG = document.querySelector(".weather-img");
  const fahBtn = document.querySelector(".fah");
  const celBtn = document.querySelector(".cel");

  fahBtn.addEventListener("click", () => {
    switchToFah(weather, temptDisplay);
  });
  celBtn.addEventListener("click", () => {
    switchToCel(weather, temptDisplay);
  });

  locationName.textContent = `${weather.location},`;
  countryName.textContent = weather.country;
  dateDisplay.textContent = weather.date;
  temptDisplay.textContent = `${weather.temptF}°F`;
  conditionDisplay.textContent = weather.condition;
  windDirDisplay.textContent = weather.windDirection;
  humiditiyDisplay.textContent = weather.humidity;

  weatherIMG.classList.remove(
    "sunny-bg",
    "cloudy-bg",
    "rainy-bg",
    "snowy-bg",
    "thunder-bg",
    "windy-bg"
  );
  const weathercondition = weather.condition.toLowerCase();
  if (
    weathercondition.includes("sunny") ||
    weathercondition.includes("clear")
  ) {
    weatherIMG.classList.add("sunny-bg");
  } else if (
    weathercondition.includes("cloudy") ||
    weathercondition.includes("overcast")
  ) {
    weatherIMG.classList.add("cloudy-bg");
  } else if (
    weathercondition.includes("rain") ||
    weathercondition.includes("drizzle")
  ) {
    weatherIMG.classList.add("rainy-bg");
  } else if (
    weathercondition.includes("snow") ||
    weathercondition.includes("ice") ||
    weathercondition.includes("sleet")
  ) {
    weatherIMG.classList.add("snowy-bg");
  } else if (weathercondition.includes("thunder")) {
    weatherIMG.classList.add("thunder-bg");
  } else if (
    weathercondition.includes("windy") ||
    weathercondition.includes("fog")
  ) {
    weatherIMG.classList.add("windy-bg");
  }
}

function switchToFah(weather, element) {
  element.textContent = `${weather.temptF}°F`;
}

function switchToCel(weather, element) {
  element.textContent = `${weather.temptC}°C`;
}
