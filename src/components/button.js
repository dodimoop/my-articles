import React from 'react'
import { createUseStyles } from 'react-jss'
import PropTypes from 'prop-types'

const useStyles = createUseStyles({
  button: {
    display: 'flex',
    justifyContent: 'center'
  },
  buttonStyle: {
    padding: 10,
    margin: 10,
    width: '15%',
    cursor: 'pointer',
    fontSize: 16,
    border: '1px solid #ff9000',
    backgroundColor: 'white',
    color: '#ff9000',
    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#ff9000'
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
