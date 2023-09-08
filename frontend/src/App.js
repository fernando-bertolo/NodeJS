import Login from "./components/Login/indexLogin";
import axios from "axios";
import api from "./api/index";
import { useEffect } from "react";


function App() {

  useEffect(() => {
    api.post('login').then(res => {
      console.log(res);
    })
  }, [])


  return(
    <Login></Login>
  );
}

export default App;
