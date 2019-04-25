
var canv;
var sli;
var img;

var n;
var fn;
var fnplus1;

var ratio;
var ratiowidth;
var ratioheight;

document.body.style.backgroundColor = "rgb(20,20,20)";

function preload() {

  img = loadImage("data/fibonacci.png");
}

function setup() {

    // canvas

    canv = createCanvas(751,465);
    canv.style("display","block");
    canv.style("margin","0 auto");
    canv.style("marginTop","100px");
    canv.style("border","8px solid rgb(10,10,10)");



    // slider

    createP(""); // filler

    sli = createSlider(1,15,0)
    sli.style("display","block");
    sli.style("margin","0 auto");
}

function draw() {

    background(178,255,102);

    image(img,0,0,751,465);

    n = sli.value();
    fn = getFibonacci(n);
    fnplus1 = getFibonacci(n+1);
    ratio = approxphi(n);
    ratiowidth = width * ratio;
    ratioheight = height * ratio;

    fill(0,0,0,20);
    strokeWeight(0);
    rect(0,0,ratiowidth,height);
    rect(0,0,width,ratioheight);

    fill(0,0,0,100);
    textSize(20);
    text(
      "φ phi ≈ " + (ratio) + "\n" +
      "x = " + n + "\n" +
      "F₍ₓ₎ = " + fn + "\n" +
      "F₍ₓ₊₁₎ = " + fnplus1
      ,15,30)

}



// get the Nth fibonacci number

function getFibonacci(n) {

  this.fibonacci = [];
  this.fibonacci[0] = 0;
  this.fibonacci[1] = 1;

  for ( i = 2; i <= n; i++) {
    this.fibonacci[i] = this.fibonacci[i-2] + this.fibonacci[i-1];
  }

  return this.fibonacci[n];
}

// approximate phi using the Nth fibonacci number

function approxphi(n) {

  this.fibonacciN = getFibonacci(n);
  this.fibonacciNplus1 = getFibonacci(n+1);
  this.goldenratio = this.fibonacciN / this.fibonacciNplus1;

  return this.goldenratio;
}
