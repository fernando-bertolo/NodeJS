import {Link} from "react-router-dom";
import indexHome from "./indexHome.css"
import { CiUser } from "react-icons/ci";

function Home() {
    return (
    <div class="App">
      <aside class="menu-lateral">
        <div class="image-logo">
          <img src="../../../Images/logo_montana.jpg" alt="" />
        </div>

        <div class="content-itens-menu">
          <a href="#">Home</a>
          <a href="#">Estoque</a>
        </div>

        <div class="sair">
          <Link to="/">Sair</Link>
        </div>
      </aside>

      <div class="main-dashboard">
          <div className="card">
            <p>Total de clientes</p>
            <div className="div-icon">
              <p>28900</p>
              <CiUser className="icon-user"/>
            </div>
          </div>
          <div className="card">
            <p>Total Lucro</p>
          </div>
          <div className="card">
            <p>Total Gasto</p>
          </div>
      </div>
    </div>
    );
}

export default Home;