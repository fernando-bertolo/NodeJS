import axios from "axios";
import { useState } from "react";
import {Navigate} from "react-router-dom";
import indexDashboard from "./indexDashboard.css"

function Dashboard() {
     const [autenticacao, setAutenticacao] = useState(true);

     if(!autenticacao) {
        return <Navigate to="/login"/>;
     }

    return (
        <div class="App">
      <aside class="menu-lateral">
        <div class="image-logo">
          <img src="/Images/logo montana.jpg" alt="" />
        </div>

        <div class="content-itens-menu">
          <a href="#">Home</a>
          <a href="#">Estoque</a>
        </div>

        <div class="sair">
          <a href="#">Sair</a>
        </div>
      </aside>

      <div class="main-dashboard">
        <h1>Consulta Usuários</h1>
        <header class="search-header">
          <input type="text" placeholder="Pesquise aqui" />
        </header>
      </div>
    </div>
    );
}

export default Dashboard;