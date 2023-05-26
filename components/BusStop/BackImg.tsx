import React from 'react';
import {BackPressable, BackImage} from '../../styles/BusStopStyle';
import {BackImgSrc} from '../../utils/constants';

export default function BackImg({closeFunction}) {
  return (
    <BackPressable onPress={closeFunction}>
      <BackImage source={BackImgSrc} />
    </BackPressable>
  );
}
