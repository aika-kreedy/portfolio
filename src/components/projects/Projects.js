import { Container, Row, Col} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assests/images/project-img1.png";
import projImg2 from "../../assests/images/project-img2.png";
import projImg3 from "../../assests/images/project-img3.png";
import "./project.css"

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup1",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup2",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup3",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <Row className="card-project">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                /> 
                          )})}
                       </Row>
                       </Col>
                       </Row>
                       </Container>
                       </section>
  )}