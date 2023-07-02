import {atom} from 'recoil';

export const selectedStopState = atom<string | null>({
  key: 'selectedStopState',
  default: null,
});

export const selectedCampState = atom<string | null>({
  key: 'selectedCampState',
  default: null,
});

export const timeState = atom<Date>({
  key: 'timeState',
  default: new Date(),
});

export const isHolidayState = atom<boolean>({
  key: 'isHolidayState',
  default: new Date().getDay() === 0 || new Date().getDay() === 6,
});

export const timePickedState = atom<boolean>({
  key: 'timePickedState',
  default: false,
});
