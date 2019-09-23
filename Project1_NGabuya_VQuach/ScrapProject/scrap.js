var one, two, three, four, five, six, seven, eight, nine;
var landfill, compost, recycle;
var title, pow, scoreBubble, scoreValue, end, myFont;
var banana, box, bulb, plastic, soup,tea ;

function preload() {
  banana = loadImage('assets/banana.png');
  box = loadImage('assets/box.png');
  bulb = loadImage('assets/bulb.png');
  plastic = loadImage('assets/plastic.png');
  soup = loadImage('assets/soup.png');
  tea = loadImage('assets/tea.png');
  landfill = loadImage('assets/landfill.png');
  compost = loadImage('assets/compost.png');
  recycle = loadImage('assets/recycle.png');
  pow = loadImage('assets/pow.png');
  title = loadImage('assets/title.png');
  end = loadImage('assets/end.png');
  scoreBubble = loadImage('assets/scoreBubble.png');
  myFont = loadFont('assets/comic.ttf');
}

function setup() {
  createCanvas(1586,743);
  textFont(myFont);
  stage = 1;
  scoreValue = 0;
}

function draw() {

// Title Screen
function one(){
  image(title,0,0);
  fill(255);

}

// Banana Screen
function two(){
  background('#8EC9BC');
  image(recycle,99,407,274,386);
  image(landfill,507,407,274,386);
  image(compost,902,407,274,386);
  image(pow,1060,10,498,385);
  image(scoreBubble,41,20, 191,117);
  image(banana,530,105,190,186);

  textSize(40);
  fill(0);
  text('Score:',75,90);
  text(scoreValue,175,90);
  textSize(65);
  fill('red');
  text('Banana Peel',1190,210);

  // Hover Effect
  if(mouseX > 99 && mouseX < 373 && mouseY > 407 && mouseY < 743) {
    stroke(255);
    noFill();
    rect(99,407,274,386);
  }
  if(mouseX > 507 && mouseX < 781 && mouseY > 407 && mouseY < 743) {
    stroke(255);
    noFill();
    rect(507,407,274,386);
  }
  if(mouseX > 902 && mouseX < 1176 && mouseY > 407 && mouseY < 743) {
    stroke(255);
    noFill();
    rect(902,407,274,386);
  }
}

// Wrong Screen
function three(){
  background('red');
  image(pow,500,100,518,405);
  textSize(70);
  text('WTS?!',680,330);
  stroke(0);
  fill(255);
  rect(640,571,250,80);
  textSize(48);
  fill(0);
  text('Try Again?',670,625);

  if(mouseX > 640 && mouseX < 890 && mouseY > 571 && mouseY < 651 && mouseIsPressed) {
    scoreValue = 0;
    stage = 2;
  }
}

// Box Screen
function four(){
  background('#8EC9BC');
  image(recycle,99,407,274,386);
  image(landfill,507,407,274,386);
  image(compost,902,407,274,386);
  image(pow,1060,10,498,385);
  image(scoreBubble,41,20, 191,117);
  image(box,530,105,308, 260);

  textSize(40);
  fill(0);
  text('Score:',75,90);
  text(scoreValue,175,90);
  textSize(50);
  fill('red');
  text('Cardboard Box',1190,210);

  // Hover Effect
  if(mouseX > 99 && mouseX < 373 && mouseY > 407 && mouseY < 743) {
    stroke(255);
    noFill();
    rect(99,407,274,386);
  }
  if(mouseX > 507 && mouseX < 781 && mouseY > 407 && mouseY < 743) {
    stroke(255);
    noFill();
    rect(507,407,274,386);
  }
  if(mouseX > 902 && mouseX < 1176 && mouseY > 407 && mouseY < 743) {
    stroke(255);
    noFill();
    rect(902,407,274,386);
  }

  // Wrong choice for compost (WORKS HERE ONLY FOR SOME REASON)
  if(mouseX > 902 && mouseX < 1176 && mouseY > 407 && mouseY < 743 && mouseIsPressed) {
    stage = 3;
  }
}

// Light Bulb Screen
function five() {
  background('#8EC9BC');
  image(recycle,99,407,274,386);
  image(landfill,507,407,274,386);
  image(compost,902,407,274,386);
  image(pow,1060,10,498,385);
  image(scoreBubble,41,20, 191,117);
  image(bulb,530,105, 162, 246);

  textSize(40);
  fill(0);
  text('Score:',75,90);
  text(scoreValue,175,90);
  textSize(45);
  fill('red');
  text('Incandescent bulb',1170,210);

  // Hover Effect
  if(mouseX > 99 && mouseX < 373 && mouseY > 407 && mouseY < 743) {
    stroke(255);
    noFill();
    rect(99,407,274,386);
  }
  if(mouseX > 507 && mouseX < 781 && mouseY > 407 && mouseY < 743) {
    stroke(255);
    noFill();
    rect(507,407,274,386);
  }
  if(mouseX > 902 && mouseX < 1176 && mouseY > 407 && mouseY < 743) {
    stroke(255);
    noFill();
    rect(902,407,274,386);
  }

  // Wrong choice for recycle
  if(mouseX > 99 && mouseX < 373 && mouseY > 407 && mouseY < 743 && mouseIsPressed) {
    stage = 3;
  }
}

// Plastic Bag Screen
function six() {
  background('#8EC9BC');
  image(recycle,99,407,274,386);
  image(landfill,507,407,274,386);
  image(compost,902,407,274,386);
  image(pow,1060,10,498,385);
  image(scoreBubble,41,20, 191,117);
  image(plastic,530,105,224, 282);

  textSize(40);
  fill(0);
  text('Score:',75,90);
  text(scoreValue,175,90);
  textSize(65);
  fill('red');
  text('Plastic Bag',1190,210);

  // Hover Effect
  if(mouseX > 99 && mouseX < 373 && mouseY > 407 && mouseY < 743) {
    stroke(255);
    noFill();
    rect(99,407,274,386);
  }
  if(mouseX > 507 && mouseX < 781 && mouseY > 407 && mouseY < 743) {
    stroke(255);
    noFill();
    rect(507,407,274,386);
  }
  if(mouseX > 902 && mouseX < 1176 && mouseY > 407 && mouseY < 743) {
    stroke(255);
    noFill();
    rect(902,407,274,386);
  }

  // Correct choice
  if(mouseX > 507 && mouseX < 781 && mouseY > 407 && mouseY < 743 && mouseIsPressed) {
    scoreValue++;
    stage = 7;
  }
}

// Soup Can Screen
function seven() {
  background('#8EC9BC');
  image(recycle,99,407,274,386);
  image(landfill,507,407,274,386);
  image(compost,902,407,274,386);
  image(pow,1060,10,498,385);
  image(scoreBubble,41,20, 191,117);
  image(soup,530,105,150, 282);

  textSize(40);
  fill(0);
  text('Score:',75,90);
  text(scoreValue,175,90);
  textSize(65);
  fill('red');
  text('Soup Can',1220,210);


  // Hover Effect
  if(mouseX > 99 && mouseX < 373 && mouseY > 407 && mouseY < 743) {
    stroke(255);
    noFill();
    rect(99,407,274,386);
  }
  if(mouseX > 507 && mouseX < 781 && mouseY > 407 && mouseY < 743) {
    stroke(255);
    noFill();
    rect(507,407,274,386);
  }
  if(mouseX > 902 && mouseX < 1176 && mouseY > 407 && mouseY < 743) {
    stroke(255);
    noFill();
    rect(902,407,274,386);
  }
}

// Tea Bag Screen
function eight() {
  background('#8EC9BC');
  image(recycle,99,407,274,386);
  image(landfill,507,407,274,386);
  image(compost,902,407,274,386);
  image(pow,1060,10,498,385);
  image(scoreBubble,41,20, 191,117);
  image(tea,530,105,314, 262);

  textSize(40);
  fill(0);
  text('Score:',75,90);
  text(scoreValue,175,90);
  textSize(68);
  fill('red');
  text('Tea bag',1230,210);


  // Hover Effect
  if(mouseX > 99 && mouseX < 373 && mouseY > 407 && mouseY < 743) {
    stroke(255);
    noFill();
    rect(99,407,274,386);
  }
  if(mouseX > 507 && mouseX < 781 && mouseY > 407 && mouseY < 743) {
    stroke(255);
    noFill();
    rect(507,407,274,386);
  }
  if(mouseX > 902 && mouseX < 1176 && mouseY > 407 && mouseY < 743) {
    stroke(255);
    noFill();
    rect(902,407,274,386);
  }

  // if(mouseX > 99 && mouseX < 373 && mouseY > 407 && mouseY < 743) {
  //   stage = 3;
  // }
}

// Congrats Screen
function nine() {
  image(end,0,0);

}

if (stage == 1) {
   one();
  } else if (stage == 2) {
    two();
  } else if (stage == 3) {
    three();
  } else if (stage == 4) {
    four();
  } else if (stage == 5) {
    five();
  } else if (stage == 6) {
    six();
  } else if (stage == 7) {
    seven();
  } else if (stage == 8) {
    eight();
  } else if (stage == 9) {
    nine();
  }

}

