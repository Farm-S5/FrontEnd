import LoginP from "./pages/LoginP";
import ContentP from "./pages/ContentP";
import ListPersonP from "./pages/ListPersonP";
import MessageP from "./pages/MessageP";
import HistorP from "./pages/HistoryP";
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" exact element ={<ContentP />} />
            <Route path="Login" exact element ={<LoginP/>} />
            <Route path="Discussion" exact element ={<ListPersonP/>} />
            <Route path="Message" exact element ={<MessageP/>} />
            <Route path="History" exact element ={<HistorP/>} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
