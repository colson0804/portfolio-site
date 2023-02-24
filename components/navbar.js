import NavbarTitle from './navbar-title.js'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  HStack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button.js'
import { forwardRef } from 'react'

// const LinkItem = ({ href, path, target, children, ...props }) => {
//   const active = path === href
//   const activeColor = useColorModeValue('#202023', 'whiteAlpha.900')
//   const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
//   return (
//     <Link
//       as={NextLink}
//       href={href}
//       scroll={false}
//       p={2}
//       bg={active ? 'grassTeal' : undefined}
//       color={active ? activeColor : inactiveColor}
//       target={target}
//       {...props}
//     >
//       {children}
//     </Link>
//   )
// }

const MenuLink = forwardRef(function ForwardLink(props, ref) {
  return <Link ref={ref} as={NextLink} {...props} />
})

const Navbar = props => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={200}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <NavbarTitle />
          </Heading>
        </Flex>
        {/* <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
        </Stack> */}
        <HStack flex={1} align="right" justify="right" alignItems="center">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block' }}>
            <Menu isLazy>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  About
                </MenuItem>
                {/* <MenuItem as={MenuLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem as={MenuLink} href="/posts">
                  Posts
                </MenuItem> */}
                <MenuItem
                  as={Link}
                  href="https://github.com/colson0804/portfolio-site"
                  target="_blank"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}

export default Navbar
