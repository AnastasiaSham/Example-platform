import React from "react";
import './content.css';

const Content = () => {
  
  return (
    <section className="info">
      <h1 className="main-title">
        Инструментальная платформа цифровой урбанистики
      </h1>
      <div className="info-block">
        <div>
          <p>
            Кажется, у нас проблема! <br/> Произошел сбой, попробуйте зайти позже.
          </p>
        </div>
        <div className="image-wrap">
          <img className="image-cat" src={require('./media/falling-cat.jpg')} alt="" />
        </div>
      </div>
    </section>
  );
}
export default Content;