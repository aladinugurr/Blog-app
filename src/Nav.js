import React from 'react'
import { Link } from 'react-router-dom'
const Nav = ({search,setSearch}) => {
  return (
    <nav className='nav'>
      <form>
        <input 
       className='search__Input' 
        type="text"
         value={search}
          placeholder="Search Post"
           onChange={(e)=>setSearch(e.target.value)} />
      </form>
      <div className='links'>
       <ul>
        <li> <Link id='link-item' to="/">Home</Link></li>
        <li> <Link id='link-item' to="/NewPost">Post</Link></li>
        <li> <Link id='link-item' to="/About">About</Link></li>
       </ul>
      </div>
    </nav>
  )
}

export default Nav