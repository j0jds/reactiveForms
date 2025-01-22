export interface ICountry {
    name: string;
    iso2: string;
    long: number;
    lat: number;
}

/* Usando aqui de exemplo, a propriedade importante para o projeto é name, mas caso em algum momento seja necessário adicionar alguma das outras infos, ter uma interface com o retorno do tipo do dado torna o processo mais prático. **/