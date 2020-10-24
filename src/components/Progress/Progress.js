import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './index.css';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  .nes-progress {
    position: relative;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ::before {
      content: ${props => `'${props.name}'`};
      position: absolute;
      @supports (mix-blend-mode: difference) {
        background-color: white; 
        mix-blend-mode: difference;
      }
      top: 5px;
      padding:0px 8px;
      line-height: 30px;
      left: 5px;
      display: inline-block;
    }
    ::after {
      font-family: ${props => `'Font Awesome 5 ${props.iconFamily}'`}; 
      font-weight: ${props => props.iconWeight}; 
      content: ${props => `'${props.iconCode}'`};
      position: absolute;
      font-size: 24px;
      display: inline-block;
      right: 5px;
    }
  }
`;

function Progress({ percent, name, iconCode, iconFamily, iconWeight }) {
  const [progress, updateProgress] = useState(0);

  useEffect(() => {
    let to = null;
    if (percent !== progress) {
      to = setTimeout(() => updateProgress(prog => prog + 1), 4)
    }
    return () => clearTimeout(to);
  }, [percent, progress, updateProgress]);

  return (
    <Wrapper
      name={name}
      iconCode={iconCode}
      iconFamily={iconFamily}
      iconWeight={iconWeight}
    >
      <progress
        className="nes-progress"
        value={progress}
        max="100">
      </progress>
    </Wrapper>
  );
}

export default Progress;