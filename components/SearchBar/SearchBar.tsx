import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import SearchModal from './SearchModal';
import * as Styles from '../../styles/SearchBarStyle';
import * as Constants from '../../utils/constants';

export default function SearchBar() {
  const [searchModalVisible, setSearchModalVisible] = useState<boolean>();
  const [selectedStop, setSelectedStop] = useRecoilState(selectedStopState);
  const [barText, setBarText] = useState<string>();

  function handleMenuBtn() {
    console.log('메뉴');
  }

  const handleSearchModal = () => setSearchModalVisible(prev => !prev);

  // TODO [Search/high] location button, when you click move to the nearest stop
  function handleSomething() {
    console.log('뭐하지 여긴');
  }

  function handleBarText() {
    if (selectedStop === null) setBarText(Constants.InitBarText);
    else {
      const stop = Constants.StopList[selectedStop];
      setBarText(`${stop.camp} #${stop.num} - ${stop.name}`);
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
