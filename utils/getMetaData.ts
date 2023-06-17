import * as C from './constants';
import * as T from './types';

const emptyReturn: T.MetaData = [[''], ['']['']];

export function getMetaData(camp: string, isHoliday: boolean): T.MetaData {
  if ((camp === 'CH' || camp === 'CG' || camp == 'CW') && !isHoliday)
    return [C.CH_WeekStop, C.CH_WeekSchedule];
  else if ((camp === 'CH' || camp === 'CG' || camp == 'CW') && isHoliday)
    return [C.CH_WkndStop, C.CH_WkndSchedule];
  else if (camp === 'CHD' && !isHoliday)
    return [C.CHD_Stop, C.CHD_WeekSchedule];
  else if (camp === 'CHD' && isHoliday) return [C.CHD_Stop, C.CHD_WkndSchedule];
  else return emptyReturn;
}
