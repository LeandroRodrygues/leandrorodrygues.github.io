let xAtacanteMeuTime = 360;
let yAtacanteMeuTime = 160;
let xZagueiroMeuTime = 120;
let yZagueiroMeuTime = 160;
let xAtacanteOponente = 230;
let yAtacanteOponente = 160;
let xZagueiroOponente = 465;
let yZagueiroOponente = 160;
let altura = 80;
let comprimento = 5;

function posicaoInicialJogadores(){
  xAtacanteMeuTime = 360;
  yAtacanteMeuTime = 160;
  xZagueiroMeuTime = 120;
  yZagueiroMeuTime = 160;
  xAtacanteOponente = 230;
  yAtacanteOponente = 160;
  xZagueiroOponente = 465;
  yZagueiroOponente = 160;
}

function mostraZagueiroMeuTime(){
  fill(color(0,0,255));
  noStroke();
  rect(xZagueiroMeuTime, yZagueiroMeuTime, comprimento, altura);
}

function mostraZagueiroOponente(){
  fill(color(255,0,0));
  noStroke();
  rect(xZagueiroOponente, yZagueiroOponente, comprimento, altura);
}

function mostraAtacanteMeuTime(){
  fill(color(0,0,255));
  noStroke();
  rect(xAtacanteMeuTime, yAtacanteMeuTime, comprimento, altura);
}

function mostraAtacanteOponente(){
  fill(color(255,0,0));
  noStroke();
  rect(xAtacanteOponente, yAtacanteOponente, comprimento, altura);
}

function colisaoMeuZagueiro(x, y){
  colisao = collideRectCircle(x, y, comprimento, altura, xBolinha, yBolinha, raio);
  if (colisao){
    velocidadeXBolinha *= -1;    
  }
}

function colisaoZagueiroOponente(x, y){
  colisao = collideRectCircle(x, y, comprimento, altura, xBolinha, yBolinha, raio);
  if (colisao){
    velocidadeXBolinha *= -1;
    }
}

function colisaoMeuAtacante(x, y){
  colisao = collideRectCircle(x, y, comprimento, altura, xBolinha, yBolinha, raio);
  if (colisao){
    velocidadeXBolinha *= -1;    
  }
}

function colisaoAtacanteOponente(x, y){
  colisao = collideRectCircle(x, y, comprimento, altura, xBolinha, yBolinha, raio);
  if (colisao){
    velocidadeXBolinha *= -1;    
  }
}

function movimentaMeuTime(){
  if (keyIsDown(87) && yAtacanteMeuTime > 0){   
    movimentaParaCimaMeuTime();
  }
  if (keyIsDown(83) && yAtacanteMeuTime < 310){
    movimentaParaBaixoMeuTime();
  }
}

function movimentaTimeOponente(){
  if (keyIsDown(UP_ARROW) && yAtacanteOponente > 0){   
    movimentaParaCimaOponente();
  }
  if (keyIsDown(DOWN_ARROW) && yAtacanteOponente < 310){
    movimentaParaBaixoOponente();
  }
}

function movimentaParaCimaMeuTime(){
  yAtacanteMeuTime -= 10;
  yZagueiroMeuTime -= 10;
}

function movimentaParaBaixoMeuTime(){
  yAtacanteMeuTime += 10;
  yZagueiroMeuTime += 10;
}

function movimentaParaCimaOponente(){
  yAtacanteOponente -= 10;
  yZagueiroOponente -= 10;
}

function movimentaParaBaixoOponente(){
  yAtacanteOponente += 10;
  yZagueiroOponente += 10;
}

