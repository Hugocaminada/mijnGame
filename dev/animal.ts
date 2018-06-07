class Animal {

    private element:HTMLElement
    private img:HTMLImageElement

    constructor(species){
        this.element = document.createElement("animal")
        this.img = document.createElement("img")
        this.img.src = `./img/animals/${species}_normal.png`

        let forground = document.getElementsByTagName("forground")[0]
        forground.appendChild(this.element)
        
        this.element.appendChild(this.img)
        
    }
}

