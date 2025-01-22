import { ICountry } from "../countries-response/country.interface"
import { IBaseCountriesResponse } from "../base-countries-response.interface";

export interface ICountriesResponse extends IBaseCountriesResponse {
    data: ICountry[];
}
