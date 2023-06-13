import React, {useRef} from 'react';
import {ScrollView} from 'react-native';
import {useRecoilState} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import Modal from '../Modal';
import LineItemInfo from './LineDetailInfo';
import * as S from '../../styles/BusLineStyle';
import useBusStopData from '../../utils/hooks/useBusStopData';

// TODO [med] fix unneccessary rendering is happen at here (use console.log)
export default function LineDetail({lineData, isVisible, closeFunction}) {
  const [selectedStop, setSelectedStop] = useRecoilState(selectedStopState);
  let scrollViewRef = useRef<ScrollView>(null);
  const {lineDetail} = useBusStopData('line', lineData);

  function scrollToPoint() {
    if (scrollViewRef.current !== null)
      scrollViewRef.current.scrollTo({y: (lineData.stopIndex - 1) * 70 - 35});
  }

  function selectStopinDetail(id: string) {
    setSelectedStop(id);
    closeFunction();
  }

  return (
    <Modal isVisible={isVisible} closeFunction={closeFunction}>
      <S.Modal>
        <S.Header>
          <S.HeaderText>{lineData.busName}</S.HeaderText>
        </S.Header>
        <S.DetailList ref={scrollViewRef} onContentSizeChange={scrollToPoint}>
          {lineDetail.stopList.map((stopID, index) => {
            return (
              <LineItemInfo
                isStart={index === 0}
                isEnd={index === Object.keys(lineDetail.stopList).length - 1}
                isPoint={lineData.stopIndex === index}
                isAfter={lineData.stopIndex <= index}
                stopID={stopID}
                busTime={lineDetail.scheduleList[index]}
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
