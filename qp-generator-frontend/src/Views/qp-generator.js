import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Generator from '../Containers/generator'

class AddTextField extends Component {

  render() {
    return (
      <Row>
        <Col>
          <Generator />
        </Col>
      </Row>)
  }
}

export default AddTextField