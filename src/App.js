import './css/App.css';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import NewPost from './components/NewPost.js';
import PostPage from './components/PostPage.js';
import About from './components/About.js';
import Missing from './components/Missing.js';
import Footer from './components/Footer.js';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="App">
      <Header 
        title = "PostSphere WebApp"
      />
      <Nav 
        search = {search}
        setSearch = {setSearch}
      />
      <Home />
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer />
    </div>
  );
}

export default App;
