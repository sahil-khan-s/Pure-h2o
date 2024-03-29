import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listUsers, deleteUser } from '../actions/userActions'

const UserListScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDelete = useSelector((state) => state.userDelete)
  const { success: successDelete } = userDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers())
    } else {
      navigate('/login')
    }
  }, [dispatch, navigate, successDelete, userInfo])

  const deleteHandler = (id) => {
    if(window.confirm("Are you sure")){
      dispatch(deleteUser(id))
    }
  }

  return (
    <>
    <div className='bg-green-500'>
      <h1 style={{color:"white" , marginTop:"50px", textAlign:'center' }}>Users</h1>
      {loading || users === undefined ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table style={{color:"white" ,}} striped bordered hover responsive className='table-sm'>
          <thead style={{color:"white" , fontSize:"30px"}}>
            <tr style={{color:"white"}}>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody style={{color:"white" ,}}>
            {users.map((user) => (
              <tr style={{color:"white" ,}} key={user._id}>
                <td style={{color:"white" ,}}>{user._id}</td>
                <td style={{color:"white" ,}}>{user.name}</td>
                <td style={{color:"white" ,}}>
                  <a style={{color:"white" ,}} href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
       </div>
    </>
  )
}

export default UserListScreen
