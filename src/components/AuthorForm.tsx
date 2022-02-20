import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";

const AuthorForm: React.FC = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={10} lg={11} className="author-form">
          <h5>Create Author</h5>
        </Col>
        <Col xs={1} lg={1}>
          <XCircle className="xclose" />
        </Col>

        <Col xs={12}>
          <Form>
            <Form.Group className="mb-3" controlId="authorName">
              <Form.Label className="author-label">Author Name</Form.Label>
              <Form.Control required type="text" className="author-text-field" />
            </Form.Group>
            <Button className="float-end" variant="primary" type="submit">
              Create Author
            </Button>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  )
}
export default AuthorForm