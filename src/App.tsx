import './App.css'
import { Counter } from './components/Counter'
import { CounterWithVariation } from './components/CounterWithVariation'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <p>Practice testing with testing library 🐙!!</p>
        <Counter />
        <hr style={{ width: '50%' }} />
        <CounterWithVariation />
      </header>
    </div>
  )
}

export default App
