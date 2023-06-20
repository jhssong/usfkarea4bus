import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import * as S from '../../styles/BusStopStyle';
import * as C from '../../utils/constants';
import * as T from '../../utils/types';
import Modal from '../Modal';
import StopLineItem from './StopLineItem';
import TimeController from '../TimeController';
import LineDetail from '../BusLine/LineDetail';
import useBusStopData from '../../utils/hooks/useBusStopData';

export default function StopInfo() {
  const [selectedStop, setSelectedStop] = useRecoilState(selectedStopState);
  const [busStopVisible, setBusStopVisible] = useState<boolean>(false);
  const [busLineVisible, setBusLineVisible] = useState<boolean>(false);
  const stopData = useBusStopData();
  const [headerText, setHeaderText] = useState<string>('');
  const [itemIndex, setItemIndex] = useState<number>(-1);
  const lineDetailVisible = itemIndex !== -1;

  function closeBusStopModal() {
    setBusStopVisible(false);
    setSelectedStop(null);
  }

  const closeBusLineModal = () => {
    setItemIndex(-1);
    setBusLineVisible(false);
  };

  function handleHeaderPress() {}

  useEffect(() => {
    if (selectedStop === null) setBusStopVisible(false);
    else {
      const stop: T.StopListInfo = C.StopList[selectedStop];
      setHeaderText(`Stop ${stop.num} - ${stop.name}`);
      setBusStopVisible(true);
    }
  }, [selectedStop]);

  return (
    <Modal isVisible={busStopVisible} closeFunction={closeBusStopModal}>
      <S.Modal onPress={handleHeaderPress}>
        <S.Header>
          <S.HandleBar />
          <S.HeaderText>{headerText}</S.HeaderText>
        </S.Header>

        <TimeController />

        <S.StopLineList>
          {stopData.map((LineData, index) => {
            function openBusLineModal() {
              setItemIndex(index);
              setBusLineVisible(true);
            }
            return (
              <StopLineItem
                lineData={LineData}
                openBusLineModal={openBusLineModal}
                key={index}
              />
            );
          })}
        </S.StopLineList>

        {lineDetailVisible && (
          <LineDetail
            lineData={stopData[itemIndex]}
            isVisible={busLineVisible}
            closeFunction={closeBusLineModal}
          />
        )}
      </S.Modal>
    </Modal>
  );
}
