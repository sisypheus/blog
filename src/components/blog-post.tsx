import * as React from 'react';
import { Link } from 'gatsby';
import { PageProps } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

type DataProps = {
  post: {
    node: {
      title: string;
      date: string;
      content: string;
    }
  }
}

const BlogPost: React.FC<DataProps> = (data: DataProps) => {
  console.log(data.post.node);
  return (
    <div>
      <h1>{data.post.node.Title}</h1>
    </div>
  )
};

export default BlogPost;