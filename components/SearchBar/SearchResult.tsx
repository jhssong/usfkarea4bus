import React from 'react';
import {useRecoilState} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import * as Styles from '../../styles/SearchBarStyle';
import * as Constants from '../../utils/constants';

export default function SearchResult({result, closeFunction}) {
  const [selectedStop, setSelectedStop] = useRecoilState(selectedStopState);

  function handleResult(stopID: string) {
    setSelectedStop(stopID);
    closeFunction();
  }

  function handleResultText(ID: string): string {
    const stop = Constants.StopList[ID];
    return `${stop.camp} #${stop.num} - ${stop.name}`;
  }

  return (
    <Styles.ResultScrollView>
      {result.map((stopID: string, key: number) => {
        return (
          <Styles.ResultPressable
            key={key}
            onPress={() => handleResult(stopID)}>
            <Styles.ResultImgView>
              <Styles.ResultImg source={Constants.BusImg} />
            </Styles.ResultImgView>

            <Styles.ResultText>{handleResultText(stopID)}</Styles.ResultText>
          </Styles.ResultPressable>
        );
      })}
    </Styles.ResultScrollView>
  );
}
