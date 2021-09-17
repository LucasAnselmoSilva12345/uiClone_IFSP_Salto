import './style.css';

export function Information() {
  return (
    <div className="barra_brasil_bg">
      <div className="barra_brasil">
        <div className="brasil_flag">
          <a href="https://gov.br" className="link_barra">
            Brasil
          </a>
        </div>
        <nav>
          <ul className="list_navigation">
            <li className="list_li">
              <a href="https://www.gov.br/saude/pt-br">
                coronavírus (covid-19)
              </a>
            </li>
            <li>
              {' '}
              <a href="http://www.simplifique.gov.br/">simplifique!</a>
            </li>
            <li>
              {' '}
              <a href="https://www.gov.br/pt-br/participacao-social/">
                participe
              </a>
            </li>
            <li>
              {' '}
              <a href="https://www.gov.br/acessoainformacao/pt-br">
                acesso à informação
              </a>
            </li>
            <li>
              {' '}
              <a href="http://www4.planalto.gov.br/legislacao/">legislação</a>
            </li>
            <li>
              {' '}
              <a href="https://www.gov.br/pt-br/canais-do-executivo-federal">
                canais
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
