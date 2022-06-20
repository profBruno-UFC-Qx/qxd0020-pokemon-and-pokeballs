import { Item } from "./Item";
import { Pokebola } from "./pokebola";

export class Mochila {
    private bolsoPokebola: Bolso<Pokebola>;
    private bolsoItens: Bolso<Pocao>;

    constructor(){
        this.bolsoPokebola = new Bolso<Pokebola>();
        this.bolsoItens = new Bolso<Pocao>()
    }

}

class Pocao implements Item {
    nome = "Pocao";
    descricao = "adasdasda";
}

class Bolso<T extends Item> {
    private coisas: T[] = [];

    adicionar(coisa: T): void {
        this.coisas.push(coisa);
    }
}