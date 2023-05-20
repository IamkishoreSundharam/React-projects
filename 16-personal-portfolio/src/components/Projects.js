import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/resize1.png";
import projImg2 from "../assets/img/resize2.png";
import projImg3 from "../assets/img/resize3.png";
import projImg4 from "../assets/img/resize4.png";
import projImg5 from "../assets/img/resize5.png";
import projImg6 from "../assets/img/resize6.png";
import projImg7 from "../assets/img/resize7.png";
import projImg8 from "../assets/img/resize8.png";
import projImg9 from "../assets/img/resize9.png";
import Accordian from "../assets/img/accordian.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React from "react";
import menu from "../assets/img/Menu.png"

export const Projects = () => {
  const projects1 = [
    {
      title: "Cocktail App",
      link: "https://kishore-react-project-cocktails.netlify.app",
      imgUrl: projImg1,
    },
    {
      title: "Music Album",
      link: "https://kishore-react-project-musicalbum.netlify.app",
      imgUrl: projImg2,
    },
    {
      title: "Stripe-dropdown",
      link: "https://kishore-react-projects-dropdown.netlify.app",
      imgUrl: projImg6, 
    },
  ];

  const projects2 = [
    {
      title: "Accordian",
      link: "https://kishore-react-projects-accordian.netlify.app",
      imgUrl: Accordian, //change
    },
    {
      title: "Color Generator App",
      link: "https://kishore-react-projects-colorgenerator.netlify.app",
      imgUrl: projImg5,
    },
    {
      title: "Slider Reviews App",
      link: "https://kishore-react-projects-reviews.netlify.app",
      imgUrl: projImg9, //change
    },
  ];

  const projects3 = [
    {
      title: "Shopping App",
      link: "https://kishore-react-projects-cart.netlify.app",
      imgUrl: projImg7,
    },
    {
      title: "Menu",
      link: "https://kishore-react-projects-menu.netlify.app",
      imgUrl: menu, //change
    },
    {
      title: "Slider Reviews App",
      link: "https://kishore-react-projects-reviews.netlify.app",
      imgUrl: projImg9, 
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
