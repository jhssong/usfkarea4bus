import {atom} from 'recoil';

export const selectedStopState = atom<string | null>({
  key: 'selectedStopState',
  default: null,
});
