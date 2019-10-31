/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { createUseStyles } from 'react-jss'
import PropTypes from 'prop-types'

// import data.json
import dataJson from '../data/data.json'

const useStyles = createUseStyles({
  title: {
    textAlign: 'center'
  },
  cardWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
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
  }
})

const PostsList = ({ history }) => {
  const classes = useStyles()

  return (
    <div>
      <h3 className={classes.title}>POSTS LIST</h3>
      <div className={classes.cardWrapper}>
        {dataJson.map(data => (
          <div
            className={classes.cards}
            key={data.id}
            onClick={() => history.push(`/details-post/${data.id}`)}
          >
            <h4 className={classes.dataTitle}>{data.title}</h4>
            <i className={classes.author}>- {data.author}</i>
          </div>
        ))}
      </div>
    </div>
  )
}

PostsList.propTypes = {
  history: PropTypes.object.isRequired
}

export default PostsList
