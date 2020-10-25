import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { visuals } from '../../assets/js/visuals';
import reverie from '../../assets/music/reverie.mp3';
import reverieOrigin from '../../assets/music/reverie-origin.mp3';

const Icon = styled.i`
  color: white;
  font-size: 25px;
  transition: all 2s;
`;

const PlayPauseBtn = styled(Icon)`
  margin-right: 20px;
  transition: all 0.2s;
  color: rgba(255,255,255,0.8);
  &:hover {
    color: white;
  }
`;

const AudioBtn = styled(Icon)`
  font-size: 10px;
  display: inline-block;
  width: 0;
  opacity: 0;
  text-align: center;
`;

const AudioControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 2s;
  width: 0;
  opacity: 0;
`;

const Timer = styled.p`
  transition: all 2s;
  color: white;
  font-size: 1px;
  display: inline-block;
  width: 0;
  opacity: 0;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AudioWrapper = styled.div`
  position: fixed;
  z-index: 2;
  width: 300px;
  top: 30px;
  right: 20px;
  height: 64px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  &:hover ${AudioControlWrapper} {
    opacity: 1;
    width: 100%;
  }
  &:hover ${Timer} {
    opacity: 1;
    width: 15%;
  }
  &:hover ${AudioBtn} {
    opacity: 1;
    width: 15%;
  }
  .fa-compact-disc {
    animation: ${rotate} 4s linear infinite;
  }
`;

const Bar = styled.input`
  width: 60%;
  margin: 10.85px 0;
  background-color: transparent;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    background: rgba(255, 255, 255, 1);
    border: 0;
    width: 100%;
    height: 6px;
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC) 14 0, pointer;
  }
  &::-webkit-slider-thumb {
    margin-top: -5.85px;
    width: 10px;
    height: 20px;
    background: rgba(0, 0, 0, 0.5);
    border: 2.5px solid #ffffff;
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC) 14 0, pointer;
    -webkit-appearance: none;
    &:focus::-webkit-slider-runnable-track {
      background: #141414;
    }
  }
`
const ProgressBar = styled(Bar)`
`;

const VolumeBar = styled(Bar)`
`;

const SliderWrapper = styled.div`
  text-align: right;
  margin-top: 10px;
`;

const MyCanvas = styled.canvas`
  height: 64px;
  width: 200px;
  position: fixed;
  right: 70px;
  top: 0;
`;

function AudioPlayer({ setFrequency }) {
  const audio = useRef(null);
  const canvas = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [time, setTime] = useState('00:00');
  const [position, setPosition] = useState(0);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    audio.current.volume = 0.5;
    audio.current.play();
    audio.current.onended = () => {
      setPosition(0);
      setPlaying(false);
    }

    const progressUpdater = setInterval(() => {
      if (audio.current.paused) return;
      setPosition(100 * audio.current.currentTime / audio.current.duration);

      const flooredTime = Math.floor(audio.current.currentTime);
      let minutes = Math.floor(flooredTime / 60);
      let seconds = flooredTime % 60;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      setTime(minutes + ":" + seconds);
    }, 500);

    if (canvas.current && audio.current) {
      const canvasCtx = canvas.current.getContext('2d');
      const audioElm = audio.current;
      let audioCtx = null;
      try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new window.AudioContext();
      } catch (e) {
        console.info('Web Audio API is not supported.', e);
        return;
      }
      const analyser = audioCtx.createAnalyser();
      analyser.smoothingTimeConstant = 0.6;
      analyser.fftSize = 512;
      const frequencyData = new Uint8Array(analyser.frequencyBinCount);
      const sourceNode = audioCtx.createMediaElementSource(audioElm);
      sourceNode.connect(analyser);
      sourceNode.connect(audioCtx.destination);

      const options = {
        barWidth: 10,
        barHeight: 3,
        barSpacing: 10,
        barColor: '#fff',
        barNum: 15,
        offsetX: -160,
        offsetY: 50
      };

      const draw = (visuals, canvas, canvasCtx, frequencyData) => {
        for (let i = 0; i < visuals.length; i++) {
          visuals[i](canvas, canvasCtx, frequencyData, options);
        }
      }

      const renderFrame = () => {
        if (!canvas.current) return;
        setTimeout(() => {
          if (!canvas.current) return;
          if (audio.current.paused && !audio.current.readyState !== 4) { 
            setPlaying(false);
          } else {
            setPlaying(true);
          };
          requestAnimationFrame(renderFrame);
        }, 1000 / 60);
        canvasCtx.clearRect(0, 0, canvas.current.width, canvas.current.height);
        analyser.getByteFrequencyData(frequencyData);
        setFrequency(frequencyData);
        draw(visuals, canvas.current, canvasCtx, frequencyData);
      }

      renderFrame();
    }

    return () => clearInterval(progressUpdater);
  }, [setFrequency]);

  const onTogglePlay = () => {
    if (!audio.current) return;
    if (!playing) {
      audio.current.play();
      setPlaying(true);
    } else {
      audio.current.pause();
      setPlaying(false);
    }
  }

  const onTogglePosition = e => {
    if (!audio.current) return;
    audio.current.currentTime = audio.current.duration * (e.target.value / 100);
    setPosition(e.target.value);
  }

  const onToggleVolume = e => {
    if (!audio.current) return;
    audio.current.volume = 1 * (e.target.value / 100);
    setVolume(e.target.value);
  }

  return (
    <AudioWrapper>
      <audio id='audio' ref={audio}>
        <source src={reverieOrigin} type="audio/mpeg" />
        <source src={reverie} type="audio/mpeg" />
      </audio>

      <PlayPauseBtn
        onClick={onTogglePlay}
        className={
          playing ? "fas fa-compact-disc" : "fas fa-play"
        }
      />

      <AudioControlWrapper>
        <SliderWrapper>
          <ProgressBar
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={onTogglePosition}
          />
          <Timer>{time}</Timer>
        </SliderWrapper>
        <SliderWrapper>
          <VolumeBar
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={onToggleVolume}
          />
          <AudioBtn className="fas fa-volume-up" />
        </SliderWrapper>
      </AudioControlWrapper>
      <MyCanvas ref={canvas}></MyCanvas>
    </AudioWrapper>
  );
}

export default AudioPlayer;
