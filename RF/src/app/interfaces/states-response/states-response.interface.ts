import { IStatesResponseData } from "./state-response-data.interface";
import { IBaseCountriesResponse } from "../base-countries-response.interface";

export interface IStatesResponse extends IBaseCountriesResponse {
    data: IStatesResponseData;
}

