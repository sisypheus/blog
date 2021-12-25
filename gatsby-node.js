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
    const slug = post.Slug
    createPage({
      path: `/post/${slug}`,
      component: require.resolve(`./src/templates/post-template.tsx`),
      context: {
        slug: slug,
      },
    })
  })
}
