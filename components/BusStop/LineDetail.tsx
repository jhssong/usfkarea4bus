import React, {useEffect, useRef} from 'react';
import Modal from '../Modal';
import BackImg from './BackImg';
import LineItemInfo from './LineDetailInfo';
import * as Styles from '../../styles/BusStopStyle';
import useBusStopData from '../../utils/hooks/useBusStopData';
import useTime from '../../utils/hooks/useTime';
import {ScrollView} from 'react-native';

// TODO [med] fix unneccessary rendering is happen at here (use console.log)
export default function LineDetail({lineData, isVisible, closeFunction}) {
  let scrollViewRef = useRef<ScrollView>(null);
  const {lineDetail} = useBusStopData('line', lineData);
  const {timeHM} = useTime();

  function scrollToPoint() {
    if (scrollViewRef.current !== null)
      scrollViewRef.current.scrollTo({y: (lineData.stopIndex - 1) * 70 - 35});
  }

  return (
    <Modal isVisible={isVisible} closeFunction={closeFunction}>
      <Styles.Modal full={true}>
        <BackImg closeFunction={closeFunction} />

        <Styles.Header full={true}>
          <Styles.HeaderText full={true}>{lineData.busName}</Styles.HeaderText>
        </Styles.Header>

        {/* TODO [low] add current bus location
         */}
        <Styles.DetailList
          ref={scrollViewRef}
          onContentSizeChange={scrollToPoint}>
          {lineDetail.stopList.map((stopID, index) => {
            return (
              <LineItemInfo
                isPoint={lineData.stopIndex === index}
                isAfter={lineData.stopIndex <= index}
                stopID={stopID}
                timeHM={timeHM}
                busTime={lineDetail.scheduleList[index]}
                key={index}
              />
            );
          })}
        </Styles.DetailList>
      </Styles.Modal>
    </Modal>
  );
}
