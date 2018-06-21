class Modal {

    private modal : HTMLElement
    
    constructor() {

        this.modal = document.createElement("div")
        this.modal.id = "myModal"
        this.modal.className = "modal"

        let modalContent : HTMLElement = document.createElement("div")
        modalContent.className = "modal-content"

        let img : HTMLImageElement = document.createElement("img")
        img.src = "./img/animals/darwin_normal.png"

        let forground = document.getElementsByTagName("forground")[0]
        forground.appendChild(this.modal)
        this.modal.appendChild(modalContent)
        modalContent.appendChild(img)
        
    }

    public closeModalByWindow() : void {
        this.modal.style.display = "none";
    }

}