import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  title: {
    textAlign: 'center'
  }
})

const AddNewPost = () => {
  const classes = useStyles()

  return (
    <div>
      <h3 className={classes.title}>ADD NEW POST</h3>
    </div>
  )
}

export default AddNewPost
