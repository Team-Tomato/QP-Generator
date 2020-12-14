import React from 'react'
//import PropTypes from 'prop-types'
import './mathbar.css'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import AirplanemodeInactiveIcon from '@material-ui/icons/AirplanemodeInactive';
const Mathbar = ({index,handleBar}) => {
    return (
        <div class="icon-bar">
      <IconButton className="icon" onClick={()=>handleBar(index,'Kishore')}><AddIcon /></IconButton>
      <IconButton className="icon"><AddBoxIcon /></IconButton>
      <IconButton className="icon"><AddCircleIcon /></IconButton>
      <IconButton className="icon"><AirplanemodeActiveIcon /></IconButton>
      <IconButton className="icon"><AirplanemodeInactiveIcon /></IconButton>
      </div>
    )
}

// Mathbar.propTypes = {

// }

export default Mathbar
