import { useCallback, useEffect, useState } from 'react';

export const usePresenter = (imagesLength: number) => {
  const [indexForSliderImages, setIndexForSliderImages] = useState(0);

  const showNextImage = useCallback(() => {
    if (indexForSliderImages === imagesLength - 1) {
      setIndexForSliderImages(0);
    } else {
      setIndexForSliderImages(indexForSliderImages + 1);
    }
  }, [imagesLength, indexForSliderImages]);

  const showPrevImage = () => {
    if (indexForSliderImages === 0) {
      const selectedIndex = imagesLength - 1;
      setIndexForSliderImages(selectedIndex);
    } else {
      setIndexForSliderImages(indexForSliderImages - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showNextImage();
    }, 3000);

    if (imagesLength < 2) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [imagesLength, showNextImage]);

  const isArrowsVisible = imagesLength > 1;

  return {
    isArrowsVisible,
    indexForSliderImages,
    showNextImage,
    showPrevImage,
  };
};
