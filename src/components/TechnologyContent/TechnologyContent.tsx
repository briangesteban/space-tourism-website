import { Link, Navigate, useParams } from "react-router-dom";
import data from "../../data/data.json";
import "./TechnologyContent.scss";

interface ITech {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

const TechnologyContent = () => {
  const { tech: urlParam } = useParams();
  const technologiesData: ITech[] = data.technology;
  const technology: ITech | undefined = technologiesData.find((tech) => {
    if (urlParam) {
      return tech.name.toLowerCase().includes(urlParam);
    } else {
      return false;
    }
  });

  // Redirect to Not Found Page
  if (!technology) {
    return <Navigate to="not-found" />;
  }

  return (
    <section className="tech">
      <h2 className="tech__title">
        <span className="tech__title--number" aria-hidden="true">
          03
        </span>
        Space Launch 101
      </h2>
      <div className="tech__wrapper">
        <img
          src={technology?.images.landscape}
          alt={technology?.name}
          className="tech__image"
        />
      </div>
      <div className="tech__wrapper">
        <div className="tech__nav">
          <div className="tech__nav-wrapper">
            <Link
              to="/technology/launch vehicle"
              className="tech__nav-link"
              aria-label="Go to Launch Vehicle Technology Profile"
            >
              1
            </Link>
            <Link
              to="/technology/spaceport"
              className="tech__nav-link"
              aria-label="Go to Launch Vehicle Technology Profile"
            >
              2
            </Link>
            <Link
              to="/technology/space capsule"
              className="tech__nav-link"
              aria-label="Go to Launch Vehicle Technology Profile"
            >
              3
            </Link>
          </div>
        </div>
        <h3 className="tech__subtitle">The Terminology</h3>
        <h4 className="tech__name">{technology.name}</h4>
        <p className="tech__description">{technology.description}</p>
      </div>
    </section>
  );
};

export { TechnologyContent };
