import './App.css';
import Home from './Home';
import Nav from './Nav';
import Header from './Header';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Footer from './Footer'
import Missing from './Missing'

import {
  BrowserRouter,
  Routes,
  useNavigate ,
  Route,
  Link,
} from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  const [posts,setPosts] = useState([
    {
      id:1,
      title:"My First Post!",
      datetime:"May 04, 2000 11:17:36 AM",
      body:"Lorem ipsum dolor sit"
    },
    {
      id:2,
      title:"My Second Post!",
      datetime:"june 04, 2022 07:36:37 PM",
      body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
      id:3,
      title:"My Third Post!",
      datetime:"May 04, 2000 12:23:21 AM",
      body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      id:4,
      title:"My Fourth Post!",
      datetime:"May 04, 2000 04:17:36 PM",
      body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
    }
  ])
  const navigate = useNavigate();
  const [search,setSearch] = useState('');
  const [searchResult,setSearchResult] = useState([]);
  const [postTitle,setPostTitle] = useState('');
  const [postBody,setPostBody] = useState('');

  useEffect(()=>{
     const filteredResults = posts.filter((post)=>post.body.toLowerCase().includes(search.toLocaleLowerCase())
     || post.title.toLowerCase().includes(search.toLocaleLowerCase())
     );
     setSearchResult(filteredResults)
     
  },[search,posts])

  const handleSubmit = (e) =>{
   e.preventDefault()
   const dateTime = new Date().getFullYear();
   const id =  posts.length ? (posts.length) + 1   : 1
   const title = postTitle;
   const body = postBody; 
   const newItem = {id,title,datetime:dateTime,body }
    setPosts([...posts,newItem]);
    console.log(newItem)
    setPostTitle('');
    setPostBody('');
  navigate("/")
  }

  const handleDelete = (id) =>{
        const newPosts = posts.filter((post)=>post.id !==id);
        setPosts(newPosts)
      
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
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        <Route path="/About" element={<About/>} />
        <Route path="*" element={<Missing/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
