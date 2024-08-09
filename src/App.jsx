import { useDispatch } from 'react-redux'
import './App.css'
import Count from './component/Count'

function App() {
  const dispatch = useDispatch()
  return (
    <div className='App'>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <Count />
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  )
}

export default App
