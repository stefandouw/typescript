class Carrot {

    private _e: HTMLImageElement;
    private _xPos: number;
    private _yPos: number;

    constructor() {

    }

    // Deze draw methode maakt een nieuw 'img' element aan koppelt dit aan het 
    // element met de id waarde 'container'. Zo wordt de carrot op het scherm
    // zichtbaar. Daarna worden er meteen nieuwe coordinaten toegewezen met 
    // de update methode.
    public draw() {
        this._e = document.createElement('img');
        let container = document.getElementById("container");
        this._e.src = './assets/images/carrot.png';
        this._e.className = 'carrot';
        container.appendChild(this._e)
        this.update();
    }

    // Deze methode zorgt ervoor dat het element nieuwe waardes krijgt toegewezen.
    // De nieuwe x positie wordt bepaald met de randomXPos methode en vervolgens
    // doorgevoerd met een transform.
    public update() {
        this._xPos = (this.randomXPos());
        this._e.style.transform = `translate(${this._xPos}px)`;
        console.log('new carrot position');
    }

    // De randomXPos methode retourneert een willekeurig heel getal tussen de 0
    // en 1150. 
    public randomXPos() {
        return Math.floor(Math.random() * Math.floor(1150));
    }

    // Deze simpele methode retourneert de x waarde.
    public getXPos() {
        return this._xPos;
    }
}