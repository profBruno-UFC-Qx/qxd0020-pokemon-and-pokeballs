import { PokebolaAfetaTaxa } from "./pokebola";
import { Pokemon } from "./pokemon";

export class HeavyBall extends PokebolaAfetaTaxa {

    nome = "HeavyBall";

    protected getTaxaModificada(pokemon: Pokemon) {
        const peso = pokemon.peso;
        const taxa = pokemon.taxaDeCaptura
        if(peso < 100) {
            return  taxa - 20;
        } else if  (peso >= 100 && peso < 200) {
            return taxa;
        } else if  (peso >= 200 && peso < 300) {
            return taxa + 20;
        } else {
            return taxa + 30;
        }
    } 
}