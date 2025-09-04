import { useState, useCallback } from 'react';

interface UseModalStateAndEventsProps {
  initialIndex: number;
  onClose: () => void;
  onIndexChange?: (index: number) => void;
}

export const useModalStateAndEvents = ({
  initialIndex,
  onClose,
  onIndexChange,
}: UseModalStateAndEventsProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isClosing, setIsClosing] = useState(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState(true);

  const handleClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    // 直接调用 onClose，让父组件处理状态更新
    onClose();
  }, [isClosing, onClose]);

  const handlePageChange = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      if (onIndexChange) {
        onIndexChange(index);
      }
    },
    [onIndexChange]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      // Ensure the click is on the backdrop itself, not on a child element
      if (e.target === e.currentTarget) {
        handleClose();
      }
    },
    [handleClose]
  );

  const togglePreviewVisibility = useCallback(() => {
    setIsPreviewVisible((prev) => !prev);
  }, []);

  return {
    currentIndex,
    isClosing,
    isPreviewVisible,
    handleClose,
    handlePageChange,
    handleKeyDown,
    handleBackdropClick,
    togglePreviewVisibility,
  };
};
