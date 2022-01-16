CanvasRenderingContext2D.prototype.flood = function (x, y, color) {
  const imgData = this.getImageData(0, 0, this.canvas.width, this.canvas.height);
  let pixels = new Uint32Array(imgData.data.buffer);
  const selectedColor = pixels[y * imgData.width + x];
  if (selectedColor!==color) {
    let chPixels = [{x:x,y:y}];
    do {
      const pos = chPixels.pop();
      let curColor;
      if (pos.x >= 0 && pos.y >= 0 && pos.x < imgData.width && pos.y < imgData.height) {
        curColor =  pixels[pos.y * imgData.width + pos.x];
      }
      if (curColor === selectedColor) {
        pixels[pos.y * imgData.width + pos.x] = color;
        chPixels.push({x: pos.x+1, y: pos.y});
        chPixels.push({x: pos.x-1, y: pos.y});
        chPixels.push({x: pos.x, y: pos.y+1});
        chPixels.push({x: pos.x, y: pos.y-1});
      }
    } while (chPixels.length>0);
  }
  this.putImageData(imgData, 0, 0);
};
