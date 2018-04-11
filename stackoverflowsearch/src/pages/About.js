import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () =>
  <div>
    <Hero backgroundImage="http://www.tedgoas.com/content/blog/22-stack-overflow-design/-stack-overflow-cover.jpg">
      <h1>Stack Overflow Search</h1>
      <h2>Find questions and answers to your programming questions</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <p>
            Stack Overflow is a privately held website, the flagship site of the Stack Exchange Network, created in 2008 by Jeff Atwood and Joel Spolsky. It was created to be a more open alternative to earlier question and answer sites such as Experts-Exchange. The name for the website was chosen by voting in April 2008 by readers of Coding Horror, Atwood's popular programming blog.
          </p>
          <p>
            It features questions and answers on a wide range of topics in computer programming.
          </p>
          <p>-from Wikipedia</p>
        </Col>
      </Row>
    </Container>
  </div>;

export default About;
