import { map } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',

})

export class StatesService {
    constructor(
        private readonly _httpClient: HttpClient
    ) {}

    getStates(countryName: string) {
        return this._httpClient.post<any>(
            'https://countriesnow.space/api/v0.1/countries/states', { country: countryName }
        ).pipe(
            map((statesResponse) => {
                /* Exatamente aqui, com esse ".data.states", o map está definindo qual propriedade de data vai ser retornada na hora que o getStates for consumir os dados da API. **/
                return statesResponse.data.states
            })
        );
    }
} 