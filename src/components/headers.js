import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import { withRouter } from 'react-router-dom'

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    border: '1px solid blue',
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 20,
    margin: 20,
    cursor: 'pointer',
    fontSize: 16,

    '&:focus': {
      outline: 'none'
    }
  },
  menuActive: {
    border: 'none',
    backgroundColor: 'blue',
    color: 'white'
  }
})

const Header = ({ location, history }) => {
  const classes = useStyles()

  const routes = [
    {
      name: 'Posts List',
      path: '/'
    },
    {
      name: 'Add New Post',
      path: '/add-new-post'
    },
    {
      name: 'Password Generator',
      path: '/password-generator'
    }
  ]

  return (
    <div className={classes.header}>
      {routes.map(data => (
        <button
          type="button"
          className={clsx(
            classes.button,
            location.pathname === data.path && classes.menuActive
          )}
          key={data.path}
          onClick={() => history.push(data.path)}
        >
          {data.name}
        </button>
      ))}
    </div>
  )
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(Header)
