const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken =
  "pk.eyJ1Ijoib3Jzb24xMDgiLCJhIjoiY2s1d29hbzR1MXg0MjNtbnFkeTVhODE2OCJ9.GsX3rTu8Vc2z6wAf9Y795w";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 15, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const marker = document.createElement("div");
// marker.className = "fullstack";

const createMarker = (type, location) => {
  const marker = document.createElement("div");
  marker.className = type;

  new mapboxgl.Marker(marker).setLngLat(location).addTo(map);
};

module.exports = createMarker;
