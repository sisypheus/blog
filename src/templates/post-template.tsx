import React from 'react';
import { graphql } from 'gatsby';
import NotFoundPage from '../pages/404';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';

const Post = ({ location, data, pageContext }) => {
  console.log(data);
  const urlSlug = location.pathname.split('/');
  const post = data.strapiBlogPosts;
  try {
    if (urlSlug[urlSlug.length - 2] !== pageContext.slug || post === null) {
      return <NotFoundPage></NotFoundPage>
    }
  } catch (error) {
    return <NotFoundPage></NotFoundPage>
  }
  const coverImage = getImage(post.Cover.localFile);
  return (
    <>
      <Seo title={post.Title} />
      <GatsbyImage image={coverImage} alt="Blog cover image" />
      <div className="flex-col items-center justify-center max-w-5xl m-auto">
        <div className="text-center pt-4">
          <h1 className="text-2xl font-sans font-black">{post.Title}</h1>
        </div>
        <div className="p-8">
          <p className="font-mono tracking-tight">{post.Content}</p> 
        </div>
      </div>
    </>
  );
};

export default Post;

export const query = graphql`
  query($slug: String!) {
    strapiBlogPosts(Slug: { eq: $slug }) {
      Title
      Content
      Slug
      Cover {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;