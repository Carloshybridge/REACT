import PasswordField from './PasswordField' // 1. Importamos el nuevo componente
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* 2. Llamamos al componente para que se renderice */}
      <PasswordField />
    </div>
  )
}

export default App