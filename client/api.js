import { createClient } from 'urql'

const APIURL = 'https://api.lens.dev'

/* create the API client */
export const client = new createClient({
  url: APIURL
})
export const getProfile = `
query Profile($handle: Handle!) {
  profile(request: { handle: $handle }) {
    id
    name
    bio
    picture {
      ... on MediaSet {
        original {
          url
        }
      }
    }
    handle
  }
}
`