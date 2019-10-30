import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  Input: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  }
})

const Input = ({ ...props }) => {
  const classes = useStyles()

  return (
    <div className={classes.Input}>
      <input {...props} type="text" />
    </div>
  )
}

export default Input
