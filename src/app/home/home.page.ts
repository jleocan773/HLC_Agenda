import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any;
  filtro: string = "";

  // constructor(private httpClient:HttpClient) {
  //   this.users = this.httpClient.get('https://raw.githubusercontent.com/jleocan773/HLC_Agenda/main/json/personas.json').pipe(map((res: any) => res['results']));
  // }  
  
  constructor(private httpClient:HttpClient) {
    this.users = this.httpClient.get('https://raw.githubusercontent.com/jleocan773/HLC_Agenda/main/json/personas.json').pipe(map((res: any) => res['results']));
  }

}
