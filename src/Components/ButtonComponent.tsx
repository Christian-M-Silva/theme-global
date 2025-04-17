import { useThemeContext } from "../contexts/ThemeContext"

export function ButtonComponent() {
    const {setThemeValue} = useThemeContext()
    return <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer" onClick={() => {setThemeValue()}}>Alterar tema</button>
}