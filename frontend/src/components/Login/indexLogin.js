import axios from "axios";
import "./indexLogin.css";
import {useState} from "react";
import { Navigate } from "react-router-dom";


function Login() {

    const [inputUsuario, setInputUsuario] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [mensagemError, setMensagemError] = useState('');
    const [autenticacao, setAutenticacao] = useState(false);

    const handleLogin = async (event) => {
      try {
        event.preventDefault();
        const response = await axios.post("http://localhost:3000/login", {
          usuario: inputUsuario, // Esta pegando o usuario e senha da rota /login do backend
          senha: inputPassword
        });
        setMensagemError(""); // limpando a mensagem de erro
        console.log(response);

        setAutenticacao(true);
        if(autenticacao) {
          return <Navigate to="/Dashboard"/>
        }
      } catch (mensagemError) {
        if(mensagemError.response.status === 401) {
          setMensagemError(mensagemError.response.data.message);
        } else{
          setMensagemError("ERRO AO ACESSAR O SERVIDOR");
        } 
      }
    };


    return (
        <div className="main-login">
        <form action="" className="card-login">
          <h1>Login</h1>
          <div className="textfield">
            <label for="usuario" id="usuario">Usuário</label>

            <input type="text" 
                   name="usuario" 
                   placeholder="Usuário" 
                   require
                   onChange={evento => {setInputUsuario(evento.target.value)}}
            />
          
          </div>
          <div className="textfield">
            <label for="Senha" id="Senha">Senha</label>
            <input type="password" 
                   placeholder="Senha" 
                   require
                   onChange={evento => {setInputPassword(evento.target.value)}}
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
        <p className="Message-teste">{mensagemError}</p>
      </div>
    );

}

export default Login;