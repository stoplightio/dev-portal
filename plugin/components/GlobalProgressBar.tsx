import { getCssVariable, useThemeStore } from '@stoplight/mosaic';
import * as React from 'react';

import { NextNProgress } from './NextNProgress';

export const GlobalProgressBar = () => {
  const { mode } = useThemeStore();

  const color = mode === 'dark' ? getCssVariable('--color-primary-tint') : getCssVariable('--color-primary');

  return <NextNProgress color={color} startPosition={0.3} startDelayMs={300} stopDelayMs={200} height={4} />;
};
