import React from "react";
import {Row, Col} from 'react-bootstrap';
import Author from "./Author";
import {Plus} from "react-feather";
import AuthorForm from "./AuthorForm";

const AuthorListUX: React.FC = () => {
  return (
    <React.Fragment>
      <Row>
        <Col className="author-list pe-1" xs={10}>
          <h2 className="author-list">Authors</h2>
          <hr className="hr"/>
        </Col>
        <Col xs={10} className="py-0">
          <Author index={"1"} name={"Author"}/>
          <Author index={"2"} name={"Author "}/>
          <Author index={"3"} name={"Author "}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="px-1 pt-2">
          <Plus className="plus"/>
          Add Author
        </Col>
      </Row>
      <Row>
        <Col xs={9} className="mt-xl-3 mt-sm-0">
          <AuthorForm />
        </Col>
      </Row>
    </React.Fragment>
  )

}
export default AuthorListUX;