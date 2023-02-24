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
  useColorModeValue,
  UnorderedList
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
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
          Hello, I&apos;m a mobile and web engineer based in Seattle!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Craig Olson
            </Heading>
            <p>Software Engineer and Digital Creator</p>
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
            Craig is a mobile and web engineer with a passion for making things,
            whether that be digital services, music, or art. He has professional
            experience building iOS applications for companies ranging from
            small startups to Fortune 500 companies. Most recently he was a
            member of the driver platform team at Lyft, which focused on
            building a unified architecture and focused experience for Lyft
            drivers.
          </Paragraph>
          <Paragraph>
            In his free time, he can be found spending time with his guitar and
            synthesizers, cooking delicious meals, and playing with his cat.
          </Paragraph>
          {/* <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box> */}
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2014</BioYear>
            Interned at Shmoop as a Javascript and PHP developer
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Completed a Bachelor of Arts in Computer Science at Northwestern
            University
          </BioSection>
          <BioSection>
            <BioYear>2015 - 2018</BioYear>
            Worked at Solstice as a mobile and web engineer
          </BioSection>
          <BioSection>
            <BioYear>2018 - 2019</BioYear>
            Worked at Fooda as an iOS engineer
          </BioSection>
          <BioSection>
            <BioYear>2020 - 2021</BioYear>
            Worked on the driver platform team at Lyft as an iOS engineer
          </BioSection>
          <BioSection>
            <BioYear>2021 - present</BioYear>
            Planned sabbatical, including volunteering with KEXP and the Vera
            Project in Seattle, producing/writing music, and making web sites
            and video games
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
            Things I&apos;m Learning in 2023
          </Heading>
          <UnorderedList>
            <ListItem>Unity/C#</ListItem>
            <ListItem>React/NextJS</ListItem>
            <ListItem>Blender/Photoshop</ListItem>
            <ListItem>Drums</ListItem>
            <ListItem>Mixing/Mastering with Ableton </ListItem>
          </UnorderedList>
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
