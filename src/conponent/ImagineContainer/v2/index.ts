/** @format */

// 主组件导出
export { ImageContainer } from './ImageContainer';

// 类型导出
export type {
  ImageContainerProps,
  IndicatorProps,
  NavigationControls,
} from './types';

// Hook 导出
export { useHeightManager } from './hooks/useHeightManager';
export { useGestureManager } from './hooks/useGestureManager';
export { useLazyLoadManager } from './hooks/useLazyLoadManager';
export { useNavigationControls } from './hooks/useNavigationControls';
export { useMaskOverlayManager } from './hooks/useMaskOverlayManager';
export { useWheelManager } from './hooks/useWheelManager';
export { useContainerCore } from './hooks/useContainerCore';

// 组件导出
export { FloateNavButtons } from './components/floateNavButtons/floateNavButtons';
export { IndicatorsBar } from './components/indicatiorBar/IndicatorsBar';
export { DebugPanel } from './components/DebugPanel';
export { ThumbnailGallery } from './components/ThumbnailGallery';
export { PageContainer } from './components/PageContainer';

// 配置导出
export {
  DEFAULT_CONFIG,
  OPTIMIZED_CONFIG,
  createConfig,
} from './config/containerConfig';

// 工具导出
export {
  createDebugLogger,
  setGlobalDebugState,
  getGlobalDebugState,
} from './utils/debugUtils';
