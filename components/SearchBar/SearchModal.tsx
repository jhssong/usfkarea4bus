import React, {useEffect, useRef, useState} from 'react';
import {TextInput} from 'react-native';
import * as S from '../../styles/SearchBarStyle';
import * as C from '../../utils/constants';
import * as T from '../../utils/types';
import Modal from '../Modal';
import BarImg from '../BarImg';
import SearchResult from './SearchResult';

export default function SearchModal(props: T.SearchModalProps) {
  const {isVisible, closeFunction} = props;
  const [value, setValue] = useState<string>('');
  const [result, setResult] = useState<string[]>([]);
  let textInputRef = useRef<TextInput>(null);

  const handleBackBtn = () => closeFunction();

  const onChangeValue = (value: string) => setValue(value);

  function searchData() {
    let result: string[] = [];
    const searchValue = value.toLowerCase().replace(/ /g, '');

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

      // TODO fix search function that can search word inside of the value

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
            onChangeText={onChangeValue}
          />
        </S.ModalBar>

        <SearchResult result={result} closeFunction={closeFunction} />
      </S.Modal>
    </Modal>
  );
}
