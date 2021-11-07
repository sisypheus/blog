import * as React from 'react';
import { Link } from 'gatsby';
import { PageProps } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogPost = ({post}) => {
  console.log(post);
  return (
    <Link to={`/post/${post.node.Slug}/`} >
      <div className="flex items-center justify-center p-3">
        <div className="cursor-pointer bg-white rounded-2xl ring-1 ring-gray-200 shadow-xl">
          <div className="grid grid-flow-col grid-cols-5 gap-8">
            {/* cover image of the post */}
            {post.node.Cover && (
              <GatsbyImage className="rounded-l-2xl col-span-2" image={post.node.Cover.localFile} alt="Blog post cover image" />
            )}
            {/* title and description of the post */}
            <div className="col-span-3 w-auto max-w-lg space-y-2 p-4">
              <h1 className="text-xl font-bold">{post.node.Title}</h1>

              {/* TODO category items */}

              <p className="font-medium">{post.node.Description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
};

export default BlogPost;