import { Button, useThemeMode } from '@stoplight/mosaic';
import * as React from 'react'

export const ThemeSwitcher = () => {
  const { mode, setMode } = useThemeMode();

  return (
    <Button
      title={mode === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      appearance="minimal"
      icon={mode === 'light' ? 'sun' : 'moon-stars'}
      label="Theme Toggle"
      onClick={() => {
        const nextTheme = mode === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', nextTheme);
        setMode(nextTheme);
      }}
    />
  );
};
