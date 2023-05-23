import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import SearchModal from './SearchModal';
import * as Styles from '../../styles/SearchBarStyle';
import * as Constants from '../../utils/constants';
import getNearestStop from '../../utils/getNearestStop';

export default function SearchBar() {
  const [searchModalVisible, setSearchModalVisible] = useState<boolean>();
  const [selectedStop, setSelectedStop] = useRecoilState(selectedStopState);
  const [barText, setBarText] = useState<string>();

  // TODO [low] add menu modal
  function handleMenuBtn() {
    console.log('메뉴');
  }

  const handleSearchModal = () => setSearchModalVisible(prev => !prev);

  async function handleLocImg() {
    const nearestStop = await getNearestStop();
    if (nearestStop) setSelectedStop(nearestStop);
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

        <Styles.BarImgPressable onPress={handleLocImg}>
          <Styles.BigBarImg source={Constants.LocImg} />
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
