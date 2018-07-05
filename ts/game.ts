class Game {
  private _bunny: Bunny;
  private _carrot: Carrot;
  private _score: Score;

  constructor() {
    this._bunny = new Bunny();
    this._carrot = new Carrot();
    this._score = new Score();

    window.addEventListener("keydown", this.keyDownHandler);
  }

  public draw() {
    this._bunny.draw();
    this._carrot.draw();
    this._score.draw();
  }

  public keyDownHandler = (e: KeyboardEvent): void => {
    let bunnyX = this._bunny.getXPos();
    let carrotX = this._carrot.getXPos() + 90;
    if (e.keyCode === 32) {
      this._bunny.jump();
      if (bunnyX > carrotX - 30 && bunnyX < carrotX + 30) {
        this._carrot.update();
        this._score.increaseScore();
      }
    }
  }
}
