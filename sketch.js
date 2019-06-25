let rSlider, divSlider, multSlider, bckHueSlider, lineHueSlider;

function setup() {
  // createCanvas(720, 540);
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); // Change the mode to DEGREES
  colorMode(HSB);

  createP("Radius");
  rSlider = createSlider(200, 450, 250, 10);
  createP("Divisions");
  divSlider = createSlider(10, 500, 200, 100);
  createP("Multiplier");
  multSlider = createSlider(2, 500, 2);
  // multSlider = createSlider(2, 500, 2, 0.1);

  createP("Stroke hue");
  lineHueSlider = createSlider(0, 255, 200);
  lineSatSlider = createSlider(0, 255, 200);
  lineBrgSlider = createSlider(0, 255, 200);
  createP("Background Color");
  bckHueSlider = createSlider(0, 255, 56);
  bckSatSlider = createSlider(0, 255, 140);
  bckBrgSlider = createSlider(0, 255, 155);
}

function draw() {
  let r = rSlider.value();
  // let divisions = divSlider.value();
  let divisions = 200;
  // let divisions = millis() / 250;
  // divisions = constrain(divisions, 0, 100);
  // let multiplier = multSlider.value();
  let multiplier = millis() / 1000;

  background(bckHueSlider.value(), bckSatSlider.value(), bckBrgSlider.value());
  stroke(lineHueSlider.value(), lineSatSlider.value(), lineBrgSlider.value(), 10);

  textSize(12);
  textAlign(RIGHT);
  // text('M.' + divisions + '.' + multiplier, width - 20, height - 20);
  translate(width / 2, height / 2);
  rotate(180);

  beginShape();
  for (let counter = 1; counter < divisions; counter++) {
    let x1 = r * cos(counter * 360 / divisions);
    let y1 = r * sin(counter * 360 / divisions);

    let x2 = r * cos(counter * multiplier * 360 / divisions);
    let y2 = r * sin(counter * multiplier * 360 / divisions);

    strokeWeight(5);
    point(x1, y1);
    point(x2, y2);
    strokeWeight(1);

    line(x1, y1, x2, y2);
  }
  endShape(CLOSE);
}
