import * as React from 'react';
import { Link } from 'gatsby';
import { PageProps } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogPost = ({ post }) => {
  const image = getImage(post.node.Cover?.localFile);
  return (
    <div className="flex items-center justify-center p-3">
      <Link to={`/post/${post.node.Slug}/`} >
        <div className="cursor-pointer bg-white rounded-2xl ring-1 ring-gray-200 shadow-xl">
          <div className="grid grid-flow-col grid-cols-5 gap-8">
            {/* cover image of the post */}
            {post.node.Cover && (
              <GatsbyImage className="rounded-l-2xl col-span-2" image={image} alt="Blog post cover image" />
            )}
            {/* title and description of the post */}
            <div className="col-span-3 prose w-auto max-w-lg space-y-2 p-4">
              <h1 className="text-xl font-bold tracking-tight">{post.node.Title}</h1>

              {/* TODO category items */}

              <p className="font-medium">{post.node.Description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
};

export default BlogPost;