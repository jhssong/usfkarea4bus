import React from 'react';
import {useRecoilState} from 'recoil';
import * as Constants from '../../utils/constants';
import * as Styles from '../../styles/SearchBarStyle';
import {selectedStopState} from '../../stores/atom';

export default function SearchResult({result, closeFunction}) {
  const [selectedStop, setSelectedStop] = useRecoilState(selectedStopState);

  function handleResult(stopID: string) {
    setSelectedStop(stopID);
    closeFunction();
  }

  function handleResultText(ID: string): string {
    return `${Constants.StopList[ID].camp} #${Constants.StopList[ID].num} - ${Constants.StopList[ID].name}`;
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
