import { StatesList } from "./states-list";

export interface IStatesResponseData {
    name: string;
    iso3: string;
    states: StatesList;
}