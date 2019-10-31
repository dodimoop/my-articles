/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { createUseStyles } from 'react-jss'
import PropTypes from 'prop-types'

const useStyles = createUseStyles({
  cards: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    background: '#fff',
    borderRadius: '2px',
    height: '300px',
    margin: '1rem',
    position: 'relative',
    width: '20%',
    padding: 15,
    cursor: 'pointer'
  },
  dataTitle: {
    textAlign: 'center'
  },
  author: {
    padding: 10,
    textAlign: 'center'
  },
  body: {
    overflow: 'auto',
    maxWidth: '80%',
    maxHeight: 200,
    textAlign: 'justify',
    padding: 10
  }
})

const Card = ({ title, author, onClick }) => {
  const classes = useStyles()

  return (
    <div className={classes.cards} onClick={onClick}>
      <h4 className={classes.dataTitle}>{title}</h4>
      <i className={classes.author}>- {author}</i>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.any.isRequired,
  onClick: PropTypes.func
}
Card.defaultProps = {
  onClick: () => {}
}

export default Card
