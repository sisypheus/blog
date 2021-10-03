import React from 'react';
import { Link, PageProps, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import background from '../images/layered-waves.svg';
import BlogPost from '../components/blog-post';
import { useStaticQuery, StaticQuery } from 'gatsby';

type DataProps = {
  site: {
    buildTime: string;
  }
  file: {
    publicURL: string;
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({data, path}) => {
  const query = graphql`
  query {
    allStrapiBlogPosts {
      edges {
        node {
          strapiId
          Content
          Description
          Cover {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300, height: 300)
              }
            }
          }
          Title
        }
      }
    }
  }
  `;

  return (
    <Layout>
      <Seo title="Home" />
      <div className="h-screen w-full" style={{ background: `url(${background}) center/cover`}}>
        {/* main part of the page */}
        <div>
          <div className="flex items-center justify-center">
            <div className="grid items-center space-y-4 space-x-4 grid-cols-1 md:grid-cols-6 absolute top-1/4 -mt-12">
            <StaticImage
              data-sal="ease-in"
              data-sal-delay="100"
              data-sal-duration="500"
              src="../images/profile.jpg"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 m-4 col-span-3"
              alt="Nice pic of me"
              width={300}
              height={390}
              quality={100}
            />
            <div data-sal="slide-left" data-sal-duration="1200" data-sal-delay="300" className="text-center col-span-3">
              <p className="text-white text-xl font-extrabold">
                Welcome to my blog!
              </p>  
            </div>
            </div>
          </div>

        </div>
      </div>

      {/* the blogs posts */}
      <div className="bg-gray-100">

        <div className="flex items-center justify-center p-8">
          <h1 className="text-xl font-bold">Featured Posts</h1>
        </div>
        <div id="blog-posts">
          <StaticQuery
            query={query}
            render={data => (
              <div key={data.strapiId}>
              {data.allStrapiBlogPosts.edges.map(post => (
                <BlogPost key={post.strapiId} post={post}></BlogPost>
                ))}
              </div>
            )}
            />
          </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
