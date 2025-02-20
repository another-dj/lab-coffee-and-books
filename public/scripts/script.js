window.addEventListener('load', () => {
  console.log('Ironmaker app started successfully!');
}, false);

///////////////////////////////////////////////////////////////

function initMap() {
  const $mapContainer = document.getElementById('map');

  if ($mapContainer) {
    const map = new window.google.maps.Map($mapContainer, {
      center: { lat: 38.7, lng: -9.14 },
      zoom: 12,
      mapTypeId: 'roadmap'
    });

    const betaICoordinates = {
      lat: 38.7290507,
      lng: -9.1443353
    };

    const marker = new window.google.maps.Marker({
      position: betaICoordinates,
      map
    });

    const $inputLatitude = document.querySelector('input[name="latitude"]');
    const $inputLongitude = document.querySelector('input[name="longitude"]');

    console.log($inputLatitude, $inputLongitude);

    let placedMarker;

    map.addListener('click', event => {
      const position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };

      $inputLatitude.value = position.lat;
      $inputLongitude.value = position.lng;

      if (placedMarker) {
        placedMarker.setMap(null);
      }

      placedMarker = new window.google.maps.Marker({
        position,
        map
      });
    });
  }
}