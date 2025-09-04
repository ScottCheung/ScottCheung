// v2/hooks/useMaskOverlayManager.ts
import { useEffect, useMemo, useState } from 'react';
import {
  MotionValue,
  animate,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

export type HoverSide = 'left' | 'right' | null;

export interface UseMaskOverlayManagerOptions {
  isDragging: boolean;
  isMoving: boolean;
  isWheeling?: boolean;
  edgeFadePercent?: number; // percent for edge fade width
}

export interface UseMaskOverlayManagerResult {
  maskImage: string | MotionValue<string>;
  // CSS-in-JS style helpers for convenience
  maskStyle: {
    WebkitMaskImage: string | MotionValue<string>;
    maskImage: string | MotionValue<string>;
  };
  // hover side controls
  onLeftHoverChange: (hovered: boolean) => void;
  onRightHoverChange: (hovered: boolean) => void;
}

type MaskMode = 'both' | 'left' | 'right' | 'none';

/**
 * Centralizes the logic for the swipe container mask overlay.
 * - When moving (dragging or animating), apply a symmetric edge fade mask.
 * - When not moving and a side is hovered, apply a single-side edge fade.
 * - Transitions between visible and none are smoothed by animating fade width.
 */
export function useMaskOverlayManager(
  options: UseMaskOverlayManagerOptions
): UseMaskOverlayManagerResult {
  const {
    isDragging,
    isMoving,
    isWheeling = false,
    edgeFadePercent = 5,
  } = options;

  const [hoveredSide, setHoveredSide] = useState<HoverSide>(null);
  const [mode, setMode] = useState<MaskMode>('none');

  const onLeftHoverChange = (hovered: boolean) => {
    setHoveredSide((prev) =>
      hovered ? 'left' : prev === 'left' ? null : prev
    );
  };

  const onRightHoverChange = (hovered: boolean) => {
    setHoveredSide((prev) =>
      hovered ? 'right' : prev === 'right' ? null : prev
    );
  };

  // Animate fade width in percent for edge fades
  const rawFadePercent = useMotionValue(0);
  const fadePercent = useSpring(rawFadePercent, {
    stiffness: 260,
    damping: 32,
  });
  const inversePercent = useTransform(fadePercent, (v) => 100 - v);
  const fadePercentStr = useTransform(fadePercent, (v) => `${v}%`);
  const inversePercentStr = useTransform(inversePercent, (v) => `${v}%`);

  // Build mask templates using the animated fade values
  const bothSidesMask = useMotionTemplate`linear-gradient(to right, transparent, black ${fadePercentStr}, black ${inversePercentStr}, transparent)`;
  const leftSideMask = useMotionTemplate`linear-gradient(to right, transparent, black ${fadePercentStr}, black 100%)`;
  const rightSideMask = useMotionTemplate`linear-gradient(to left, transparent, black ${fadePercentStr}, black 100%)`;

  // Decide desired mode based on movement and hovers
  const desiredMode: MaskMode = useMemo(() => {
    if (isDragging || isMoving || isWheeling) return 'both';
    if (hoveredSide === 'left') return 'left';
    if (hoveredSide === 'right') return 'right';
    return 'none';
  }, [isDragging, isMoving, isWheeling, hoveredSide]);

  // Orchestrate smooth transitions
  useEffect(() => {
    if (desiredMode === 'none') {
      // Fade out to zero, then clear mask
      const controls = animate(rawFadePercent, 0, {
        type: 'spring',
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        onComplete: () => setMode('none'),
      });
      return () => controls.stop();
    }

    // Switch to the active template immediately and fade in to target width
    setMode(desiredMode);
    const controls = animate(rawFadePercent, edgeFadePercent, {
      type: 'tween',
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [desiredMode, edgeFadePercent, rawFadePercent]);

  // Select the current mask image (string or MotionValue)
  const maskImage: string | MotionValue<string> =
    mode === 'both'
      ? bothSidesMask
      : mode === 'left'
      ? leftSideMask
      : mode === 'right'
      ? rightSideMask
      : 'none';

  return {
    maskImage,
    maskStyle: {
      WebkitMaskImage: maskImage,
      maskImage,
    },
    onLeftHoverChange,
    onRightHoverChange,
  };
}
