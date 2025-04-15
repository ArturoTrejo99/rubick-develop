import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import Landing from './Components/Landing.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import Analytics from './Components/Analytics.jsx'
import Admin from './Components/Admin.jsx'
import {useState} from 'react'
import ProtectedRoute from './Components/ProtectedRoute.jsx'


function App() {

  const [user, setUser] = useState(null)

  const logIn = ()=>{
    setUser({
      id: "1",
      name: "leo",
      permissions: []
    })
  }

  const logOut = ()=>{
    setUser(null)
  }

  return (
    <>
      
      <BrowserRouter>
        
        <Navbar/>
        {
          user? (<button onClick={logOut}>logOut</button>) : (<button onClick={logIn}>LogIn</button>)
        }
        
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route element={<ProtectedRoute isAllowed={!!user} redirectTo='/'/>}>
            <Route path='/home' element={<Home />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/analytics' element={
            <ProtectedRoute 
            isAllowed={!!user && user.permissions.includes('analyze')}
            redirectTo='/home'>
            <Analytics/>
          </ProtectedRoute>}/>
          <Route path='/admin' element={<Admin />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

