import { Button, Tooltip, useThemeMode } from '@stoplight/mosaic';
import * as React from 'react';

export const ThemeSwitcher = () => {
  const { mode, setMode } = useThemeMode();

  return (
    <Tooltip
      renderTrigger={
        <Button
          appearance="minimal"
          icon={mode === 'light' ? 'sun' : 'moon-stars'}
          label="Theme Toggle"
          onPress={() => {
            const nextTheme = mode === 'light' ? 'dark' : 'light';
            document.body.setAttribute('data-theme', nextTheme);
            setMode(nextTheme);
          }}
        />
      }
    >
      {mode === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    </Tooltip>
  );
};
