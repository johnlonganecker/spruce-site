function draw() {
  var canvas = document.getElementById("hero-canvas"),
    hero = document.getElementById("homepage-hero")

  if(canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    groundStart = ctx.canvas.height - 100

    drawBackground(ctx.canvas.width, ctx.canvas.height, ctx)
    drawGround(groundStart, ctx.canvas.width, 100, ctx);

    drawMountains(groundStart, ctx.canvas.width, ctx.canvas.height, ctx)

    // draw transparent box
    ctx.fillStyle = "rgba(189, 222, 255, 0.65)";
    ctx.fillRect(0, ctx.canvas.height * .2, ctx.canvas.width, ctx.canvas.height * .6);

    dataUrl = canvas.toDataURL();
    hero.style.background='url('+dataUrl+')'
  }
}

function drawMountains(y, width, height, ctx) {

    var xVariance = 100,
        minWidth = 300,
        maxWidth = width / 2,
        maxHeight = height * .2;

    var x = 0, mWidth, mHeight;
    
    while ((x + xVariance) < width) {
      // pick width of mountain
      mWidth = maxWidth * Math.random();
      // pick height of mountain
      mHeight = maxHeight * Math.random();
      // calc starting position of mountain

      drawMountain(x, y, mWidth + minWidth, mHeight, ctx)

      x = x + (xVariance * Math.random()) + (mWidth / 2),
      x = x + mWidth
    }

    // start at least 1/2 from center of last mountain
    //drawMountain(0, y, 500, y * .2, ctx)
}

function drawMountain(x, y, width, height, ctx) {
    ctx.fillStyle = "#003973";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(width / 2 + x, height);
    ctx.lineTo(width + x, y);
    ctx.fill();
}

function drawBackground(width, height, ctx) {

  var lingrad = ctx.createLinearGradient(0,0,0,150);

  lingrad.addColorStop(0, '#00a2f1');
  lingrad.addColorStop(.3, '#2fa4de');

  ctx.fillStyle = lingrad;

  ctx.fillRect(0, 0, width, height);
}

function drawGround(y, width, height, ctx) {
    ctx.fillStyle = "#3c260e";
    ctx.fillRect(0, y, width, height);
}
