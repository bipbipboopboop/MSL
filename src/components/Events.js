import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import MASIS_Image1 from "../assets/event_pics/MASIS/MASIS-img-1.jpg";
import UFO_Image1 from "../assets/event_pics/UFO_17/UFO-img-1.jpg";
import UFO_Image2 from "../assets/event_pics/UFO_17/UFO-img-2.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Events = () => {
  const projects = [
    {
      title: "MASIS Malaysian Night",
      description: "Photo with Dato and Datin in the MASIS Malaysian Night",
      imgUrl: MASIS_Image1,
    },
    {
      title: "UFO 17",
      description: "Having fun playing captain ball in UFO 17",
      imgUrl: UFO_Image1,
    },
    {
      title: "UFO 17",
      description: "Memorable ending of UFO 17",
      imgUrl: UFO_Image2,
    },
  ];

  return (
    <section className="project" id="events">
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
                  <h2>Past Events</h2>
                  <p>Here are some of our past events!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {pastEvents(isVisible)}
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

  function pastEvents(isVisible) {
    return (
      <Tab.Content
        id="slideInUp"
        className={isVisible ? "animate__animated animate__slideInUp" : ""}
      >
        <Tab.Pane eventKey="first">
          <Row>
            {projects.map((project, index) => {
              return <ProjectCard key={index} {...project} />;
            })}
          </Row>
        </Tab.Pane>
      </Tab.Content>
    );
  }
};
