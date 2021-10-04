import React from 'react';
import { useLocales } from 'src/hooks/useLocales';
import { usePresenter } from './usePresenter';
import {
  ArrowLeftStyled,
  ArrowRightStyled,
  ArrowStyled,
  ImageStyled,
  WrapperStyled,
} from './styled';

export const Slider = ({ images }) => {
  const locales = useLocales();
  const presenter = usePresenter(images);
  const isArrowsVisible = images.length > 1;

  return (
    <WrapperStyled>
      {isArrowsVisible && (
        <ArrowLeftStyled onClick={presenter.showPrevImage}>
          <ArrowStyled src={locales.components.game.slider.arrows.left} />
        </ArrowLeftStyled>
      )}
      <ImageStyled
        src={images[presenter.indexForSliderImages].image_background}
        alt={images[presenter.indexForSliderImages].name}
      />
      {isArrowsVisible && (
        <ArrowRightStyled onClick={presenter.showNextImage}>
          <ArrowStyled src={locales.components.game.slider.arrows.right} />
        </ArrowRightStyled>
      )}
    </WrapperStyled>
  );
};
