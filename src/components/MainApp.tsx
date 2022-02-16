import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import Welcome from "./Welcome";
import AuthorListUX from "./AuthorListUX";

const MainApp: React.FC = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col xs={12}>
          <Welcome/>
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={6} p-0>
         {/* <AuthorListUX/>*/}
        </Col>
        <Col sm={12} lg={6} p-0>
          <AuthorListUX/>
        </Col>
      </Row>
    </Container>


  )
}
export default MainApp;