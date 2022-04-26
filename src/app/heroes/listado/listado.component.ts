import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
  heroes: string []= ['Spiderman', 'Iron Man', 'Thor', 'Dr Strange'];
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    console.log('borrando...');
    console.log(this.heroeBorrado);
  }

}
