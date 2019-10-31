import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  paper: {
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    background: '#fff',
    margin: '1rem',
    padding: 20,
    width: '95%'
  },
  title: {
    textAlign: 'center'
  }
})

const PasswordGenerator = () => {
  const classes = useStyles()

  return (
    <div className={classes.paper}>
      <h3 className={classes.title}>PASSWORD GENERATOR</h3>
    </div>
  )
}

export default PasswordGenerator
