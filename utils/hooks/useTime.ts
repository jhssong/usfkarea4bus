import {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {isHolidayState, timePickedState, timeState} from '../../stores/atom';

export default function useTime() {
  const [isHoliday, setIsHoliday] = useRecoilState<boolean>(isHolidayState);
  const [time, setTime] = useRecoilState<Date>(timeState);
  const [timePicked, setTimePicked] = useRecoilState<boolean>(timePickedState);
  const timeHMS = time.toString().split(' ')[4].split(':');
  const timeHM = timeHMS[0] + timeHMS[1];

  function onTimePickerChange(event, selectedDate) {
    if (event.type === 'set') {
      setTime(selectedDate);
      setTimePicked(true);
    }
  }

  function handleTimePicker() {
    if (timePicked) {
      const currentTime = getCurrentTimeData();
      setTime(currentTime);
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

  function getCurrentTimeData() {
    const now = new Date();
    const UTC = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const nowTime = new Date(UTC + KR_TIME_DIFF);

    return nowTime;
  }

  /**
   * ref:
   * https://medium.com/how-to-react/simple-way-to-create-a-stopwatch-in-react-js-bcc0e08e041e
   */
  useEffect(() => {
    let interval: any;
    if (timePicked === false) {
      interval = setInterval(() => setTime(new Date()), 1000);
    }
    return () => clearInterval(interval);
  }, [timePicked, time]);

  return {
    timeHM,
    timeHMS,
    isHoliday,
    timePicked,
    handleTimePicker,
    handleisHoliday,
  };
}
