import { Heading } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Post = ({ index }) => {
  return (
    <Section delay={0.1 * (index + 1)}>
      <Heading as="h3" variant="section-title">
        Work
      </Heading>
      <Paragraph>This is my first post yay!!</Paragraph>
      <Paragraph>
        Most recently he was with the driver platform team at Lyft, where he
        contributed to the development of a unified architecture and focused
        experience for Lyft drivers. Some of his project work involves improving
        mobile performance by decreasing app launch TTI and an redesign of the
        driver experience. Prior to Lyft, he worked with Chicago-based company
        Fooda on their iOS applications and with Solstice where he consulted for
        a Fortune 500 banking application.
      </Paragraph>
      <Paragraph>
        Following his role at Lyft, Craig took time off to focus on personal
        growth, creative pursuits, and community engagement. In this time he
        explored many different disciplines including writing, digital art, game
        design, and music production/composition. He&apos;s done volunteering
        with organizations such as the Vera Project and KEXP and has taken a
        number of songwriting workshops with some of his favorite artists
        including Robin Pecknold of Fleet Foxes and Phil Elverum of The
        Microphones.
      </Paragraph>
    </Section>
  )
}

export default Post
