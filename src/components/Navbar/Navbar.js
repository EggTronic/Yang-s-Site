import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { routerPath } from "../../pages/router/routerPath";
import logo from '../../assets/images/logo.png';
import Loader from '../Loader/Loader';

const Header = styled.header`
  height: 64px;
  width: 100%;
  position: fixed;
`;

const Logo = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  transition: all 1s;
  &:hover{
    transform: scale(1.1);
  }
`;

const MenuItem = styled.span`
  position: relative;
  display: inline-block;
  margin: 0;
  line-height: 64px;
  height: 64px;
  font-size: 14px;
  vertical-align: top;
  margin-left: 30px;
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
  return (
    <Header>
      <Logo src={logo} alt='logo' />
      <Loader />
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
}

export default Navbar;
