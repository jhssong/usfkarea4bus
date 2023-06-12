export const InitBarText = 'Search Bus Stop';

export const MenuImgSrc = require('../assets/img/menu.png');
export const LocImgSrc = require('../assets/img/location.png');
export const BackImgSrc = require('../assets/img/back.png');
export const BusImgSrc = require('../assets/img/bus.png');
export const BusSearchImgSrc = require('../assets/img/bus-search.png');
export const PointSrc = require('../assets/img/point.png');

export const CheckWebViewErrorScript = `
window.onerror = function(message, sourcefile, lineno, colno, error) {
  alert("Message: " + message + " - Source: " + sourcefile + " Line: " + lineno + ":" + colno);
  return true;
};
true;
`;

import BusList from '../data/BusList';
export {BusList};

import StopList from '../data/StopList';
export {StopList};

import {CH_WeekStop, CH_WkndStop, CHD_Stop} from '../data/CH_StopList';
import {
  CH_WeekSchedule,
  CH_WkndSchedule,
  CHD_WeekSchedule,
  CHD_WkndSchedule,
} from '../data/CH_ScheduleList';

export {
  CH_WeekStop,
  CH_WkndStop,
  CHD_Stop,
  CH_WeekSchedule,
  CH_WkndSchedule,
  CHD_WeekSchedule,
  CHD_WkndSchedule,
};
