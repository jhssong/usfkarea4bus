import CampList from '../data/CampList';
import BusList from '../data/BusList';
import StopList from '../data/StopList';
import CampLatLng from '../data/CampLatLng';
import StopLatLng from '../data/StopLatLng';
import {GateInfo, BarberShopInfo} from '../data/CampInfo';

export {
  CampList,
  BusList,
  StopList,
  CampLatLng,
  StopLatLng,
  GateInfo,
  BarberShopInfo,
};

import {CH_WeekStop, CH_WkndStop, CHD_Stop} from '../data/CH_StopList';
import {CH_WeekSchedule, CH_WkndSchedule} from '../data/CH_ScheduleList';
import {CHD_WeekSchedule, CHD_WkndSchedule} from '../data/CH_ScheduleList';
import {CC_WeekStop, CC_WkndStop} from '../data/CC_StopList';
import {CC_WeekSchedule, CC_WkndSchedule} from '../data/CC_ScheduleList';

export {
  CH_WeekStop,
  CH_WkndStop,
  CHD_Stop,
  CH_WeekSchedule,
  CH_WkndSchedule,
  CHD_WeekSchedule,
  CHD_WkndSchedule,
  CC_WeekStop,
  CC_WkndStop,
  CC_WeekSchedule,
  CC_WkndSchedule,
};

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
