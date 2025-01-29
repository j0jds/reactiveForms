import { UsersService } from './services/users.service';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';
import { CountriesService } from './services/countries.service';
import { Component, OnInit } from '@angular/core';
import { UsersListResponse } from './types/user-list-response.interface';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
    usersList: UsersListResponse = [];

  constructor(
    // private readonly _countriesService: CountriesService,
    // private readonly _statesService: StatesService,
    // private readonly _citiesService: CitiesService,
    private readonly _usersService: UsersService,
  ) {}

  ngOnInit(): void {
    // this._countriesService.getCountries().subscribe((countriesResponse) => {
    //   console.log('countriesResponse', countriesResponse);
    // });

    // this._statesService.getStates('Brazil').subscribe((statesResponse) => {
    //   console.log('statesResponse', statesResponse);
    // });

    // this._citiesService.getCities('Brazil', 'Pernambuco').subscribe((citiesResponse) => {
    //   console.log('citiesResponse', citiesResponse);
    // });
    
    this._usersService.getUsers().pipe(take(1)).subscribe((usersListResponse) => this.usersList = usersListResponse);
  }
}
