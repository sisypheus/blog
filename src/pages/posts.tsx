import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import Post from '../components/blog-post';

const AllPosts = ({ data }) => {

  const blogPosts = data.allStrapiBlogPosts.edges;
  console.log(blogPosts.length);

  const displayPosts = () => {
    return blogPosts.map((post, index) =>
      <Post key={index} post={post} />
    );
  }

  return (
    <>
      <Layout>
        <Seo title="All posts" />
        {displayPosts()}
      </Layout>
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
