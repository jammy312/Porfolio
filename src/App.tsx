import './styles/App.css'
import UpSide from './Components/Header/UpSide'
import LeftSide from './Components/Header/LeftSide'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './Page/Home'
import Projects from './Page/Projects'
import { AnimatePresence } from 'framer-motion'
import Description from './Page/Description'
import Experience from './Page/Experience'

function App() {
  const location = useLocation();
  document.title ="Portfolio";
  return (
    <>    
    <UpSide/>
    <div className='App'>
      <LeftSide/>
      <div className='all-screen'>
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route index element = {<Home/>} />
                <Route path='/Home' element = {<Home/>} />
                <Route path='/Projects' element = {<Projects/>} />
                <Route path='/Projects/Description' element = {<Description/>} />
                <Route path='/Experience' element = {<Experience/>} />
            </Routes>
        </AnimatePresence>
      </div>

    </div>
    </>

  )
}

export default App
