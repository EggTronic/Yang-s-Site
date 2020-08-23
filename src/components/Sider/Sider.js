import React from 'react';
import styled from 'styled-components';
import GlowIcon from '../../components/GlowIcon/GlowIcon';

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
  return (
    <UL>
      <GlowIcon
        className='fab fa-github'
        herf='https://github.com/EggTronic'
      />
      <GlowIcon
        className='fab fa-npm'
        herf='https://www.npmjs.com/~eggtronic'
      />
      <GlowIcon
        className='fab fa-facebook'
        herf='https://www.facebook.com/profile.php?id=100027517839124'
      />
      <GlowIcon
        className='fas fa-guitar'
        herf='https://music.163.com/#/artist?id=12077118'
      />
    </UL>
  );
}

export default Sider;
