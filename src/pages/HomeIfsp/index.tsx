import { Header } from '../../components/HomeIfsp/Header';
import { NavigationInternal } from '../../components/HomeIfsp/NavigationInternal';
import { SideSearchBar } from '../../components/HomeIfsp/SideSearchBar';
import { ContainerEmphasisNotices } from '../../components/HomeIfsp/ContainerEmphasisNotices';
import { Footer } from '../../components/HomeIfsp/Footer';

import imageProvisional from '../../assets/homeIfsp/imageProvisional.jpg';

import './style.css';

export function HomeIfsp() {
  return (
    <>
      <Header />

      <main className="main_container">
        <NavigationInternal />
        <div className="container_home">
          <SideSearchBar />
          <div className="content">
            <div className="imagePrevious">
              <a href="/">
                <img src={imageProvisional} alt="" />
              </a>
            </div>
            <div className="container_notices">
              <div className="noticesleft">
                <h4>
                  <a href="/">comunicado envio de carteirinhas faltantes</a>
                </h4>
              </div>
              <div className="noticescenter">
                <h4>
                  <a href="/">
                    comunicado csp/pae n° 028/2021 - <br></br> divulgação do
                    resultado final do <br></br> programa para recebimento de
                    chips do projeto "alunos conectados rnp/mec"
                  </a>
                </h4>
              </div>
              <div className="noticesright">
                <h4>
                  <a href="/">
                    resultado da seleção de bolsista - projetos de extensão
                  </a>
                </h4>
              </div>
            </div>
            <ContainerEmphasisNotices />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
