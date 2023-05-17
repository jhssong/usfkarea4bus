import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import * as Constants from '../../utils/constants';
import * as Styles from '../../styles/SearchBarStyle';
import {selectedStopState} from '../../stores/atom';
import SearchModal from './SearchModal';

export default function SearchBar() {
  const [searchModalVisible, setSearchModalVisible] = useState<boolean>();
  const [selectedStop, setSelectedStop] = useRecoilState(selectedStopState);
  const [barText, setBarText] = useState<string>();

  function handleMenuBtn() {
    console.log('메뉴');
  }

  function handleSearchModal() {
    setSearchModalVisible(prev => !prev);
  }

  // TODO [WebView/mid] think about this function
  function handleSomething() {
    console.log('뭐하지 여긴');
  }

  function handleBarText() {
    if (selectedStop === null) {
      setBarText(Constants.InitBarText);
    } else {
      setBarText(
        `Stop ${Constants.StopList[selectedStop].num} - ${Constants.StopList[selectedStop].name}`,
      );
    }
  }

  useEffect(() => handleBarText(), [selectedStop]);

  return (
    <>
      {/* Search Bar Area */}
      <Styles.BarPressable onPress={handleSearchModal}>
        <Styles.BarImgPressable onPress={handleMenuBtn}>
          <Styles.BarImg source={Constants.MenuImg} />
        </Styles.BarImgPressable>

        <Styles.BarText>{barText}</Styles.BarText>

        <Styles.BarImgPressable onPress={handleSomething}>
          <Styles.BarImg source={Constants.MenuImg} />
        </Styles.BarImgPressable>
      </Styles.BarPressable>

      {/* SearchModal Component */}
      <SearchModal
        isVisible={searchModalVisible}
        closeFunction={handleSearchModal}
      />
    </>
  );
}
