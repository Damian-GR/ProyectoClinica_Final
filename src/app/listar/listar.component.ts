import { Component, OnInit } from '@angular/core';
import { Place } from '../interfaces/place';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  places: Place[];

  constructor(private placeService: PlaceService) { 
    this.places = [{
      name: 'Prueba de sitio',
      apellido: 'Esto es una prueba',
      telefono: 40,
      id2: -3,
      descripcion: 'https://media.timeout.com/images/105718969/750/422/image.jpg'
    }];
  }

  ngOnInit(): void {
    this.placeService.getPlace().subscribe(places=>{
      this.places = places;
    })
  }

  async onClickDelete(place: Place) {
    const response = await this.placeService.deletePlace(place);
    console.log(response);
  }

}
