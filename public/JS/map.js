

maplibregl.accessToken = mapToken;

  const map = new maplibregl.Map({
    container: "map", // container ID
    style: `https://api.maptiler.com/maps/streets/style.json?key=${mapToken}`, // MapTiler style URL
    center: listing.geometry.coordinates, // Longitude, Latitude
    zoom: 9 // starting zoom
  });


  const marker = new maplibregl.Marker({ color: "red" }) // color set karo
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new maplibregl.Popup({offset:25}).setHTML(`<h4>${listing.title}</h4><p>Exact location provided after booking</p>`)
  )
  .addTo(map);
