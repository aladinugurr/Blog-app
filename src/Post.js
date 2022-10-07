import React from 'react'
import { Link } from 'react-router-dom'
const Post = ({post}) => {
  return (
    <div className='post'>
        <Link id="link" to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.datetime}</p>
      </Link>
            <p className='post__Body'>{post.body?.length<25 ? post.body : `${post.body?.slice(0,25)}...` }</p>
    </div>
  )
}

export default Post