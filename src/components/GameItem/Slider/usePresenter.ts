import { useCallback, useEffect, useState } from 'react';

export const usePresenter = images => {
  const [indexForSliderImages, setIndexForSliderImages] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      showNextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [indexForSliderImages]);

  const showNextImage = useCallback(() => {
    if (indexForSliderImages === images.length - 1) {
      setIndexForSliderImages(0);
    } else {
      setIndexForSliderImages(indexForSliderImages + 1);
    }
  }, [indexForSliderImages]);

  const showPrevImage = useCallback(() => {
    if (indexForSliderImages === 0) {
      const selectedIndex = images.length - 1;
      setIndexForSliderImages(selectedIndex);
    } else {
      setIndexForSliderImages(indexForSliderImages - 1);
    }
  }, [indexForSliderImages]);

  return {
    indexForSliderImages,
    showNextImage,
    showPrevImage,
  };
};
