import React from 'react'
import { createUseStyles } from 'react-jss'

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
  }
})

const AddNewPost = () => {
  const classes = useStyles()

  return (
    <div className={classes.paper}>
      <h3 className={classes.title}>ADD NEW POST</h3>
      <Input placeholder="Input title" />
      <div className={classes.textareaWrapper}>
        <textarea className={classes.textarea} placeholder="Input content" />
      </div>
      <Input placeholder="Input author" />
      <Button>Submit</Button>
    </div>
  )
}

export default AddNewPost
