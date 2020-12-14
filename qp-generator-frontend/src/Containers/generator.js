import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';

// import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import MathBar from '../Components/mathbar'
import MathJaxComponent from '../Components/mathjax';
class Generator extends Component {
  constructor() {
    super()
    this.state = {
      questions: [],
      section: [],
      mathbar:-1
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.addSection = this.addSection.bind(this)
    this.handleBar = this.handleBar.bind(this)
    this.handleBarButton = this.handleBarButton.bind(this)
  }

  handleChange(e, index) {
    const { value } = e.target
    const ques = [...this.state.questions]
    ques[index] = value
    this.setState({
      questions: ques
    })
  }
//To handle the input field based on the input chosen from the bar
  handleBar(index,value) {
    const ques = [...this.state.questions]
    ques[index] += value
    this.setState({
      questions: ques
    })
  }
  //To handle the button click functionality
  handleBarButton(index) {
    this.state.mathbar!==index?
    this.setState({mathbar:index})
    :
    this.setState({mathbar:-1})
  }

  handleDelete(index) {
    const ques = [...this.state.questions]
    ques.splice(index, 1)
    this.setState({
      questions: ques
    })
  }

  handleAdd() {
    const ques = [...this.state.questions]
    if (ques.length === 0) {
      ques.push("")
      ques.push("")
    }
    else {
      ques.push("")
    }
    this.setState({
      questions: ques
    })
  }

  addSection() {

  }

  render() {
    let ques = this.state.questions
    let textField
    if (ques.length === 0) {
      textField = <div>
         {this.state.mathbar===0 && <MathBar index={this.state.mathbar} handleBar={this.handleBar}/>}
        <TextField
          id="outlined-textarea"
          name="question"
          label={`Question1`}
          placeholder={`Question1`}
          variant="outlined"
          value=''
          onChange={e => this.handleChange(e, 0)}
        />
        <IconButton aria-label="delete" onClick={this.handleAdd}> <AddIcon className="addbtn" /> </IconButton>
        <IconButton aria-label="delete" onClick={this.handleDelete}> <DeleteIcon className="addbtn" /> </IconButton>
        <Button onClick={()=>this.handleBarButton(0)}>MathBar</Button>
      </div>
    }
    else {
      textField = (ques.map((item, index) => {
        return (<form key={index} autoComplete="off">
          <div>
          {this.state.mathbar===index && <MathBar index={this.state.mathbar} handleBar={this.handleBar}/>}
            <TextField
              id="outlined-textarea"
              name="question"
              label={`Question${index + 1}`}
              placeholder={`Question${index + 1}`}
              variant="outlined"
              value={item.question}
              onChange={e => this.handleChange(e, index)}
            />
          </div>
          <IconButton aria-label="delete" onClick={this.handleAdd}> <AddIcon className="addbtn" /> </IconButton>
          <IconButton aria-label="delete" onClick={this.handleDelete}> <DeleteIcon className="addbtn" /> </IconButton>
          <Button onClick={()=>this.handleBarButton(index)}>MathBar</Button>
        </form>)
      }
      ))
    }

    return (<div>
      <Row>
        <Col>
         {textField}
        </Col>
        <Col>
          {ques.map((data, index) => {
            return (
              <div>
                <ul>
                  {<h6>{index + 1}.<MathJaxComponent ques={data} /> </h6>}
                </ul>
              </div>)
          })}</Col>
      </Row>
    </div>
    )
  }
}

export default Generator