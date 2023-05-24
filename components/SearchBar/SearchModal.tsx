import React, {useEffect, useRef, useState} from 'react';
import {TextInput} from 'react-native';
import SearchResult from './SearchResult';
import ModalView from '../Modal';
import theme from '../../styles/theme';
import * as Styles from '../../styles/SearchBarStyle';
import * as Constants from '../../utils/constants';

export default function SearchModal(props) {
  const {isVisible, closeFunction} = props;
  let textInputRef = useRef<TextInput>(null);
  const [value, setValue] = useState<string>();
  const [result, setResult] = useState<string[]>([]);

  const handleBackBtn = () => closeFunction();

  const onChangeValue = (value: string) => setValue(value);

  function searchData() {
    if (value === undefined || value.length === 0) {
      setResult([]);
      return;
    }

    let result: string[] = [];
    const searchValue = value.toLowerCase().trim();

    if (searchValue.length === 0) {
      setResult([]);
      return;
    }

    Object.keys(Constants.StopList).map(id => {
      if (id === 'CHTMP') return;

      const stopID = id.toLocaleLowerCase();
      const stopCamp = Constants.StopList[id].camp.toLowerCase();
      const stopNum = Constants.StopList[id].num;
      const stopName = Constants.StopList[id].name.toLowerCase();

      const checkStop = stopID.includes(searchValue);
      const checkCP = stopCamp.includes(searchValue);
      const checkNum = stopNum.includes(searchValue);
      const checkName = stopName.includes(searchValue);

      if (checkStop || checkCP || checkNum || checkName) result.push(id);
    });

    setResult(result);
  }

  useEffect(() => searchData(), [value]);

  useEffect(() => setResult([]), [isVisible]);

  // open keyboard after search modal opened
  useEffect(() => {
    if (textInputRef.current === null) return;
    setTimeout(() => {
      textInputRef.current?.blur();
      textInputRef.current?.focus();
    }, 0);
  }, [textInputRef.current]);

  return (
    <ModalView isVisible={isVisible} closeFunction={closeFunction}>
      <Styles.ModalView>
        {/* Search Bar Area */}
        <Styles.ModalBar>
          <Styles.BarImgPressable onPress={handleBackBtn}>
            <Styles.BarImg source={Constants.BackImg} />
          </Styles.BarImgPressable>

          <Styles.BarTextInput
            ref={textInputRef}
            placeholder={Constants.InitBarText}
            placeholderTextColor={theme.color.lightTextBlack}
            onChangeText={onChangeValue}
          />
        </Styles.ModalBar>

        {/* Searched Result Area */}
        <SearchResult result={result} closeFunction={closeFunction} />
      </Styles.ModalView>
    </ModalView>
  );
}
