import React from 'react';
import {View, Text} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import * as S from '../../styles/SearchBarStyle';
import * as C from '../../utils/constants';

export default function SearchResult({result, closeFunction}) {
  const setSelectedStop = useSetRecoilState(selectedStopState);

  function handleResult(stopID: string) {
    setSelectedStop(stopID);
    closeFunction();
  }

  function handleResultText(ID: string): string {
    const stop = C.StopList[ID];
    return `${stop.camp} #${stop.num} - ${stop.name}`;
  }

  return (
    <S.ResultScrollView>
      {result.map((stopID: string, key: number) => {
        return (
          <S.ResultPressable key={key} onPress={() => handleResult(stopID)}>
            <S.ResultImgView>
              <S.ResultImg source={C.BusSearchImgSrc} />
            </S.ResultImgView>
            <S.ResultText>{handleResultText(stopID)}</S.ResultText>
          </S.ResultPressable>
        );
      })}
    </S.ResultScrollView>
  );
}
