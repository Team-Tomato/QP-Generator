import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Generator from '../Containers/generator'

class AddTextField extends Component {

  render() {
    return (
        <Row style={{marginLeft:0,marginRight:0}}>
        <Col>
          <Generator />
        </Col>
        </Row>
      )
  }
}

export default AddTextField