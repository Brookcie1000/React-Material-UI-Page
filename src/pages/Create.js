import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded'
import { TextField, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function Create() {
  const history = useHistory()
  const [name, setName] = useState('')
  const [favFood, setFavFood] = useState('')
  const [nameError, setNameError] = useState(false)
  const [foodError, setFoodError] = useState(false)
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name === '') {
      setNameError(true)

    } else {
      setNameError(false)
    }

    if (favFood === '') {
      setFoodError(true)

    } else {
      setFoodError(false)
    }

    if (name && favFood) {
      console.log(name, favFood, category)
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({name, favFood, category})
      })
      .then(() => history.push('/'))
    }

  }

  return (
    <Container
    sx={
      {bgcolor: '#f9f9f9'}
    }>
      <Typography
      variant="h6"
      color="textSecondary"
      component="h2"
      gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          sx={
            {marginTop: 2,
            marginBottom: 2,
            display: 'block'}          
          }
          label="Name"
          variant="outlined"
          color='secondary'
          fullWidth
          required
          onChange={(e) => setName(e.target.value)}
          error={nameError}
        />

        <TextField
          sx={
            {marginTop: 2,
            marginBottom: 2,
            display: 'block'}          
          }
          label="Favourite Food"
          variant="outlined"
          color='secondary'
          fullWidth
          multiline
          rows={4}
          required
          onChange={(e) => setFavFood(e.target.value)}
          error={foodError}
        />
        
      
      <FormLabel>Note Category</FormLabel>
      <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
        <FormControlLabel value="money" control={<Radio />} label="Money" />
        <FormControlLabel value="todos" control={<Radio />} label="Todos" />
        <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
        <FormControlLabel value="work" control={<Radio />} label="Work" />
      </RadioGroup>
      

      <Button
      type="submit"
      color="primary"
      variant="contained"
      endIcon={<AcUnitRoundedIcon />}
      >
        Submit
      </Button>

      </form>

    </Container>
  )
}
