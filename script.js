let map;
let marker;

function initMap(lat, lon) {
  if (!map) {
    map = L.map('map').setView([lat, lon], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

  if (marker) {
    map.removeLayer(marker);
  }

  marker = L.marker([lat, lon]).addTo(map)
    .bindPopup("Você está aqui!").openPopup();

  map.setView([lat, lon], 15);
}

function startTracking() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        document.getElementById("status").innerHTML = 
          `Latitude: ${lat}, Longitude: ${lon}`;
        initMap(lat, lon);
      },
      (error) => {
        document.getElementById("status").innerHTML =
          "Erro ao obter localização: " + error.message;
      },
      {
        enableHighAccuracy: true,
        maximumAge: 1000,        
        timeout: 5000             
      }
    );
  } else {
    document.getElementById("status").innerHTML = 
      "Geolocalização não é suportada.";
  }
}

// Começa a rastrear assim que a página carregar
window.onload = startTracking;
