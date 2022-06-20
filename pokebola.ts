import { Pokemon } from "./pokemon";
import { Item } from "./Item";

export class Pokebola implements Item {

    nome = "Pokebola";
    descricao = "Pokebola mais simples do jogo";

    protected getTaxaModificada(pokemon: Pokemon) {
        return pokemon.taxaDeCaptura;
    } 

    protected calcularNumeroCaputura(pokemon: Pokemon): number {
        const pvMax = pokemon.pvMax;
        const pvAtual = pokemon.pvAtual;
        const taxaModificada = this.getTaxaModificada(pokemon);
        const equacaoDeCaputara = ((3*pvMax - 2*pvAtual)*taxaModificada)/(3*pvMax);
        return Math.min(Math.max(equacaoDeCaputara, 1), 255);
    }

    capturar(pokemon: Pokemon): boolean {
        const numeroRandom = Math.floor(Math.random() * 255);
        const numeroDaSorte = this.calcularNumeroCaputura(pokemon);
        //console.log(`${numeroDaSorte} - ${numeroRandom}`);
        return (numeroDaSorte >= numeroRandom);
    }

}

export abstract class PokebolaAfetaPokemon extends Pokebola {

    protected abstract aplicarEfeito(pokemon: Pokemon): void;

    capturar(pokemon: Pokemon) {
        const capturou = super.capturar(pokemon);
        if(capturou) {
            this.aplicarEfeito(pokemon);
        }
        return capturou;
    }
}

export abstract class PokebolaAfetaTaxa extends Pokebola {

    protected abstract getTaxaModificada(pokemon: Pokemon): number;
}