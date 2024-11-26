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
import { Routes, Route } from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First",
      datetime: "November 20, 2024 11:15:20 PM",
      body: "Hi, Just now i got completed this 10hrs course. I have learned lot from this tutorial. The man who has innocent face with pure heart."
    },
    {
      id: 2,
      title: "My second",
      datetime: "November 22, 2024 12:15:20 PM",
      body: "As already you said, No one can explain React JS like you."
    },
    {
      id: 3,
      title: "My Third",
      datetime: "November 24, 2024 08:15:20 AM",
      body: "Awesome tutorial. I'm new to react. I feel really effortless when I'm watching this. Thanks a lot."
    },
    {
      id: 4,
      title: "My Forth",
      datetime: "November 20, 2024 10:15:20 AM",
      body: "Awesome Bala. I am 63 years old and am trying to learn the new technologies. In fact your explanation motivates me to watch and learn.. God bless. Please continue your good work."
    },
    {
      id: 5,
      title: "My Fifth",
      datetime: "November 25, 2024 01:15:20 PM",
      body: "I saw dave gray react course but i'm not understand. but same course in tamil language very clear understand. one of the best react course in tamil. thank you bro."
    }
  ])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')

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
    // navigate('/')
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
      <Home 
        posts = {searchResults}
      />
      <NewPost 
        handleSubmit = {handleSubmit}
        postTitle = {postTitle}
        setPostTitle = {setPostTitle}
        postBody = {postBody}
        setPostBody = {setPostBody}
      />
      <PostPage />
      <About />
      <Missing />
      <Footer />

{/*       
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/NewPost' element={<NewPost />} />
      </Routes>
       */}
    </div>
  );
}

export default App;
