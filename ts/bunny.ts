class Bunny {
  private _e: HTMLImageElement;
  private _xPos: number = 0;
  private _yPos: number = 500;
  private _direction: number = +20;
  private _jump: boolean = false;

  constructor() {
    this.loop();
  }

  public draw() {
    this._e = document.createElement("img");
    let container = document.getElementById("container");
    this._e.src = "./assets/images/bunny.jpg";
    this._e.className = "fly";
    container.appendChild(this._e);
    this.update();
  }

  public update() {
    this._e.style.transform = `translate(${this._xPos}px, ${this._yPos}px)`;
  }

  public jump(): void {
    this._jump = true;
    this._yPos = 250;
    this.update();
    setTimeout(() => {
      this._yPos = 500;
      this.update();
      this._jump = false;
      this.loop();
    }, 200);
  }

  public loop(): void {
    if (this._jump === false) {
      setTimeout(() => {
        this.setDirection();
        this._xPos += this._direction;
        this.update();
        this.loop();
      }, 20);
    }
  }

  public setDirection() {
    if (this._xPos == 0) {
      this._direction = +20;
    } else if (this._xPos == 1280) {
      this._direction = -20;
    }
  }

  public getXPos() {
    return this._xPos;
  }
}
