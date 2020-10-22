import React, { useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';
import { fadeIn, fadeOut } from '../../utils';

const PriceSection = styled.div`
  line-height: 15px;
  padding: 4px 10px;
  text-align: right;
  position: relative;
  background: linear-gradient( 135deg, rgba(37,49,63,1) 5%,rgba(54,97,125,1) 95%);
`;

const Wrapper = styled.div`
  height: 400px;
  width: 300px;
  font-family: Tahoma, Arial, Helvetica, sans-serif;
  box-shadow: 0 0 5px #000;
  margin: 20px;
  :hover ${PriceSection}{
    background: rgba(54,97,125,1);
  }
`;

const Preview = styled.img`
  height: calc(100% - 127.81px);
  width: 100%;
  background-size: cover;
  display: block;
`;

const Discount = styled.div`
  color: #a4d007;
  background: #4c6b22;
  display: inline-block;
  padding: 0 3px;
  line-height: 34px;
  padding: 0 5px;
  font-size: 26px;
`;

const PriceWrapper = styled.div`
  background-color: rgba(0,0,0,0.6);
  display: inline-block;
  vertical-align: bottom;
  text-align: center;
  line-height: 13px;
  padding: 4px 10px 4px 7px;
`;

const OriginalPrice = styled.div`
  color: #7193a6;
  text-decoration: line-through;
  font-size: 11px;
`;

const NewPrice = styled.div`
  color: #acdbf5;
  padding-left: 4px;
  font-size: 11px;
`;

const Content = styled.div`
  text-align: left;
  p {
    font-family: "Motiva Sans", Sans-serif;
    font-weight: 300;
    color: #acdbf5;
  }
  h {
    font-family: "Motiva Sans", Sans-serif;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    margin: 0 0 10px;
    letter-spacing: 2px;
    font-weight: normal;
    padding-top: 2px;
  }
`;

function Item({ name, image, price, discount, wrapperClassName }) {
  const wrapper = useRef(null);
  const intersection = useIntersection(wrapper, {
    root: document.querySelector('.' + wrapperClassName),
    rootMargin: '0px',
    threshold: 0.4
  });

  intersection && intersection.intersectionRatio < 0.4
    ? fadeOut(wrapper.current)
    : fadeIn(wrapper.current);

  const discountText = '-' + discount * 100 + '%';
  const newPrice = (price * (1 - discount)).toFixed(2);
  return (
    <Wrapper ref={wrapper}>
      <Preview src={image} />
      <PriceSection>
        <Content>
          <h2>{name}</h2>
          <p>Offer ends 20 Nov @ 20:00pm.</p>
        </Content>
        <Discount>
          {discountText}
        </Discount>
        <PriceWrapper>
          <OriginalPrice>A$ {price}</OriginalPrice>
          <NewPrice>A$ {newPrice}</NewPrice>
        </PriceWrapper>
      </PriceSection>
    </Wrapper>
  )
}

export default Item;
