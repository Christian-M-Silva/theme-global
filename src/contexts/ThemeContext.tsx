import React, { createContext, useContext, useState } from 'react';
import { IThemeValue } from '../Interfaces/Interfaces';


type ThemeContextType = {
    themeValue: IThemeValue;
    setThemeValue: () => void;
};


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ChildrenPropType = {
    children: React.ReactNode
}
export const ThemeProvider = ({ children }: ChildrenPropType) => {
    const [theme, setTheme] = useState<IThemeValue>({ CurrentTheme: 'zinc-950', ContraryTheme: 'zinc-50' });

    function toggleThemeValue() {
        if (theme.CurrentTheme === 'zinc-50') {
            setTheme({ CurrentTheme: 'zinc-950', ContraryTheme: 'zinc-50' })
        } else {
            setTheme({ CurrentTheme: 'zinc-50', ContraryTheme: 'zinc-950' })
        }
    }

    return (
        <ThemeContext.Provider value={{ themeValue: theme, setThemeValue: toggleThemeValue }}>
            <div className={`bg-${theme.ContraryTheme} h-screen flex flex-col justify-center items-center`}>
                {children}
            </div>
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
