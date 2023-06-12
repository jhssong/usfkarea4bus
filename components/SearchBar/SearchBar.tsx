import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useRecoilState} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import BarImg from '../BarImg';
import SearchModal from './SearchModal';
import * as S from '../../styles/SearchBarStyle';
import * as C from '../../utils/constants';
import getNearestStop from '../../utils/getNearestStop';

export default function SearchBar() {
  const [searchModalVisible, setSearchModalVisible] = useState<boolean>();
  const [selectedStop, setSelectedStop] = useRecoilState(selectedStopState);
  const [barText, setBarText] = useState<string>();

  // TODO [low] add menu modal (gate info, )
  function handleMenuBtn() {
    Alert.alert('Not Yet', '', [{text: 'OK'}]);
  }

  const handleSearchModal = () => setSearchModalVisible(prev => !prev);

  async function handleLocImg() {
    const nearestStop = await getNearestStop();
    if (nearestStop) setSelectedStop(nearestStop);
  }

  function handleBarText() {
    if (selectedStop === null) setBarText(C.InitBarText);
    else {
      const stop = C.StopList[selectedStop];
      setBarText(`${stop.camp} #${stop.num} - ${stop.name}`);
    }
  }

  useEffect(() => handleBarText(), [selectedStop]);

  return (
    <>
      <BarImg
        alignLeft={true}
        size={50}
        src={C.MenuImgSrc}
        handlePress={handleMenuBtn}
      />

      <S.SearchBar onPress={handleSearchModal}>
        <S.SearchBarText>{barText}</S.SearchBarText>
      </S.SearchBar>

      <BarImg
        alignLeft={false}
        size={65}
        src={C.LocImgSrc}
        handlePress={handleLocImg}
      />

      {/* SearchModal Component */}
      <SearchModal
        isVisible={searchModalVisible}
        closeFunction={handleSearchModal}
      />
    </>
  );
}
