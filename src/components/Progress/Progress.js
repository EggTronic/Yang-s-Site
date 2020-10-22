import React from 'react';
import styled from 'styled-components';

const ProgressTrack = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  color: ${props => props.color};
`;
const ProgressBar = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  color: ${props => props.color};
`;

function Progress({ height, width, color, trackColor, percent }) {
  return (
    <>
      <ProgressTrack
        height={height}
        width={width}
        color={trackColor}
      />
      <ProgressBar
        height={height}
        width={width * percent}
        color={color}
      />
    </>
  );
}

export default Progress;