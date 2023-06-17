export type MetaData = [string[], string[][]];

export type StopData = LineData[];
export const emptyStopData: StopData = [];

export type LineData = {
  camp: string;
  stopID: string | null;
  nextStopID: string;
  stopIndex: number;
  scheduleIndex: number;
  nowTime: string;
  nextTime: string;
};

export type LineDetail = {
  camp: string;
  stopList: string[];
  scheduleList: string[] | string;
};

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
  itemIndex: number;
  openBusLineModal: (index: number) => void;
};

export type LineDetailProps = {
  lineData: LineData;
  isVisible: boolean;
  closeFunction: () => void;
};

export type LineItemProps = {
  index: number;
  stopID: string;
  busName: string;
  currentStopIndex: number;
  lineDetail: LineDetail;
  handlePressable: () => void;
};
