class Dog {
    constructor(name, type, age, energy) {
        this._name = name;
        this._type = type;
        this._age = age;
        this._energy = energy;
        this.getInfo();
    }

    getInfo() {
        console.log(`${this._name}  ${this._type} ${this._age} ${this._energy}`);
    }

}




export default Dog;