import React from 'react';
import { graphql } from 'gatsby';
import NotFoundPage from '../pages/404';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { GatsbyImage, getImageData } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import Header from '../components/header';

const Post = ({ location, data, pageContext }) => {
  const urlSlug = location.pathname.split('/');
  const post = data.strapiBlogPosts;
  try {
    if (urlSlug[urlSlug.length - 2] !== pageContext.slug || post === null) {
      return <NotFoundPage></NotFoundPage>
    }
  } catch (error) {
    return <NotFoundPage></NotFoundPage>
  }
  console.log(post.Cover.localFile);
  const coverImage = getImage(post.Cover.localFile);
  return (
    <>
      <Header props={"visible"}></Header>
      <Seo title={post.Title} />
      <div className="md:p-8 md:w-4/5 m-auto">
        <GatsbyImage image={coverImage} imgStyle={{
          objectFit: 'cover',
          objectPosition: 'center',
        }} alt="Blog cover image" />
      </div>
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