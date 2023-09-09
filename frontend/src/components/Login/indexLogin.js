import axios from "axios";
import "./indexLogin.css";
import {useState} from "react";


function Login() {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
      e.preventDefault();

      console.log(usuario, password);     
      
      try {
        const response = await axios.post("http://localhost:3000/login-teste",
        JSON.stringify({usuario, password}),
        {
          headers: { 'Content-Type': 'applicantion/json'}
        }
      );
      } catch (error) {
        if(!error?.response) {
          setError("ERRO AO ACESSA RO SERVIDOR");
        } else if(error.response.status === 401){
          setError("Usuario ou senha invalidos");
        } 
      }
    };



    return (
        <div className="main-login">
        <form action="" className="card-login">
          <h1>Login</h1>
          <div className="textfield">
            <label for="usuario">Usuário</label>

            <input type="text" 
                   name="usuario" 
                   placeholder="Usuário" 
                   require
                   onChange={(e) => setUsuario(e.target.value)}
            />
          
          </div>
          <div className="textfield">
            <label for="senha">Senha</label>
            <input type="password" 
                   placeholder="Senha" 
                   require
                   onChange={(e) => setPassword(e.target.value)}
            
            />
          </div>
          <button className="btn-login" 
                  type="submit"
                  onClick={(e) => handleLogin(e)}>Login</button>
  
          <section className="cadastros">  
            <button className="btn-EsqueciSenha">
              <a href="">Esqueci senha</a>
            </button>
          </section>
        </form>
        <p>{error}</p>
      </div>
    );

}

export default Login;