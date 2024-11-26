import './css/App.css';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import NewPost from './components/NewPost.js';
import PostPage from './components/PostPage.js';
import About from './components/About.js';
import Missing from './components/Missing.js';
import Footer from './components/Footer.js';
import { useEffect, useState } from 'react';
import {format} from 'date-fns'
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')

  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter((post) => 
    ((post.title).toLowerCase()).includes(search.toLowerCase())
    || ((post.body).toLowerCase()).includes(search.toLowerCase())
    )
    setSearchResults(filteredResults.reverse())
  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length-1].id + 1 : 1
    const datetime = format(new Date(), `MMMM dd, yyyy pp`) 
    const newPost = {
      id,
      title:postTitle,
      datetime,
      body:postBody
    }
    const allPosts = [...posts, newPost]
    setPosts(allPosts)
    setPostTitle('')
    setPostBody('')
    navigate('/')
  }

  const handleDelete = (id) => {
    const newPosts = posts.filter(post => post.id !== id)
    setPosts(newPosts)
    navigate('/')
  }

  const handleEdit = (id) => {
    postTitle = posts[id].title
    postBody = posts[id].body
    navigate('/post')
  }

  return (
    <div className="App">
      <Header 
        title = "PostSphere WebApp"
      />
      <Nav 
        search = {search}
        setSearch = {setSearch}
      />
      {/* Define Routes */}
      <Routes>
        <Route path='/' element={<Home 
          posts = {searchResults}
        />} />
        <Route path='post'> 
          <Route index element={<NewPost 
            handleSubmit = {handleSubmit}
            postTitle = {postTitle}
            setPostTitle = {setPostTitle}
            postBody = {postBody}
            setPostBody = {setPostBody}
          />} />
          <Route path=':id' element={<PostPage 
            posts = {posts}
            handleDelete = {handleDelete}
            handleEdit={handleEdit}
          />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
