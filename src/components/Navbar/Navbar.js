import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
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
  padding-top: 10px;
`;

const MenuWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: ${props => props.menuOpen ? '0px' : '-100vw'};
  width: 100%;
  height: 100%;
  padding-right: 40px;
  background: rgba(0,0,0,0.7);
  transition: all .3s linear;
  z-index: 10;
  overflow-y: auto;
  > a {
    text-decoration: inherit;
  }
`;

const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 0px;
  height: 30px;
  width: 30px;
  background: transparent;
  color: white;
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC) 14 0, pointer;
`;

const Logo = styled.img`
  position: fixed;
  top: 3px;
  left: 8px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  transition: all 1s;
  transform: scale(0.7,0.7);
  :hover, 
  :focus{
    transform: scale(0.9);
  }
  z-index:10;
`;

const MenuItem = styled.span`
  position: relative;
  display: ${props => props.menuOpen ? 'block' : 'inline-block'};
  margin: 0;
  line-height: 54px;
  height: 54px;
  font-size: 14px;
  vertical-align: top;
  margin-left: ${props => props.menuOpen ? '40px' : '30px'};
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC) 14 0, pointer;
  border-bottom: ${props => props.isFocus ? '2px solid white' : '2px solid transparent'} ;
  transition: all 1s linear;
  padding: 0px 10px;
`;

const SubMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`;

const StyledLink = styled(Link)`
  :hover {
    ${MenuItem} {
      background: white;
      border-radius:3px;
      span {
        color: black;
      }
    }
  }
  :focus { 
    outline: unset;
    ${MenuItem}{
      border-bottom: 2px solid white;
    }
  }
`;

const TextWrapper = styled.span`
  position: relative;
  color: white;
`;

function Navbar() {
  const { width } = useWindowSize();
  const [menuOpen, toggleMenuOpen] = useState(false);
  const location = useLocation();

  const renderHeader = () => {
    return (
      <Header>
        {Object.keys(routerPath).map(k => {
          return (
            <StyledLink to={routerPath[k].path} key={k}>
              <MenuItem isFocus={location.pathname === routerPath[k].path}>
                <TextWrapper>{routerPath[k].name}</TextWrapper>
              </MenuItem>
            </StyledLink>
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
            <StyledLink
              to={routerPath[k].path}
              key={k}
              onClick={() => toggleMenuOpen(false)}
            >
              <MenuItem menuOpen={menuOpen} isFocus={location.pathname === routerPath[k].path}>
                <TextWrapper>{routerPath[k].name}</TextWrapper>
              </MenuItem>
            </StyledLink>
          );
        })}
        <SubMenu>
          <GlowIcon
            className='fab fa-github'
            herf='https://github.com/EggTronic'
            height='40px'
            width='40px'
          />
          <GlowIcon
            className='fab fa-npm'
            herf='https://www.npmjs.com/~eggtronic'
            height='40px'
            width='40px'
          />
          <GlowIcon
            className='fab fa-facebook'
            herf='https://www.facebook.com/profile.php?id=100027517839124'
            height='40px'
            width='40px'
          />
          <GlowIcon
            className='fas fa-guitar'
            herf='https://music.163.com/#/artist?id=12077118'
            height='40px'
            width='40px'
          />
        </SubMenu>
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
