import { useMemo } from 'react';

type GetContainerWidth = () => number;

export interface UseIndicatorLogicOptions {
  index: number;
  getContainerWidth: GetContainerWidth;
}

export interface ColorTransformOptions {
  hue?: number;
  saturation?: number;
  baseLightness?: number;
  deltaLightness?: number;
  speed?: number;
}

export function useIndicatorLogic({
  index,
  getContainerWidth,
}: UseIndicatorLogicOptions) {
  const containerWidth = getContainerWidth();

  const createScaleTransform = useMemo(() => {
    return (
      activeValue: number,
      inactiveValue: number,
      multiplier: number = 1.2
    ) => {
      return (latestX: number) => {
        if (containerWidth === 0) {
          return index === 0 ? activeValue : inactiveValue;
        }
        const normalizedX = latestX / containerWidth;
        const distance = Math.abs(-index - normalizedX);
        const scale = Math.max(0, 1 - Math.min(1, distance * multiplier));
        return inactiveValue + (activeValue - inactiveValue) * scale;
      };
    };
  }, [containerWidth, index]);

  const createGoldColorTransform = useMemo(() => {
    return (options: ColorTransformOptions = {}) => {
      const {
        hue = 42,
        saturation = 80,
        baseLightness = 50,
        deltaLightness = 30,
        speed = 1.2,
      } = options;

      return (latestX: number) => {
        if (containerWidth === 0) {
          return index === 0
            ? `hsl(${hue}, ${saturation}%, 60%)`
            : `hsl(${hue}, ${saturation}%, 20%)`;
        }

        const normalizedX = latestX / containerWidth;
        let t = Math.min(Math.abs(-index - normalizedX) * speed, 1);
        t = t * t * (3 - 2 * t);

        const lightness = baseLightness - deltaLightness * t;
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      };
    };
  }, [containerWidth, index]);

  return { createScaleTransform, createGoldColorTransform, containerWidth };
}
