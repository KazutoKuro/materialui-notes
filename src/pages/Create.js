import React from 'react'
// import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
// import ButtonGroup from '@material-ui/core/ButtonGroup'

import { Typography, Button, Container } from '@mui/material' 

// import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Create() {
  return (
    <Container>
      {/* Create page */}
      {/* <Typography 
        variant="h1"
        color="primary"
        align="center"
      >
        Create a new Note
      </Typography> */}
      {/* <Typography 
        noWrap
        color="secondary"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae velit temporibus dicta, consequuntur perspiciatis molestias consectetur reiciendis a neque, provident qui quam quidem animi dolor quod repudiandae cumque ipsam? At!
      </Typography> */}

      {/* <Button type="submit" color="primary" >Submit</Button>
      <Button type="submit" color="secondary" variant="outlined" >Submit</Button>

      <ButtonGroup color="secondary" variant="contained" >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}

      <Typography 
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        onClick={() => console.log("You click me")}
        type="submit"
        color="secondary"
        variant="contained"
        // startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon />}
        // disableElevation //which means drop shadow
      >
        Submit
      </Button>

      {/* Icons */}
      {/* <br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color="secondary" fontSize="large" />
      <AcUnitOutlinedIcon color="secondary" fontSize="small" />
      <AcUnitOutlinedIcon color="action" fontSize="small" />
      <AcUnitOutlinedIcon color="error" fontSize="small" />
      <AcUnitOutlinedIcon color="disabled" fontSize="small" /> */}

    </Container>
  )
}
