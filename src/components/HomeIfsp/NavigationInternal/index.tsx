import './style.css';

export function NavigationInternal() {
  return (
    <div className="row">
      <section className="section_row">
        <div className="destaque">
          <h2>Sistemas</h2>
        </div>
        <ul className="lista_destaque">
          <li className="itens_destaque">
            <a href="https://aurora.ifsp.edu.br/principal.php?go=login">
              Aurora
            </a>
          </li>
          <li className="itens_destaque">
            <a href="http://pergamum.biblioteca.ifsp.edu.br/">Biblioteca</a>
          </li>
          <li className="itens_destaque">
            <a href="https://slt.ifsp.edu.br/index.php/moodle">Moodle</a>
          </li>
          <li className="itens_destaque">
            <a href="https://drive.ifsp.edu.br/login">Nuvem IFSP</a>
          </li>
          <li className="itens_destaque">
            <a href="https://www.ifsp.edu.br/component/content/article/81/">
              Ouvidoria
            </a>
          </li>
          <li className="itens_destaque">
            <a href="http://webdiario.slt.ifsp.edu.br/pae/">Pae</a>
          </li>
          <li className="itens_destaque">
            <a href="https://sistemas.slt.ifsp.edu.br/limesurvey/">
              Questionario
            </a>
          </li>
          <li className="itens_destaque">
            <a href="https://suap.ifsp.edu.br/accounts/login/?next=/">Suap</a>
          </li>
          <li className="itens_destaque">
            <a href="https://suporte.slt.ifsp.edu.br/glpi/">Suporte salto</a>
          </li>
          <li className="itens_destaque">
            <a href="https://mail.google.com/mail/u/1/?pli=1#inbox">e-mail</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
