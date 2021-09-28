import React from 'react';
import { Link, PageProps, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

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
        {/* header part of the page */}
        <div className="flex items-center justify-center">
          <div className="p-8 sticky w-full flex items-center max-w-7xl justify-between text-center bg-transparent">
            <p className="text-white font-black text-4xl">
              <Link to="/">
                THEO'S BLOG
              </Link>
            </p>
            <div className="text-white space-x-6">
              <button className="transform duration-300 hover:-translate-y-1">
                <Link className="p-3 text-lg rounded-lg bg-gray-700 font-extrabold hover:bg-gray-800" to="/search">Search</Link>
              </button>
              <button className="transform duration-300 hover:-translate-y-1">
                <AnchorLink className="p-3 text-lg rounded-lg bg-gray-700 font-extrabold hover:bg-gray-800" to="/#blog-posts">Posts</AnchorLink>
              </button>
              <button className="transform duration-300 hover:-translate-y-1">
                <a href="https://theopoette.me" className="p-3 text-lg rounded-lg bg-gray-700 font-extrabold hover:bg-gray-800">My website</a>
              </button>
            </div>
          </div>
        </div>

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
              <p className="text-white text-xl">
                Welcome to my blog!
              </p>  
            </div>
            </div>
          </div>

        </div>
      </div>

      {/* the blogs posts */}
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
    </Layout>
  );
}

export default IndexPage;
