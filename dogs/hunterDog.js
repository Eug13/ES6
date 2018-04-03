class HunterDog extends Dog {
    constructor(name, type, age, energy, power) {
        super(name, type, age, energy);//Parent constructor parameters
        this._power = power;
        console.log("HUNTER DOG");

    }
    getInfo() {
        console.log(`${this._name}  ${this._type} ${this._age} ${this._energy} ${this._power}`);
    }

    canHunt() {
        // let timer = setInterval()
        this._energy -= 50;

    }
}

import Dog from './dog'
export default HunterDog;