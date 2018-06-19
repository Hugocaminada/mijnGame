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
var Level = (function () {
    function Level(backgroundImage, animalName, g) {
        var _this = this;
        this.gameScore = 0;
        this.text = "Hoi daar ben ik weer!";
        this.counter = 0;
        this.game = g;
        this.healthbar = new Healthbar();
        var background = document.getElementsByTagName("game")[0];
        background.style.backgroundImage = "url('./img/backgrounds/" + backgroundImage + ".png')";
        var forground = document.getElementsByTagName("forground")[0];
        this.modal = new Modal();
        var modalContainer = document.getElementsByClassName("modal-content")[0];
        this.textfield = document.createElement("p");
        modalContainer.appendChild(this.textfield);
        this.textfield.innerHTML = this.text;
        var leftwrapper = document.createElement("leftwrapper");
        forground.appendChild(leftwrapper);
        var rightwrapper = document.createElement("rightwrapper");
        forground.appendChild(rightwrapper);
        this.animalName = document.createElement("animalname");
        this.animalName.innerHTML = animalName;
        forground.appendChild(this.animalName);
        new Animal(animalName);
        this.buttonwrapper = document.createElement("buttonwrapper");
        forground.appendChild(this.buttonwrapper);
        this.gameScoreElement = document.createElement("gamescore");
        forground.appendChild(this.gameScoreElement);
        this.scoreText = document.createElement("p");
        this.scoreText.innerHTML = "Score: 0";
        this.gameScoreElement.appendChild(this.scoreText);
        this.updateGameScore();
        window.addEventListener("click", function (e) { return _this.changeText(); });
    }
    Level.prototype.updateGameScore = function () {
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
    Level.prototype.createButton = function () {
        var _this = this;
        var button = document.createElement("button");
        button.id = "evolvebutton";
        button.innerHTML = "Evolueer!";
        this.gameScoreElement.appendChild(button);
        button.addEventListener("click", function (e) { return _this.changeLevel(); });
    };
    Level.prototype.changeLevel = function () {
    };
    Level.prototype.update = function () {
    };
    Level.prototype.changeText = function () {
    };
    Level.prototype.updateText = function (text) {
        this.textfield.innerHTML = text;
    };
    return Level;
}());
var Fishlevel = (function (_super) {
    __extends(Fishlevel, _super);
    function Fishlevel(backgroundImage, animalName, g) {
        var _this = _super.call(this, backgroundImage, animalName, g) || this;
        _this.sleep = new Buttonbar("sleep", "left");
        _this.eat = new Buttonbar("eat", "right");
        return _this;
    }
    Fishlevel.prototype.changeLevel = function () {
        this.game.emptyScreen();
        this.game.showScreen(new Lizardlevel("level3", "Tiktaalik", this.game));
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
        console.log(this.counter);
    };
    return Fishlevel;
}(Level));
var Game = (function () {
    function Game() {
        this.currentscreen = new Fishlevel("level2", "Cephalaspis", this);
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
        this.pointerPosition = healthScore * 4;
        this.healthPointer.style.transform = "translate(" + -this.pointerPosition + "px)";
    };
    return Healthbar;
}());
var Lizardlevel = (function (_super) {
    __extends(Lizardlevel, _super);
    function Lizardlevel(backgroundImage, animalName, g) {
        var _this = _super.call(this, backgroundImage, animalName, g) || this;
        _this.drink = new Buttonbar("drink", "left");
        return _this;
    }
    Lizardlevel.prototype.changeLevel = function () {
        this.game.emptyScreen();
        this.game.showScreen(new Mammallevel("level4", "Thrinaxodon", this.game));
    };
    Lizardlevel.prototype.update = function () {
        this.health = (this.eat.getScore + this.sleep.getScore + this.drink.getScore) / 3;
        this.eat.update();
        this.sleep.update();
        this.drink.update();
        this.healthbar.drawPointer(this.health);
    };
    Lizardlevel.prototype.changeText = function () {
        this.counter += 1;
        switch (this.counter) {
            case 1:
                this.text = "hoiiiii";
                break;
            case 2:
                this.modal.closeModalByWindow();
                break;
        }
        console.log(this.counter);
        this.updateText(this.text);
    };
    return Lizardlevel;
}(Fishlevel));
var Mammallevel = (function (_super) {
    __extends(Mammallevel, _super);
    function Mammallevel(backgroundImage, animalName, g) {
        var _this = _super.call(this, backgroundImage, animalName, g) || this;
        _this.exercise = new Buttonbar("exercise", "right");
        return _this;
    }
    Mammallevel.prototype.changeLevel = function () {
        this.game.emptyScreen();
        this.game.showScreen(new Monkeylevel("level5", "Procunsul", this.game));
    };
    Mammallevel.prototype.update = function () {
        this.health = (this.eat.getScore + this.sleep.getScore + this.drink.getScore + this.exercise.getScore) / 4;
        this.eat.update();
        this.sleep.update();
        this.drink.update();
        this.exercise.update();
        this.healthbar.drawPointer(this.health);
    };
    Mammallevel.prototype.changeText = function () {
        this.counter += 1;
        switch (this.counter) {
            case 1:
                this.modal.closeModalByWindow();
                break;
        }
        this.updateText(this.text);
    };
    return Mammallevel;
}(Lizardlevel));
var Monkeylevel = (function (_super) {
    __extends(Monkeylevel, _super);
    function Monkeylevel(backgroundImage, animalName, g) {
        var _this = _super.call(this, backgroundImage, animalName, g) || this;
        _this.play = new Buttonbar("play", "left");
        return _this;
    }
    Monkeylevel.prototype.changeLevel = function () {
        this.game.emptyScreen();
        this.game.showScreen(new Humanlevel("level6", "Mens", this.game));
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
    Monkeylevel.prototype.changeText = function () {
        this.counter += 1;
        switch (this.counter) {
            case 1:
                this.modal.closeModalByWindow();
                break;
        }
        this.updateText(this.text);
    };
    return Monkeylevel;
}(Mammallevel));
var Humanlevel = (function (_super) {
    __extends(Humanlevel, _super);
    function Humanlevel(backgroundImage, animalName, g) {
        var _this = _super.call(this, backgroundImage, animalName, g) || this;
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
    Humanlevel.prototype.createButton = function () {
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
    Humanlevel.prototype.changeText = function () {
        this.modal.closeModalByWindow();
    };
    return Humanlevel;
}(Monkeylevel));
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
//# sourceMappingURL=main.js.map