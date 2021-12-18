import React from 'react';
import { Link, PageProps, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import background from '../images/layered-waves.svg';
import BlogPost from '../components/blog-post';
import { useStaticQuery, StaticQuery } from 'gatsby';

export const pageQuery = graphql`
  {
  allStrapiBlogPosts {
    edges {
      node {
        strapiId
        Content
        Description
        Slug
        Title
        Cover {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 400)
            }
          }
        }
      }
    }
  }
}
  `;

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Seo title="Home" />
      <div className="h-screen w-full" style={{ background: `url(${background}) center/cover` }}>
        {/* main part of the page */}
        <div>
          <div className="flex items-center justify-center">
            <div className="md:grid md:space-x-4 md:grid-cols-6 absolute top-1/4 -mt-12">

              <div className="flex items-center justify-center md:col-span-3">
                <StaticImage
                  data-sal="ease-in"
                  data-sal-delay="100"
                  data-sal-duration="500"
                  src="../images/profile.jpg"
                  className="rounded-full w-64 h-64 md:w-96 md:h-96 md:col-span-3"
                  alt="Nice pic of me"
                  width={300}
                  height={390}
                  quality={100}
                />
              </div>
              <div className="flex items-center text-center col-span-3 p-4">
                <div className="text-white text-xl font-bold max-w-lg font-sans">
                  <p data-sal="slide-left" data-sal-duration="1200" data-sal-delay="300">
                    Hi, Welcome to my blog!
                  </p>
                  <p data-sal="slide-left" data-sal-duration="1200" data-sal-delay="600">
                    On this site, I'm posting the stories of a Full-Stack Web developer
                  </p>
                  <p data-sal="slide-left" data-sal-duration="1200" data-sal-delay="900">
                    If you want to see my projects, or get to know me better, visit:
                  </p>
                  <button className="bg-white m-4 border-4 transition-all duration-200 border-indigo-900 text-indigo-900 rounded-lg py-2 px-4 font-bold font-sans hover:bg-indigo-900 hover:text-white">
                    <a href="https://theopoette.me">My website</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* the blogs posts */}
      <div className="bg-gray-100">

        <div className="flex items-center justify-center p-8">
          <h1 className="text-3xl font-bold font-serif border-b-4 border-blue-600">Featured</h1>
        </div>
        <div id="featured-posts">
          {data.allStrapiBlogPosts.edges.map(post => (
            <BlogPost key={post.node.strapiId} post={post}></BlogPost>
          ))}
        </div>
        <div className="p-8 max-w-sm m-auto my-8 bg-white rounded-2xl ring-gray-200 ring-1 shadow-xl flex flex-col items-center justify-center">
          <p className="text-xl font-bold">
            Want to see more ?
          </p>
          <Link to="/posts/">
            <button className="mt-4 text-lg transform duration-300 hover:-translate-y-1 hover:bg-indigo-800 bg-indigo-700 p-2 px-4 rounded-lg text-white font-bold">
              All Posts
            </button>
          </Link>
        </div>

        {/* separator */}
        <div className="bg-gray-100 h-1"></div>
      </div>
    </Layout>
  );
}

export default IndexPage;
