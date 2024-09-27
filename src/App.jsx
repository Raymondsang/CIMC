import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import Booking from './components/Booking'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <div>
      <Landing/>
    </div>
    <div>
      <section>
        <Booking/>
      </section>
    </div>
   </div>
  )
}

export default App
