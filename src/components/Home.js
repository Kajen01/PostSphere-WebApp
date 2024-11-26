import React from 'react'
import Feed from '../components/Feed.js'
import '../css/Home.css'

const Home = ({posts}) => {
  return (
    <main className="Home">
      {posts.length ? (
        <Feed
          posts = {posts}
        />
      ) : (
        <p style={{marginTop:"2rem"}}>
          No Posts to Display...
        </p>
      )}
    </main>
  )
}

export default Home