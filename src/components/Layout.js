import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%'
    }
})

export default function Layout({ children}) {
    const classes = useStyles()
    return (
        <div>
            {/* app bar */}

            {/* side drawer */}
            <div className={classes.page}>
                {children}
            </div>
            
        </div>
    )
}
