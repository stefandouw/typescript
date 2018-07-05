var Bunny = (function () {
    function Bunny() {
        this._xPos = 0;
        this._yPos = 500;
        this._direction = +20;
        this._jump = false;
        this.loop();
    }
    Bunny.prototype.draw = function () {
        this._e = document.createElement("img");
        var container = document.getElementById("container");
        this._e.src = "./assets/images/bunny.jpg";
        this._e.className = "fly";
        container.appendChild(this._e);
        this.update();
    };
    Bunny.prototype.update = function () {
        this._e.style.transform = "translate(" + this._xPos + "px, " + this._yPos + "px)";
    };
    Bunny.prototype.jump = function () {
        var _this = this;
        console.log('bunny jumps');
        this._jump = true;
        this._yPos = 250;
        this.update();
        setTimeout(function () {
            _this._yPos = 500;
            _this.update();
            _this._jump = false;
            _this.loop();
        }, 200);
    };
    Bunny.prototype.loop = function () {
        var _this = this;
        if (this._jump === false) {
            setTimeout(function () {
                _this.setDirection();
                _this._xPos += _this._direction;
                _this.update();
                _this.loop();
            }, 20);
        }
    };
    Bunny.prototype.setDirection = function () {
        if (this._xPos == 0) {
            this._direction = +20;
            console.log('direction is now positive');
        }
        else if (this._xPos == 1280) {
            this._direction = -20;
            console.log('direction is now negative');
        }
    };
    Bunny.prototype.getXPos = function () {
        return this._xPos;
    };
    return Bunny;
}());
var Carrot = (function () {
    function Carrot() {
    }
    Carrot.prototype.draw = function () {
        this._e = document.createElement('img');
        var container = document.getElementById("container");
        this._e.src = './assets/images/carrot.png';
        this._e.className = 'carrot';
        container.appendChild(this._e);
        this.update();
    };
    Carrot.prototype.update = function () {
        this._xPos = (this.randomXPos());
        this._e.style.transform = "translate(" + this._xPos + "px)";
        console.log('new carrot position');
    };
    Carrot.prototype.randomXPos = function () {
        return Math.floor(Math.random() * Math.floor(1150));
    };
    Carrot.prototype.getXPos = function () {
        return this._xPos;
    };
    return Carrot;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.keyDownHandler = function (e) {
            var bunnyX = _this._bunny.getXPos();
            var carrotX = _this._carrot.getXPos() + 90;
            if (e.keyCode === 32) {
                console.log('spacebar is being pressed');
                _this._bunny.jump();
                if (bunnyX > carrotX - 30 && bunnyX < carrotX + 30) {
                    console.log('X coordinates approximately the same');
                    _this._carrot.update();
                    _this._score.increaseScore();
                }
            }
        };
        this._bunny = new Bunny();
        this._carrot = new Carrot();
        this._score = new Score();
        window.addEventListener("keydown", this.keyDownHandler);
    }
    Game.prototype.draw = function () {
        this._bunny.draw();
        this._carrot.draw();
        this._score.draw();
    };
    return Game;
}());
var init = function () {
    var game = new Game;
    game.draw();
};
window.addEventListener('load', init);
var Score = (function () {
    function Score() {
        this._score = 0;
        this._element = document.createElement('p');
    }
    Score.prototype.draw = function () {
        var score = document.getElementById('score');
        this._element.innerHTML = String(this._score);
        score.appendChild(this._element);
    };
    Score.prototype.increaseScore = function () {
        console.log('score increased');
        this._score++;
        this._element.innerHTML = String(this._score);
    };
    return Score;
}());
//# sourceMappingURL=main.js.map