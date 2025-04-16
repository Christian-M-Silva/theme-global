import React, { createContext, useContext, useState } from 'react';

type ThemeValueType = "light" | "dark"

type ThemeContextType = {
    themeValue: ThemeValueType;
    setThemeValue: () => void;
};


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ChildrenPropType = {
    children: React.ReactNode
}
export const ThemeProvider = ({ children }: ChildrenPropType) => {
    const [theme, setTheme] = useState<ThemeValueType>("dark");

    function toggleThemeValue() {
        setTheme(theme === 'dark' ? 'light': 'dark')
    }

    return (
        <ThemeContext.Provider value={{ themeValue: theme, setThemeValue: toggleThemeValue } }>
            {children}
        </ThemeContext.Provider>
    );
};


export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useGenericContext deve ser usado dentro de GenericProvider');
    }
    return context;
};
