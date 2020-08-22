const barWidth = 10;
const barHeight = 3;
const barSpacing = 10;
const barColor = '#fff';
const barNum = 15;
const offsetX = -160;
const offsetY = 50;

const renderLounge = (audioElm, canvas, canvasCtx, frequencyData) => {
    let cx = canvas.width / 2 + offsetX;
    let cy = canvas.height / 2 + offsetY;

    let freqJump = Math.floor(frequencyData.length / barNum);

    canvasCtx.fillStyle = barColor;
    for (let i = 0; i < barNum; i++) {
      let amplitude = frequencyData[i * freqJump];
      let x = i * 10;
      let y = 0;
      let w = barWidth;
      let h = - barHeight * amplitude / 10;

      canvasCtx.save();
      canvasCtx.translate(cx + i * barSpacing, cy);
      canvasCtx.fillRect(x, y, w, h);
      canvasCtx.restore();
    }
};


export const visuals = [
  renderLounge
];