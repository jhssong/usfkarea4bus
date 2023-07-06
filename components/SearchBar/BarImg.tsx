import React from 'react';
import styled from 'styled-components/native';
import {BarTop, BarLeft, BarHeight, BarWidth} from '../../styles/GlobalStyle';

export default function BarImg({alignLeft, size, src, handlePress}) {
  return (
    <ImgView alignLeft={alignLeft}>
      <ImgPressable onPress={handlePress}>
        <Img source={src} size={size} />
      </ImgPressable>
    </ImgView>
  );
}
const BarRight = BarLeft + BarWidth * 0.1 + BarWidth * 0.8;
const BarImgViewSize = `${BarWidth * 0.1}px`;

const ImgView = styled.View<{alignLeft: boolean}>`
  position: absolute;
  top: ${BarTop}px;
  left: ${props => (props.alignLeft ? BarLeft : BarRight)}px;
  width: ${BarImgViewSize};
  height: ${BarHeight}px;
  justify-content: center;
  z-index: 2;
`;

const ImgPressable = styled.Pressable`
  width: ${BarImgViewSize};
  height: ${BarImgViewSize};
  justify-content: center;
  align-items: center;
`;

const Img = styled.Image<{size: number}>`
    width: ${props => props.size}%
    height: ${props => props.size}%
`;
