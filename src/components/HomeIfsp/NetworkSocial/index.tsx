import imgFacebook from '../../../assets/homeIfsp/facebook.png';
import imgInstagram from '../../../assets/homeIfsp/instagram.png';
import imgWifi from '../../../assets/homeIfsp/wifi.png';
import imgYoutube from '../../../assets/homeIfsp/youtube.png';

import './style.css';

export function NetworkSocial() {
  return (
    <div className="social_icons_container">
      <div className="social_icons">
        <ul>
          <li>
            <a href="https://www.facebook.com/ifsp.salto">
              <img src={imgFacebook} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ifsp.salto/">
              <img src={imgInstagram} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCBTRFe4haGO9ZbU2IODfNNQ">
              <img src={imgYoutube} alt="" />
            </a>
          </li>
          <li>
            <a href="/https://ifsp.salto.com">
              <img src={imgWifi} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
