import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import Modal from '../Modal';
import StopLineItem from './StopLineItem';
import TimeController from '../TimeController';
import LineDetail from '../BusLine/LineDetail';
import * as S from '../../styles/BusStopStyle';
import * as C from '../../utils/constants';
import useBusStopData from '../../utils/hooks/useBusStopData';

export default function StopInfo() {
  const [selectedStop, setSelectedStop] = useRecoilState(selectedStopState);
  const [busStopVisible, setBusStopVisible] = useState<boolean>(false);
  const [busLineVisible, setBusLineVisible] = useState<boolean>(false);
  const [headerText, setHeaderText] = useState<string>();
  const {stopData} = useBusStopData('stop', busStopVisible);
  const [itemIndex, setItemIndex] = useState<number>(-1);

  function closeBusStopModal() {
    setBusStopVisible(false);
    setSelectedStop(null);
  }

  function openBusLineModal(index: number) {
    setItemIndex(index);
    setBusLineVisible(true);
  }

  const closeBusLineModal = () => {
    setItemIndex(-1);
    setBusLineVisible(false);
  };

  useEffect(() => {
    if (selectedStop === null) setBusStopVisible(false);
    else {
      const stop = C.StopList[selectedStop];
      setHeaderText(`Stop ${stop.num} - ${stop.name}`);
      setBusStopVisible(true);
    }
  }, [selectedStop]);

  return (
    <Modal isVisible={busStopVisible} closeFunction={closeBusStopModal}>
      <S.Modal onPress={() => {}}>
        <S.Header>
          <S.HandleBar />
          <S.HeaderText>{headerText}</S.HeaderText>
        </S.Header>

        <TimeController />

        <S.StopLineList>
          {stopData.map((LineData, index) => {
            return (
              <StopLineItem
                lineData={LineData}
                itemIndex={index}
                openBusLineModal={openBusLineModal}
                key={index}
              />
            );
          })}
        </S.StopLineList>

        {itemIndex !== -1 && (
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
