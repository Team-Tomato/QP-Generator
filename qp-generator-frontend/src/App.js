// import logo from './logo.svg';

import { BrowserRouter } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Main from "./Components/Menubar/Main";
// import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
