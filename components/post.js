import { Flex, Heading, Text } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Post = ({ post, index }) => {
  return (
    <Section delay={0.1 * (index + 1)}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h3" variant="section-title">
          {post.title}
        </Heading>
        <Text>{post.createdAt.toDate().toLocaleDateString()}</Text>
      </Flex>

      <Paragraph>{post.body}</Paragraph>
    </Section>
  )
}

export default Post
