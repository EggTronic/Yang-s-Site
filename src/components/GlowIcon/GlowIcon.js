// https://codepen.io/dig-lopes/pen/WLVGda
import React from 'react';
import styled from 'styled-components';


const LI = styled.li`
  list-style: none;
  margin-bottom: 15px;
`;

const A = styled.a`
`

const I = styled.i`
  list-style: none;
  margin: 0 15px;
  position: relative; 
  display: block;
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 83px;
  border-radius: 50%;
  font-size: 50px;
  color: rgba(255,255,255,0.7);
  transition: .5s;
  &:hover::before {
    transform: scale(1.1);
  }
  &:hover {
    color: #fff;
    box-shadow: 0 0 15px #fff;
    text-shadow: 0 0 5px #fff;
  }
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: .5s;
    transform: scale(.9);
  }
`

function GlowIcon({ herf, className }) {
  return (
    <LI>
      <A href={herf} target="_blank">
        <I className={className} />
      </A>
    </LI>

  );
}

export default GlowIcon;
