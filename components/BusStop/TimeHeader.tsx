import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import * as Styles from '../../styles/BusStopStyle';
import theme from '../../styles/theme';
import useTime from '../../utils/hooks/useTime';

export default function TimeHeader() {
  const {timeHMS, isHoliday, timePicked, handleTimePicker, handleisHoliday} =
    useTime();
  const timeText = `Now Time is ${
    timeHMS[0] + ':' + timeHMS[1] + ':' + timeHMS[2]
  } ${timePicked ? '(fixed)' : ''}`;

  return (
    <Styles.TimeHeader>
      <Styles.TimePickerPressable onPress={handleTimePicker}>
        <Styles.TimeHeaderText>{timeText}</Styles.TimeHeaderText>
      </Styles.TimePickerPressable>

      <Styles.CheckBoxPressable onPress={handleisHoliday}>
        <Styles.TimeHeaderText>Holiday</Styles.TimeHeaderText>
        <CheckBox // height: 32px(uncontrollable)
          disabled={false}
          tintColors={{
            true: theme.color.lightTextBlack,
            false: theme.color.lightTextBlack,
          }}
          value={isHoliday}
          onValueChange={newValue => handleisHoliday()}
        />
      </Styles.CheckBoxPressable>
    </Styles.TimeHeader>
  );
}
