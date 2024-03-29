import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Founders",
    paragraph:
      "Presence founders have led many startups up to maturity and have successfully founded many startups in the Bay Area, such as ARleaps, AB3DLaps, 3D Touch, Femto-Soft and Ezosa Companies in USA.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <Image
                  className="has-shadow"
                  src={require("./../../assets/images/hossam.jpg")}
                  alt="Hero"
                  width={896}
                  height={504}
                />
                <div
                // className="testimonial-item-content"
                >
                  {/* <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum cillum dolore eu fugiat.
                  </p> */}
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Hossam Ahmed
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">CEO, Founder</a>
                  </span>
                  <br />
                  <span>
                    <a href="mailto:hossam@presencetech.io">
                      hossam@presencetech.io
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <Image
                  className="has-shadow"
                  src={require("./../../assets/images/ayed.jpg")}
                  alt="Hero"
                  width={896}
                  height={504}
                />
                <div
                // className="testimonial-item-content"
                >
                  {/* <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum cillum dolore eu fugiat.
                  </p> */}
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Ayed Adeed
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">President, Founder</a>
                  </span>
                  <br />
                  <span>
                    <a href="mailto:ayed@presencetech.io">
                      ayed@presencetech.io
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <Image
                  className="has-shadow"
                  src={require("./../../assets/images/johns.jpg")}
                  alt="Hero"
                  width={896}
                  height={504}
                />
                <div
                // className="testimonial-item-content"
                >
                  {/* <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum cillum dolore eu fugiat.
                  </p> */}
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    John Partin
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">COO</a>
                  </span>
                  <br />
                  <span>
                    <a href="mailto:john@presencetech.io">
                      john@presencetech.io
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* 
            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum cillum dolore eu fugiat.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Ben Stafford
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
