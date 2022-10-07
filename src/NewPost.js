import React from 'react'

const NewPost = ({posts,setPosts,postTitle,setPostTitle,postBody,setPostBody,handleSubmit}) => {
  return (
    <div className='newPostPage'>
     <form className='add__Form' onSubmit={handleSubmit}>
          <h3>Add New Post!</h3>
        <div className='post__Title form__Row'>
         <label >Post Title</label>
         <input type="text" required name="postTitle" value={postTitle} onChange={(e)=>setPostTitle(e.target.value)} />
        </div>
         <div className='post__Body form__Row'>
          <label>Post Body</label>
          <textarea rows="5" required value={postBody} onChange={(e)=>setPostBody(e.target.value)} ></textarea>
         </div>
         <button className='add__Btn' type="submit">Add</button>
      </form>
    </div>
  )
}

export default NewPost