import { useState, useCallback } from 'react';
import { useMotionValue, useTransform, PanInfo } from 'framer-motion';

interface UseDragToCloseProps {
  onClose: () => void;
}

export const useDragToClose = ({ onClose }: UseDragToCloseProps) => {
  const [dragDirection, setDragDirection] = useState<
    'vertical' | 'horizontal' | null
  >(null);

  // Motion values for gesture handling
  const y = useMotionValue(0);
  const x = useMotionValue(0);

  // Transformations for scale and opacity based on vertical drag
  const scaleTransform = useTransform(y, [-300, 0, 300], [0.2, 1, 0.2]);
  const opacityTransform = useTransform(y, [-100, 0, 100], [0, 1, 0]);
  const borderRadiusTransform = useTransform(y, [-100, 0, 100], [30, 0, 30]);

  const onDragStart = useCallback(() => {
    setDragDirection(null);
  }, []);

  const onDrag = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const { offset } = info;
      // Determine drag direction only once per drag session
      if (!dragDirection) {
        const newDirection =
          Math.abs(offset.y) > Math.abs(offset.x) ? 'vertical' : 'horizontal';
        setDragDirection(newDirection);
      }

      // Only apply vertical drag transformations if that's the determined direction
      if (dragDirection === 'vertical') {
        y.set(offset.y);
        x.set(offset.x); // allow some horizontal movement for a natural feel
      }
    },
    [y, x, dragDirection]
  );

  const onDragEnd = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const { offset, velocity } = info;
      const absY = Math.abs(offset.y);

      // Close modal if dragged vertically with enough distance or velocity
      if (
        dragDirection === 'vertical' &&
        (absY > 100 || Math.abs(velocity.y) > 500)
      ) {
        onClose();
      } else {
        // Snap back to original position
        y.set(0);
        x.set(0);
      }
    },
    [y, x, onClose, dragDirection]
  );

  // Combine styles and handlers for cleaner application in the component
  const motionStyle = {
    y,
    x,
    scale: scaleTransform,
  };

  const motionEventHandlers = {
    onDragStart,
    onDrag,
    onDragEnd,
  };

  return {
    motionStyle,
    motionEventHandlers,
    opacityTransform,
    borderRadiusTransform,
  };
};
