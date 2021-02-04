import React from "react";
import "../landing.css";
import "../cta-button.css";
import { Link } from "react-router-dom";

const LandingScreen = () => {
  return (
    <>
      <section id="landing">
        <div className="row wrapper f">
          <div className="col-md-6 hero-text">
            <h1>
              Protect your back with <span>Comfi</span> before it's too late...
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              voluptatem placeat natus distinctio quas iure tenetur, dolorum quibusda.
            </p>
            <Link to="/products">
              <button className="btn btn-cta">
                <span>SHOP NOW</span>
              </button>
            </Link>
          </div>
          <div className="col-md-6 hero-img">
            <img src="./images/Comfi-Hero1.png" alt="" />
          </div>
        </div>
      </section>
      <section id="features">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#faf79a"
            fillOpacity="1"
            d="M0,64L34.3,80C68.6,96,137,128,206,138.7C274.3,149,343,139,411,117.3C480,96,549,64,617,74.7C685.7,85,754,139,823,138.7C891.4,139,960,85,1029,74.7C1097.1,64,1166,96,1234,144C1302.9,192,1371,256,1406,288L1440,320L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
        <div className="f wrapper row">
          <div className="f feature col-md-3">
            <i className="fas fa-couch fa-3x"></i>
            <h3>Comfortable</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, iusto.
            </p>
          </div>
          <div className="f feature col-md-3">
            <i className="fas fa-wallet fa-3x"></i>
            <h3>Accesible</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, architecto.
            </p>
          </div>
          <div className="f feature col-md-3">
            <i className="fas fa-bolt fa-3x"></i>
            <h3>Effective</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, fugiat.</p>
          </div>
        </div>
      </section>
      <section id="products">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#eee"
            fillOpacity="1"
            d="M0,256L34.3,261.3C68.6,267,137,277,206,277.3C274.3,277,343,267,411,256C480,245,549,235,617,213.3C685.7,192,754,160,823,176C891.4,192,960,256,1029,245.3C1097.1,235,1166,149,1234,138.7C1302.9,128,1371,192,1406,224L1440,256L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
        <h2>Browse our brilliant products</h2>
        <div className="f wrapper row">
          <div className="col-md-6">
            <div className="card">
              <img
                src="./images/products/black_no_bg.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Standard Model</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                  cupiditate reprehenderit quisquam distinctio soluta maxime libero
                  nostrum iusto accusantium! Eius.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img
                src="./images/products/blue_no_bg.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Premium Model</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                  cupiditate reprehenderit quisquam distinctio soluta maxime libero
                  nostrum iusto accusantium! Eius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#faf79a"
            fillOpacity="1"
            d="M0,64L34.3,64C68.6,64,137,64,206,80C274.3,96,343,128,411,154.7C480,181,549,203,617,202.7C685.7,203,754,181,823,181.3C891.4,181,960,203,1029,229.3C1097.1,256,1166,288,1234,250.7C1302.9,213,1371,107,1406,53.3L1440,0L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
        <h2 className="title">Here's what our customers say</h2>
        <div id="carousel-t" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="3000">
              <div className="item">
                <div className="image">
                  <img src="./images/man.jpg" alt="" />
                </div>
                <div className="text">
                  <h2>Jane Doe</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
                    ea. Nisi modi ducimus accusantium quae delectus quibusdam temporibus
                    sunt sint. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusamus, ipsa.
                  </p>
                </div>
                <i className="fas fa-quote-right fa-3x"></i>
              </div>
            </div>
            <div className="carousel-item" data-interval="3000">
              <div className="item">
                <div className="image">
                  <img src="./images/man.jpg" alt="" />
                </div>
                <div className="text">
                  <h2>John Doe</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
                    ea. Nisi modi ducimus accusantium quae delectus quibusdam temporibus
                    sunt sint. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusamus, ipsa.
                  </p>
                </div>
                <i className="fas fa-quote-right fa-3x"></i>
              </div>
            </div>
            <div className="carousel-item" data-interval="3000">
              <div className="item">
                <div className="image">
                  <img src="./images/man.jpg" alt="" />
                </div>
                <div className="text">
                  <h2>Amy Zhang</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
                    ea. Nisi modi ducimus accusantium quae delectus quibusdam temporibus
                    sunt sint. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusamus, ipsa.
                  </p>
                </div>
                <i className="fas fa-quote-right fa-3x"></i>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#faf79a"
            fillOpacity="1"
            d="M0,320L30,309.3C60,299,120,277,180,234.7C240,192,300,128,360,128C420,128,480,192,540,229.3C600,267,660,277,720,266.7C780,256,840,224,900,197.3C960,171,1020,149,1080,128C1140,107,1200,85,1260,106.7C1320,128,1380,192,1410,224L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section id="call-to-action">
        <h1>Try it now and you would not regret it!</h1>
        <Link to="/products">
          <button className="btn btn-cta">
            <span>SHOP NOW</span>
          </button>
        </Link>
      </section>
    </>
  );
};

export default LandingScreen;
