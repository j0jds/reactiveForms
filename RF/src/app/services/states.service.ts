import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StatesList } from "../interfaces/states-response/states-list";
import { IStatesResponse } from "../interfaces/states-response/states-response.interface";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root',

})

export class StatesService {
    constructor(
        private readonly _httpClient: HttpClient
    ) {}

    getStates(countryName: string): Observable<StatesList> {
        return this._httpClient.post<IStatesResponse>(
            'https://countriesnow.space/api/v0.1/countries/states', { country: countryName }
        ).pipe(
            map((statesResponse) => {
                /* Exatamente aqui, com esse ".data.states", o map está definindo qual propriedade de data vai ser retornada na hora que o getStates for consumir os dados da API. **/
                return statesResponse.data.states
            })
        );
    }
} 