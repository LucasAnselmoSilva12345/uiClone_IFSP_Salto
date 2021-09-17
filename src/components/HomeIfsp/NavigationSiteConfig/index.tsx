import './style.css';

export function NavigationSiteConfig() {
  return (
    <div className="navigation_container">
      <div className="navigation_site">
        <ul>
          <li>Ir para o conteudo</li>
          <li>Ir para o menu</li>
          <li>Ir para o busca</li>
          <li>Ir para o rodapé</li>
        </ul>
      </div>
      <div className="navigation_config">
        <a href="/">acessibilidade</a>
        <a href="/">alto contraste</a>
        <a href="/">mapa do site</a>
      </div>
    </div>
  );
}