function mouseReleased() {


  // Banana Stage
  if(stage == 2) {
    // // Wrong choice
    if(mouseX > 99 && mouseX < 373 && mouseY > 407 && mouseY < 743) {
      stage = 3;
    }
    if(mouseX > 507 && mouseX < 781 && mouseY > 407 && mouseY < 743) {
      stage = 3;
    }

    // Correct choice
    if(mouseX > 902 && mouseX < 1176 && mouseY > 407 && mouseY < 743) {
      scoreValue++;
      stage = 4;
    }
  }

  // Wrong Screen
  if(stage == 3) {
    if(mouseX > 640 && mouseX < 890 && mouseY > 571 && mouseY < 651) {
      scoreValue = 0;
      stage = 2;
    }
  }

  // Box Stage
  if(stage == 4) {
    // Wrong choice
    if(mouseX > 507 && mouseX < 781 && mouseY > 407 && mouseY < 743) {
      stage = 3;
    }

    // Correct choice
    if(mouseX > 99 && mouseX < 373 && mouseY > 407 && mouseY < 743) {
      scoreValue++;
      stage = 5;
    }
  }

  // Light Bulb Stage
  if(stage == 5) {
    // Wrong choice
    if(mouseX > 902 && mouseX < 1176 && mouseY > 407 && mouseY < 743) {
      stage = 3;
    }

    // Correct choice
    if(mouseX > 507 && mouseX < 781 && mouseY > 407 && mouseY < 743) {
      scoreValue++;
      stage = 6;
    }
  }

  // Plastic Bag Stage
  if(stage == 6) {
    // Wrong choice
    if(mouseX > 902 && mouseX < 1176 && mouseY > 407 && mouseY < 743) {
      stage = 3;
    }
    if(mouseX > 99 && mouseX < 373 && mouseY > 407 && mouseY < 743) {
      stage = 3;
    }
  }

  // Can Stage
  if(stage == 7) {
    // Wrong choice
    if(mouseX > 902 && mouseX < 1176 && mouseY > 407 && mouseY < 743) {
      stage = 3;
    }

    // Correct choice
    if(mouseX > 99 && mouseX < 373 && mouseY > 407 && mouseY < 743) {
      scoreValue++;
      stage = 8;
    }
  }

  // Tea Bag Stage
  if(stage == 8) {
    // Wrong choice
    if(mouseX > 507 && mouseX < 781 && mouseY > 407 && mouseY < 743) {
      stage = 3;
    }

    // Correct choice
    if(mouseX > 902 && mouseX < 1176 && mouseY > 407 && mouseY < 743) {
      scoreValue = 6;
      stage = 9;
    }
  }
}

function mousePressed() {

  if(stage == 1){
    if(mouseX > 1180 && mouseX < 1316 && mouseY > 592 && mouseY < 672) {
      stage = 2;
    }
  }

  if(stage == 7) {
    if(mouseX > 507 && mouseX < 781 && mouseY > 407 && mouseY < 743 && mouseIsPressed) {
      stage = 3;
    }
  }

  if(stage == 8) {
    // Wrong Choice
    if(mouseX > 99 && mouseX < 373 && mouseY > 407 && mouseY < 743) {
      stage = 3;
    }
    if(mouseX > 99 && mouseX < 373 && mouseY > 407 && mouseY < 743) {
      stage = 3;
    }
  }
}
