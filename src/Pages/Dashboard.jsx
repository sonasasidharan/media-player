import React ,{useState}from 'react'
import { Row,Col } from 'react-bootstrap'
import Addvideos from '../Components/Addvidoes'
import Videos from '../Components/Videos'
import Categories from '../Components/Categories'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'


function Dashboard() {
  const [addStatus,setAddStatus]=useState({})
  return (
    <>
    <div>
      <h1>Dashboard</h1>
     <Link to={'/his'}>watch history</Link>
      <Row className='p-5'>
        <Col sm='1' md='1'>
          <Addvideos setAddStatus={setAddStatus}/>
        </Col>
        <Col sm='4' md='8'>
          <Videos addStatus={addStatus}/>
        </Col>
        <Col  sm='' md=''>
          <Categories/>
        </Col> 
      </Row>
    </div>
    <ToastContainer/>
    
    
    
    </>
    
    
  )
}

export default Dashboard