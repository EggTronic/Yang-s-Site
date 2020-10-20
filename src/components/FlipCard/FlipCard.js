import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const moveGradient = keyframes`
  50% {
    background-position: 100% 50%;
  }
`;

const Inner = styled.div`
  background: transparent;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &::after {
    position: absolute;
    content: "";
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(
      60deg,
      hsl(134, 85%, 66%),
      hsl(179, 85%, 66%)
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    animation: ${moveGradient} 4s alternate infinite;
  }
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
