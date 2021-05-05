import styled from "styled-components";
import { Logo } from "./Logo";
import { ModeSwitch } from "./ModeSwitch";
import {lightTheme} from "../../styles/theme";
import Link from 'next/link';
import { useState } from "react";


const Nav = styled.nav`
  width: 100%;
  height: 64px;
  line-height: 64px;
  color: #eee;
  font-weight: bold;
  background-color: ${lightTheme.grey900 + 'cc'};
  backdrop-filter: saturate(180%) blur(20px);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = styled.div`
  display: none;
  @media(min-width: 600px){
    display: flex;
  }
`;

const MenuItem = styled.div`
  margin-left: 32px;
  cursor: pointer;
`;

const HamBtn = styled.div`
  display: block;
  @media(min-width: 600px){
    display: none;
  }
  width: 64px;
  height: 64px;
  background-image: url('/hamburger.svg');
  background-position: center;
  background-size: 45%;
  background-repeat: no-repeat;
  opacity: 0.75;
  margin-right: -24px;
`;

const HamMenu = styled.nav`
  display: block;
  @media(min-width: 600px){
    display: none;
  }
  position: fixed;
  z-index: 10;
  top: 64px;
  right: ${({display})=>display ? '0' : '-100vw'};
  transition: .5s;
  width: 100vw;
  height: calc(100vh - 64px);
  background-color: ${lightTheme.grey900};
  color: ${lightTheme.grey100};
  font-weight: 600;
`;

const HamMenuItem = styled.div`
  line-height: 56px;
  margin: 0 24px;
  font-size: 18px;
  border-bottom: 2px solid ${lightTheme.grey700};
  &:first-child{
    margin-top: 16px;
  }
  &:last-child{
    border-bottom: none;
  }
`;

export const Navigation = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const menuData = [
    {name: 'Świetlica', url: '/swietlica'},
    {name: 'Turystyka', url: '/turystyka'},
    {name: 'Obwodnica', url: '/obwodnica'},
  ];
  return (
    <>
    <Nav>
      <Wrapper>
        <Wrap>
          <Logo />
          <ModeSwitch theme={theme} toggleTheme={toggleTheme} />
        </Wrap>
        <Menu>
          {menuData.map(item=><Link key={item.name} href={item.url}><MenuItem>{item.name}</MenuItem></Link>)}
        </Menu>
        <HamBtn onClick={()=>setOpen(!open)}/>
      </Wrapper>
    </Nav>
    <HamMenu display={open}>
    {menuData.map(item=><Link key={item.name} href={item.url}><HamMenuItem onClick={()=>setOpen(!open)}>{item.name}</HamMenuItem></Link>)}
    </HamMenu>
    </>
  );
};
