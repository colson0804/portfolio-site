import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Posts = () => {
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Popular Posts
        </Heading>
        {/* <Section delay={0.1}>
          <SimpleGrid colums={[1, 2, 2]} gap={6}>
            <GridItem
              title="My Fish workflow"
              //   thumbnail={thumbFishWorkflow}
              href="www.youtube.com"
            ></GridItem>
          </SimpleGrid>
        </Section> */}
      </Container>
    </Layout>
  )
}

export default Posts
