# Darwingame
Deze game heb ik gemaakt voor CLE4.
Aangezien ik alle typescript heb geschreven voor deze levels, dien ik deze levels ook in voor mijn Programmeer opdracht. 
Het is een Tamagotchi-achtig spel waarin de evolutie wordt gesimuleerd. Charles Darwin leidt je door elk level heen om je dingen uit te leggen over de evolutie.
Er zijn 5 levels te spelen. Als eerste speel je als de eerste vis-achtige, daarna ga je over naar de eerste reptiel-achtige, en zo door langs de eerste zoogdier, naar de aap en vervolgens de mens.

Je kunt hem hier spelen: https://stud.hosted.hr.nl/0940329/Darwingame/

Als extra uitdagingen heb ik gekozen voor:
• De game ziet er zeer verzorgd uit dankzij goed uitgewerkt UI design en artwork.
• De game werkt op mobiele schermen en ondersteunt touchscreen controls.

# Classes

Ik heb veel verschillende Classes toegevoegd.
Ik heb bijvoorbeeld de class <code>Buttonbar</code> bedacht voor alle buttons en hun corresponderende progress bars. Hier roep ik er elk level een van op elke keer met een andere waarde. Aan de hand van die waarde krijgen ze hun eigen kleur, icoon en score in het spel.

    this.sleep = new Buttonbar("sleep", "left")
    this.eat = new Buttonbar("eat", "right")
    this.drink = new Buttonbar("drink", "left")
    this.exercise = new Buttonbar("exercise", "right") 
    this.play = new Buttonbar("play", "left")
    this.learn = new Buttonbar("learn", "right")
    
# Encapsulation

Encapsulation heb ik 1x toegepast. Dit om de waarde van de score in de buttonbars terug te geven aan de levels zodat die weer de health kunnen bepalen:

dit is in de buttonbar:

    public get getScore(): number {
      return this.score;
    }

dit is in het fishlevel:

    this.health = (this.eat.getScore + this.sleep.getScore) / 2
    
# Composition

Ik heb ook gebruik gemaakt van Composition. Mijn buttonbar classes zitten in elk level. Elk level kent dus verschillende button bars. Maar de buttonbar kent de levels niet. Vandaar ook de getter die ik hierboven heb aangeduid om toch de buttonbar score terug te geven aan de levels. Ook heb ik nog een healthbar en een animal class die elk level aanroept.

# Inheritance
    
Inheritance heb ik heel veel gebruikt. Ik heb een 'basis' <code>Level</code> gemaakt waar alle variabelen en functies inzitten die in elk level zitten. Deze wordt ingeladen bij het eerste level <code>Fishlevel</code>: 

    /// <reference path="level.ts" />

    class Fishlevel extends Level{
        protected sleep : Buttonbar
        protected eat : Buttonbar
        
Hij stuurt ook wat waardes mee naar de super, zoals de unieke animal tekening en naam en de background, ook de <code>this</code> van de game stuurt hij mee om later het nieuwe level te kunnen aanroepen.

    constructor(backgroundImage: string, animalName: string, g:Game){
        super(backgroundImage, animalName, g)

        this.sleep = new Buttonbar("sleep", "left")
        this.eat = new Buttonbar("eat", "right")
    }
    
Het tweede level <code>Lizardlevel</code> is weer een child van het <code>Fishlevel</code>. Hierdoor krijgt hij alles uit de <code>super()</code> van het 'basis' <code>Level</code> en van de <code>super()</code> van het <code>Fishlevel</code>, hier voegt hij dan ook nog zijn eigen code aan toe. Dit gaat zo door totaan het laatste level <code>Humanlevel</code>
    

# Peer review:
Ik review de game van Ismail [Link](https://github.com/IsmailHusseinCR/gamepr4)

- Classes zitten er duidelijk in. zo worden circle, rectangle, en square classes ieder meerdere keren aangeroepen. 

- Encapsulation zie ik nog niet. Probeer nog een Get of een Set te gebruiken om een van je variabelen ergens anders aan te kunnen roepen

- Composition zit erin. De Canvas kent alle shapes.

- Overerving zit er ook in. Ismail heeft duidelijk een shapes class gemaakt waarin alle gemeenschappelijke variabelen van de shapes worden opgeslagen. 


   



