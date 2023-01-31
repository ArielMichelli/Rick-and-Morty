import './App.css'
import PersonajesList from './components/PersonajesList'

function App() {


  return (
    <div className="App">
      <div className="titulo">
        <h1>Rick & Morty APi</h1>
      </div>

      <div className="main">
      <PersonajesList />
      </div>
      <div className="titulo">
        <h1>Rick & Morty APi</h1>
      </div>
    </div>
  )
}

export default App
