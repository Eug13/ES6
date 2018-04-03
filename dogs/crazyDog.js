class CrazyDog extends Dog {
    constructor(name, type, age, energy, happiness) {
        super(name, type, age, energy);//Parent constructor parameters
        this._happiness = happiness;
        console.log("CRAZY DOG");

    }
    getInfo() {
        console.log(`${this._name}  ${this._type} ${this._age} ${this._energy} ${this._happiness}`);
    }

    canGoCrazy() {
        // let timer = setInterval()
        this._happiness -= 50;

    }
}


import Dog from './dog'
export default CrazyDog;