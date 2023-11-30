import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  pokemons: any;
  filtro: string = '';

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get(
        'https://raw.githubusercontent.com/jleocan773/HLC_Agenda/main/json/pokebien.json'
      )
      .pipe(map((res: any) => res))
      .subscribe((data) => {
        this.pokemons = data;
      });
  }
}
