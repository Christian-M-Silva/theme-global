import { useThemeContext } from "../contexts/ThemeContext"

export function ThemeBox() {
    const { themeValue } = useThemeContext()

    return <div className={`rounded-md border-2 border-amber-600 p-7  ${themeValue.CurrentTheme === 'zinc-950' ? 'bg-zinc-950' : 'bg-zinc-50'} font-bold text-2xl ${themeValue.ContraryTheme === 'zinc-950' ? 'text-zinc-950' : 'text-zinc-50'}`}>{`${themeValue.CurrentTheme}`}</div>
}