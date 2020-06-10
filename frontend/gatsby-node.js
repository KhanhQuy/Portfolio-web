/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// exports.createPages = ({ graphql, boundActionCreators }) => {
//     const { createPage } = boundActionCreators
//     return new Promise((resolve, reject) => {
//       graphql(`
//         {
//           allOpenApiSpec {
//             edges {
//               node {
//                 id
//                 name
//               }
//             }
//           }
//         }
//       `).then(result => {
//         result.data.allOpenApiSpec.edges.map(({ node }) => {
//           createPage({
//             path: `apis/${node.name}`,
//             component: path.resolve(`./src/templates/api.js`),
//             context: {
//               id: node.id,
//             },
//           })
//         })
  
//         resolve()
//       })
//     })
//   }