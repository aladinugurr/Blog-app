import React from 'react'
import { useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'


const EditPost = ({
    editBody,setEditBody,editTitle,setEditTitle,posts,handleEdit
}) => {
  const {id } = useParams();
  const post = posts.find((post)=>(post.id).toString()===id)

  useEffect(()=>{
  if(post){
    setEditTitle(post.title);
    setEditBody(post.body);
  }
   },[])

  return (
    
    <div className='newPostPage'>
      {editTitle &&
     <form className='add__Form' onSubmit={(e)=>e.preventDefault()}>
          <h3>Edit Post!</h3>
        <div className='post__Title form__Row'>
         <label >Edit Post Title</label>
         <input type="text" required name="postTitle" value={editTitle} onChange={(e)=>setEditTitle(e.target.value)} />
        </div>
         <div className='post__Body form__Row'>
          <label>Edit Post Body</label>
          <textarea rows="5" required value={editBody} onChange={(e)=>setEditBody(e.target.value)} ></textarea>
         </div>
         <button className='add__Btn' onClick={()=>handleEdit(id)} type="submit">Submit</button>
      </form>
      }
      {
        !editTitle && <h3>Post Not Found!</h3>
       }
    </div>

  )
}

export default EditPost