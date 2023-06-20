export type MetaData = [stopArr, scheduleArr];
export type stopArr = string[];
export type scheduleArr = string[][];

export type StopData = LineData[];
export const emptyStopData: StopData = [];

export type LineData = {
  busID: string;
  stopID: string;
  nextStopID: string;
  stopIndex: number;
  nowTime: string;
  nextTime: string;
};

// export type LineDetail = {
//   stopList: string[];
//   scheduleList: string[] | string;
// };

export type StopListInfo = {
  camp: string;
  num: string;
  name: string;
};

export type SearchModalProps = {
  isVisible: boolean;
  closeFunction: () => void;
};

export type SearchResultProps = {
  result: string[];
  closeFunction: () => void;
};

export type StopLineItemProps = {
  lineData: LineData;
  openBusLineModal: () => void;
};

export type LineDetailProps = {
  lineData: LineData;
  isVisible: boolean;
  closeFunction: () => void;
};

export type LineItemProps = {
  index: number;
  busID: string;
  stopID: string;
  currentStopIndex: number;
  stopList: string[];
  scheduleList: string[];
  handlePressable: () => void;
};
