import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

// import component which you will use
import Header from './components/headers'
import PostsList from './pages/postsList'
import DetailsPost from './pages/detailsPost'
import AddNewPost from './pages/addNewPost'
import PasswordGenerator from './pages/passwordGenerator'

const useStyles = createUseStyles({
  app: {
    fontFamily: 'sans-serif'
  }
})

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <Header />
      <Switch>
        <Route path="/" exact component={PostsList} />
        <Route path="/details-post/:id" exact component={DetailsPost} />
        <Route path="/add-new-post" exact component={AddNewPost} />
        <Route path="/password-generator" exact component={PasswordGenerator} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
