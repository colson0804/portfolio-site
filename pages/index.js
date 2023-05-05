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
import { SubSection, SubSectionHeader } from '../components/subsection'
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
          Hello, I&apos;m a software engineer based in Seattle!
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
            Craig is an accomplished mobile and web engineer with a passion for
            making state of the art applications. He has considerable experience
            developing iOS applications for a wide range of companies, from
            small startups to Fortune 500 giants.
          </Paragraph>
          <Paragraph>
            Most recently he was with the driver platform team at Lyft, where he
            contributed to the development of a unified architecture and focused
            experience for Lyft drivers.
          </Paragraph>
          <Paragraph>
            In addition to being a software engineer, Craig also writes music in
            styles ranging from indie rock to ambient-electronic. He&apos;s
            played piano and guitar for many years and currently plays in a
            couple of Seattle jazz combos. This year he&apos;s been learning to
            play the drums.
          </Paragraph>
          <Paragraph>
            Following his role at Lyft, Craig took time off to focus on personal
            growth, creative pursuits, and community engagement. In this time he
            explored many different disciplines including writing, digital art,
            game design, and music production/composition. He&apos;s done
            volunteering with organizations such as the Vera Project and KEXP
            and has taken a number of songwriting classes with some of his
            favorite artists including Robin Pecknold of Fleet Foxes and Phil
            Elverum of The Microphones.
          </Paragraph>
          <Paragraph>
            In his next project, Craig is hoping to bring his creative energies
            and technical expertise to develop groundbreaking applications.
            He&apos;s most excited to work with companies that are furthering
            social good or that are enabling collaboration and creativity among
            their users.
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
          <SubSection>
            <SubSectionHeader>2014</SubSectionHeader>
            Javascript/PHP Intern at{' '}
            <Link href="https://www.shmoop.com/" target="_blank">
              Shmoop
            </Link>
          </SubSection>
          <SubSection>
            <SubSectionHeader>2015</SubSectionHeader>
            Bachelor of Arts in Computer Science at Northwestern University
          </SubSection>
          <SubSection>
            <SubSectionHeader>2015 - 2018</SubSectionHeader>
            Mobile and Web Engineer at Solstice (now{' '}
            <Link href="https://www.kinandcarta.com/en-us/" target="_blank">
              Kin Carta
            </Link>
            )
          </SubSection>
          <SubSection>
            <SubSectionHeader>2018 - 2019</SubSectionHeader>
            iOS Engineer at{' '}
            <Link href="https://www.fooda.com/" target="_blank">
              Fooda
            </Link>
          </SubSection>
          <SubSection>
            <SubSectionHeader>2020 - 2021</SubSectionHeader>
            iOS Engineer at{' '}
            <Link href="https://www.lyft.com/" target="_blank">
              Lyft
            </Link>{' '}
            on Driver Platform
          </SubSection>
          <SubSection>
            <SubSectionHeader>2021 - present</SubSectionHeader>
            Planned sabbatical, including volunteering with KEXP and the Vera
            Project in Seattle, producing/writing music, and making web sites
            and video games
          </SubSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Creative Tools
          </Heading>
          <SubSection>
            <SubSectionHeader>Design:</SubSectionHeader> Photoshop, Blender,
            Figma
          </SubSection>
          <SubSection>
            <SubSectionHeader>Audio Production:</SubSectionHeader> Ableton Live,
            Logic Pro
          </SubSection>
          <SubSection>
            <SubSectionHeader>Video Editing:</SubSectionHeader> Final Cut Pro
          </SubSection>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Things I&apos;m Learning in 2023
          </Heading>
          <UnorderedList>
            <ListItem>SwiftUI and AVFoundation</ListItem>
            <ListItem>Frontend Development in React/NextJS</ListItem>
            <ListItem>Game Development in Unity/C#</ListItem>
            <ListItem>Digital Art in Photoshop and Blender</ListItem>
            <ListItem>Mixing/Mastering with Ableton Live</ListItem>
            <ListItem>
              Developing Audio Plugins (VSTs) using JUCE and C++
            </ListItem>
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
