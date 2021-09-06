import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';
import Image from 'next/image';
import bookLogo from '../public/book-logo.png'

const Container = styled.div`
 display: flex;
 justify-content: space-between;
 background-color: ${({theme}) => theme.colors.background};
 height: 8rem;
`;

const Logo = styled.div`
display: flex;
margin: 1rem;
margin-left: 1.5rem;
padding: 0.5rem;

`
const NavLinks = styled.div`
display: flex;
color: ${({theme}) => theme.colors.text};
`

const Ul = styled.ul`
display: flex;
align-items: center;
margin: 1rem;
margin-right: 1.5rem;
`

const Li = styled.li`
list-style: none;
font-size: 1.2rem;
font-weight: bold;
padding: 0.5rem;
padding-left: 2rem;
`

const Navbar = () => {
  return (
    <>
      <Container>
        <Logo>
          <Link href='/'>
            <Image src={bookLogo} alt="Logo, redirects to home page" width={50} height={50}/>
         </Link>
        </Logo>
        <NavLinks>
          <Ul>
            <Li>
              <Link href='/about'><a>ABOUT</a></Link>
            </Li>
            <Li>
              <Link href='/login'><a>LOGIN</a></Link>
            </Li>
          </Ul>
         
          
        </NavLinks>
      </Container>
    </>
  );
}

export default Navbar;
