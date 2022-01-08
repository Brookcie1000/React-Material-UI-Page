import React, { useEffect, useState } from 'react'
import { Grid, Container } from '@mui/material'
import NoteCard from '../components/NoteCard'

export default function Notes() {
  const [notes, setNotes] = useState([])

  useEffect( () => {
    fetch('http://localhost:8000/notes')
    .then(serverRes => serverRes.json())
    .then(data => setNotes(data))

  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)

  }

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid item key={note.id} xs={12} sm={6} lg={4}>
            <NoteCard info={note} handleDelete={handleDelete} />        
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
