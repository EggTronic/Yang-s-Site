import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GlowIcon from '../GlowIcon/GlowIcon';
import { routerPath } from '../../pages/router/routerPath';
import useWindowSize from '../../hooks/useWindowSize';
import logo from '../../assets/images/logo.png';
import Loader from '../Loader/Loader';

const Header = styled.header`
  height: 64px;
  width: 100%;
  position: fixed;
  left: 100px;
  z-index:1;
`;

const MenuWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: ${props => props.menuOpen ? '0px' : '-100vw'};
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  transition: all .3s linear;
  z-index: 10;
  overflow-y: auto;
`;

const Icon = styled(GlowIcon)`
  display: inline-block;
  height: 30px;
  width: 30px;
  margin-left: 40px;
  margin-top: 20px;
`;

const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 0px;
  height: 30px;
  width: 30px;
  background: transparent;
  color: white;
`;

const Logo = styled.img`
  position: fixed;
  left: 8px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  transition: all 1s;
  transform: scale(0.7,0.7);
  &:hover{
    transform: scale(0.9);
  }
  z-index:10;
`;

const MenuItem = styled.span`
  position: relative;
  display: ${props => props.menuOpen ? 'block' : 'inline-block'};
  margin: 0;
  line-height: 64px;
  height: 64px;
  font-size: 14px;
  vertical-align: top;
  margin-left: ${props => props.menuOpen ? '40px' : '30px'};
  cursor: pointer;
`;

const TextWrapper = styled.span`
  position: relative;
  color: white;
  &:after,&:before {
    content: '';
    position: absolute;
    display: inline-block;
    height: 35px;
    width: 110%;
    opacity: 0;
    top: -12px;
    left: -6%;
	  -webkit-transition: opacity 0.55s, -webkit-transform 0.55s;
	  transition: opacity 0.55s, transform 0.55s;
  };
  &:before {
    border-left: 1px solid;
    border-right: 1px solid;
    -webkit-transform: scale(1,0);
	  transform: scale(1,0);
  }
  &:after {
    border-bottom: 1px solid;
    border-top: 1px solid;
    -webkit-transform: scale(0,1);
    transform: scale(0,1);
  }

  &:hover:after,&:hover:before {
    opacity: 1;
	  -webkit-transform: scale(1);
	  transform: scale(1);
  }
`;

function Navbar() {
  const { width } = useWindowSize();
  const [menuOpen, toggleMenuOpen] = useState(false);

  const renderHeader = () => {
    return (
      <Header>
        {Object.keys(routerPath).map(k => {
          return (
            <Link to={routerPath[k].path} key={k}>
              <MenuItem>
                <TextWrapper>{routerPath[k].name}</TextWrapper>
              </MenuItem>
            </Link>
          );
        })}
      </Header>
    );
  };

  const renderMenu = () => {
    return (
      <MenuWrapper menuOpen={menuOpen}>
        {Object.keys(routerPath).map(k => {
          return (
            <Link 
              to={routerPath[k].path} 
              key={k}
              onClick={() => toggleMenuOpen(false)}
            >
              <MenuItem menuOpen={menuOpen}>
                <TextWrapper>{routerPath[k].name}</TextWrapper>
              </MenuItem>
            </Link>
          );
        })}
        <Icon
          className='fab fa-github'
          herf='https://github.com/EggTronic'
        />
        <Icon
          className='fab fa-npm'
          herf='https://www.npmjs.com/~eggtronic'
        />
        <Icon
          className='fab fa-facebook'
          herf='https://www.facebook.com/profile.php?id=100027517839124'
        />
        <Icon
          className='fas fa-guitar'
          herf='https://music.163.com/#/artist?id=12077118'
        />
        <Close onClick={() => toggleMenuOpen(false)}>X</Close>
      </MenuWrapper>
    );
  }

  return (
    <>
      <Logo
        src={logo}
        alt='logo'
        onClick={() => toggleMenuOpen(!menuOpen)}
      />
      <Loader />
      {width >= 1200
        ? renderHeader()
        : renderMenu()
      }
    </>
  );
}

export default Navbar;
