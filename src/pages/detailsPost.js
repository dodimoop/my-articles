import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const useStyles = createUseStyles({
  paper: {
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    background: '#fff',
    height: '450px',
    margin: '1rem',
    width: '98%'
  },
  wrappedDetailsPost: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  author: {
    margin: 20
  },
  title: {
    maxWidth: 500,
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

const DetailsPost = ({ match }) => {
  const classes = useStyles()

  // getter and setter
  const [dataPost, setDataPost] = useState('')

  useEffect(() => {
    // Handle for get data from local storage
    const articles = JSON.parse(localStorage.getItem('articles'))

    const findData = articles.find(
      data => Number(data.id) === Number(match.params.id)
    )
    setDataPost(findData)
  }, [match])

  return (
    <div className={classes.paper}>
      {dataPost && (
        <div className={classes.wrappedDetailsPost}>
          <h1 className={classes.author}>{dataPost.title}</h1>
          <p className={classes.body}>{dataPost.body}</p>
          <p className={classes.title}>
            <i>- {dataPost.author}</i>
          </p>
        </div>
      )}
    </div>
  )
}

DetailsPost.propTypes = {
  match: PropTypes.object.isRequired
}

export default withRouter(DetailsPost)
