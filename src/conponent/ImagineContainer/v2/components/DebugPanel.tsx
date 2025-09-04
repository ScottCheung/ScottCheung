// v2/components/DebugPanel.tsx
'use client';

import React, { useState, useEffect } from 'react';

interface DebugPanelProps {
  currentIndex: number;
  pagesLength: number;
  isDragging: boolean;
  isMoving: boolean;
  isWheeling: boolean;
  currentX: number;
  containerWidth: number;
  threshold: number;
  velocityThreshold: number;
  springConfig: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
  onToggleDebugMode: (enabled: boolean) => void;
  debugMode: boolean;
}

export function DebugPanel({
  currentIndex,
  pagesLength,
  isDragging,
  isMoving,
  isWheeling,
  currentX,
  containerWidth,
  threshold,
  velocityThreshold,
  springConfig,
  onToggleDebugMode,
  debugMode,
}: DebugPanelProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  // 监听控制台日志
  useEffect(() => {
    if (!debugMode) return;

    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;

    const addLog = (level: string, ...args: any[]) => {
      const timestamp = new Date().toLocaleTimeString();
      const message = args
        .map((arg) =>
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        )
        .join(' ');

      setLogs((prev) => [
        `[${timestamp}] [${level}] ${message}`,
        ...prev.slice(0, 99), // 保留最近100条日志
      ]);
    };

    console.log = (...args) => {
      originalLog(...args);
      if (args[0]?.includes('[Swipeable')) {
        addLog('LOG', ...args);
      }
    };

    console.warn = (...args) => {
      originalWarn(...args);
      if (args[0]?.includes('[Swipeable')) {
        addLog('WARN', ...args);
      }
    };

    console.error = (...args) => {
      originalError(...args);
      if (args[0]?.includes('[Swipeable')) {
        addLog('ERROR', ...args);
      }
    };

    return () => {
      console.log = originalLog;
      console.warn = originalWarn;
      console.error = originalError;
    };
  }, [debugMode]);

  if (!debugMode) return null;

  return (
    <div className='fixed top-4 right-4 z-50 bg-black/90 text-white p-4 rounded-lg max-w-md max-h-96 overflow-hidden'>
      {/* 控制按钮 */}
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-sm font-bold'>SwipeableContainer Debug</h3>
        <div className='flex gap-2'>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className='px-2 py-1 bg-blue-600 rounded text-xs'
          >
            {isVisible ? 'Hide' : 'Show'} Logs
          </button>
          <button
            onClick={() => setLogs([])}
            className='px-2 py-1 bg-red-600 rounded text-xs'
          >
            Clear
          </button>
          <button
            onClick={() => onToggleDebugMode(false)}
            className='px-2 py-1 bg-gray-600 rounded text-xs'
          >
            Close
          </button>
        </div>
      </div>

      {/* 状态信息 */}
      <div className='text-xs space-y-1 mb-4'>
        <div className='grid grid-cols-2 gap-2'>
          <div>
            Current Index:{' '}
            <span className='text-yellow-400'>{currentIndex}</span>
          </div>
          <div>
            Pages: <span className='text-yellow-400'>{pagesLength}</span>
          </div>
          <div>
            Container Width:{' '}
            <span className='text-yellow-400'>{containerWidth}px</span>
          </div>
          <div>
            Current X:{' '}
            <span className='text-yellow-400'>{currentX.toFixed(2)}px</span>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-2 mt-2'>
          <div
            className={`px-2 py-1 rounded text-center text-xs ${
              isDragging ? 'bg-green-600' : 'bg-gray-600'
            }`}
          >
            {isDragging ? 'DRAGGING' : 'Idle'}
          </div>
          <div
            className={`px-2 py-1 rounded text-center text-xs ${
              isMoving ? 'bg-blue-600' : 'bg-gray-600'
            }`}
          >
            {isMoving ? 'MOVING' : 'Idle'}
          </div>
          <div
            className={`px-2 py-1 rounded text-center text-xs ${
              isWheeling ? 'bg-purple-600' : 'bg-gray-600'
            }`}
          >
            {isWheeling ? 'WHEELING' : 'Idle'}
          </div>
        </div>

        <div className='mt-2 p-2 bg-gray-800 rounded text-xs'>
          <div>Threshold: {threshold}</div>
          <div>Velocity Threshold: {velocityThreshold}</div>
          <div>
            Spring: {springConfig.stiffness}/{springConfig.damping}/
            {springConfig.mass}
          </div>
        </div>
      </div>

      {/* 日志区域 */}
      {isVisible && (
        <div className='bg-gray-900 rounded p-2 max-h-48 overflow-y-auto pb-[50vh]'>
          <div className='text-xs font-bold mb-2'>Recent Logs:</div>
          {logs.length === 0 ? (
            <div className='text-gray-500 text-xs'>No logs yet...</div>
          ) : (
            <div className='space-y-1'>
              {logs.map((log, index) => (
                <div
                  key={index}
                  className='text-xs font-mono text-gray-300 border-l-2 border-gray-600 pl-2'
                >
                  {log}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
