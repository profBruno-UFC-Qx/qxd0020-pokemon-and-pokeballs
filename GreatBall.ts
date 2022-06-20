import { Pokebola } from "./pokebola";
import { Pokemon } from "./pokemon";

export class GreatBall extends Pokebola {
    nome = "GreatBall";

    getTaxaModificada(pokemon: Pokemon): number {
        return pokemon.taxaDeCaptura * 1.5;
    }
}