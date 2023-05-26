import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import Modal from '../Modal';
import BackImg from './BackImg';
import TimeHeader from './TimeHeader';
import StopLineItem from './StopLineItem';
import LineDetail from './LineDetail';
import * as Styles from '../../styles/BusStopStyle';
import {StopList} from '../../utils/constants';
import useBusStopData from '../../utils/hooks/useBusStopData';

export default function StopInfo() {
  const [busStopVisible, setBusStopVisible] = useState<boolean>(false);
  const [busLineVisible, setBusLineVisible] = useState<boolean>(false);
  const [fullSize, setFullSize] = useState<boolean>(false);
  const [selectedStop, setSelectedStop] = useRecoilState(selectedStopState);
  const [headerText, setHeaderText] = useState<string>();
  const {stopData} = useBusStopData('stop', busStopVisible);
  const [itemIndex, setItemIndex] = useState<number>(-1);

  function closeBusStopModal() {
    if (fullSize) {
      handleFullSize();
      return;
    }
    setBusStopVisible(false);
    setSelectedStop(null);
  }

  const closeBusLineModal = () => {
    setBusLineVisible(false);
    setItemIndex(-1);
  };

  function openBusLineModal(index: number) {
    setItemIndex(index);
    setBusLineVisible(true);
  }

  const handleFullSize = () => setFullSize(prev => !prev);

  useEffect(() => {
    if (selectedStop === null) setBusStopVisible(false);
    else {
      const stop = StopList[selectedStop];
      setHeaderText(`Stop ${stop.num} - ${stop.name}`);
      setBusStopVisible(true);
    }
  }, [selectedStop]);

  return (
    <>
      <Modal isVisible={busStopVisible} closeFunction={closeBusStopModal}>
        <Styles.Modal full={fullSize} onPress={closeBusStopModal}>
          {fullSize && <BackImg closeFunction={handleFullSize} />}

          <Styles.Header onPress={handleFullSize} full={fullSize}>
            {!fullSize && <Styles.HandleBar />}
            <Styles.HeaderText full={fullSize}>{headerText}</Styles.HeaderText>
          </Styles.Header>

          <TimeHeader />

          <Styles.StopLineList>
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
          </Styles.StopLineList>

          {itemIndex !== -1 && (
            <LineDetail
              lineData={stopData[itemIndex]}
              isVisible={busLineVisible}
              closeFunction={closeBusLineModal}
            />
          )}
        </Styles.Modal>
      </Modal>
    </>
  );
}
