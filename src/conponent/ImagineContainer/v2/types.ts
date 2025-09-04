// v2/types.ts
import { MotionValue } from 'framer-motion';

/**
 * Defines the structure for a single page within the swipeable container.
 */
export interface ImageContainerPage {
  id: string;
  type: string;
  title?: string;
  component: React.ReactNode;
}

/**
 * Defines the props for the main SwipeableContainer component.
 */
export interface ImageContainerProps {
  pages: ImageContainerPage[];
  initialIndex?: number;
  galleryMode?: boolean;
  showIndicators?: boolean;
  showPageTabs?: boolean;
  showSwipeHint?: boolean;
  showOverlay?: boolean;
  className?: string;

  onPageChange?: (index: number) => void;
  onMainImageClick?: (index: number, event: React.MouseEvent) => void;
  handleShowOverlay?: () => void;
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
  threshold?: number;
  velocityThreshold?: number;
  lazyLoadBuffer?: number; // Number of adjacent pages to render
  // Keyboard a11y options
  enableKeyboardNavigation?: boolean;
  ariaLabel?: string;
  // Navigation buttons
  showFloateNavButtons?: boolean;
  showNavButtons?: boolean;
  renderNavButtons?: (controls: NavigationControls) => React.ReactNode;
  navButtonsClassName?: string;
  // Debug options
  debugMode?: boolean; // Enable debug logging for swipe gestures and animations
}

/**
 * Defines the props for the shared indicator components.
 */
export interface IndicatorProps {
  index: number;
  goToPage: (index: number) => void;
  isOverlay: boolean;
  x: MotionValue<number>;
  getContainerWidth: () => number;
  // a11y linkage
  isActive: boolean;
  tabId: string;
  panelId: string;
  pagesLength: number;
}

/**
 * Navigation control shape provided by container for custom renderers.
 */
export interface NavigationControls {
  currentIndex: number;
  pagesLength: number;
  canGoPrev: boolean;
  canGoNext: boolean;
  goPrev: () => void;
  goNext: () => void;
}
