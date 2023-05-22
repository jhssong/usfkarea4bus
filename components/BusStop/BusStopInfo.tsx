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
  const [busStopVisible, setBusStopVisible] = useState<boolean>();
  const [selectedStop, setSelectedStop] = useRecoilState(selectedStopState);
  const [headerText, setHeaderText] = useState<string>();
  const [stopData] = useBusStopData(busStopVisible);

  function closeBusStopModal() {
    setBusStopVisible(false);
    setSelectedStop(null);
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
    <ModalView isVisible={busStopVisible} closeFunction={closeBusStopModal}>
      <Styles.ModalContainer onPress={closeBusStopModal}>
        <Styles.ModalView>
          <Styles.Header>
            <Styles.HeaderText numberOfLines={1} ellipsizeMode={'tail'}>
              {headerText}
            </Styles.HeaderText>
          </Styles.Header>

          <BusStopSubHeader />

          {stopData.map((LineData, index) => {
            return <BusStopLineItem LineData={LineData} key={index} />;
          })}
        </Styles.ModalView>
      </Styles.ModalContainer>
    </ModalView>
  );
}
