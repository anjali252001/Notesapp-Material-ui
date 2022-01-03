import React , {useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Container} from '@material-ui/core';
import NoteCard from '../components/NoteCard';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
export default function Notes() {
  const [notes ,setNotes] =useState([]);

  useEffect(()=>{
fetch('http://localhost:8000/notes')
.then(res=>res.json())
.then(data=> setNotes(data));

  },[])
  const handleDelete =async(id)=>{
await fetch('http://localhost:8000/notes'+id,{
  method: 'DELETE'
})
const newNotes =notes.filter(note=>note.id!==id);
setNotes(newNotes);
  }
  const breakpoints ={
    default:4,
    1100:3,
    700:2,
    500:1
  };
  return (
    <Container>
    <Masonry
    breakpointCols={breakpoints}
    className='my-masonry-grid'
    columnClassName= 'my-masonry-grid_column'
    >
    
      {
        notes.map(note=>(
          <div key={note.id}><NoteCard note={note} handleDelete={handleDelete}/> </div>
        ))
      }
      </Masonry>
      </Container>
    
  )
}