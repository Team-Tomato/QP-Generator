import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { HeaderContext } from './HeaderProvider';




function InputElement({ placeholder, width, _multiline, onChange, value, name }) {

  const [state, setState] = useContext(HeaderContext);

  function handleChange(evt) {
    setState({
      ...state,
      [evt.target.name]: evt.target.value
    })
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width,
      },
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} autoComplete="off">
        <div>
          {_multiline && <TextField
            id="outlined-textarea"
            label={placeholder}
            onChange={handleChange}
            name={name}
            placeholder
            multiline
            variant="outlined"
            size="lg"
          />}
          {!_multiline && <TextField
            id="outlined-textarea"
            label={placeholder}
            onChange={handleChange}
            name={name}
            placeholder
            variant="outlined"
            size="lg"
          />}
        </div>
      </form>
    </div>
  )
}

export default InputElement
