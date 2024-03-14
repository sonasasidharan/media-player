import React, { useState, useEffect } from 'react'
import { deleteCategory, getCategory, getSpecificVideo, updateCategory } from '../Services/allApis'
import { toast } from 'react-toastify'
import VideoCards from './VideoCards'

function CategoryList({ addCatStatus }) {
  const [categories, setCategories] = useState([])
  const [delCategoryStatus, setDelCategoryStatus] = useState({})
  console.log(addCatStatus)

  useEffect(() => {
    getData()
  }, [addCatStatus, delCategoryStatus])

  const getData = async () => {
    const res = await getCategory()
    // console.log(res.data)
    setCategories(res.data)
    // console.log(res.data)
    // console.log(categories)

  }


  const handleDeleteCat = async (id) => {
    // console.log(id)
    const res = await deleteCategory(id)

    if (res.status >= 200 && res.status < 300) {
      setDelCategoryStatus(res)

      toast.success("category deleted successfully...")
      handleClose()

    }
    else {
      toast.error("category deletion failed...")
    }

  }

  const handleDrop = async (e, id) => {
    // console.log("Category Id:"+id)
    const vid = e.dataTransfer.getData("VideoId")
    // console.log("Dropped Video id:"+vid)
    let category = categories.find(item => item.id == id)
    // console.log(category)
    const res = await getSpecificVideo(vid)
    category.video.push(res.data)
    console.log(category)
    const rescat = await updateCategory(category, id)
    if (rescat.status >= 200 && rescat.status < 300) {


      toast.success(`${res.data.caption}is added to ${category.name}`)
      getCategory()


    }
    else {
      toast.error(" video adding to category failed...")
    }
  }



  const handleDragOver = (e) => {
    e.preventDefault()
    console.log("dragging over Category")
  }
  return (

    <>
      <div className='border border-light p-1 mt-3'>

        {
          categories ?
            categories.map(item => (
              <div className='=bg-primary mb-3 p-3 rounded shadow' onDragOver={e => { handleDragOver(e) }} droppable onDrop={e => { handleDrop(e, item?.id) }}>

                <div >
                  <span>{item.name}</span>
                  <i className="fa-solid fa-trash" style={{ color: '#1fd408' }} onClick={() => handleDeleteCat(item.id)}></i>
                </div>
                <div>
                  {
                    item?.video.map(v => (
                      <VideoCards video={v} cat={true} />
                    ))
                  }
                </div>
              </div>

            )) : <h1>no data</h1>}
      </div>
    </>

  )


}

export default CategoryList