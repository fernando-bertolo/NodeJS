import "./indexLogin.css";

function Login() {
    return (
        <div className="main-login">
        <form action="" className="card-login">
          <h1>Login</h1>
          <div className="textfield">
            <label for="usuario">Usuário</label>
            <input type="text" name="usuario" placeholder="Usuário" />
          </div>
          <div className="textfield">
            <label for="senha">Senha</label>
            <input type="password" placeholder="Senha" />
          </div>
          <button className="btn-login">
            <a href="" rel="noopener noreferrer"
              >Login</a
            >
          </button>
  
          <section className="cadastros">  
            <button className="btn-EsqueciSenha">
              <a href="">Esqueci senha</a>
            </button>
          </section>
        </form>
      </div>
    );

}

export default Login;