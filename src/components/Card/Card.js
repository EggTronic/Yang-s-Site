import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const CardWrapper = styled(animated.div)`
  width: ${props => props.width};
  min-width: ${props => props.minWidth};
  height: ${props => props.height};
  background-image: ${props => 'url(' + props.url + ')'};
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 4) / 20, 1.1];
const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Card({ width, height, url, minWidth }) {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  return (
    <CardWrapper
      width={width}
      height={height}
      minWidth={minWidth}
      url={url}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
  );
}

export default Card;
