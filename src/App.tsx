import './App.css'
import {Outlet} from "react-router-dom";
import Navbar from "./NavBar.tsx";

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
