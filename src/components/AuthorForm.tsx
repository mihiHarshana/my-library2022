import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";

const AuthorForm: React.FC = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={9} lg={11} className="author-form">
          <h5>Create Author</h5>
        </Col>
        <Col xs={2} lg={1}>
          <XCircle className="xclose" />
        </Col>

        <Col xs={12}>
          <Form>
            <Form.Group className="mb-3" controlId="authorName">
              <Form.Label className="author-label">Author Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Button className="float-end" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  )
}
export default AuthorForm