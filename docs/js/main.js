"use strict";
var Ball = (function () {
    function Ball() {
        this.htmlElement = document.createElement("ball");
        document.body.appendChild(this.htmlElement);
        this.x = 0;
        this.y = 0;
        this.speedX = Math.random() * 5 + 5;
        this.speedY = Math.random() * 5 + 5;
    }
    Ball.prototype.move = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x + this.htmlElement.clientWidth > window.innerWidth || this.x < 0) {
            this.speedX *= -1;
        }
        if (this.y + this.htmlElement.clientHeight > window.innerHeight || this.y < 0) {
            this.speedY *= -1;
        }
        this.draw();
    };
    Ball.prototype.draw = function () {
        this.htmlElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Ball;
}());
var Game = (function () {
    function Game() {
        this.ball = new Ball;
        new Levelone;
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.ball.move();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Levelone = (function () {
    function Levelone() {
        for (var index = 100; index < 1600; index += 50) {
            new Square(index, 200);
        }
        for (var index = 150; index < 1550; index += 50) {
            new Square(index, 230);
        }
        for (var index = 200; index < 1500; index += 50) {
            new Square(index, 260);
        }
    }
    return Levelone;
}());
var Square = (function () {
    function Square(x, y) {
        this.htmlElement = document.createElement("square");
        document.body.appendChild(this.htmlElement);
        this.x = x;
        this.y = y;
        this.draw();
    }
    Square.prototype.draw = function () {
        this.htmlElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Square;
}());
//# sourceMappingURL=main.js.map