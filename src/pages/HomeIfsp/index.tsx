import { Header } from '../../components/HomeIfsp/Header';
import { NavigationInternal } from '../../components/HomeIfsp/NavigationInternal';
import { SideSearchBar } from '../../components/HomeIfsp/SideSearchBar';

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
          </div>
        </div>
      </main>
    </>
  );
}
