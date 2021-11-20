import React from 'react'
// import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
// import ButtonGroup from '@material-ui/core/ButtonGroup'
import { Typography, Button, Container } from '@material-ui/core'

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
        // disableElevation //which means drop shadow
      >
        Submit
      </Button>

      {/* <Button type="submit" color="primary" >Submit</Button>
      <Button type="submit" color="secondary" variant="outlined" >Submit</Button>

      <ButtonGroup color="secondary" variant="contained" >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
    </Container>
  )
}
