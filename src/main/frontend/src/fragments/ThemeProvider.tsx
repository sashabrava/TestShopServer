import React, { useState } from 'react';

type ThemeParameters = {
  themeId: number,
  navBg: string,
  navVariant: "light" | "dark",
  tableVariant: string,
  backgroundColor: string
}
type ContextParams = {
  currentTheme: ThemeParameters,
  saveThemeViaId: (themeId: number) => void
}

export const themeLight = {
  themeId: 0, navBg: "light", navVariant: "light",
  tableVariant: "light", backgroundColor: "white"
} as ThemeParameters;
export const themeDark = {
  themeId: 1, navBg: "dark", navVariant: "dark",
  tableVariant: "dark", backgroundColor: "darkslategray"
} as ThemeParameters;
export const ThemeContext = React.createContext<ContextParams>({
  currentTheme: themeLight, saveThemeViaId: (themeId) => { }
});

export const ThemeProvider: React.FC<{ chosenThemeParameters?: ThemeParameters, children: React.ReactNode }> =
  ({ children, chosenThemeParameters }) => {
    const [currentTheme, setTheme] = useState<ThemeParameters>(
      chosenThemeParameters || themeLight
    );
    function saveThemeViaId(themeId: number): void {
      switch (themeId) {
        case themeDark.themeId: {
          setTheme(themeDark);
          break;
        }
        default: {
          setTheme(themeLight);
        }
      }
    }

    return (
      <ThemeContext.Provider
        value={{ currentTheme, saveThemeViaId }}>
        {children}
      </ThemeContext.Provider>
    );
  }
