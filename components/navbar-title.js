import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flexbox;
  align-items: Center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
`
const NavbarTitle = () => {
  return (
    <Link href="/">
      <LogoBox>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          Craig Olson
        </Text>
      </LogoBox>
    </Link>
  )
}

export default NavbarTitle