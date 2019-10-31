import React, { useState } from 'react'
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
  title: {
    textAlign: 'center'
  }
})

const PasswordGenerator = () => {
  const classes = useStyles()

  // getter and setter
  const [password, setPassword] = useState('')

  // Method for creating a password generator
  const buttonPassword = () => {
    let resultPassword = ''
    const mixCharacters =
      '+tu!#cdefg[hi;ST<UV>ab^&$jkqr*(svwq5}6LMy-z0189{AB%CD27]EFGHIJ~K34N@O|PQRl:mno)pWQYX'
    for (let i = 0; i <= 11; i += 1) {
      const random = Math.floor(Math.random() * mixCharacters.length)
      resultPassword += mixCharacters.charAt(random)
    }
    setPassword(resultPassword)
  }

  return (
    <div className={classes.paper}>
      <h3 className={classes.title}>PASSWORD GENERATOR</h3>
      <div>
        <Input
          type="text"
          className={classes.input}
          placeholder="Password generator"
          value={password}
          readOnly
        />
        <Button onClick={() => buttonPassword()}>Password Generator</Button>
      </div>
    </div>
  )
}

export default PasswordGenerator
