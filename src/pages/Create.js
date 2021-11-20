import React, { useState } from 'react'
// import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
// import ButtonGroup from '@material-ui/core/ButtonGroup'
// import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
// import SendIcon from '@mui/icons-material/Send';

import { Typography, Button, Container,TextField } from '@mui/material' 
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import { StyledEngineProvider } from '@mui/material/styles';

const useStyles = makeStyles({
  // btn:{
  //   fontSize: 60,
  //   backgroundColor: 'violet',
  //   '&:hover': {
  //     backgroundColor: 'blue'
  //   }
  // },
  // title: {
  //   textDecoration: 'underline',
  //   marginBottom: 20
  // }
  field:{
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState('');
  const [detailsError, setDetailsError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if(title == ''){
      setTitleError(true)
    }
    if(details == ''){
      setDetailsError(true)
    }
    if(title && details) {
      console.log(title, details)
    }
  }

  return (
    <StyledEngineProvider injectFirst>
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
          className={classes.title}
          variant="h6"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Create a New Note
        </Typography>

        <form noValidate autoComplete="off" onSubmit={handleSubmit} >
          <TextField 
            onChange={(e) => setTitle(e.target.value)}
            className={classes.field}
            label="Note Title"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={titleError}
          />
          <TextField 
            onChange={(e) => setDetails(e.target.value)}
            className={classes.field}
            label="Details"
            variant="outlined"
            color="secondary"
            multiline
            rows={4}
            fullWidth
            required
            error={detailsError}
          />

          <Button
            className={classes.btn}
            type="submit"
            color="secondary"
            variant="contained"
            // startIcon={<SendIcon />}
            endIcon={<KeyboardArrowRightIcon />}
            // disableElevation //which means drop shadow
          >
            Submit
          </Button>
        </form>

        

        {/* Icons */}
        {/* <br />
        <AcUnitOutlinedIcon />
        <AcUnitOutlinedIcon color="secondary" fontSize="large" />
        <AcUnitOutlinedIcon color="secondary" fontSize="small" />
        <AcUnitOutlinedIcon color="action" fontSize="small" />
        <AcUnitOutlinedIcon color="error" fontSize="small" />
        <AcUnitOutlinedIcon color="disabled" fontSize="small" /> */}

      </Container>
    </StyledEngineProvider>

  )
}
