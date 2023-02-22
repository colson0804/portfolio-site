import {
  Box,
  Container,
  Heading,
  Icon,
  Image,
  Button,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a mobile and web developer based in Seattle!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Craig Olson
            </Heading>
            <p>Digital Craftsman ( Developer / Musician / Producer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src={'/images/craig.jpeg'}
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Craig is a full stack developer with a passion for making things,
            whether that be digital services, music, or art. In his free time,
            he can be found hanging out with his guitar and synthesizers.
            Currently he has a project called{' '}
            <NextLink href="/works/inkdrop">Bicycle Thieves</NextLink>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1993</BioYear>
            Born in Evanston, IL
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Completed a Bachelor of Arts in Computer Science at Northwestern
            University
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I love
          </Heading>
          <Paragraph>
            Music, Cooking, Photography, Guitar, Piano, Drums, Synthesizers
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Things I'm Learning
          </Heading>
          <Paragraph>How to bullet point my bio page</Paragraph>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" vairant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/colson0804" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @colson0804
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/thereallyrealcraig/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @colson0804
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
