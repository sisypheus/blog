import * as React from "react"
import { Link } from "gatsby"
import { PageProps } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPost = ({ post }) => {
  const image = getImage(post.node.Cover?.localFile)
  return (
    <div className="flex items-center justify-center p-3">
      <Link to={`/post/${post.node.Slug}/`}>
        <div className="cursor-pointer bg-white rounded-2xl ring-1 ring-gray-200 shadow-xl">
          <div className="grid grid-flow-row sm:grid-flow-col sm:grid-cols-5 sm:gap-8">
            {/* cover image of the post */}
            {image && (
              <GatsbyImage
                className="rounded-t-2xl sm:rounded-l-2xl sm:rounded-r-none sm:col-span-2"
                image={image}
                alt="Blog post cover image"
              />
            )}
            {/* title and description of the post */}
            <div className="sm:col-span-3 prose-md w-full space-y-2 p-4 flex flex-col">
              <h1 className="text-3xl font-bold tracking-tight">
                {post.node.Title}
              </h1>
              <p className="flex items-center text-gray-700 font-medium h-full align-middle">
                {post.node.Description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogPost
