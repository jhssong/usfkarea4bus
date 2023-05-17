let map, campLatLng, stopLatLng;

if (window.ReactNativeWebView)
  document.addEventListener('message', receiveDataFromReactNative);

const sendDataToReactNative = async data => {
  window.ReactNativeWebView.postMessage(data);
};

function receiveDataFromReactNative(event) {
  const receivedData = JSON.parse(event.data);
  const {type, data} = receivedData;
  if (type === 'map') {
    ({campLatLng, stopLatLng} = data);
    createMap();
    createMarker();
  } else if (stopLatLng && type === 'stop') {
    panToLatLng(stopLatLng[data]);
  }
}

sendDataToReactNative('WebView Activated');

function createMap() {
  const mapOptions = {
    center: campLatLng['CH'],
    zoom: zoomByCamp('CH'),
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

  for (const stopNum in stopLatLng) {
    const stopMarkerOptions = {
      title: stopNum,
      icon: L.icon(stopIconOptions),
    };

    let newMarker = window['marker' + stopNum];
    newMarker = L.marker(stopLatLng[stopNum], stopMarkerOptions)
      .addTo(map)
      .on('click', e => markerClickEvent(e));
  }
}

const zoomByCamp = camp => {
  if (camp === 'CH') return 17;
  else if (camp === 'CW') return 15;
  else if (camp === 'CG') return 17;
  else if (camp === 'CC') return 15;
};

const markerClickEvent = e => {
  const stopNum = e.target.options.title;
  sendDataToReactNative(stopNum);
};

// TODO [WebView/mid] move above the stopModal
const panToLatLng = ([lat, lng]) => {
  map.panTo(L.latLng(lat, lng));
  // zoom function
  // above a little bit
};
