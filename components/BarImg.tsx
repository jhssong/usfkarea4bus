import React from 'react';
import styled from 'styled-components/native';
import {
  BarTop,
  BarLeft,
  BarHeight,
  BarImgViewSize,
  BarTextAreaWidth,
} from '../styles/GlobalStyle';

export default function BarImg({alignLeft, size, src, handlePress}) {
  return (
    <ImgView alignLeft={alignLeft}>
      <ImgPressable onPress={handlePress}>
        <Img source={src} size={size} />
      </ImgPressable>
    </ImgView>
  );
}

const ImgView = styled.View<{alignLeft: boolean}>`
  position: absolute;
  top: ${BarTop}px;
  left: ${props =>
    props.alignLeft ? BarLeft : BarLeft + BarImgViewSize + BarTextAreaWidth}px;
  width: ${BarImgViewSize}px;
  height: ${BarHeight}px;
  justify-content: center;
  // background-color: green;
  z-index: 2;
`;

const ImgPressable = styled.Pressable`
  width: ${BarImgViewSize}px;
  height: ${BarImgViewSize}px;
  justify-content: center;
  align-items: center;
  // background-color: red;
`;

const Img = styled.Image<{size: number}>`
    width: ${props => props.size}%
    height: ${props => props.size}%
`;
