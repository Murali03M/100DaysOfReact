import React from 'react'
import {Card,CardContent, Container} from '@material-ui/core'
import { Icon, IconButton, Typography } from '@mui/material'
import { Check, Delete } from '@material-ui/icons'

const Todo = ({title , checkTodo , id, isCompleted, deleteTodo}) => {
    const markComplete =()=>checkTodo(id);
    const delComplete =() => deleteTodo(id);
    const todoStyle = isCompleted ? {textDecoration:"line-through"} : {textDecoration:"none"}
  return (
    <div>
      <Container>
        <Card variant='outlined' style={{ marginTop:35, background:"lightgray"} }>
       <CardContent>
        <Typography variant='h5' component={'h2'} style={todoStyle}>
       <IconButton style={{ float:'left'}} onClick={markComplete}>
        <Check style={{ color:'green'}}/>
         </IconButton>
       {title}
       <IconButton style={{float:'right'}} onClick={delComplete}> 
        <Delete style={{ color:'red'}}/>
       </IconButton>
        </Typography>
       </CardContent>
        
        </Card>
      </Container>
    </div>
  )
}

export default Todo
