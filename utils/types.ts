export type MetaData = [string, string[], string[][]];
export const emptyReturn: MetaData = ['', [''], ['']['']];

export interface LineData {
  busName: string;
  stopID: string | null;
  nextStopID: string;
  stopIndex: number;
  scheduleIndex: number;
  nowTime: string;
  nextTime: string;
}

export type StopData = LineData[];

export interface LineDetail {
  stopList: string[];
  scheduleList: string[];
}

export const emptyStopData: StopData = [];

export const emptyLineDetail: LineDetail = {
  stopList: [],
  scheduleList: [],
};

export type BusStopVisible = boolean;
