function setup() {
  createCanvas(600, 400); 
  trilha1.loop();
}

function draw() {
  background(0,128,0);
  mostraBolinha();
  mostraZagueiroMeuTime();
  mostraZagueiroOponente();
  mostraAtacanteMeuTime();
  mostraAtacanteOponente(); 
  mostraGol();
  mostraGolOponente();
  mostraPlacar();
  movimentaBolinha();  
  movimentaMeuTime();
  movimentaTimeOponente();
  verificaColisaoBorda();    
  colisaoGol();
  colisaoGolOponente();
  colisaoMeuZagueiro(xZagueiroMeuTime, yZagueiroMeuTime);
  colisaoZagueiroOponente(xZagueiroOponente, yZagueiroOponente);
  colisaoMeuAtacante(xAtacanteMeuTime, yAtacanteMeuTime);
  colisaoAtacanteOponente(xAtacanteOponente, yAtacanteOponente);
  mostraCampo();
  reiniciarJogo();  
}