import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/';
import { Sidebar, Navbar } from "./components/"
import "./App.css";

const App = () => {

  return (
    <BrowserRouter>
      <Sidebar/>
      <Navbar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
