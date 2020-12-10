import React,{useState} from 'react';
import { Col, Row } from 'reactstrap';

//Default Components
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';


 function AddTextField({part}) {
  //State Declaration
  const [inputList,setInputList]=useState(
    [{question:""}])
  
    // const [inputList,setInputList]=useContext(HeaderContext);

  // Function that get values from input
  const handleChange=(e,index)=>{
    const {name,value}=e.target;
    const list=[...inputList];
    list[index][name]=value
    setInputList(list)
  }

 // Function to Add input textfield 
  const handleAdd=()=>{
    setInputList([...inputList,{question:""}])
  }
 
  //Function to delete the input textfield
  const handleDelete=i=>{
    const list=[...inputList];
    list.splice(i,1);
    setInputList(list)
  }

    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width:"60ch",
          },
        },
      }));

    const classes = useStyles();

    return (
        <div>
          <Row>
            <Col>
            <h6>Part - {part}</h6>
          { inputList.map((item,i)=>{
            return(
          <form key={i} className={classes.root}  autoComplete="off">
              <div>
              <TextField
                      id="outlined-textarea"
                      name="question"
                      id="outlined-textarea"
                      label={`Question${i+1}`}
                      placeholder={`Question${i+1}`}
                      multiline
                      variant="outlined"
                      size="lg"
                      value={item.question}
                      onChange={e=>handleChange(e,i)}
                      />                
                {inputList.length-1===i && <IconButton aria-label="delete" onClick={handleAdd}>
                <AddIcon className="addbtn" />
                </IconButton>}
  
                {inputList.length!==1 &&<IconButton aria-label="delete" onClick={()=>handleDelete(i)}>
                <DeleteIcon className="addbtn" />
                </IconButton>}
                </div>
                </form>
            )
          })}</Col>
          <Col>
        <h6 className="center">Part - {part}</h6>
          {inputList.map((data,i)=>{
            return(
              <div> 
            <ul>
             {<h6>{i+1}.{data.question}</h6>}
            </ul>
            </div>)
          })}
          </Col>
          </Row>
          </div>)
 }
export default AddTextField