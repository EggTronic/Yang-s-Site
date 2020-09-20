import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: absolute;
  background: rgba(111,111,111,0.4);
  height: 100%;
  width: 100%;
  text-align: center;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;

const Front = styled(Card)`
`;

const Back = styled(Card)`
  transform: rotateY(180deg);
`;

const Wrapper = styled.div`
  position: relative;
  height: ${props => props.height};
  width: ${props => props.width};
  perspective: 1000px;
  &:hover {
    > div:nth-child(1)  {
      transform: rotateY(180deg);
    }
    z-index: 1;
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
        <Front>
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
