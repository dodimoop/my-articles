import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { maxBy } from 'lodash'

// import component which you will use
import Input from '../components/input'
import Button from '../components/button'

const useStyles = createUseStyles({
  paper: {
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    background: '#fff',
    margin: '1rem',
    padding: 20,
    width: '95%'
  },
  addNewPost: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center'
  },
  textareaWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  textarea: {
    width: '50%',
    padding: '10px',
    margin: '10px',
    height: '100px'
  },
  errors: {
    color: 'red',
    margin: 0,
    textAlign: 'center'
  }
})

const AddNewPost = ({ history }) => {
  const classes = useStyles()
  // data from data.json
  const articles = JSON.parse(localStorage.getItem('articles'))

  // getter and setter
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // method when on input title
  const onTitleInput = event => {
    const resTitle = event.target.value
    setTitle(resTitle)
  }

  // method when on input body
  const onBodyInput = event => {
    const resBody = event.target.value
    setBody(resBody)
  }

  // method when on input author
  const onAuthorInput = event => {
    const resAuthor = event.target.value
    setAuthor(resAuthor)
  }

  // method when on click button add post
  const onAddPost = () => {
    setIsSubmitting(true)

    // handle if null
    if (title === '' || body === '' || author === '') {
      return
    }

    // handle get last id
    const getMaxId = maxBy(articles, o => {
      return o.id
    })

    // new data
    const newDataPost = {
      author,
      id: getMaxId.id + 1,
      title,
      body
    }

    articles.push(newDataPost)
    window.localStorage.setItem('articles', JSON.stringify(articles))
    history.push('/')
  }

  return (
    <div className={classes.paper}>
      <h3 className={classes.title}>ADD NEW POST</h3>
      {title === '' && isSubmitting && (
        <p className={classes.errors}>Title is required.</p>
      )}
      <Input
        placeholder="Input title"
        value={title}
        onChange={event => onTitleInput(event)}
      />
      {body === '' && isSubmitting && (
        <p className={classes.errors}>Body is required.</p>
      )}
      <div className={classes.textareaWrapper}>
        <textarea
          className={classes.textarea}
          placeholder="Input content"
          value={body}
          onChange={event => onBodyInput(event)}
        />
      </div>
      {author === '' && isSubmitting && (
        <p className={classes.errors}>Author is required.</p>
      )}
      <Input
        placeholder="Input author"
        value={author}
        onChange={event => onAuthorInput(event)}
      />
      <Button onClick={() => onAddPost()}>Add Post</Button>
    </div>
  )
}

AddNewPost.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(AddNewPost)
