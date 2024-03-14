import React from 'react'
import { Link } from 'react-router-dom'

function Footer1() {
  return (
    <div className='w-100 d-flex flex-column justify-content-center bg-light'>
      <div className='row p-5'>
        <div className='col'>
          <h4>media player 2024</h4>
          <p style={{textAlign:'justify'}}>hdfdjkfl;dlkjhgfdsdfghjkgvxbsnkfc;oooohdfdjkfl;dlkjhgfdsdfghjkgvxbsnkfc;oooo
          hdfdjkfl;dlkjhgfdsdfghjkgvxbsnkfc;oooohdfdjkfl;dlkjhgfdsdfghjkgvxbsnkfc;oooohdfdjkfl;dlkjhgfdsdfghjkgvxbsnkfc;oooo
          hdfdjkfl;dlkjhgfdsdfghjkgvxbsnkfc;oooo</p>
        
        </div>
        <div className='col'>
          <h4>links</h4>
          <Link to={'/'} style={{color:'black'}}>Landing</Link><br/>
          <Link to={'/dash'}  style={{color:'black'}}>Dashboard</Link><br/>
          <Link to={'/his'}  style={{color:'black'}}>History</Link><br/>
        </div>
        <div className='col'>
          <h4>References</h4>
          <a href="https://react-bootstrap.github.io/" target='_blank' style={{color:'black'}}>React-bootstrap</a><br/>
          <a href="https://react.dev/" target='_blank' style={{color:'black'}} >React</a><br/>
          <a href="https://getbootstrap.com/" target='_blank' style={{color:'black'}} >bootstrap</a><br/>
        </div>
      </div>
      <div className='text-center'>
        <p>&copy;media player 2024</p>
      </div>
    </div>
  )
}

export default Footer1