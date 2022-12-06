'use strict'
console.log("afdsf");
document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([50.6767405, 17.9740576], 18);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([50.6767405, 17.9740576]).addTo(map);
    marker.bindPopup(`<b>Firma sprzątająca
    PCS</b>`).openPopup();

})