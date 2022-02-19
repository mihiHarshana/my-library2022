import React from "react";
import {Alert, Col, Row} from "react-bootstrap";
import {Edit, Trash2} from 'react-feather';
import Swal from 'sweetalert2'

type AuthorsPropers = {
  name: String,
  index: String
}

const handleDeleteOnClick  = () => {

  Swal.fire({
    text: 'Are you sure to delete Author?',
    icon: 'warning',
    showDenyButton: true,
    confirmButtonText: 'Delete'
  })
}

const Author: React.FC<AuthorsPropers> = (props) => {

  const handleClick = () => {
    setShow(true);
  }

  const [show, setShow] = React.useState(false);
  return (
    <span className="author">
      <Row>

        <Col xs={8} md={9} className="pt-0">
          {props.index} {props.name}
        </Col>
        <Col xs={4} md={3} className="p-0">
          <Trash2 className="bin mx-1 float-end" onClick={handleDeleteOnClick}/>
          <Edit className="edit mx-1 float-end"/>
        </Col>
      </Row>
    </span>
  )
}

export default Author;