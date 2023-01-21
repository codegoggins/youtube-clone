import React from 'react'
import styled from 'styled-components';

// IMPORT ASSETS

import logoImg from '../assets/youtube-logo.png'

// IMPORT MATERIAL ICONS

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';

// <------------------------------- STYLED COMPONENTS ---------------------------------->

const Container = styled.div`
   flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Logo = styled.div`
  width: 6rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Img = styled.img`
  width: 3.5rem;
  height: 1.5rem;
`
const Title = styled.span`
  font-weight: 400;
  font-size: 1.2rem;
  text-transform: capitalize;
`

const Hamburger = styled.div`
  cursor: pointer;
`

const Top = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   gap: 2rem;
`
const MenuList = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   list-style: none;
   margin-top: 2rem;
`

const ListItem = styled.li`
   width: 100%;
   padding: 0.7rem 7rem 0.7rem 0.5rem;
   color: #f1f1f1;
   font-size: 0.9rem;
   font-weight: bold;
   display: flex;
   align-items: center;
   justify-content:flex-start;
   border-radius: 1rem;
   gap: 1.5rem;
   cursor: pointer;
   &:hover{
    background-color:#272727;
   }
`;

const Heading = styled.span`
  font-size: 1.2rem;
`

const Hr = styled.span`
   background-color: #979797;
   height: 1px;
   width: 100%;
   top: 0;
`

// <------------------------------- STYLED COMPONENTS ---------------------------------->

const Menu = () => {
  return (
    <Container>
        <Wrapper>
           <Top>
              <Hamburger>
                 <MenuOutlinedIcon/>
              </Hamburger>
              <Logo>
                 <Img src={logoImg}/>
                 <Title>YouTube</Title>
              </Logo>
           </Top>
           <MenuList>
               <ListItem>
                    <HomeIcon/>
                    Home
               </ListItem>
               <ListItem>
                    <SubscriptionsIcon/>
                    Subscriptions
               </ListItem>
               <ListItem>
                    <OndemandVideoOutlinedIcon/>
                    Videos
               </ListItem>
               <ListItem>
                    <HistoryOutlinedIcon/>
                    History
               </ListItem>
               <Hr/>
               {/* <-------------------------------- EXPLORE SECTION --------------------------------------------> */}

               <Heading>Explore</Heading>
               <ListItem>
                    <WhatshotOutlinedIcon/>
                    Trending
               </ListItem>
               <ListItem>
                    <LibraryMusicOutlinedIcon/>
                    Music
               </ListItem>
               <ListItem>
                    <MovieFilterOutlinedIcon/>
                    Movies
               </ListItem>
               <ListItem>
                    <EmojiEventsOutlinedIcon/>
                    Sports
               </ListItem>
               <ListItem>
                    <NewspaperOutlinedIcon/>
                    News
               </ListItem>
           </MenuList>

        </Wrapper>
    </Container>
  )
}

export default Menu