import "../styles/home.scss";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div
          class="hero-grid-item"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <img src={require("../images/img1.jpeg")} alt="Benefit Model 1" />
        </div>
        <div
          class="hero-grid-item"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="900"
        >
          <img src={require("../images/img2.jpeg")} alt="Benefit Model 1" />
        </div>
        <div
          class="hero-grid-item"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <img src={require("../images/tan.jpeg")} alt="Benefit Model 1" />
        </div>
      </div>
      <div className="hero-header"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="500">
        <h1 className="krinkles hero-header-text">
          Laughter <br/><span class="shorter krinkles">is the best</span> medicine
        </h1>
        <p className="hero-sub-text">
          Bringing out the best in you by <b>Benefit Cosmetics</b>
        </p>
        <Button text="Shop Now" class="hero-button" />
      </div>
      <div className="svg-cont">
        <svg height="500" width="500" className="floatUp">
          <circle cx="1400" cy="200" r="200" fill="#B6EFD4" opacity="0.5" />
        </svg>
      </div>
      <div className="svg-cont">
        <svg height="500" width="500" className="floatUp">
          <circle cx="100" cy="500" r="200" fill="#B6EFD4" opacity="0.5" />
        </svg>
      </div>
      <div className="svg-cont">
        <svg height="500" width="500" className="floatDown">
          <circle cx="800" cy="300" r="200" fill="#F5A0A0" opacity="0.5" />
        </svg>
      </div>
      <div className="svg-cont">
        <svg height="500" width="500" className="floatDown">
          <circle cx="1300" cy="900" r="200" fill="#97F1F0" opacity="0.5" />
        </svg>
      </div>
      <div className="svg-cont">
        <svg height="500" width="500" className="floatUp">
          <circle cx="700" cy="1000" r="200" fill="#E9497E" opacity="0.2" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
