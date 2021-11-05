import React from 'react'
import { Link, PageProps, graphql } from 'gatsby';
import { useStaticQuery, StaticQuery } from 'gatsby';
import { navigate } from 'gatsby';
import NotFoundPage from './404';

const Post = ({ location }) => {
  return (
    location.state?.post ? (
    <div>
      <h1>{location.state.post.Title}</h1>
      <p>{location.state.post.Content}</p>
    </div>
    ) : (
      <NotFoundPage/>
    )
  )
}

export default Post;
