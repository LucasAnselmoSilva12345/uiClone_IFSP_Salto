import imgBaseboard from '../../../assets/homeIfsp/imgBaseboard.png';

import './style.css';

export function Footer() {
  return (
    <>
      <footer className="container_footer">
        <div className="footer">
          <div className="matters">
            <h2>assuntos</h2>
            <ul>
              <li>
                <a href="/">aluno por um dia</a>
              </li>
              <li>
                <a href="/">Comissões, Núcleos e Projetos Institucionais</a>
              </li>
              <li>
                <a href="/">Como chegar</a>
              </li>
              <li>
                <a href="/">comunicação</a>
              </li>
              <li>
                <a href="/">conselho de câmpus - CONCAM</a>
              </li>
              <li>
                <a href="/">contatos</a>
              </li>
              <li>
                <a href="/">documentos institucionais</a>
              </li>
              <li>
                <a href="/">estrutura e setores</a>
              </li>
              <li>
                <a href="/">eventos e projetos</a>
              </li>
              <li>
                <a href="/">histórico do câmpus</a>
              </li>
              <li>
                <a href="/">plano de desenvolvimento institucional - pdi</a>
              </li>
              <li>
                <a href="/">prospecto ifsp salto</a>
              </li>
              <li>
                <a href="/">servidores</a>
              </li>
              <li>
                <a href="/">trabalhe conosco</a>
              </li>
              <li>
                <a href="/">seleção temastransversais 2021</a>
              </li>
            </ul>
          </div>
          <div className="about">
            <h2>sobre</h2>
            <ul>
              <li>
                <a href="/">como chegar</a>
              </li>
              <li>
                <a href="/">contato</a>
              </li>
              <li>
                <a href="/">estrtura e setores</a>
              </li>
              <li>
                <a href="/">funcionamento</a>
              </li>
              <li>
                <a href="/">histórico</a>
              </li>
              <li>
                <a href="/">acesso à informações</a>
              </li>
              <li>
                <a href="/">ouvidoria</a>
              </li>
            </ul>
          </div>
          <div className="network">
            <h2>redes sociais</h2>
            <ul>
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">instagram</a>
              </li>
              <li>
                <a href="/">youtube</a>
              </li>
              <li>
                <a href="/">rss</a>
              </li>
            </ul>
          </div>
          <div className="about_this">
            <h2>sobre o site</h2>
            <ul>
              <li>
                <a href="/">acessibilidade</a>
              </li>
              <li>
                <a href="/">mapa do site</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="container_footer_baseboard">
        <div className="img_baseboard">
          <img src={imgBaseboard} alt="acesso as informações" />
        </div>
      </div>
      <div className="container_creators">
        <div className="creators">
          <span>Desenvolvido por:</span>
          <h4>
            <a href="https://www.linkedin.com/in/lucas-anselmo-moraes-da-silva-543636161/">
              {' '}
              lucas anselmo moraes da silva{' '}
            </a>
          </h4>
        </div>
      </div>
    </>
  );
}
