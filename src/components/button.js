import React from 'react'
import { createUseStyles } from 'react-jss'
import PropTypes from 'prop-types'

const useStyles = createUseStyles({
  button: {
    display: 'flex',
    justifyContent: 'center'
  },
  buttonStyle: {
    padding: 20,
    margin: 20,
    width: '20%',
    cursor: 'pointer',
    fontSize: 16,
    border: '1px solid green',
    backgroundColor: 'white',
    color: 'green',
    '&:hover': {
      color: '#ffffff',
      backgroundColor: 'green'
    },
    '&:focus': {
      outline: 'none'
    }
  }
})

const Button = ({ children, ...props }) => {
  const classes = useStyles()
  return (
    <div className={classes.button}>
      <button className={classes.buttonStyle} type="button" {...props}>
        {children}
      </button>
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired
}

export default Button
