

function App() {
  return (
    <div class="main-login">
      <form action="" class="card-login">
        <h1>Login</h1>
        <div class="textfield">
          <label for="usuario">Usuário</label>
          <input type="text" name="usuario" placeholder="Usuário" />
        </div>
        <div class="textfield">
          <label for="senha">Senha</label>
          <input type="password" placeholder="Senha" />
        </div>
        <button class="btn-login">
          <a href="/Dashboard/Home/dashboard.html" rel="noopener noreferrer"
            >Login</a
          >
        </button>

        <section class="cadastros">
          <button class="btn-cadastro">
            <a href="/Cadastro/cadastro.html">Realizar cadastro</a>
          </button>

          <button class="btn-EsqueciSenha">
            <a href="">Esqueci senha</a>
          </button>
        </section>
      </form>
    </div>
  );
}

export default App;
