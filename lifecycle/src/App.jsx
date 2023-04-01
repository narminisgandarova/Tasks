import {useState} from 'react'
import { Button, Container } from 'react-bootstrap'

const App = () => {

    const [count,setCount] = useState(0);
    
   const increment=()=>{
    setCount(count+1)
    }
   const decrement=()=>{
    if (count <= 0) {
      setCount(0)
    }else{
      setCount(count-1)
    }
    }
    const stop =()=>{
      setCount(0)
    }
  return (
    <Container className='mt-5'>
        <Button variant='danger' onClick={decrement}>-1</Button>
        <span className='mx-3'>{count}</span>
        <Button variant='success'  onClick={increment}>+1</Button>
        <hr/>
        <Button variant='warning' onClick={stop}>stop</Button>
    </Container>
  )
}

export default App