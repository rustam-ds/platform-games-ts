import React, { FC } from 'react';
import { arrowLeft, arrowRight } from 'src/assets';
import { usePresenter } from './usePresenter';
import { Props } from './interfaces';
import {
  ArrowLeftStyled,
  ArrowRightStyled,
  ArrowStyled,
  ImageStyled,
  WrapperStyled,
} from './styled';

export const Slider: FC<Props> = ({ images }) => {
  const { isArrowsVisible, indexForSliderImages, showNextImage, showPrevImage } = usePresenter(
    images.length,
  );

  return (
    <WrapperStyled>
      {isArrowsVisible && (
        <ArrowLeftStyled onClick={showPrevImage}>
          <ArrowStyled src={arrowLeft} />
        </ArrowLeftStyled>
      )}
      <ImageStyled
        src={images[indexForSliderImages].image_background}
        alt={images[indexForSliderImages].name}
      />
      {isArrowsVisible && (
        <ArrowRightStyled onClick={showNextImage}>
          <ArrowStyled src={arrowRight} />
        </ArrowRightStyled>
      )}
    </WrapperStyled>
  );
};
