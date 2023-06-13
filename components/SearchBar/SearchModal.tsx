import React, {useEffect, useRef, useState} from 'react';
import {TextInput} from 'react-native';
import Modal from '../Modal';
import BarImg from '../BarImg';
import SearchResult from './SearchResult';
import theme from '../../styles/theme';
import * as S from '../../styles/SearchBarStyle';
import * as C from '../../utils/constants';

export default function SearchModal(props) {
  const {isVisible, closeFunction} = props;
  const [value, setValue] = useState<string>();
  const [result, setResult] = useState<string[]>([]);
  let textInputRef = useRef<TextInput>(null);

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

    Object.keys(C.StopList).map(id => {
      if (id === 'CHTMP') return;

      const stopID = id.toLocaleLowerCase();
      const stopCamp = C.StopList[id].camp.toLowerCase();
      const stopNum = C.StopList[id].num;
      const stopName = C.StopList[id].name.toLowerCase();

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
    <Modal isVisible={isVisible} closeFunction={closeFunction}>
      <S.Modal>
        <BarImg
          alignLeft={true}
          size={50}
          src={C.BackImgSrc}
          handlePress={handleBackBtn}
        />
        <S.ModalBar>
          <S.BarTextInput
            ref={textInputRef}
            placeholder={C.InitBarText}
            placeholderTextColor={theme.color.lightTextBlack}
            onChangeText={onChangeValue}
          />
        </S.ModalBar>

        {/* SearchResult Component */}
        <SearchResult result={result} closeFunction={closeFunction} />
      </S.Modal>
    </Modal>
  );
}
