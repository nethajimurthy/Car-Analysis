import "./App.css";
import { createContext, useState } from "react";
import {userData} from "../src/Data/UserData.js";
import Sidebar from '../src/components/Sidebar.js';
import Header from "./components/Header";
import Maindisplay from "./components/Maindisplay.js";

export const userContextData = createContext();

function App() {
  const [data] = useState(userData);

  return (
    <div className="App">
      <userContextData.Provider value={data}>
        <Header />
        <div className="MainArea">
        <Sidebar/>
        <Maindisplay/>
        </div>
      </userContextData.Provider>
    </div>
  );
}

export default App;
