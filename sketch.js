// const { __Graphics__ } = require("../../../../.vscode/extensions/samplavigne.p5-vscode-1.2.3/p5types");

var rez = 30;

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(51);
    frameRate(20);

    fill(0, 255, 70);
    textSize(rez);
    // text(String.fromCharCode(0x30A0 + round(random(0, 96))), width / 2, height / 2);
    for (var i = 0; i < width / rez; i++) {
        for (var j = 0; j < height / rez; j++) {
            text(String.fromCharCode(0x30A0 + round(random(0, 96))), i * rez, j * rez);
        }
    }
    // noLoop();

}