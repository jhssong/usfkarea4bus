export const InitBarText = 'Search Bus Stop';

export const MenuImg = require('../assets/img/menu.png');
export const BackImg = require('../assets/img/back.png');
export const BusImg = require('../assets/img/bus.png');

export const CheckWebViewErrorScript = `
window.onerror = function(message, sourcefile, lineno, colno, error) {
  alert("Message: " + message + " - Source: " + sourcefile + " Line: " + lineno + ":" + colno);
  return true;
};
true;
`;

export const CampList = {
  CH: 'CH POST RUN',
  CHD: 'CH DFAC RUN',
  CC: 'CC POST RUN',
  NAK: 'NAKDONG EXPRESS SHUTTLE',
};

export const StopList = {
  CHTMP: {
    camp: 'Henry',
    num: '-1',
    name: 'HENRY TMP',
  },
  CH1: {
    camp: 'Henry',
    num: '1',
    name: 'HQ, 19th ESC',
  },
  CH2: {
    camp: 'Henry',
    num: '2',
    name: 'HQ, USAG-Daegu',
  },
  CH3: {
    camp: 'Henry',
    num: '3',
    name: 'SPO 19th ESC',
  },
  CH4: {
    camp: 'Henry',
    num: '4',
    name: 'SJA/ED CENTER',
  },
  CG5: {
    camp: 'George',
    num: '5',
    name: 'George BUS STOP',
  },
  CG5A: {
    camp: 'George',
    num: '5A',
    name: 'George CDC',
  },
  CW6: {
    camp: 'Walker',
    num: '6',
    name: 'GATE #6 (PMO)',
  },
  CW7: {
    camp: 'Walker',
    num: '7',
    name: 'WALKER LODGE',
  },
  CW8: {
    camp: 'Walker',
    num: '8',
    name: 'BLDG #330 SSC',
  },
  CW9: {
    camp: 'Walker',
    num: '9',
    name: 'BLDG #363(commissary)',
  },
  CW10: {
    camp: 'Walker',
    num: '10',
    name: 'JCISA',
  },
  CW11: {
    camp: 'Walker',
    num: '11',
    name: 'BLDG #398(Hill Top)',
  },
  CW12: {
    camp: 'Walker',
    num: '12',
    name: 'GATE #4',
  },
};
