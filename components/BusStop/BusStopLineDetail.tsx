import React, {useEffect, useState} from 'react';
import ModalView from '../Modal';
import * as Styles from '../../styles/BusStopStyle';
import * as Constants from '../../utils/constants';
import useBusStopData from '../../utils/hooks/useBusStopData';
import BusStopLineDetailInfo from './BusStopLineDetailInfo';

export default function BusStopLineDetail({
  lineData,
  isVisible,
  closeFunction,
}) {
  const {lineDetail} = useBusStopData('line', lineData);
  return (
    <ModalView isVisible={isVisible} closeFunction={closeFunction}>
      <Styles.ModalView full={true}>
        <Styles.BackImgPressable onPress={closeFunction}>
          <Styles.BackImg source={Constants.BackImg} />
        </Styles.BackImgPressable>

        <Styles.Header full={true}>
          <Styles.HeaderText
            numberOfLines={1}
            ellipsizeMode={'tail'}
            full={true}>
            {lineData.busName}
          </Styles.HeaderText>
        </Styles.Header>

        <Styles.StopList>
          {lineDetail.stopList.map((stopID, index) => {
            return (
              <BusStopLineDetailInfo
                stopID={stopID}
                busTime={lineDetail.scheduleList[index]}
                key={index}
              />
            );
          })}
        </Styles.StopList>
      </Styles.ModalView>
    </ModalView>
  );
}
