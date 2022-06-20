export class Pokemon {
    private _nome: string;
    private _apelido: string = "";
    private _nivel: number;
    readonly sexo: "M" | "F";
    private _pvMax: number = 50;
    private _pvAtual: number = 1;
    private _velocidade: number;
    private _altura: number;
    private _peso: number;
    private _nivelDeAmizade: number = 0;
    readonly taxaDeCaptura = 100;

    constructor(nome: string, altura: number, peso: number, velocidade:number) {
        this._nome = nome;
        this._altura = altura;
        this._peso = peso;
        this._velocidade = velocidade;
        this._nivel = 1;
        if (Math.random() > 0.5) {
            this.sexo = "M";
        } else {
            this.sexo = "F";
        }
        
    }

    get nome() { 
        return this._nome;
    }

    get pvMax() {
        return this._pvMax;
    }

    get pvAtual() {
        return this._pvAtual;
    }

    set pvAtual(valor: number) {
        if (valor > this._pvMax) {
            this._pvAtual = this._pvMax;
        } else if (valor < 0) {
            this._pvAtual = 0;
        } else {
            this._pvAtual = valor;
        }
    }

    get nivel() {
        return this._nivel;
    }

    set nivel(valor: number | string) {
        let novoNivel = Number(valor);

        if (isFinite(novoNivel)) {
            this._nivel = novoNivel;
        }
    }

    get velocidade() {
        return this._velocidade;
    }

    get peso() {
        return this._peso;
    }

    get altura() {
        return this._altura;
    }

    get nivelDeAmizade() {
        return this._nivelDeAmizade;
    }

    set nivelDeAmizade(valor: number) {
        this._nivelDeAmizade = valor;
    }

}