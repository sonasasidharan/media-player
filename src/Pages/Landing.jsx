import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
  <>
  <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
    <div className='row p-5 shadow'>
      <div className='col'>
        <h1>Media Player 2024</h1>
        <p>Explore media player for utube video upload and management,you can add and manage videos,categories and even check </p>
        <div>
        <Link to={'/dash'} className='btn btn-success'>Explore</Link>
        </div>
      </div>
      <div className='col'>
        <img src="https://tse3.mm.bing.net/th?id=OIP.zVwadM4yYy77QUD4yuMH9gHaEK&pid=Api&P=0&h=180"  className='img-fluid shadow' alt="img"
         style={{height:'300px',width:'100%'}} />

      </div>

    </div>
  </div>
  <div className='mt-3 p-5'>
    <h2 className='text-center'>Features</h2>
    <div className='d-flex mt-2 flex-row justify-content-between'>
    
    <div class="card" style={{width: '18rem'}}>
  <img src="https://i.pinimg.com/originals/93/a4/39/93a439f02fed8676fb281e461bbde801.gif" style={{height:'300px'}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">upload vedios</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card" style={{width: '18rem'}}>
  <img src="https://media2.giphy.com/media/TJPN2RCoRr4kmKNNrj/giphy.gif"  style={{height:'300px'}}  class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">watch vedio</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card" style={{width: '18rem'}}>
  <img src="https://www.writersdigest.com/.image/t_share/MTcxMDY1ODEzNDA5OTMzMjk3/image-placeholder-title.gif"  style={{height:'300px'}}  class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">view history</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

    </div>
    </div>
    <div className='mt-5  d-flex justify-content-between  flex-row align-items-center p-5'>
      <div className='col'>
        <h2>simple fasr & secure</h2>
        <p  style={{textAlign:'justify'}}> media player 2024 is a platform for simple and  faster youtube video uploading and managment <br/>
        video watch history to where you get a simple video player interface with the app itself</p>
      </div>
    
      </div>
        <div className='col'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OxErBK-I2E4?si=5P5EP7jSJmIUu6Qp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
  
  
  
  </>
  )
}

export default Landing