import React from 'react';
import styled from 'styled-components';
import Item from '../../components/Item/Item';
import GlowIcon from '../../components/GlowIcon/GlowIcon';
import { SectionHeader } from '../AboutPage/AboutPage';
import test from './items/logo.png';
import Z200 from './items/Z200.jpg';

const ShopPageWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  height: calc(99vh - 164px);
  width: 90vw;
  top: 100px;
  background: linear-gradient( to top, rgba(42,71,94,1.0) 5%, rgba(42,71,94,0.0) 70%);
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  justify-content: center;
  align-items: center;
  ::-webkit-scrollbar {
    width: 5px;
    position: absolute;
  }
  ::-webkit-scrollbar-track {
    background: #373A40;
  }
  ::-webkit-scrollbar-thumb {
    background: white;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

function ShopPage() {
  return (
    <ShopPageWrapper>
      <SectionHeader background={
        'linear-gradient( to bottom, rgba(42,71,94,1.0) 5%, rgba(42,71,94,0.0) 70%);'
      }>
        <GlowIcon className="fas fa-store" />
      </SectionHeader>
      <Item
        image={Z200}
        price={68}
        discount={0.75}
        name='Logic Z200'
      />
      <Item
        image={test}
        price={26}
        discount={0.25}
        name='EggTronic'
      />
      <Item
        image={test}
        price={26}
        discount={0.25}
        name='EggTronic'
      />
      <Item
        image={test}
        price={26}
        discount={0.25}
        name='EggTronic'
      />
      <Item
        image={test}
        price={26}
        discount={0.25}
        name='EggTronic'
      />
      <Item
        image={test}
        price={26}
        discount={0.25}
        name='EggTronic'
      />
      <Item
        image={test}
        price={26}
        discount={0.25}
        name='EggTronic'
      />
      <Item
        image={test}
        price={26}
        discount={0.25}
        name='EggTronic'
      />
      <Item
        image={test}
        price={26}
        discount={0.25}
        name='EggTronic'
      />
      <Item
        image={test}
        price={26}
        discount={0.25}
        name='EggTronic'
      />
    </ShopPageWrapper>
  );
}

export default ShopPage;
