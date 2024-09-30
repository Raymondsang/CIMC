import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import Booking from './components/Booking'
import { Routes } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import ForgotPassword from './components/Forgotpassword'

function App() {
  const [count, setCount] = useState(0)

  return (
  //  <div>
  //   <div>
  //     <Landing/>
  //   </div>
  //   <div>
  //     <section>
  //       <Booking/>
  //     </section>
  //   </div>
  //  </div>
  // <ThemeProvider>
    
      // <UserProvider>
        <Router>
          <div>
          <Routes>
            <Route exact path="/" component={<Landing/>} />
            <Route path="/booking" component={<Booking/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
          </div>
        </Router>
      // </UserProvider>
    // </ThemeProvider>
  )
}

export default App
