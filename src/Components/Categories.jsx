import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { categoryAdd } from '../Services/allApis';
import CategoryList from './CategoryList';

function Categories() {
  

  const [addCategory,setAddCategory]=useState({
    name:'',video:[]
  })  

  const[addCatStatus,setAddCatStatus]=useState({})

  const getCategory=(val)=>{
    if(val){
      setAddCategory({...addCategory,name:val})
    }
  }

  // const getdata=(e)=>{
  //   const {name,value}=e.target
  //   console.log(name,value)
  //   if(name==='category'){
  //     setAddCategory({category:value})
  //     console.log(value)
  //   }
  //   else{
  //     console.log(addCategory)
  //   }
  // }
   const handleCategory=async()=>{
    console.log(addCategory)
    if(addCategory.name){
      const res=await categoryAdd(addCategory)
      if(res.status>=200 && res.status<300 ){
        toast.success("Add successfully...")
        handleClose()
      }

    else{
      toast.error("category adding failed..")
    } 
  }

    else{
      toast.info("enter valid data..")
    }
  }

  
  
  
    

  
  const [show, setShow] = useState(false);

  const handleClose = () =>{ 
    setShow(false);
    setAddCategory({
      name:'',video:[]
    })
  }
  const handleShow = () => setShow(true);
  return (
   <>
   <div className='d-grid'>
    <Button variant='primary' className='btn' onClick={handleShow}>Add Category</Button>
   </div>
   <CategoryList/>

   {/* <div  className='bg-light row border border-3 border-dark p-3' style={{width:'200%'}}>
    <h5>category</h5>

   </div> */}
   



   <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> Category</Form.Label>
        <Form.Control type="text" name='category' onChange={(e)=>{getCategory(e.target.value)}} placeholder="enter category" />
      </Form.Group>
     
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleCategory}>add</Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default Categories