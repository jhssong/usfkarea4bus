import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import * as Styles from '../../styles/BusStopStyle';
import theme from '../../styles/theme';
import useTime from '../../utils/hooks/useTime';

export default function BusStopSubHeader() {
  const {time, isHoliday, timePicked, handleTimePicker, handleisHoliday} =
    useTime();
  const timeText = `Now Time is ${time.toString().split(' ')[4]} ${
    timePicked ? '(fixed)' : ''
  }`;

  return (
    <Styles.SubHeader>
      <Styles.TimePickerPressable onPress={handleTimePicker}>
        <Styles.TimePickerText>{timeText}</Styles.TimePickerText>
      </Styles.TimePickerPressable>

      <Styles.CheckBoxPressable onPress={handleisHoliday}>
        <Styles.CheckBoxText>Holiday</Styles.CheckBoxText>
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
    </Styles.SubHeader>
  );
}
