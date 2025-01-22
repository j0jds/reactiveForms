import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CitiesList } from '../interfaces/cities-response/cities-list';
import { ICitiesResponse } from '../interfaces/cities-response/cities-response.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CitiesService {
    
    constructor(
    private readonly _httpClient: HttpClient
    ) {}

  getCities(countryName: string, stateName: string): Observable<CitiesList> {
    return this._httpClient.post<ICitiesResponse>(
      'https://countriesnow.space/api/v0.1/countries/state/cities',

      {
        country: countryName,
        state: stateName,
      }).pipe(
        map((citiesResponse) => {
            return citiesResponse.data;
        })
    );
  }
}
