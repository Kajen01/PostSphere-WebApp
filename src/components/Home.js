import React from 'react'
import Feed from '../components/Feed.js'
import '../css/Home.css'

const Home = ({ posts, isLoading }) => {
  return (
    <main className="Home">
      {isLoading ?
        <p style={{ margin: "1.5rem 0 0 2rem", fontSize: "1.5rem" }}>
          Loading...
        </p>
        :
        posts.length ? (
          <Feed
            posts={posts}
          />
        ) : (
          <p style={{ marginTop: "2rem" }}>
            No Posts to Display...
          </p>
        )
      }
    </main>
  )
}

export default Home