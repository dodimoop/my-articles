import React from 'react'
import { createUseStyles } from 'react-jss'

// import component which you will use
import Input from '../components/input'
import Button from '../components/button'

const useStyles = createUseStyles({
  addNewPost: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center'
  },
  inputTitle: {
    display: 'flex',
    justifyContent: 'center',
    width: '50%',
    padding: '10px',
    margin: '10px'
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
    <div>
      <h3 className={classes.title}>ADD NEW POST</h3>
      <Input className={classes.inputTitle} placeholder="Input title" />
      <div className={classes.textareaWrapper}>
        <textarea className={classes.textarea} placeholder="Input content" />
      </div>
      <Input className={classes.inputTitle} placeholder="Input author" />
      <Button>Submit</Button>
    </div>
  )
}

export default AddNewPost
