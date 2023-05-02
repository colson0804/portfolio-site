import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

function ComingSoon() {
  return (
    <Container>
      <Heading as="h1">Coming Soon!</Heading>
      <Text>
        This page is currently under development. Come back soon for updates!
      </Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default ComingSoon
