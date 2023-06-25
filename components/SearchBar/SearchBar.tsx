import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import * as S from '../../styles/SearchBarStyle';
import * as C from '../../utils/constants';
import * as T from '../../utils/types';
import BarImg from '../BarImg';
import SearchModal from './SearchModal';
import getNearestStop from '../../utils/getNearestStop';
import Menu from '../Menu/Menu';

export default function SearchBar() {
  const [barText, setBarText] = useState<string>('');
  const [menuModalVisible, setMenuModalVisible] = useState<boolean>(false);
  const [searchModalVisible, setSearchModalVisible] = useState<boolean>(false);
  const [selectedStop, setSelectedStop] = useRecoilState(selectedStopState);

  const handleMenuModal = () => setMenuModalVisible(prev => !prev);

  const handleSearchModal = () => setSearchModalVisible(prev => !prev);

  async function handleLocImg() {
    const nearestStop = await getNearestStop();
    if (nearestStop) setSelectedStop(nearestStop);
  }

  function handleBarText() {
    if (selectedStop === null) setBarText(C.InitBarText);
    else {
      const stop: T.StopListInfo = C.StopList[selectedStop];
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
        handlePress={handleMenuModal}
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

      <SearchModal
        isVisible={searchModalVisible}
        closeFunction={handleSearchModal}
      />

      <Menu isVisible={menuModalVisible} closeFunction={handleMenuModal} />
    </>
  );
}
