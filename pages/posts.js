import { Box, Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Post from '../components/post'
import { db } from '../firebase/clientApp'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const Posts = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    try {
      const postRef = collection(db, 'posts')
      const snapshot = await getDocs(postRef)
      const fetchedPosts = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      setPosts(fetchedPosts)

      console.log(posts, fetchedPosts)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

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
        {posts.map((post, index) => {
          return <Post key={post.id} post={post} index={index}></Post>
        })}
      </Container>
    </Layout>
  )
}

export default Posts
