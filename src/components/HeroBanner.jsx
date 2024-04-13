import banner from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <div className="hero-banner d-flex flex-lg-row flex-column justify-content-between align-items-center mt-lg-0 mt-5 text-lg-start text-center">
      <div className="text text-capitalize mb-lg-0 mb-5">
        <h2 className="text-danger fw-bold">Fitness club</h2>
        <h3 className="fw-bold fs-1">
          sweat, smile <br /> and repeat
        </h3>
        <p className="lead fw-medium mt-3">
          check out the most effective exercises
        </p>
        <a
          href="#exercises"
          className="rounded btn btn-lg btn-danger fw-medium text-capitalize mt-3"
        >
          explore exercises
        </a>
      </div>
      <div className="image text-lg-end">
        <img
          src={banner}
          alt="banner img"
        />
      </div>
      <div className="exercises-text text-danger opacity-25 text-capitalize fw-bold d-lg-block d-none">
        exercises
      </div>
    </div>
  );
};

export default HeroBanner;
