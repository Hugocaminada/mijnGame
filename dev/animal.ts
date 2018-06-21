class Animal {

    constructor(species: string){
        let element = document.createElement("animal")
        let img = document.createElement("img")
        img.src = `./img/animals/${species}_normal.png`

        let forground = document.getElementsByTagName("forground")[0]
        forground.appendChild(element)
        
        element.appendChild(img)
        
    }
}

