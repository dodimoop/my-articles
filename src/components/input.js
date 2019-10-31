import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  wrapperInput: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  input: {
    display: 'flex',
    justifyContent: 'center',
    width: '50%',
    padding: '10px',
    margin: '10px'
  }
})

const Input = ({ ...props }) => {
  const classes = useStyles()

  return (
    <div className={classes.wrapperInput}>
      <input {...props} className={classes.input} type="text" />
    </div>
  )
}

export default Input
