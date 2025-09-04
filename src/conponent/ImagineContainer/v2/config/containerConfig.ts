// 统一配置管理器
export interface ContainerConfig {
  spring: {
    stiffness: number;
    damping: number;
    mass: number;
  };
  drag: {
    elastic: number;
    momentum: boolean;
    bounceBuffer: number;
    velocityThreshold: number;
    angleThreshold: number;
  };
  animation: {
    heightTransition: 'smooth' | 'instant';
    pageTransition: 'slide' | 'fade';
    duration: number;
  };
  wheel: {
    responseDelay: number;
    animationDelay: number;
    frequencyLimit: number;
    elasticFactor: number;
    proximityThreshold: number;
  };
  indicator: {
    showDots: boolean;
    showTabs: boolean;
    showSwipeHint: boolean;
    tabStyle: 'underline' | 'pill';
    dotStyle: 'circle' | 'line';
  };
  debug: {
    enabled: boolean;
    logLevel: 'none' | 'basic' | 'detailed';
  };
}

export const DEFAULT_CONFIG: ContainerConfig = {
  spring: {
    stiffness: 400,
    damping: 30,
    mass: 0.5,
  },
  drag: {
    elastic: 0.05,
    momentum: false,
    bounceBuffer: 60,
    velocityThreshold: 30,
    angleThreshold: 30,
  },
  animation: {
    heightTransition: 'smooth',
    pageTransition: 'slide',
    duration: 0.25,
  },
  wheel: {
    responseDelay: 25,
    animationDelay: 20,
    frequencyLimit: 8,
    elasticFactor: 0,
    proximityThreshold: 0.01,
  },
  indicator: {
    showDots: true,
    showTabs: true,
    showSwipeHint: false,
    tabStyle: 'underline',
    dotStyle: 'circle',
  },
  debug: {
    enabled: false,
    logLevel: 'none',
  },
};

export const OPTIMIZED_CONFIG: ContainerConfig = {
  ...DEFAULT_CONFIG,
  spring: {
    stiffness: 800,
    damping: 35,
    mass: 0.6,
  },
  drag: {
    elastic: 0,
    momentum: false,
    bounceBuffer: 30,
    velocityThreshold: 25,
    angleThreshold: 30,
  },
  animation: {
    heightTransition: 'smooth',
    pageTransition: 'slide',
    duration: 0.2,
  },
};

export const createConfig = (
  overrides: Partial<ContainerConfig> = {}
): ContainerConfig => ({
  ...DEFAULT_CONFIG,
  ...overrides,
  spring: { ...DEFAULT_CONFIG.spring, ...overrides.spring },
  drag: { ...DEFAULT_CONFIG.drag, ...overrides.drag },
  animation: { ...DEFAULT_CONFIG.animation, ...overrides.animation },
  wheel: { ...DEFAULT_CONFIG.wheel, ...overrides.wheel },
  indicator: { ...DEFAULT_CONFIG.indicator, ...overrides.indicator },
  debug: { ...DEFAULT_CONFIG.debug, ...overrides.debug },
});
