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
  tipoSeleccionado1: string = '';
  tipoSeleccionado2: string = '';
  tiposDisponibles: string[] = [
    'Acero',
    'Agua',
    'Bicho',
    'Dragón',
    'Eléctrico',
    'Fantasma',
    'Fuego',
    'Hada',
    'Hielo',
    'Lucha',
    'Normal',
    'Planta',
    'Psíquico',
    'Roca',
    'Siniestro',
    'Tierra',
    'Veneno',
    'Volador',
  ];
  listaCompletaPokemons: any;

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get(
        'https://raw.githubusercontent.com/jleocan773/HLC_Agenda/main/json/pokebien.json'
      )
      .pipe(map((res: any) => res))
      .subscribe((data) => {
        this.listaCompletaPokemons = data;
        this.pokemons = data;
      });
  }

  filtrarPorNombre() {
    if (this.filtro.trim() !== '') {
      const filtroLowerCase = this.filtro.toLowerCase();
      this.pokemons = this.listaCompletaPokemons.filter((pokemon: any) => {
        return pokemon.name.english.toLowerCase().includes(filtroLowerCase);
      });
    } else {
      this.pokemons = this.listaCompletaPokemons;
    }
  }

  filtrarPorTipo() {
    let pokemonFiltrados = this.listaCompletaPokemons;
  
    // Filtrar por tipo si se han seleccionado tipos
    if (this.tipoSeleccionado1 !== '' || this.tipoSeleccionado2 !== '') {
      const tipo1 = this.tipoSeleccionado1;
      const tipo2 = this.tipoSeleccionado2;
  
      pokemonFiltrados = pokemonFiltrados.filter((pokemon: any) => {
        const tiposPokemon = pokemon.type;
  
        if (tipo1 !== '' && tipo2 !== '') {
          return tiposPokemon.includes(tipo1) && tiposPokemon.includes(tipo2);
        } else {
          return tiposPokemon.includes(tipo1) || tiposPokemon.includes(tipo2);
        }
      });
    }
  
    this.pokemons = pokemonFiltrados;
  }
    
  
    
  
  
}
