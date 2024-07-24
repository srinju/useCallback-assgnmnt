import { useState } from 'react'
import './App.css'
import { Assignement1 } from './components/useCallback1'
import { Assignement2 } from './components/useCallback2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/*<Assignement1 />*/}
      <Assignement2 />

    </div> 
  )
}

export default App
