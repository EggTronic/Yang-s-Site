const renderLounge = (canvas, canvasCtx, frequencyData,
  {
    barWidth,
    barHeight,
    barSpacing,
    barColor,
    barNum,
    offsetX,
    offsetY,
    doubleSide
  }) => {
  let cx = canvas.width / 2 + offsetX;
  let cy = canvas.height / 2 + offsetY;

  let freqJump = Math.floor(frequencyData.length / barNum);

  canvasCtx.fillStyle = barColor;
  for (let i = 0; i < barNum; i++) {
    let amplitude = i > barNum / 2 ? frequencyData[(barNum - i) * freqJump] : frequencyData[i * freqJump];
    let x = i * 10;
    let y = doubleSide ? amplitude / 5 - barHeight : 0;
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