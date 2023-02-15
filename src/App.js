import React from 'react'

import Card from './components/Card'
import Content from './components/Content'
import { useEffect,useState } from 'react'
import   Navbar from './components/Navbar'

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Box, Container} from '@mui/system'
import { TableRowm,Grid } from '@mui/material'

function App() {
const [post, setPost] = useState([])
const [flag,setFlag] = useState(true)
 const fetchUser = () =>{
  fetch(" https://reqres.in/api/users?page=1")
  .then(response=>response.json())
  .then(response=>{
    console.log(response)

    setPost(response.data)
    setFlag(false)
  })
 }
  return (
    <div className='App' >
     
      <Navbar onPress ={fetchUser}/>
      <Content/>
      <Container>
        <div style={{display:"flex", flexWrap:"wrap",padding:" 0% left"}}>
        {
        <Grid container   style={{flex:" 0 0 49% ", justifyContent:"space-between"  , marginLeft:"29%"}}>
        {post.map((post,idx) => <Card firstName={post.first_name} lastName={post.last_name}  Email={post.email} Userid={post.id} img={post.avatar} key={idx}/>)}
        </Grid>
        
        }


        </div>
     
        <button type="button" class="btn btn-primary btn-lg" onClick={fetchUser}>Get Users</button>
      </Container>
  
        


        {flag ? <CircularProgress color="inherit" />:null}
   

  
    </div>
  )
}

export default App
