import React from 'react';
import styled from 'styled-components';
import GlowIcon from '../../components/GlowIcon/GlowIcon';
import useWindowSize from '../../hooks/useWindowSize';

const UL = styled.ul`
  position:fixed;
  width: 60px;
  right: 20px;
  top: 240px;
  margin: 0;
  padding: 0;
  transform: translate(-50%, -20%);
  display: flex;
  flex-direction: column;
`

function Sider() {
  const { width } = useWindowSize();
  if (width < 800) return null;
  return (
    <UL>
      <GlowIcon
        className='fab fa-github'
        herf='https://github.com/EggTronic'
        height='80px'
        width='80px'
      />
      <GlowIcon
        className='fab fa-npm'
        herf='https://www.npmjs.com/~eggtronic'
        height='80px'
        width='80px'
      />
      <GlowIcon
        className='fab fa-facebook'
        herf='https://www.facebook.com/profile.php?id=100027517839124'
        height='80px'
        width='80px'
      />
      <GlowIcon
        className='fas fa-guitar'
        herf='https://music.163.com/#/artist?id=12077118'
        height='80px'
        width='80px'
      />
    </UL>
  );
}

export default Sider;
