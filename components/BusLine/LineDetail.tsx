import React, {useRef, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import * as S from '../../styles/BusLineStyle';
import * as C from '../../utils/constants';
import * as T from '../../utils/types';
import Modal from '../Modal';
import LineDetailItem from './LineDetailItem';
import useBusLineData from '../../utils/hooks/useBusLineData';

export default function LineDetail(props: T.LineDetailProps) {
  const {lineData, isVisible, closeFunction} = props;
  let scrollViewRef = useRef<ScrollView>(null);
  const setSelectedStop = useSetRecoilState(selectedStopState);
  const [stopList, scheduleList] = useBusLineData(lineData);

  const header = `${C.BusList[lineData.busID]}`;

  function scrollToPoint() {
    scrollViewRef.current?.scrollTo({y: (lineData.stopIndex - 1) * 70 - 35});
  }

  function selectStopinDetail(id: string) {
    setSelectedStop(id);
    closeFunction();
  }

  return (
    <Modal isVisible={isVisible} closeFunction={closeFunction}>
      <S.Modal>
        <S.Header>
          <S.HeaderText>{header}</S.HeaderText>
        </S.Header>
        <S.DetailList ref={scrollViewRef} onContentSizeChange={scrollToPoint}>
          {stopList.map((stopID, index) => {
            return (
              <LineDetailItem
                index={index}
                busID={lineData.busID}
                stopID={stopID}
                currentStopIndex={lineData.stopIndex}
                stopList={stopList}
                scheduleList={scheduleList}
                handlePressable={() => selectStopinDetail(stopID)}
                key={index}
              />
            );
          })}
        </S.DetailList>
      </S.Modal>
    </Modal>
  );
}
