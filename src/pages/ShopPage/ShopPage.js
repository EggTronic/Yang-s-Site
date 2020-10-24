import React from 'react';
import styled from 'styled-components';
import Item from '../../components/Item/Item';
import GlowIcon from '../../components/GlowIcon/GlowIcon';
import { SectionHeader } from '../AboutPage/AboutPage';
import { items } from './items';

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
`;

function ShopPage() {
  return (
    <ShopPageWrapper>
      <SectionHeader background={
        'linear-gradient( to bottom, rgba(42,71,94,1.0) 5%, rgba(42,71,94,0.0) 70%);'
      }>
        <GlowIcon className="fas fa-store" />
      </SectionHeader>
      {items.map((item, i) =>
        <Item
          key={i + item.name}
          image={item.preview}
          price={item.price}
          discount={item.discount}
          name={item.name}
          sold={item.sold}
        />)
      }
    </ShopPageWrapper>
  );
}

export default ShopPage;
