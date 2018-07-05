class Bunny {

  private _e: HTMLImageElement;
  private _xPos: number = 0;
  private _yPos: number = 500;
  private _direction: number = +20;
  private _jump: boolean = false;

  constructor() {
    // Bij het aanmaken van deze class wordt meteen de loop methode aangeroepen
    // om het spel te starten.
    this.loop();
  }

  // Deze draw methode maakt een nieuw 'img' element aan koppelt dit aan het 
  // element met de id waarde 'container'. Zo wordt de bunny op het scherm
  // zichtbaar. Daarna worden er meteen nieuwe coordinaten toegewezen met 
  // de update methode.
  public draw() {
    this._e = document.createElement("img");
    let container = document.getElementById("container");
    this._e.src = "./assets/images/bunny.jpg";
    this._e.className = "fly";
    container.appendChild(this._e);
    this.update();
  }

  // Deze methode zorgt ervoor dat het element nieuwe waardes krijgt toegewezen.
  // Dit resulteert in een verandering van positie.
  public update() {
    this._e.style.transform = `translate(${this._xPos}px, ${this._yPos}px)`;
  }

  // De jump methode laat de bunny omhoog springen.
  public jump(): void {
    console.log('bunny jumps');

    // Eerst wordt de booleaanse waarde veranderd naar 'true', wat nodig is voor
    // de loop methode die hierna wordt uitgelegd. 
    this._jump = true;

    // De y positie wordt verlaagd naar 250 pixels wat de bunny laat springen.
    this._yPos = 250;

    // Vervolgens worden de waardes geupdate en doorgevoerd met de update methode.
    this.update();

    // Deze timeout zorgt ervoor dat de bunny stil hangt wanneer er wordt gesprongen,
    // vervolgens wordt de bunny weer omlaag gestuurd en wordt de loop hervat.
    setTimeout(() => {
      this._yPos = 500;
      this.update();
      this._jump = false;
      this.loop();
    }, 200);
  }

  // De loop methode zorgt dat de bunny constant in beweging is.
  public loop(): void {

    // Na elk stukje horizontaal bewegen wordt de loop methode aangeroepen,
    // eerst wordt gekeken of de bunny springt. Wanneer dit niet zo is wordt
    // het volgende stukje code in werking gezet.
    if (this._jump === false) {

      // Er wordt een timeout functie gebruikt om de snelheid van de bunny
      // te bepalen.
      setTimeout(() => {

        // Eerst wordt de richting bepaald met de setDirection methode.
        this.setDirection();

        // Daarna wordt de positie verhoogd of verlaagd en de waarde aangepast.
        this._xPos += this._direction;
        this.update();

        // Vervolgens wordt de loop methode opnieuw aangeroepen.
        this.loop();

        // Deze waarde bepaald hoe snel de loop methode wordt herhaald.
      }, 20);
    }
  }

  // Deze methode bepaald of de bunny naar links of naar rechts wordt verplaatst.
  public setDirection() {

    // Wanneer de x waarde 0 wordt bereikt (uiterste linkse hoek van het beeldscherm),
    // wordt de x waarde elke loop verhoogd met 20 pixels.
    if (this._xPos == 0) {
      this._direction = +20;
      console.log('direction is now positive');

      // Wanneer de uiterste rechtse hoek wordt bereikt (hier als 1280 bepaald), wordt
      // de x waarde elke loop met 20 pixels verlaagt.
    } else if (this._xPos == 1280) {
      this._direction = -20;
      console.log('direction is now negative');
    }
  }

  // Deze simpele methode retourneert de x waarde.
  public getXPos() {
    return this._xPos;
  }
}
