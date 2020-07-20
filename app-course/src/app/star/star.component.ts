import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'] //recebe um array como padrão, pois pode se ter mais folhas de estilo
})

export class StarComponent implements OnChanges {

  @Input()// torna o rating elegivel para receber um valro de outro componente
  rating: number = 0;

  starWidth: number;

  ngOnChanges(): void{
    this.starWidth = this.rating * 74 / 5; //proporçao que a div sera exibida baseado no modulo font-awesome
  }
}
