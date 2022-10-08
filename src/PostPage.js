import { Link,useParams } from 'react-router-dom';

const PostPage = ({posts,handleDelete}) => {

  const {id} = useParams();
  const post = posts.find(post=> (post.id).toString() === id);
console.log(post)
  return (
    <div className='post__Page'>
      
     {post &&
     <> 
      <h2>{post.title}</h2>
      <p className='post__date'>{post.datetime}</p>
      <p className='post__date'>{post.body}</p>
      <Link to={`/edit/${id}`}><button className="edit__Btn">Edit</button></Link>
      <button className='delete__Btn' onClick={()=>handleDelete(post.id)}>Delete</button>
     </>
              
    }
    {
      !post && 
      <>
        <p>There is nothing here please back Home page</p>
          <Link id='link' style={{color:"Blue", fontSize:"1.2rem"}} to="/">Home Page</Link>
      </>
    }
    </div>
  )
}

export default PostPage