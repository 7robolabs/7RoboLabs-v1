import React from "react";
import { CASE_STUDIES } from "./constants";
import "./CaseStudiesSection.styles.scss";

const CaseStudiesSection = () => {
  return (
    <div className="caseStudiesSection">
      <div className="header">
        <h3 className="caseStudyLabel">CASE STUDY</h3>
        <h1 className="mainHeading">Explore Our Case Studies</h1>
      </div>
      <div className="caseStudiesGrid">
        {CASE_STUDIES.map((study) => (
          <div
            key={study.id}
            className="caseStudyCard"
            style={{ backgroundImage: `url(${study.image})` }}
          >
            <div className="cardContent">
              <div className="cardLabel">
                <h3>{study.title}</h3>
              </div>
              <h2 className="cardSubtitle">{study.subtitle}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesSection;
