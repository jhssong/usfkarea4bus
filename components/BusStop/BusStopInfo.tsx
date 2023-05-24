import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import ModalView from '../Modal';
import * as Styles from '../../styles/BusStopStyle';
import * as Constants from '../../utils/constants';
import BusStopSubHeader from './BusStopSubHeader';
import BusStopLineItem from './BusStopLineItem';
import useBusStopData from '../../utils/hooks/useBusStopData';

export default function BusStopInfo() {
  const [busStopVisible, setBusStopVisible] = useState<boolean>(false);
  const [fullSize, setFullSize] = useState<boolean>(false);
  const [selectedStop, setSelectedStop] = useRecoilState(selectedStopState);
  const [headerText, setHeaderText] = useState<string>();
  const [stopData] = useBusStopData(busStopVisible);

  function closeBusStopModal() {
    if (fullSize) {
      handleFullSize();
      return;
    }
    setBusStopVisible(false);
    setSelectedStop(null);
  }

  function handleFullSize() {
    setFullSize(prev => !prev);
  }

  useEffect(() => {
    if (selectedStop === null) setBusStopVisible(false);
    else {
      const stop = Constants.StopList[selectedStop];
      setHeaderText(`Stop ${stop.num} - ${stop.name}`);
      setBusStopVisible(true);
    }
  }, [selectedStop]);

  return (
    <>
      <ModalView isVisible={busStopVisible} closeFunction={closeBusStopModal}>
        <Styles.ModalContainer onPress={closeBusStopModal}>
          <Styles.ModalView full={fullSize}>
            {fullSize && (
              <Styles.BackImgPressable onPress={handleFullSize}>
                <Styles.BackImg source={Constants.BackImg} />
              </Styles.BackImgPressable>
            )}
            <Styles.Header onPress={handleFullSize} full={fullSize}>
              {!fullSize && <Styles.HandleBar />}
              <Styles.HeaderText
                numberOfLines={1}
                ellipsizeMode={'tail'}
                full={fullSize}>
                {headerText}
              </Styles.HeaderText>
            </Styles.Header>

            <BusStopSubHeader />

            <Styles.BusStopLineList>
              {stopData.map((LineData, index) => {
                return <BusStopLineItem LineData={LineData} key={index} />;
              })}
            </Styles.BusStopLineList>
          </Styles.ModalView>
        </Styles.ModalContainer>
      </ModalView>
    </>
  );
}
