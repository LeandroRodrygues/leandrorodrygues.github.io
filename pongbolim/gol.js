let comprimentoGol = 1;
let alturaGol = 50;
let xGol = 3;
let xGolOponente = 595;
let posicaoYGol = 175;
let meusGols = 0;
let golsOponente = 0;
let colisao = false; // função p5.collide
var golMarcado = false;

function mostraGol(){
  fill(255);
  rect(xGol, posicaoYGol, comprimentoGol, alturaGol);  
}

function mostraGolOponente(){
  fill(255);
  rect(xGolOponente, posicaoYGol, comprimentoGol, alturaGol);
}

function mostraPlacar(){
  textSize(20);
  textAlign(CENTER);
  fill(color(244,164,96));
  rect(140, 13, 20, 20);
  fill(255);
  fill(0,0,255);
  text('Jahia',110, 30);
  text(meusGols, 150, 30);
  fill(color(244,164,96));
  rect (440, 13, 20, 20);
  fill(255);
  fill(255,0,0);
  text('Vicetoria', 505,30);
  text(golsOponente, 450, 30);  
}

function colisaoGol(){
  colisao = collideRectCircle(xGol, posicaoYGol, comprimentoGol, alturaGol, xBolinha, yBolinha, raio);
  if (colisao){
    velocidadeXBolinha *= -1;
    golsOponente += 1;
    gol.play();
    golMarcado = true;
  }  
}

function colisaoGolOponente(){
  colisao = collideRectCircle(xGolOponente, posicaoYGol, comprimentoGol, alturaGol, xBolinha, yBolinha, raio);
  if (colisao){    
    velocidadeXBolinha *= -1;
    meusGols += 1;
    gol.play();
    golMarcado = true;
  }  
}
