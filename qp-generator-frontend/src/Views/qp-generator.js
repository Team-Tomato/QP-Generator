import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Generator from '../Containers/Generator'

class AddTextField extends Component {
  constructor() {
    super()
  }

  render() {
    return (<Row>
      <Col>
        <Generator/>
      </Col>
    </Row>)
  }
}

export default AddTextField