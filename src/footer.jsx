import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
          <div className="company-info">
            {/* <img height="93" src={require("#")} alt="footer-logo" className="company-logo"/> */}
            <span className="company-name">Институт дизайна и урбанистики</span>
          </div>
  
          <div className="company-data">
            <span className="company-title">
              Наши контакты
            </span>
            <div  className='company-address'>
              {/* <img src={require('./assets/geolocation.png')} alt="address" /> */}
              <p className='m-0'>Санкт-Петербург,
                 Биржевая линия, д. 14, ауд. 502</p>
            </div>
            <div className='company-email'>
              {/* <img src={require('./assets/message.png')} alt="email" /> */}
              <p className='m-0'>idu@itmo.ru</p>
            </div>
          </div>
          <div className="company-info">
            {/* <img height="79" src={require("./assets/nckr-logo.png")} alt="footer-logo" className="company-logo"/> */}
            <span className="company-name">Национальный центр когнитивных разработок</span>
          </div>
  
        </footer>
    );
  };
  
export default Footer;





//data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwA…DoA0Q4wTyeGydHzfmnvD/tDlcWOQZQ7cAAAAASUVORK5CYII=