import React from 'react';
import styled from 'styled-components/native';
import CheckBox from '@react-native-community/checkbox';
import theme from '../styles/theme';
import {BarTop, BarLeft, WIDTH} from '../styles/GlobalStyle';
import useTime from '../utils/hooks/useTime';

export default function TimeController() {
  const {timeHMS, isHoliday, timePicked, handleTimePicker, handleisHoliday} =
    useTime();
  const timeText = `Now Time is ${
    timeHMS[0] + ':' + timeHMS[1] + ':' + timeHMS[2]
  } ${timePicked ? '(fixed)' : ''}`;

  return (
    <TimeHeader>
      <TimePickerPressable onPress={handleTimePicker}>
        <TimeHeaderText>{timeText}</TimeHeaderText>
      </TimePickerPressable>

      <CheckBoxPressable onPress={handleisHoliday}>
        <TimeHeaderText>Holiday</TimeHeaderText>
        <CheckBox // height: 32px(uncontrollable)
          disabled={false}
          tintColors={{
            true: theme.color.lightTextBlack,
            false: theme.color.lightTextBlack,
          }}
          value={isHoliday}
          onValueChange={value => handleisHoliday()}
        />
      </CheckBoxPressable>
    </TimeHeader>
  );
}

const TimeHeader = styled.View`
  padding: ${BarLeft}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.border};
`;

const TimePickerPressable = styled.Pressable`
  width: ${WIDTH - 120}px;
  // padding: ${BarTop}px ${BarLeft}px;
  flex-direction: row;
  align-items: center;
`;

const CheckBoxPressable = styled.Pressable`
  width: 120px;
  flex-direction: row;
  align-items: center;
`;

const TimeHeaderText = styled.Text`
  color: ${({theme}) => theme.color.lightTextBlack};
  font-size: ${({theme}) => theme.fontSize.md};
`;
