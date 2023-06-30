function getWeather() {
  var cityInput = document.getElementById("cityInput");
  var cityName = cityInput.value;

  // API isteği için gerekli URL'yi oluşturun
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=c65b38db98347ac30e82a8c8bcbca220";

  // API'ye GET isteği gönderin
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // API'den gelen verileri işleyin ve sonuçları ekrana yazdırın
      var weatherResult = document.getElementById("weatherResult");
      weatherResult.innerHTML = `
          <h2>${data.name} için Hava Durumu</h2>
          <p>Sıcaklık: ${Math.round(data.main.temp - 273.15)}°C</p>
          <p>Nem Oranı: ${data.main.humidity}%</p>
          <p>Rüzgar Hızı: ${data.wind.speed} m/s</p>
        `;
    })
    .catch((error) => {
      console.log("Hata oluştu:", error);
    });
}
