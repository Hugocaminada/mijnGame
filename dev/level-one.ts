class Levelone {
     
    constructor() {

        for (let index = 100; index < 1600; index += 50) {
            new Square(index, 200)
        }
        for (let index = 150; index < 1550; index += 50) {
            new Square(index, 230)
        }
        for (let index = 200; index < 1500; index += 50) {
            new Square(index, 260)
        }

    }

}

