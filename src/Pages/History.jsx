import React, { useEffect,useState } from 'react'
import { getHistory,deleteHis } from '../Services/allApis'
import { toast,ToastContainer } from 'react-toastify'




function History() {


  const[his,setHis]=useState([])


  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    const res=await getHistory()
    console.log(res.data)
    setHis(res.data)

  }


  const handleDelete=async(id)=>{
    console.log(id)
        const res= await deleteHis(id)
        console.log(res)
        if(res.status>=200 || res.status<300)
        {
          
            toast.success("history deleted successfilly...")
        }
        else{
            toast.error("history delete failed...")
        }
    }
  


  return (
    <>
    <div  className='p-5'>
      <h1>watch history</h1>
      <table className='table table-border'>
        <tr>
          <th>caption</th>
          <th>url</th>
          <th>date and time</th>
          <th></th>
        </tr>

        {
          his?
          his.map(item=>(
            <tr>
              <td>{item.caption}</td>
              <td>{item.url}</td>
              <td>{item.datetime}</td>
              <td>
              <i className="fa-solid fa-trash" onClick={()=>{handleDelete(item.id)}} style={{color: '#63E6BE'}}></i>
              </td>
            </tr>
          ))
          :
          <tr>
            <h1> no history</h1>
          </tr>
        }
      </table>
      
  
    </div>
    <ToastContainer/>
        
    </>
  
  )


      }
  


export default History