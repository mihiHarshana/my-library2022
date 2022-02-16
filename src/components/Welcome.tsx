import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import welcomeImage from '../resources/images/welcome-image.jpg';

const Welcome: React.FC = () => {
  return (
    <Row className="welcome">
      <Col xs={12}>
        <h1 className="text-center my-3">My Library</h1>
      </Col>
      <Col className="col-12 px-0">
        <Image src={welcomeImage} className="welcome-image"/>
      </Col>
      <Col className="text-end ">
        <span className="me-xl-5 me-lg-4 me-3 mt-1">
          Photo Credit :
          <a href="https://unsplash.com/photos/ajE5goOGzZc"> Anna Hunko</a>
        </span>
      </Col>
    </Row>
  )
}

export default Welcome;