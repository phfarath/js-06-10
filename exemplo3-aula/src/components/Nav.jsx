import {} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {

  // hook com o navigate 
  const navigate =useNavigate()

  // funcao para voltar para home (limpando o local storage)
  const handleLogout = async ()=>{
    sessionStorage.removeItem('useData');
    sessionStorage.removeItem('senhaData');
    alert('saindo da sessão');
    navigate('/');
  }

  return (
    <>
      <header>
        <h2>Projeto</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="conteudo">Conteudo</Link>
            </li>
            <li>
              <Link to="/cadastrar/produto">Cadastrar Produto</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
            <button onClick={handleLogout}> Logout </button>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;
