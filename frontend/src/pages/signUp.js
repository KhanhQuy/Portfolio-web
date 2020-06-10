import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"


import SignUp from "../components/signUp/SignUp"
import SEO from "../components/seo"

const signUp = (data) => (
    <SignUp>
      <div>{data}</div>
    </SignUp>
)

export default signUp


export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`

// const client = new ApolloClient({
//   uri: "https://48p1r2roz4.sse.codesandbox.io"
// });

// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));


// const ExchangeRates = () => (
//   <Query
//     query={gql`
//       {
//         rates(currency: "USD") {
//           currency
//           rate
//         }
//       }
//     `}
//   >
//     {({ loading, error, data }) => {
//       if (loading) return <p>Loading...</p>;
//       if (error) return <p>Error :(</p>;

//       return data.rates.map(({ currency, rate }) => (
//         <div key={currency}>
//           <p>{currency}: {rate}</p>
//         </div>
//       ));
//     }}
//   </Query>
// );
