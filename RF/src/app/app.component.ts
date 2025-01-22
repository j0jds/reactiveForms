import { StatesService } from './services/states.service';
import { CountriesService } from './services/countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  
  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _statesService: StatesService
  ) {}

  ngOnInit(): void {
    this._countriesService.getCountries().subscribe((countriesResponse) => {
      console.log('countriesResponse', countriesResponse)
    });

    this._statesService.getStates('Brazil').subscribe((statesResponse) => {
      console.log('statesResponse', statesResponse)
    }) 
  }

}
