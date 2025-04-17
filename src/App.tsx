import { ButtonComponent } from "./Components/ButtonComponent"
import { ThemeBox } from "./Components/ThemeBox"
import { ThemeProvider } from "./contexts/ThemeContext"

function App() {

  return (
    <ThemeProvider>
      <ThemeBox/>
      <ButtonComponent/>
    </ThemeProvider>
  )
}

export default App
