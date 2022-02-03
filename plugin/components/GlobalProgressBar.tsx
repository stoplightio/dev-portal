import { useComputedTheme } from '@stoplight/mosaic';
import React from 'react';

import { NextNProgress } from './NextNProgress';

export const GlobalProgressBar = () => {
  const { theme, vars } = useComputedTheme();

  const color = theme.isDark ? vars['color-primary-tint'] : vars['color-primary'];

  return <NextNProgress color={color} startPosition={0.3} startDelayMs={300} stopDelayMs={200} height={4} />;
};
