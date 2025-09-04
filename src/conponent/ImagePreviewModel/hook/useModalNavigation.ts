import {
  useImperativeHandle,
  useCallback,
  RefObject,
  ForwardedRef,
} from 'react';
import { ImageContainerRef } from '../../ImagineContainer/v2/ImageContainer';

export interface ImagePreviewModalRef {
  goToPage: (index: number) => void;
  recalculateLayout: () => void;
}

export const useModalNavigation = (
  ref: ForwardedRef<ImagePreviewModalRef>,
  swipeableRef: RefObject<ImageContainerRef>,
  onIndexChange?: (index: number) => void
) => {
  // Expose goToPage to the parent component
  useImperativeHandle(
    ref,
    () => ({
      goToPage: (index: number) => {
        swipeableRef.current?.goToPage(index);
      },
      recalculateLayout: () => {
        swipeableRef.current?.recalculateLayout();
      },
    }),
    [swipeableRef]
  );

  // Create a stable handler for thumbnail clicks
  const handleThumbnailClick = useCallback(
    (index: number) => {
      swipeableRef.current?.goToPage(index);
      onIndexChange?.(index);
    },
    [swipeableRef, onIndexChange]
  );

  return { handleThumbnailClick };
};
