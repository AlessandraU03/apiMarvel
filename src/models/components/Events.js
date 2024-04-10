export class Events{
    #name

    setName(name){
        this.#name = name
    }
    
    getName() {
        return this.#name
    }
}