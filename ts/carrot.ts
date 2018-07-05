class Carrot{

    private _e : HTMLImageElement;
    private _xPos : number;
    private _yPos : number;

    constructor(){

    }

    public draw(){
        this._e = document.createElement('img');
        let container = document.getElementById("container");
        this._e.src = './assets/images/carrot.png';
        this._e.className = 'carrot';
        container.appendChild(this._e)
        this.update();
        console.log(this._e.width / 2);
    }

    public update(){
        this._xPos = (this.randomXPos());
        this._e.style.transform = `translate(${this._xPos}px)`;
    }

    public randomXPos(){
        return Math.floor(Math.random() * Math.floor(1150));
    }

    public getXPos(){
        return this._xPos;
    }
}