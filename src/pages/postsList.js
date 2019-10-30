import React from 'react'
import { createUseStyles } from 'react-jss'

// import data.json
import dataJson from '../data/data.json'

const useStyles = createUseStyles({
  title: {
    textAlign: 'center'
    // width: '100%'
  },
  cardWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  cards: {
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    background: '#fff',
    borderRadius: '2px',
    height: '300px',
    margin: '1rem',
    position: 'relative',
    width: '20%',
    padding: 15
  },
  content: {
    textAlign: 'justify',
    overflow: 'auto',
    maxHeight: 180
  }
})

const PostsList = () => {
  const classes = useStyles()

  return (
    <div>
      <h3 className={classes.title}>POSTS LIST</h3>
      <div className={classes.cardWrapper}>
        {dataJson.map(data => (
          <div className={classes.cards} key={data.id}>
            <span>
              <h4>{data.title}</h4>
              <p className={classes.content}>{data.body}</p>
              <i>- {data.author}</i>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostsList
