let map, CampLatLng, StopLatLng;

if (window.ReactNativeWebView) {
  document.addEventListener('message', receiveDataFromReactNative);
}

const sendDataToReactNative = async data => {
  window.ReactNativeWebView.postMessage(data);
};

function receiveDataFromReactNative(event) {
  const receivedData = JSON.parse(event.data);
  const {type, data} = receivedData;

  if (type === 'map') {
    ({CampLatLng, StopLatLng} = data);
    createMap();
    createMarker();
  } else if (StopLatLng && type === 'stop' && data !== null) {
    panToLatLng(data, StopLatLng[data]);
  } else if (CampLatLng && type === 'camp' && data !== null) {
    panToLatLng(data, CampLatLng[data]);
  }
}

sendDataToReactNative('WebView Activated');

function createMap() {
  const mapOptions = {
    center: CampLatLng['CH'],
    zoom: zoomValue('CH'),
    zoomControl: false,
  };

  const layer = new L.TileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
  );

  map = L.map('map', mapOptions).addLayer(layer);
}

function createMarker() {
  var stopIconOptions = {
    iconUrl: './bus-stop.png',
    iconSize: [30, 30],
  };

  for (const stopNum in StopLatLng) {
    const stopMarkerOptions = {
      title: stopNum,
      icon: L.icon(stopIconOptions),
    };

    let newMarker = window['marker' + stopNum];
    newMarker = L.marker(StopLatLng[stopNum], stopMarkerOptions)
      .addTo(map)
      .on('click', e => markerClickEvent(e));
  }
}

const zoomValue = camp => {
  if (camp === 'CW' || camp === 'CC') return 15;
  else if (camp === 'CH' || camp === 'CG') return 17;
  else return 17;
};

const markerClickEvent = e => sendDataToReactNative(e.target.options.title);

const panToLatLng = (id, [lat, lng]) =>
  map.setView(L.latLng(lat, lng), zoomValue(id));
