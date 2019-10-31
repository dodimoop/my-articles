/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { createUseStyles } from 'react-jss'
import PropTypes from 'prop-types'

import Card from '../components/card'

const useStyles = createUseStyles({
  title: {
    textAlign: 'center'
  },
  cardWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
})

const PostsList = ({ history }) => {
  const classes = useStyles()

  const articles = JSON.parse(localStorage.getItem('articles'))

  return (
    <div>
      <h3 className={classes.title}>POSTS LIST</h3>
      <div className={classes.cardWrapper}>
        {articles.map(data => (
          <Card
            key={data.id}
            title={data.title}
            author={data.author}
            onClick={() => history.push(`/details-post/${data.id}`)}
          />
        ))}
      </div>
    </div>
  )
}

PostsList.propTypes = {
  history: PropTypes.object.isRequired
}

export default PostsList
