import espacoAluno from '../../../assets/homeIfsp/espacoAluno.png';
import espacoServidor from '../../../assets/homeIfsp/espacoServidor.png';
import processoSeletivo from '../../../assets/homeIfsp/processoSeletivo.jpg';

import './style.css';

export function SideSearchBar() {
  return (
    <div className="date">
      <div className="custom">
        <a href="https://slt.ifsp.edu.br/index.php/component/content/article?id=1165">
          <img src={espacoAluno} alt="Espaço do aluno" />
        </a>
      </div>
      <div className="custom">
        <a href="https://slt.ifsp.edu.br/index.php/component/content/article?id=1166">
          <img src={espacoServidor} alt="Espaço do aluno" />
        </a>
      </div>
      <div className="custom">
        <a href="https://slt.ifsp.edu.br/index.php/component/content/article/43-institucional/1103-processo-seletivo">
          <img src={processoSeletivo} alt="Espaço do aluno" />
        </a>
      </div>
      <div className="custom-date">
        <h3>acesso rápido</h3>
      </div>
      <div className="custom-date">
        <h3>quarentena</h3>
      </div>
      <div className="custom-date">
        <h3>institucional</h3>
      </div>
      <div className="custom-date">
        <h3>cursos</h3>
      </div>
      <div className="custom-date">
        <h3>ensino</h3>
      </div>
      <div className="custom-date">
        <h3>pesquisa</h3>
      </div>
      <div className="custom-date">
        <h3>extensão</h3>
      </div>
      <div className="custom-date">
        <h3>sistemas</h3>
      </div>
    </div>
  );
}
