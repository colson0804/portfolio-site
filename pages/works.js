import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A markdown note taking app
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
      </Container>
    </Layout>
  )
}

export default Works
