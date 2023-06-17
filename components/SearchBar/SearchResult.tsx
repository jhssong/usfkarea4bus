import React from 'react';
import {useSetRecoilState} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import * as S from '../../styles/SearchBarStyle';
import * as C from '../../utils/constants';
import * as T from '../../utils/types';

export default function SearchResult(props: T.SearchResultProps) {
  const {result, closeFunction} = props;
  const setSelectedStop = useSetRecoilState(selectedStopState);

  function handleResult(stopID: string) {
    setSelectedStop(stopID);
    closeFunction();
  }

  function getResultText(ID: string): string {
    const stop = C.StopList[ID];
    return `${stop.camp} #${stop.num} - ${stop.name}`;
  }

  return (
    <S.ResultScrollView>
      {result.map((stopID: string, key: number) => {
        const resultText = getResultText(stopID);
        return (
          <S.ResultPressable key={key} onPress={() => handleResult(stopID)}>
            <S.ResultImgView>
              <S.ResultImg source={C.BusSearchImgSrc} />
            </S.ResultImgView>
            <S.ResultText>{resultText}</S.ResultText>
          </S.ResultPressable>
        );
      })}
    </S.ResultScrollView>
  );
}
