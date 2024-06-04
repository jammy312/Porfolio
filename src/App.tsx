//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './styles/App.css'
import UpSide from './Components/Header/UpSide'
import LeftSide from './Components/Header/LeftSide'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './Page/Home'
import Projects from './Page/Projects'
import { AnimatePresence } from 'framer-motion'
import Description from './Page/Description'

function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>    
    <UpSide/>
    <div className='App'>
      <LeftSide/>
      <div className='all-screen'>
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route index element = {<Home/>} />
                <Route path='/home' element = {<Home/>} />
                <Route path='/projects' element = {<Projects/>} />
                <Route path='/description' element = {<Description/>} />
            </Routes>
      </AnimatePresence>
      </div>

    </div>
    </>

  )
}

export default App

{/* <div>
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.tsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */}
