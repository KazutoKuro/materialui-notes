import React from 'react'
// import Typography from '@material-ui/core/Typography'
import { Typography } from '@material-ui/core'

export default function Create() {
  return (
    <div>
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
    </div>
  )
}
