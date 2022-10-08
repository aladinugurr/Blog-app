import './App.css';
import Home from './Home';
import Nav from './Nav';
import Header from './Header';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Footer from './Footer'
import Missing from './Missing'
import api from './api/posts'
import axios from 'axios'

import {
  BrowserRouter,
  Routes,
  useNavigate ,
  Route,
  Link,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import EditPost from './EditPost';

function App() {
  const [posts,setPosts] = useState([])
  const navigate = useNavigate();
  const [search,setSearch] = useState('');
  const [searchResult,setSearchResult] = useState([]);
  const [postTitle,setPostTitle] = useState('');
  const [postBody,setPostBody] = useState('');
  const [editTitle,setEditTitle] = useState('');
  const [editBody,setEditBody] = useState('');

useEffect(()=>{
   const fetchData = async () => {
    try{
          const res = await api.get('/posts');
          setPosts(res.data)
    }
    catch{

    }
   }
  fetchData()
},[editBody])

  useEffect(()=>{
     const filteredResults = posts.filter((post)=>post.body.toLowerCase().includes(search.toLocaleLowerCase())
     || post.title.toLowerCase().includes(search.toLocaleLowerCase())
     );
     setSearchResult(filteredResults)
     
  },[search,posts])

  const handleSubmit = async (e) =>{
   e.preventDefault()
   const dateTime = new Date().getFullYear();
   const id =  new Date().getMilliseconds();
   const title = postTitle;
   const body = postBody; 
   const newItem = {id,title,datetime:dateTime,body }
   try{
    const response = api.post('./posts', newItem)
    const allPosts = [...posts, newItem]
    setPosts([...posts,newItem]);
    console.log(newItem)
    setPostTitle('');
    setPostBody('');
  navigate("/")}catch(err){
console.log(err)
  }
}
 
const handleEdit= async(id) =>{
  const dateTime = new Date().getFullYear();
  const updatedPost  = {id,title:editTitle,datetime:dateTime,body:editBody }
   try{
        const response = await api.put(`posts/${id}` , updatedPost);
        setPosts(posts.map((post)=>post.id ===id ? {...response.data} : post ));
        setEditTitle("");
        setEditBody("");
        navigate("/");
   }
   catch(err){
console.log(err)
  }
}

  const handleDelete = async(id) =>{

       try{
        const response = await api.delete(`/posts/${id}`)
       const newPosts = posts.filter((post)=>post.id !==id);
        setPosts(newPosts)} catch(err){
                console.log(`Error: ${err.message}`)
        }
        
      
        navigate("/");
  }
  return (
    <div className="App">
      <Header />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route exact path="/" element={<Home posts={searchResult} />} />
        <Route path="/NewPost" element={<NewPost 
        handleSubmit={handleSubmit} 
        posts={posts} 
        setPosts={setPosts}
         postTitle={postTitle}
         setPostTitle={setPostTitle}
         postBody={postBody}
         setPostBody={setPostBody}
         />} />
          <Route path="/edit/:id" element={<EditPost 
          posts={posts}
        handleEdit={handleEdit} 
        setPosts={setPosts}
         editTitle={editTitle}
         setEditTitle={setEditTitle}
         editBody={editBody}
         setEditBody={setEditBody}
         />} />
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        <Route path="/About" element={<About/>} />
        <Route path="*" element={<Missing/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
