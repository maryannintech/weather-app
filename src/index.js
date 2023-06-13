import "./style.css";

const searchForm = document.querySelector(".formsearch");
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchLocation();
});

async function searchLocation() {
  const locationInput = document.querySelector("#search-location").value;
  try {
    const url = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=43de531f62bb4ccbb8961404230806&q=${locationInput}`,
      {
        mode: "cors",
      }
    );
    const responseURL = await url.json();
    console.log(responseURL);
  } catch (error) {
    console.log("No information found");
  }
}

async function displayInfo() {
  const locationName = document.querySelector(".location-name");
  const dateDisplay = document.querySelector(".date");
  const temptDisplay = document.querySelector(".tempt");
  const conditionDisplay = document.querySelector(".condition");
  const windDirDisplay = document.querySelector(".wind-dir");
  const humiditiyDisplay = document.querySelector(".humidity");
}
