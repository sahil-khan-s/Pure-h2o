import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { getUserDetails, updateUser } from '../actions/userActions'
import { USER_UPDATE_RESET } from '../constants/userConstants'

const UserEditScreen = () => {
  const { id } = useParams()
  const userId = id

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSeller, setIsSeller] = useState(false)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userUpdate = useSelector((state) => state.userUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET })
      navigate('/admin/userlist')
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsSeller(user.isSeller)
      }
    }
  }, [dispatch, navigate, userId, user, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUser({ _id: userId, name, email, isSeller }))
  }

  return (
    <>
      <Link to='/admin/userlist' className='btn btn-light my-3'>
        Go back
      </Link>

      <FormContainer>
        <h1 style={{ color: 'white' }}>Edit User</h1>
        {loadingUpdate && <Loader /> }
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label style={{ color: 'white' }}>Name</Form.Label>
              <Form.Control
                // pattern='[A-Za-z]'
                type='text'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label style={{ color: 'white', paddingTop: '10px' }}>
                Email Address
              </Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='isAdmin'>
              <Form.Check
                type='checkbox'
                pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                label='Is Seller'
                checked={isSeller}
                title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
                onChange={(e) => setIsSeller(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button
              style={{
                border: '2px solid white',
                background: 'transparent',
                borderRadius: '5px',
                marginTop: '20px',
              }}
              type='submit'
              variant='primary'
            >
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default UserEditScreen
