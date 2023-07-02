import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
  const [keyword, setKeyword] = useState('')

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  return (
    <Form
      onSubmit={submitHandler}
      className='w-[400px]  , '
      style={{ display: 'grid',border:'2px solid white', borderRadius:'8px',  gridTemplateColumns: '1fr auto' }}
    >
      <Form.Control
      style={{background:'transparent' , color:'white' , }}
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button style={{border:'1px solid white', color:'white'}} type='submit' variant='outline-success' className=''>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
