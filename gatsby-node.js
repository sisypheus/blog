exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allStrapiBlogPosts {
        nodes {
          Slug
        }
      }
    }
  `)

  result.data.allStrapiBlogPosts.nodes.forEach(post => {
    createPage({
      path: `/post/${post.Slug}`,
      component: require.resolve(`./src/templates/post-template.tsx`),
      context: {
        slug: post.Slug,
      },
    })
  })
}