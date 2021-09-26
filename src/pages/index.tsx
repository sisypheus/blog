import React from 'react';
import { Link, PageProps, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import background from '../images/layered-waves.svg';

type DataProps = {
  site: {
    buildTime: string;
  }
  file: {
    publicURL: string;
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({data, path}) => (
  <Layout>
    <Seo title="Home" />
    <div className="h-screen w-full" style={{ background: `url(${background}) center/cover`}}>
      {/* header part of the page */}
      <div id="header" className="p-8 sticky w-full text-center bg-transparent">
        <p className="text-white font-black text-4xl">
          THEO'S BLOG
        </p>
      </div>

      {/* main part of the page */}
      <div>
        <div className="flex items-center justify-center">
          <div className="grid items-center grid-cols-1 md:grid-cols-6 absolute top-1/4 -mt-12">
          <StaticImage
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
  </Layout>
)

export default IndexPage;