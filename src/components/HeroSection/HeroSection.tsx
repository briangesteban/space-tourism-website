import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/state/store";
import "./HeroSection.scss";

const HeroSection = () => {
  const navState: boolean = useSelector(
    (state: RootState): boolean => state.isNavOpen.value
  );

  return (
    <header className="hero-section">
      <div className="hero-section__wrapper">
        <h1 className="hero-section__header">
          <div className="hero-section__header--small">
            So, You want to travel to
          </div>
          <div className="hero-section__header--big">Space</div>
        </h1>
        <p className="hero-section__details">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="hero-section__wrapper">
        <Link
          to="/destination/moon"
          tabIndex={navState ? -1 : 0}
          className="hero-section__btn-cta"
        >
          Explore
        </Link>
      </div>
    </header>
  );
};

export { HeroSection };
