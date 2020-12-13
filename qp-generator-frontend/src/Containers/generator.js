import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

// import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

class Generator extends Component {
  constructor() {
    super()
    this.state = {
      questions: [],
      section: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.addSection = this.addSection.bind(this)
  }

  handleChange(e, index) {
    const { name, value } = e.target
    const ques = [...this.state.questions]
    ques[index] = value
    this.setState({
      questions: ques
    })
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
        <TextField
          id="outlined-textarea"
          name="question"
          id="outlined-textarea"
          label={`Question1`}
          placeholder={`Question1`}
          variant="outlined"
          value=''
          onChange={e => this.handleChange(e, 0)}
        />
        <IconButton aria-label="delete" onClick={this.handleAdd}> <AddIcon className="addbtn" /> </IconButton>
        <IconButton aria-label="delete" onClick={this.handleDelete}> <DeleteIcon className="addbtn" /> </IconButton>
      </div>
    }
    else {
      textField = (ques.map((item, index) => {
        return (<form key={index} autoComplete="off">
          <div>
            <TextField
              id="outlined-textarea"
              name="question"
              id="outlined-textarea"
              label={`Question${index + 1}`}
              placeholder={`Question${index + 1}`}
              variant="outlined"
              value={item.question}
              onChange={e => this.handleChange(e, index)}
            />
          </div>
          <IconButton aria-label="delete" onClick={this.handleAdd}> <AddIcon className="addbtn" /> </IconButton>
          <IconButton aria-label="delete" onClick={this.handleDelete}> <DeleteIcon className="addbtn" /> </IconButton>
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
                  {<h6>{index + 1}.{data} </h6>}
                </ul>
              </div>)
          })}</Col>
      </Row>
    </div>
    )
  }
}

export default Generator