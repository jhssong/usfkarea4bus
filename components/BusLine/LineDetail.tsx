import React, {useRef} from 'react';
import {ScrollView} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import * as S from '../../styles/BusLineStyle';
import * as C from '../../utils/constants';
import * as T from '../../utils/types';
import Modal from '../Modal';
import LineDetailItem from './LineDetailItem';
import useBusLineDetail from '../../utils/hooks/useBusLineDetail';

// TODO [med] fix unneccessary rendering is happen at here (use console.log)
export default function LineDetail(props: T.LineDetailProps) {
  const {lineData, isVisible, closeFunction} = props;
  const setSelectedStop = useSetRecoilState(selectedStopState);
  let scrollViewRef = useRef<ScrollView>(null);
  const {lineDetail} = useBusLineDetail(lineData);
  const header = `${C.BusList[lineData.camp]}`;

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
          <S.HeaderText>{header}</S.HeaderText>
        </S.Header>
        <S.DetailList ref={scrollViewRef} onContentSizeChange={scrollToPoint}>
          {lineDetail.stopList.map((stopID, index) => {
            console.log(lineDetail);
            return (
              <LineDetailItem
                index={index}
                stopID={stopID}
                busName={lineData.camp}
                currentStopIndex={lineData.stopIndex}
                lineDetail={lineDetail}
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
