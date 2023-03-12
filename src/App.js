import './App.css';

import React,{useState} from 'react'
import NavBar from './Components/NavBar';
import NewsBase from './Components/NewsBase';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Footer from './Components/Footer';

export default function App() {
  const [color, setcolor] = useState("dark");
  const [bg, setbg] = useState("light");

  const toggleMode=(event)=>{
    if(event){
      setcolor("light");
      setbg("dark");
    }
    else{
      setcolor("dark");
      setbg("light");
    }
  }
  return (
    <div style={(bg === "dark")?{background: "#20201b"}:{background: "#ffffff"}}>
      <BrowserRouter>
        {/* <p className={`text-${color}`}>
        I will make it. Coffee_Developer Admin on work.
        </p> */}
        <NavBar toggleMode={toggleMode} color={color} bg={bg}/>
        <Routes>
          <Route exact path="/politics" element={<NewsBase key="business" color={color} bg={bg} category={"politics"}/>}/>
          <Route exact path="/entertainment" element={<NewsBase key="entertainment" color={color} bg={bg} category={"entertainment"}/>}/>
          <Route exact path="/" element={<NewsBase key="b" color={color} bg={bg} category={""}/>}/>
          <Route exact path="/general" element={<NewsBase key="general" color={color} bg={bg} category={"general"}/>}/>
          <Route exact path="/health" element={<NewsBase key="health" color={color} bg={bg} category={"health"}/>}/>
          <Route exact path="/technology" element={<NewsBase key="technology" color={color} bg={bg} category={"tech"}/>}/>
          <Route exact path="/science" element={<NewsBase key="science" color={color} bg={bg} category={"science"}/>}/>
          <Route exact path="/sports" element={<NewsBase key="sports" color={color} bg={bg} category={"sports"}/>}/>
        </Routes>
        <Footer color={color}/>
        </BrowserRouter>
    </div>
  )
}

