import React from 'react';
import { graphql } from 'gatsby';
import NotFoundPage from '../pages/404';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { GatsbyImage, getImageData } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import Header from '../components/header';
import ReactMarkdown from 'react-markdown';

const Post = ({ location, data, pageContext }) => {
  const urlSlug = location.pathname.split('/');
  const post = data.strapiBlogPosts;
  const validUrl = isUrlValidPost();

  if (!validUrl)
    return <NotFoundPage />;

  const coverImage = getImage(post.Cover.localFile);

  function isUrlValidPost() {
    try {
      if (urlSlug[urlSlug.length - 2] !== pageContext.slug || post === null) {
        console.log(pageContext.slug);
        return false;
      }
    } catch (error) {
      return false;
    }
    return true;
  }

  const displaySections = () => {
    return post.section.map((section, index) =>
      <Section key={index} section={section} />
    );
  }

  return (
    <>
      <Header />
      <Seo title={post.Title} />
      <div className="flex-col items-center justify-center max-w-5xl m-auto">
        <div className="text-center pt-4">
          <h1 className="text-2xl font-sans font-black">{post.Title}</h1>
        </div>
        <div className="md:p-8 m-auto">
          <GatsbyImage image={coverImage} imgStyle={{
            objectFit: 'cover',
            objectPosition: 'center',
          }} alt="Blog cover image" />
        </div>
        {displaySections()}
      </div>
    </>
  );
};

const Section = ({ section }) => {
  const image = getImage(section.image.localFile);

  return (
    <div className="p-8">
      {image && (
        <GatsbyImage image={image} imgStyle={{
          objectFit: 'cover',
          objectPosition: 'center',
        }} alt="Section image" />
      )}
      <ReactMarkdown>{section.description}</ReactMarkdown>
      <p className="font-mono tracking-tight font-semibold">{section.content}</p>
    </div>
  )
}

export default Post;

export const query = graphql`
  query($slug: String!) {
    strapiBlogPosts(Slug: { eq: $slug }) {
      Title
      Content
      Slug
      section {
        content
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
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