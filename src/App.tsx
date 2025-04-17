import { ButtonComponent } from "./Components/ButtonComponent"
import { ThemeProvider } from "./contexts/ThemeContext"

function App() {

  return (
    <ThemeProvider>
      <div>Teste</div>
      <ButtonComponent/>
    </ThemeProvider>
  )
}

export default App
