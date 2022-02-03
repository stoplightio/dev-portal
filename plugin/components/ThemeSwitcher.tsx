import { Button, rootThemeScope, Tooltip, useThemeMode, useUpdateThemeMode } from '@stoplight/mosaic';
import * as React from 'react';

export const ThemeSwitcher = () => {
  const mode = useThemeMode(rootThemeScope);
  const updateMode = useUpdateThemeMode(rootThemeScope);

  return (
    <Tooltip
      renderTrigger={
        <Button
          appearance="minimal"
          icon={mode === 'light' ? 'sun' : 'moon-stars'}
          label="Theme Toggle"
          onPress={() => {
            const nextTheme = mode === 'light' ? 'dark' : 'light';
            updateMode(nextTheme);
          }}
        />
      }
    >
      {mode === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    </Tooltip>
  );
};
