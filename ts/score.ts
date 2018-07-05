class Score {

    private _element: Element;
    private _score: number = 0;

    constructor() {
        // Het private element wordt gedefinieerd.
        this._element = document.createElement('p');
    }

    // Deze draw methode zoekt de 'score' id in de HTML en voegt daar
    // de waarde van het private score element in, zodat de score
    // zichtbaar wordt op het scherm.
    public draw() {
        let score = document.getElementById('score');
        this._element.innerHTML = String(this._score);
        score.appendChild(this._element);
    }

    // Deze methode verhoogt de score met +1 en wordt geupdate door opnieuw
    // de waarde van het private element toe te kennen in de HTML.
    public increaseScore() {
        this._score++;
        this._element.innerHTML = String(this._score);
    }
}