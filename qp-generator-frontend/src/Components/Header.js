import React,{useContext} from 'react'
import { Col, Row } from 'reactstrap'
import { HeaderContext } from './HeaderProvider'


function Header() {

    const [state]=useContext(HeaderContext)
    

    return(
        <div className="header-container">
            <div className="center">
                 <h5>{state.college}</h5>
                 <h5><span>{state.code}</span>-{state.subject}</h5>
                 <h5>{state.degree}-{state.sem}</h5>
            </div>
            <Row>
              <Col className="left"><h5>Date:{state.date}</h5></Col>
              <Col style={{textAlign:"right"}} className="right"><h5>Marks:{state.marks}</h5></Col>
            </Row>
        </div>
    )
}

export default Header
