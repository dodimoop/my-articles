import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  title: {
    textAlign: 'center'
  }
})

const PasswordGenerator = () => {
  const classes = useStyles()

  return (
    <div>
      <h3 className={classes.title}>PASSWORD GENERATOR</h3>
    </div>
  )
}

export default PasswordGenerator
