import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Post from "../components/blog_card"
import SearchBar from "../components/search_bar"

const AllPosts = ({ data }) => {
  const [blogPosts, setBlogPosts] = useState(data.allStrapiBlogPosts.edges)

  const displayPosts = () => {
    if (blogPosts.length > 0) {
      return blogPosts.map((post, index) => <Post key={index} post={post} />)
    } else {
      return (
        <div className="flex items-center justify-center">
          <p className="prose-xl font-semibold">No blog post found.</p>
        </div>
      )
    }
  }

  const filterPostsFromSearchBar = (filter: string) => {
    const filteredPosts = data.allStrapiBlogPosts.edges.filter(post => {
      return post.node.Title.toLowerCase().includes(filter.toLowerCase())
    })
    setBlogPosts(filteredPosts)
  }

  return (
    <>
      <Header />
      <Seo title="All posts" />
      <SearchBar filterPosts={filterPostsFromSearchBar} />
      {displayPosts()}
      <div className="pb-8"></div>
      <div className="fixed bottom-0 w-full">
        <footer className="flex items-center justify-center p-4 bg-gray-700 text-white">
          Theo Poette © {new Date().getFullYear()}, Made with ❤️ in Lille
        </footer>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  {
    allStrapiBlogPosts {
      edges {
        node {
          strapiId
          Description
          Slug
          Title
          Cover {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 400, height: 250)
              }
            }
          }
        }
      }
    }
  }
`

export default AllPosts
