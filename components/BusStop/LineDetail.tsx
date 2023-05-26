import React from 'react';
import Modal from '../Modal';
import BackImg from './BackImg';
import LineItemInfo from './LineDetailInfo';
import * as Styles from '../../styles/BusStopStyle';
import useBusStopData from '../../utils/hooks/useBusStopData';

export default function LineDetail({lineData, isVisible, closeFunction}) {
  const {lineDetail} = useBusStopData('line', lineData);

  return (
    <Modal isVisible={isVisible} closeFunction={closeFunction}>
      <Styles.Modal full={true}>
        <BackImg closeFunction={closeFunction} />

        <Styles.Header full={true}>
          <Styles.HeaderText full={true}>{lineData.busName}</Styles.HeaderText>
        </Styles.Header>

        <Styles.DetailList>
          {lineDetail.stopList.map((stopID, index) => {
            return (
              <LineItemInfo
                stopID={stopID}
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
