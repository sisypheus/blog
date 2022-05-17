import React from "react"
import { graphql } from "gatsby"
import NotFoundPage from "../pages/404"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImageData, StaticImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"
import Header from "../components/header"
import ReactMarkdown from "react-markdown"

const Post = ({ location, data, pageContext }) => {
  const urlSlug = location.pathname.split("/")
  const post = data.strapiBlogPosts
  const validUrl = isUrlValidPost()

  if (!validUrl) return <NotFoundPage />

  const coverImage = getImage(post.Cover.localFile)

  function isUrlValidPost() {
    try {
      if (urlSlug[urlSlug.length - 2] !== pageContext.slug || post === null) {
        console.log(pageContext.slug)
        return false
      }
    } catch (error) {
      return false
    }
    return true
  }

  const displaySections = () => {
    return post.Section.map((section, index) => (
      <Section key={index} section={section} />
    ))
  }

  return (
    <>
      <Header />
      <Seo title={post.Title} />
      <div className="flex-col items-center justify-center max-w-5xl m-auto">
        <div className="text-center p-10 space-y-2">
          <h1>
            {post.published_at &&
              new Date(post.published_at).toLocaleDateString()}
          </h1>
          <h1 className="text-3xl tracking-tight font-extrabold">
            {post.Title}
          </h1>
          <div className="flex items-center justify-center space-x-4">
            <StaticImage
              src="../images/profile.jpg"
              alt="Picture of author"
              className="rounded-full w-12 h-12"
              style={{ WebkitTransform: "translateZ(0)" }}
            />
            <div>
              <p className="font-medium text-gray-800 tracking-tight text-sm">
                Theo Poette
              </p>
              <a
                style={{ color: "rgb(14,165,233)" }}
                href="https://github.com/sisypheus"
              >
                @sisypheus
              </a>
            </div>
          </div>
        </div>
        <div className="md:p-8 m-auto">
          <GatsbyImage
            image={coverImage}
            imgStyle={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            alt="Blog cover image"
          />
        </div>
        <div className="max-w-3xl m-auto">
          {displaySections()}
        </div>
      </div>
      <footer className="flex items-center justify-center p-4 bg-gray-700 text-white">
        Theo Poette © {new Date().getFullYear()}, Made with ❤️ in Lille
      </footer>
    </>
  )
}

const Section = ({ section }) => {
  return (
    <div className="p-6 pb-12 pt-8">
      <ReactMarkdown className="prose lg:prose-lg text-gray-600">
        {section.Content}
      </ReactMarkdown>
    </div>
  )
}

export default Post

export const query = graphql`
  query ($slug: String!) {
    strapiBlogPosts(Slug: { eq: $slug }) {
      Title
      Introduction
      Slug
      Section {
        Content
      }
      published_at
      Cover {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
