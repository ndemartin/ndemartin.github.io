import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, education, certifications } from "../../content_option";

export const Credentials = () => {
  return (
    <HelmetProvider>
      <Container className="Credentials-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Credentials | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Credentials</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            <div className="education_content">
              <h4>{education.degree}</h4>
              <p>{education.school}, {education.year}</p>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Certifications</h3>
          </Col>
          <Col lg="7">
            <div className="certification_grid">
              {certifications.map((cert, i) => (
                <div key={i} className="certification_item">
                  <a href={cert.credential_url} target="_blank" rel="noopener noreferrer">
                    <img src={cert.badge_url} alt={cert.name} className="cert_badge" />
                    <div className="cert_details">
                      <h5>{cert.name}</h5>
                      <p>{cert.issuer}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
}; 