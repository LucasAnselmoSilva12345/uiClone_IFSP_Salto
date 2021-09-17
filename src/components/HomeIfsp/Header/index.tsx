import { Information } from '../Information';
import { NavigationSiteConfig } from '../NavigationSiteConfig';
import { NetworkSocial } from '../NetworkSocial';
import { NavigationAbout } from '../NavigationAbout';

import './style.css';

import imgLupa from '../../../assets/homeIfsp/lupa.png';

export function Header() {
  return (
    <>
      <Information />
      <header>
        <div className="container_bg">
          <NavigationSiteConfig />

          <div className="container">
            <div className="text_container">
              <a className="portal_preTitle" href="/">
                instituto federal de educação, ciência e tecnologia de são paulo
              </a>

              <h1 className="portal_title">câmpus salto</h1>
              <span className="portal_subTitle">ministério da educação</span>
            </div>

            <div className="navigation_search">
              <input type="text" placeholder="Busca no portal" />
              <button type="submit" className="btn_search">
                <img src={imgLupa} alt="" />
              </button>
            </div>
          </div>

          <NetworkSocial />

          <NavigationAbout />
        </div>
      </header>
    </>
  );
}
