import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountriesList } from '../types/countries-list';
import { map, Observable } from 'rxjs';
import { ICountriesResponse } from '../interfaces/countries-response/countries-response.interface';

@Injectable({
  providedIn: 'root',
})

export class CountriesService {
  constructor(
    // _httpClient como um padrão de nomenclatura para injeção de dependência.
    private readonly _httpClient: HttpClient
  ) {}

  getCountries(): Observable<CountriesList> {
    // Método para buscar os países na API.
    return this._httpClient.get<ICountriesResponse>('https://countriesnow.space/api/v0.1/countries').pipe(
        /** O operador map serve para simplificar o acesso aos dados do endpoint. Aqui ele extrai apenas o objeto data ao invés de
        pegar todas as outras informações que seriam necessárias para o projeto. */  
        map((countriesResponse) => {
            return countriesResponse.data;
      }));
  }
}
