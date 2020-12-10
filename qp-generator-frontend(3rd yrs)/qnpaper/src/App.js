import React from 'react';
import './App.css';
import Header from './components/Header';
import Header_Edit from './components/Header_Edit';
import InputElement from './components/InputElement';
import { Col, Row } from 'reactstrap';
import { HeaderProvider } from './components/HeaderProvider';
import AddTextField from './components/AddTextField'

function App() {
  return (
    <div className="App">
      <HeaderProvider>
      <Row>
        <Col><Header_Edit /></Col>
        <Col><Header/></Col>
      </Row>
      </HeaderProvider>
      <AddTextField part="A" />
      <AddTextField part="B" />
    </div>
  );
}

export default App;
