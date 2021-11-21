import React, { useState } from 'react'
// import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
// import ButtonGroup from '@material-ui/core/ButtonGroup'
// import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
// import SendIcon from '@mui/icons-material/Send';

import { Typography, Button, Container,TextField} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { makeStyles } from '@mui/styles'
import { StyledEngineProvider } from '@mui/material/styles'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { useHistory } from 'react-router-dom'


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
  const classes = useStyles()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState('')
  const [detailsError, setDetailsError] = useState('')
  const [category, setCategory] = useState('money')

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
      fetch('http://localhost:8000/notes',{
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, details, category})
      }).then(() => history.push('/'))
    }
  }

  return (
    <StyledEngineProvider injectFirst>
      <Container size="sm">
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

          <FormControl className={classes.field}>
            <FormLabel disabled={true} >Note Category</FormLabel>
            <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)} name="radio-buttons-group">
              <FormControlLabel value="money" control={<Radio color="secondary" />} label="Money" />
              <FormControlLabel value="todos" control={<Radio color="secondary" />} label="Todos" />
              <FormControlLabel value="reminders" control={<Radio color="secondary" />} label="Reminders" />
              <FormControlLabel value="work" control={<Radio color="secondary"/>} label="Work" />
            </RadioGroup>
          </FormControl>

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
