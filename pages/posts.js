import { Box, Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Post from '../components/post'

const Posts = () => {
  var posts = Array.from({ length: 20 }, (x, i) => i)
  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Recent Posts
            </Heading>
          </Box>
        </Box>
        {posts.map(index => {
          return <Post key={index}></Post>
        })}
      </Container>
    </Layout>
  )
}

export default Posts
