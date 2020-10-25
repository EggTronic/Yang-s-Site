// https://codepen.io/dig-lopes/pen/WLVGda
import React from 'react';
import styled from 'styled-components';


const LI = styled.li`
  list-style: none;
  margin-bottom: 15px;
`;

const I = styled.i`
  list-style: none;
  position: relative; 
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 100%;
  border-radius: 50%;
  font-size: 50px;
  transition: .5s;
  color: ${props => props.isGlow ? '#fff' : 'rgba(255,255,255,0.7)'};
  text-shadow: ${props => props.isGlow ? '0 0 5px #fff' : ''};

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: .5s;
    transform: scale(.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const A = styled.a`
  :focus, 
  :hover {
    outline: none;
    ${I}::before {
      transform: scale(1.1);
    }
    ${I}::before {
      transform: scale(1.1);
    }
    ${I} {
      color: #fff;
      box-shadow: 0 0 ${props => props.withHalo ? '15px' : '0px'} #fff;
      text-shadow: 0 0 5px #fff;
    }
  }
`;

function GlowIcon({
  herf,
  className,
  height,
  width,
  withHalo = false,
  isGlow = false
}) {
  return (
    <LI style={{ height: height, width: width }}>
      <A
        href={herf}
        target="_blank"
        withHalo={withHalo}
      >
        <I
          className={className}
          isGlow={isGlow}
        />
      </A>
    </LI>

  );
}

export default GlowIcon;
