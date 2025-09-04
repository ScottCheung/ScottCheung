// 统一调试工具
import { ContainerConfig } from '../config/containerConfig';

export class DebugLogger {
  private config: ContainerConfig;
  private componentName: string;

  constructor(config: ContainerConfig, componentName: string = 'Container') {
    this.config = config;
    this.componentName = componentName;
  }

  log(message: string, data?: any) {
    if (this.config.debug.enabled && this.config.debug.logLevel !== 'none') {
      console.log(`[${this.componentName}] ${message}`, data || '');
    }
  }

  warn(message: string, data?: any) {
    if (this.config.debug.enabled) {
      console.warn(`[${this.componentName}] ${message}`, data || '');
    }
  }

  error(message: string, data?: any) {
    if (this.config.debug.enabled) {
      console.error(`[${this.componentName}] ${message}`, data || '');
    }
  }

  detailed(message: string, data?: any) {
    if (
      this.config.debug.enabled &&
      this.config.debug.logLevel === 'detailed'
    ) {
      console.log(`[${this.componentName}] ${message}`, data || '');
    }
  }
}

export const createDebugLogger = (
  config: ContainerConfig,
  componentName?: string
) => {
  return new DebugLogger(config, componentName);
};

// 全局调试状态管理
export const setGlobalDebugState = (enabled: boolean) => {
  if (typeof window !== 'undefined') {
    (window as any).__DEBUG_CONTAINER__ = enabled;
  }
};

export const getGlobalDebugState = (): boolean => {
  if (typeof window !== 'undefined') {
    return !!(window as any).__DEBUG_CONTAINER__;
  }
  return false;
};
