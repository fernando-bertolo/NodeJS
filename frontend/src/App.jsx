import Home from "./components/Home/indexHome";
import Login from "./components/Login/indexLogin";
import {Route, Routes} from "react-router-dom";


function App() {

  return(
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  );
}

export default App;
