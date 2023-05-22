import {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {isHolidayState, timePickedState, timeState} from '../../stores/atom';
import getNowTime from '../getNowTime';

export default function useTime() {
  const [isHoliday, setIsHoliday] = useRecoilState<boolean>(isHolidayState);
  const [time, setTime] = useRecoilState<Date>(timeState);
  const [timePicked, setTimePicked] = useRecoilState<boolean>(timePickedState);

  function onTimePickerChange(event, selectedDate) {
    console.log(typeof event);
    if (event.type === 'set') {
      setTime(selectedDate);
      setTimePicked(true);
    }
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
        positiveButton: {label: 'OK'},
        negativeButton: {label: 'CANCEL'},
      });
  }

  const handleisHoliday = () => setIsHoliday(prev => !prev);

  /**
   * ref:
   * https://medium.com/how-to-react/simple-way-to-create-a-stopwatch-in-react-js-bcc0e08e041e
   */
  useEffect(() => {
    let interval;
    if (timePicked === false) {
      interval = setInterval(() => setTime(new Date()), 1000);
    }
    return () => clearInterval(interval);
  }, [timePicked, time]);

  return {
    time,
    isHoliday,
    timePicked,
    handleTimePicker,
    handleisHoliday,
  };
}
