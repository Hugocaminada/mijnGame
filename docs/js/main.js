var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal(species) {
        this.element = document.createElement("animal");
        this.img = document.createElement("img");
        this.img.src = "./img/animals/" + species + "_normal.png";
        var forground = document.getElementsByTagName("forground")[0];
        forground.appendChild(this.element);
        this.element.appendChild(this.img);
    }
    return Animal;
}());
var Buttonbar = (function () {
    function Buttonbar(name, position) {
        var _this = this;
        this.score = 50;
        this.buttonCounter = 0;
        this.bar = document.createElement("bar");
        this.bar.id = name + "bar";
        var wrapper = document.getElementsByTagName(position + "wrapper")[0];
        wrapper.appendChild(this.bar);
        this.pointer = document.createElement("pointer");
        this.bar.appendChild(this.pointer);
        this.pointer.id = name + "pointer";
        this.button = document.createElement("button");
        this.button.id = name + "button";
        var buttonwrapper = document.getElementsByTagName("buttonwrapper")[0];
        buttonwrapper.appendChild(this.button);
        this.img = document.createElement("img");
        this.img.src = "img/icons/" + name + ".png";
        this.button.appendChild(this.img);
        this.button.addEventListener("click", function (e) { return _this.buttonClickChecker(); });
        this.lowerScore();
    }
    Object.defineProperty(Buttonbar.prototype, "getScore", {
        get: function () {
            return this.score;
        },
        enumerable: true,
        configurable: true
    });
    Buttonbar.prototype.update = function () {
        this.checkButtonOpacity();
        this.drawPointer();
    };
    Buttonbar.prototype.buttonClickChecker = function () {
        if (this.buttonCounter < 3) {
            this.buttonCounter += 1;
            this.movePointer();
        }
        this.checkButtonCounter();
    };
    Buttonbar.prototype.checkButtonCounter = function () {
        var _this = this;
        if (this.buttonCounter == 3) {
            setTimeout(function () {
                _this.buttonCounter = 0;
            }, 5000);
        }
    };
    Buttonbar.prototype.movePointer = function () {
        if (this.score < 100) {
            this.score += 5;
        }
    };
    Buttonbar.prototype.lowerScore = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.score > 0) {
                _this.score -= 1;
            }
            _this.lowerScore();
        }, Math.random() * 10000 + 7000);
    };
    Buttonbar.prototype.drawPointer = function () {
        this.pointerWidth = this.score * 1;
        this.pointer.style.width = this.pointerWidth + "%";
        if (this.score >= 100) {
            this.score = 100;
        }
    };
    Buttonbar.prototype.checkButtonOpacity = function () {
        if (this.score >= 100 || this.buttonCounter == 3) {
            this.button.style.opacity = "0.5";
        }
        else {
            this.button.style.opacity = "unset";
        }
    };
    return Buttonbar;
}());
var GameLevelObject = (function () {
    function GameLevelObject() {
        this.gameScore = 0;
        this.text = "Hoi daar ben ik weer!";
        this.counter = 0;
        this.healthbar = new Healthbar();
    }
    return GameLevelObject;
}());
var Fishlevel = (function (_super) {
    __extends(Fishlevel, _super);
    function Fishlevel(g) {
        var _this = _super.call(this) || this;
        _this.game = g;
        var game = document.getElementsByTagName("game")[0];
        game.style.backgroundImage = "url('./img/backgrounds/level2.png')";
        var forground = document.getElementsByTagName("forground")[0];
        _this.modal = new Modal();
        var modalContainer = document.getElementsByClassName("modal-content")[0];
        _this.textfield = document.createElement("p");
        modalContainer.appendChild(_this.textfield);
        _this.textfield.innerHTML = _this.text;
        var leftwrapper = document.createElement("leftwrapper");
        forground.appendChild(leftwrapper);
        var rightwrapper = document.createElement("rightwrapper");
        forground.appendChild(rightwrapper);
        _this.animalName = document.createElement("animalname");
        _this.animalName.innerHTML = "Cephalaspis";
        forground.appendChild(_this.animalName);
        new Animal("fish");
        _this.buttonwrapper = document.createElement("buttonwrapper");
        forground.appendChild(_this.buttonwrapper);
        _this.sleep = new Buttonbar("sleep", "left");
        _this.eat = new Buttonbar("eat", "right");
        _this.gameScoreElement = document.createElement("gamescore");
        forground.appendChild(_this.gameScoreElement);
        _this.scoreText = document.createElement("p");
        _this.scoreText.innerHTML = "Score: 0";
        _this.gameScoreElement.appendChild(_this.scoreText);
        _this.updateGameScore();
        window.addEventListener("click", function (e) { return _this.changeText(); });
        return _this;
    }
    Fishlevel.prototype.updateGameScore = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.health > 80) {
                _this.gameScore += 1;
                _this.scoreText.innerHTML = "Score: " + _this.gameScore;
                if (_this.gameScore === 100) {
                    _this.createButton();
                }
            }
            _this.updateGameScore();
        }, 100);
    };
    Fishlevel.prototype.createButton = function () {
        var _this = this;
        var button = document.createElement("button");
        button.id = "evolvebutton";
        button.innerHTML = "Evolueer!";
        this.gameScoreElement.appendChild(button);
        button.addEventListener("click", function (e) { return _this.changeLevel(); });
    };
    Fishlevel.prototype.changeLevel = function () {
        this.game.emptyScreen();
        this.game.showScreen(new Lizardlevel(this.game));
    };
    Fishlevel.prototype.update = function () {
        this.health = (this.eat.getScore + this.sleep.getScore) / 2;
        this.eat.update();
        this.sleep.update();
        this.healthbar.drawPointer(this.health);
    };
    Fishlevel.prototype.changeText = function () {
        this.counter += 1;
        switch (this.counter) {
            case 1:
                this.text = "Gefeliciteerd! Je bent geëvolueerd naar een van de oudste vissoorten: de Cephalaspis...";
                break;
            case 2:
                this.text = "De Cephalaspis is een kleine gepantserde vis die ongeveer 360 miljoen jaar geleden in het zoete water van Europa, Azië en Noord-Amerika leefde...";
                break;
            case 3:
                this.text = "Vanaf dit level werkt het spel een beetje anders...";
                break;
            case 4:
                this.text = "Je moet Cephalaspis zo gezond mogelijk houden door hem te laten rusten wanneer hij moe is en te laten eten wanneer hij honger heeft";
                break;
            case 5:
                this.text = "Op de blauwe meter kun je zien hoe moe hij is en op de rode meter zie je hoe hongerig hij is...";
                break;
            case 6:
                this.text = "Als hij moe is kun je hem laten slapen met de blauwe knop en als hij honger heeft kun je hem te eten geven met de rode knop...";
                break;
            case 7:
                this.text = "De groen-rode meter bovenin laat zien hoe gezond hij is op het moment. Deze meter zal omhoog gaan als hij uitrust of wanner hij eet";
                break;
            case 8:
                this.text = "Wanneer deze meter diep in het groen staat gaat je score omhoog!...";
                break;
            case 9:
                this.text = "En wanneer je score op honderd is krijg je de keuze om te evolueren naar het volgende dier uit de geschiedenis!";
                break;
            case 10:
                this.modal.closeModalByWindow();
                break;
        }
        this.updateText(this.text);
    };
    Fishlevel.prototype.updateText = function (text) {
        this.textfield.innerHTML = text;
    };
    return Fishlevel;
}(GameLevelObject));
var Game = (function () {
    function Game() {
        this.currentscreen = new Fishlevel(this);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.currentscreen.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.emptyScreen = function () {
        var forground = document.getElementsByTagName("forground")[0];
        forground.innerHTML = "";
    };
    Game.prototype.showScreen = function (screen) {
        this.currentscreen = screen;
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Healthbar = (function () {
    function Healthbar() {
        var forground = document.getElementsByTagName("forground")[0];
        this.bar = document.createElement("healthbar");
        forground.appendChild(this.bar);
        this.healthPointer = document.createElement("healthpointer");
        this.bar.appendChild(this.healthPointer);
    }
    Healthbar.prototype.drawPointer = function (healthScore) {
        this.pointerPosition = healthScore * (this.bar.offsetWidth / 100);
        this.healthPointer.style.transform = "translate(" + -this.pointerPosition + "px)";
    };
    return Healthbar;
}());
var Humanlevel = (function (_super) {
    __extends(Humanlevel, _super);
    function Humanlevel(g) {
        var _this = _super.call(this) || this;
        _this.game = g;
        var game = document.getElementsByTagName("game")[0];
        game.style.backgroundImage = "url('./img/backgrounds/level6.png')";
        var forground = document.getElementsByTagName("forground")[0];
        var leftwrapper = document.createElement("leftwrapper");
        forground.appendChild(leftwrapper);
        var rightwrapper = document.createElement("rightwrapper");
        forground.appendChild(rightwrapper);
        _this.gameScoreElement = document.createElement("gamescore");
        forground.appendChild(_this.gameScoreElement);
        _this.scoreText = document.createElement("p");
        _this.scoreText.innerHTML = "Score: 0";
        _this.gameScoreElement.appendChild(_this.scoreText);
        _this.animalName = document.createElement("animalname");
        _this.animalName.innerHTML = "Homo Sapien";
        forground.appendChild(_this.animalName);
        new Animal("darwinbody");
        _this.buttonwrapper = document.createElement("buttonwrapper");
        forground.appendChild(_this.buttonwrapper);
        _this.sleep = new Buttonbar("sleep", "left");
        _this.eat = new Buttonbar("eat", "right");
        _this.drink = new Buttonbar("drink", "left");
        _this.exercise = new Buttonbar("exercise", "right");
        _this.play = new Buttonbar("play", "left");
        _this.learn = new Buttonbar("learn", "right");
        _this.updateGameScore();
        return _this;
    }
    Humanlevel.prototype.updateGameScore = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.health > 80) {
                _this.gameScore += 1;
                _this.scoreText.innerHTML = "Score: " + _this.gameScore;
            }
            _this.updateGameScore();
        }, 100);
    };
    Humanlevel.prototype.update = function () {
        this.health = (this.eat.getScore + this.sleep.getScore + this.drink.getScore + this.exercise.getScore + this.play.getScore + this.learn.getScore) / 6;
        this.eat.update();
        this.sleep.update();
        this.drink.update();
        this.exercise.update();
        this.play.update();
        this.learn.update();
        this.healthbar.drawPointer(this.health);
    };
    return Humanlevel;
}(GameLevelObject));
var Lizardlevel = (function (_super) {
    __extends(Lizardlevel, _super);
    function Lizardlevel(g) {
        var _this = _super.call(this) || this;
        _this.game = g;
        var game = document.getElementsByTagName("game")[0];
        game.style.backgroundImage = "url('./img/backgrounds/level3.png')";
        var forground = document.getElementsByTagName("forground")[0];
        var leftwrapper = document.createElement("leftwrapper");
        forground.appendChild(leftwrapper);
        var rightwrapper = document.createElement("rightwrapper");
        forground.appendChild(rightwrapper);
        _this.gameScoreElement = document.createElement("gamescore");
        forground.appendChild(_this.gameScoreElement);
        _this.scoreText = document.createElement("p");
        _this.scoreText.innerHTML = "Score: 0";
        _this.gameScoreElement.appendChild(_this.scoreText);
        new Animal("Tiktaalik");
        _this.animalName = document.createElement("animalname");
        _this.animalName.innerHTML = "Tiktaalik";
        forground.appendChild(_this.animalName);
        _this.buttonwrapper = document.createElement("buttonwrapper");
        forground.appendChild(_this.buttonwrapper);
        _this.sleep = new Buttonbar("sleep", "left");
        _this.eat = new Buttonbar("eat", "right");
        _this.drink = new Buttonbar("drink", "left");
        _this.updateGameScore();
        return _this;
    }
    Lizardlevel.prototype.updateGameScore = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.health > 80) {
                _this.gameScore += 1;
                _this.scoreText.innerHTML = "Score: " + _this.gameScore;
                if (_this.gameScore === 100) {
                    _this.createButton();
                }
            }
            _this.updateGameScore();
        }, 100);
    };
    Lizardlevel.prototype.createButton = function () {
        var _this = this;
        var button = document.createElement("button");
        button.id = "evolvebutton";
        button.innerHTML = "Evolueer!";
        this.gameScoreElement.appendChild(button);
        button.addEventListener("click", function (e) { return _this.changeLevel(); });
    };
    Lizardlevel.prototype.changeLevel = function () {
        this.game.emptyScreen();
        this.game.showScreen(new Mammallevel(this.game));
    };
    Lizardlevel.prototype.update = function () {
        this.health = (this.eat.getScore + this.sleep.getScore + this.drink.getScore) / 3;
        this.eat.update();
        this.sleep.update();
        this.drink.update();
        this.healthbar.drawPointer(this.health);
    };
    return Lizardlevel;
}(GameLevelObject));
var Mammallevel = (function (_super) {
    __extends(Mammallevel, _super);
    function Mammallevel(g) {
        var _this = _super.call(this) || this;
        _this.game = g;
        var game = document.getElementsByTagName("game")[0];
        game.style.backgroundImage = "url('./img/backgrounds/level4.png')";
        var forground = document.getElementsByTagName("forground")[0];
        var leftwrapper = document.createElement("leftwrapper");
        forground.appendChild(leftwrapper);
        var rightwrapper = document.createElement("rightwrapper");
        forground.appendChild(rightwrapper);
        _this.gameScoreElement = document.createElement("gamescore");
        forground.appendChild(_this.gameScoreElement);
        _this.scoreText = document.createElement("p");
        _this.scoreText.innerHTML = "Score: 0";
        _this.gameScoreElement.appendChild(_this.scoreText);
        new Animal("thrinaxodon");
        _this.animalName = document.createElement("animalname");
        _this.animalName.innerHTML = "Thrinaxodon";
        forground.appendChild(_this.animalName);
        _this.buttonwrapper = document.createElement("buttonwrapper");
        forground.appendChild(_this.buttonwrapper);
        _this.sleep = new Buttonbar("sleep", "left");
        _this.eat = new Buttonbar("eat", "right");
        _this.drink = new Buttonbar("drink", "left");
        _this.exercise = new Buttonbar("exercise", "right");
        _this.updateGameScore();
        return _this;
    }
    Mammallevel.prototype.updateGameScore = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.health > 80) {
                _this.gameScore += 1;
                _this.scoreText.innerHTML = "Score: " + _this.gameScore;
                if (_this.gameScore === 100) {
                    _this.createButton();
                }
            }
            _this.updateGameScore();
        }, 100);
    };
    Mammallevel.prototype.createButton = function () {
        var _this = this;
        var button = document.createElement("button");
        button.id = "evolvebutton";
        button.innerHTML = "Evolueer!";
        this.gameScoreElement.appendChild(button);
        button.addEventListener("click", function (e) { return _this.changeLevel(); });
    };
    Mammallevel.prototype.changeLevel = function () {
        this.game.emptyScreen();
        this.game.showScreen(new Monkeylevel(this.game));
    };
    Mammallevel.prototype.update = function () {
        this.health = (this.eat.getScore + this.sleep.getScore + this.drink.getScore + this.exercise.getScore) / 4;
        this.eat.update();
        this.sleep.update();
        this.drink.update();
        this.exercise.update();
        this.healthbar.drawPointer(this.health);
    };
    return Mammallevel;
}(GameLevelObject));
var Modal = (function () {
    function Modal() {
        this.modal = document.createElement("div");
        this.modal.id = "myModal";
        this.modal.className = "modal";
        var modalContent = document.createElement("div");
        modalContent.className = "modal-content";
        var img = document.createElement("img");
        img.src = "./img/animals/darwin_normal.png";
        var forground = document.getElementsByTagName("forground")[0];
        forground.appendChild(this.modal);
        this.modal.appendChild(modalContent);
        modalContent.appendChild(img);
    }
    Modal.prototype.closeModalByWindow = function () {
        this.modal.style.display = "none";
    };
    return Modal;
}());
var Monkeylevel = (function (_super) {
    __extends(Monkeylevel, _super);
    function Monkeylevel(g) {
        var _this = _super.call(this) || this;
        _this.game = g;
        var game = document.getElementsByTagName("game")[0];
        game.style.backgroundImage = "url('./img/backgrounds/level5.png')";
        var forground = document.getElementsByTagName("forground")[0];
        var leftwrapper = document.createElement("leftwrapper");
        forground.appendChild(leftwrapper);
        var rightwrapper = document.createElement("rightwrapper");
        forground.appendChild(rightwrapper);
        _this.gameScoreElement = document.createElement("gamescore");
        forground.appendChild(_this.gameScoreElement);
        _this.scoreText = document.createElement("p");
        _this.scoreText.innerHTML = "Score: 0";
        _this.gameScoreElement.appendChild(_this.scoreText);
        _this.animalName = document.createElement("animalname");
        _this.animalName.innerHTML = "Procunsul";
        forground.appendChild(_this.animalName);
        new Animal("procunsul");
        _this.buttonwrapper = document.createElement("buttonwrapper");
        forground.appendChild(_this.buttonwrapper);
        _this.sleep = new Buttonbar("sleep", "left");
        _this.eat = new Buttonbar("eat", "right");
        _this.drink = new Buttonbar("drink", "left");
        _this.exercise = new Buttonbar("exercise", "right");
        _this.play = new Buttonbar("play", "left");
        _this.updateGameScore();
        return _this;
    }
    Monkeylevel.prototype.updateGameScore = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.health > 80) {
                _this.gameScore += 1;
                _this.scoreText.innerHTML = "Score: " + _this.gameScore;
                if (_this.gameScore === 100) {
                    _this.createButton();
                }
            }
            _this.updateGameScore();
        }, 100);
    };
    Monkeylevel.prototype.createButton = function () {
        var _this = this;
        var button = document.createElement("button");
        button.id = "evolvebutton";
        button.innerHTML = "Evolueer!";
        this.gameScoreElement.appendChild(button);
        button.addEventListener("click", function (e) { return _this.changeLevel(); });
    };
    Monkeylevel.prototype.changeLevel = function () {
        this.game.emptyScreen();
        this.game.showScreen(new Humanlevel(this.game));
    };
    Monkeylevel.prototype.update = function () {
        this.health = (this.eat.getScore + this.sleep.getScore + this.drink.getScore + this.exercise.getScore + this.play.getScore) / 5;
        this.eat.update();
        this.sleep.update();
        this.drink.update();
        this.exercise.update();
        this.play.update();
        this.healthbar.drawPointer(this.health);
    };
    return Monkeylevel;
}(GameLevelObject));
//# sourceMappingURL=main.js.map