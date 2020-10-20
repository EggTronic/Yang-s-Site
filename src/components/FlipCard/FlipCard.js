import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: absolute;
  background: rgba(111,111,111,0.4);
  height: 100%;
  width: 100%;
  text-align: center;
  backface-visibility: hidden;
`;

const Front = styled(Card)`
    backface-visibility: hidden;
    transform: rotateY(0deg);
`;

const Back = styled(Card)`
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const Wrapper = styled.div`
  position: relative;
  height: ${props => props.height};
  width: ${props => props.width};
  perspective: 1000px;
  margin: 0px 10px 10px 10px;
  overflow: hidden;
  &:hover {
    > div:nth-child(1)  {
      transform: rotateY(180deg);
    }
    z-index: 1;
    --border-width: 50px;
    display: flex;
    color: white;
    .section-wrapper{
      overflow-y: overlay;
    }
  }
  h1 {
    font-size: 1.5rem;
  }
  p {
    font-size: 0.8rem;
    vertical-align: baseline;
  }
`;

const Inner = styled.div`
  background: transparent;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  height: 100%;
  width: 100%;
`;

function FlipCard({ children, height, width }) {
  return (
    <Wrapper height={height} width={width}>
      <Inner>
        <Front onScroll={e => e.stopPropagation()}>
          {children[0]}
        </Front>
        <Back>
          {children[1]}
        </Back>
      </Inner>
    </Wrapper>
  );
}

export default FlipCard;
