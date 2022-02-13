import {Row, Col, Image, Container} from "react-bootstrap";
import welcomeImage from '../resources/images/welcome_image.jpg';

const Welcome = () => {
  return (
    <Row className="mx-0">
      <Col className="col-12 p-0" >
        <h1 className="text-center">My Library</h1>
      </Col>
      <Col className="col-12 p-0">
        <Image src={welcomeImage} className="welcome-image"></Image>
      </Col>
      <Col className="text-end">
        Photo Credit :
        <a href="https://unsplash.com/photos/ajE5goOGzZc"> Anna Hunko</a>

      </Col>
    </Row>
  )
}
export default Welcome;