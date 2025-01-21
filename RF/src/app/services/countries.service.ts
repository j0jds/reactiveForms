import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})

export class CountriesService {
    constructor(
        // _httpClient como um padrão de nomenclatura para injeção de dependência.
        private readonly _httpClient: HttpClient
    ) {}

    getCountries() {
        return this._httpClient.get<any>('https://countriesnow.space/api/v0.1/countries/population/cities');
    }
}