// document.addEventListener('message', receiveDataFromReactNative);

// const sendDataToReactNative = async data => {
//   window.ReactNativeWebView.postMessage(data);
// };

// function receiveDataFromReactNative(event) {
//   const {type, stop} = JSON.parse(event.data);
//   if (type === 'stop') panToCurrentStop(stop);
// }

const campCenterLatLng = {
  CH: [35.8515, 128.6012],
  CW: [35.8364, 128.5885],
  CG: [35.848887, 128.594],
  CC: [35.997457, 128.41505],
};

const stopLatLng = {
  CH1: [35.851514, 128.600026],
  CH2: [35.852575, 128.601154],
  CH3: [35.851605, 128.60208],
  CH4: [35.849561, 128.60171],
  CG5: [35.848748, 128.595072],
  CG5A: [35.849855, 128.593822],
  CW6: [35.840302, 128.584406],
  CW7: [35.839817, 128.585662],
  CW8: [35.838432, 128.591018],
  CW9: [35.840905, 128.587697],
  CW10: [35.835657, 128.590886],
  CW11: [35.836985, 128.592261],
  CW12: [35.839156, 128.592344],
};

const zoomByCamp = camp => {
  if (camp === 'CH') return 17;
  else if (camp === 'CW') return 15;
  else if (camp === 'CG') return 17;
  else if (camp === 'CC') return 15;
};
const mapOptions = {
  center: campCenterLatLng['CG'],
  zoom: zoomByCamp('CG'),
  zoomControl: false,
};

const layer = new L.TileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
);

const map = L.map('map', mapOptions).addLayer(layer);

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

function markerClickEvent(e) {
  const stopNum = e.target.options.title;
  console.log(stopNum);
  // sendDataToReactNative(stopNum);
}

function panToCurrentStop(num) {
  const lat = stopLatLng[num][0];
  const lng = stopLatLng[num][1];
  map.panTo(L.latLng(lat, lng));
}
