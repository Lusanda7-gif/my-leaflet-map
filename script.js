
function sayHello() {
    alert("Hello! Welcome to my website.");
}

var map = L.map('map').setView([-25.7479, 28.2293], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


L.marker([-25.7479, 28.2293])
    .addTo(map)
    .bindPopup("Welcome to Pretoria!");

L.marker([-25.7676, 28.2814])
    .addTo(map)
    .bindPopup("Welcome to Hatfield!");

L.circle([-25.7479, 28.2293], {
    color: 'red',
    radius: 500
}).addTo(map);

L.rectangle([
    [-25.7400, 28.2200],
    [-25.7550, 28.2400]
], {
    color: 'blue'
}).addTo(map);

L.polyline([
    [-25.7479, 28.2293],
    [-25.7676, 28.2814]
], {
    color: 'green'
}).addTo(map);

// Create a legend
var legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'legend');

    div.innerHTML = `
        <h4>Map Legend</h4>
        <p><span class="blue-pin"></span> Location markers</p>
        <p><span class="red-circle"></span> 500 m radius</p>
        <p><span class="blue-square"></span> Study area</p>
        <p><span class="green-line"></span> Route between places</p>
    `;

    return div;
};

legend.addTo(map);