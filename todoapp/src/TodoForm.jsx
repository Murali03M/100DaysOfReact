import React from 'react'
import { FormControl, TextField ,Button} from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
const TodoForm = ({addTodo}) => {
   const[text,setText] = useState("")
    const handleSubmit =e =>{
        e.preventDefault()
        addTodo(text);
        setText("");
    }
  return (
    <div>
      <Container maxWidth='sm'>
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth="true" alignItems='center'  style={{marginTop:100}}>
               <TextField
               label='Please add todo item' variant='standard' required='true'  value={text} onChange={(e)=>setText(e.target.value)}> 
               </TextField>
               <Button variant='contained' color='primary' type='submit' style={{marginTop:5}} >Add Item</Button>
            </FormControl>
        </form>
      </Container>
    </div>
  )
}

export default TodoForm
