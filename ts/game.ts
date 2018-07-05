class Game {

  private _bunny: Bunny;
  private _carrot: Carrot;
  private _score: Score;

  constructor() {
    // Er wordt een nieuwe Bunny class aangemaakt.
    this._bunny = new Bunny();

    // Er wordt een nieuwe Carrot class aangemaakt.
    this._carrot = new Carrot();

    // Er wordt een nieuwe Score class aangemaakt.
    this._score = new Score();

    // Een event listener wordt aangemaakt om een 'keydown' event te herkennen.
    window.addEventListener("keydown", this.keyDownHandler);
  }

  // Deze draw methode roept alle andere draw functies aan om de afbeeldingen 
  // op het scherm te renderen.
  public draw() {
    this._bunny.draw();
    this._carrot.draw();
    this._score.draw();
  }

  // Deze methode wordt aangeroepen wanneer er een 'keydown' event plaats vindt.
  public keyDownHandler = (e: KeyboardEvent): void => {

    // Er worden twee variabelen gedefinieerd om de tweede if statements leesbaar
    // te houden, de '+ 90' achter de carrotX variabel dient ter uitlijning.
    let bunnyX = this._bunny.getXPos();
    let carrotX = this._carrot.getXPos() + 90;

    // Eerst wordt gecontroleerd of de 'keydown' event de spatiebalk betreft.
    if (e.keyCode === 32) {
      console.log('spacebar is being pressed');

      // Vervolgens wordt de jump methode aangeroepen van de bunny class die
      // de bunny laat springen op het beeldscherm.
      this._bunny.jump();

      // Daarna wordt gecontroleerd of de bunny dezelfde x coordinaten heeft
      // als de carrot wanneer de bunny springt (met marge).
      if (bunnyX > carrotX - 30 && bunnyX < carrotX + 30) {
        console.log('X coordinates approximately the same');

        // Wanneer dat zo is wordt de locatie van de carrot veranderd en 
        // de score met +1 verhoogt.
        this._carrot.update();
        this._score.increaseScore();
      }
    }
  }
}
