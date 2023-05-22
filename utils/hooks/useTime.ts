import {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {isHolidayState, timePickedState, timeState} from '../../stores/atom';
import getNowTime from '../getNowTime';

export default function useTime() {
  const [isHoliday, setIsHoliday] = useRecoilState<boolean>(isHolidayState);
  const [time, setTime] = useRecoilState<Date>(timeState);
  const [timePicked, setTimePicked] = useRecoilState<boolean | null>(
    timePickedState,
  );

  function onTimePickerChange(event, selectedDate) {
    setTime(selectedDate);
    setTimePicked(true);
  }

  function handleTimePicker() {
    if (timePicked) {
      setTime(getNowTime());
      setTimePicked(false);
    } else
      DateTimePickerAndroid.open({
        value: time,
        onChange: onTimePickerChange,
        mode: 'time',
        is24Hour: true,
      });
  }

  const handleisHoliday = () => setIsHoliday(prev => !prev);

  return {
    time,
    isHoliday,
    timePicked,
    handleTimePicker,
    handleisHoliday,
  };
}
