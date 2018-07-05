class Score{

    private _element : Element;
    private _score : number = 0;

    constructor(){
        this._element = document.createElement('p');
    }

    public draw(){
        let score = document.getElementById('score');
        this._element.innerHTML = String(this._score);     
        score.appendChild(this._element);
    }

    public increaseScore(){
        this._score ++;
        this._element.innerHTML = String(this._score);
    }
}