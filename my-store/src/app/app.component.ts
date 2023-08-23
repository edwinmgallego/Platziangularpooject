import { Component } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';

  name  ='Edwin Gallego';
  age = 18;
  img= "https://source.unsplash.com/random";
  btnDisable = true;

  person = {
    name :'edwin',
    age : 40,
    avatar :'https://source.unsplash.com/random'
  }
  newName = '';
  names: string[] = ['guille😂','diana🐦','santi🐳','oscar💚','edwin🌮'];
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://source.unsplash.com/random',
      category: 'all'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://source.unsplash.com/random'
    }
  ]
  toggleButton(){
    this.btnDisable= !this.btnDisable;
  }

  agePlusPlus(){
    this.person.age +=1;

  }

  onScroll(event: Event){
const element = event.target as HTMLElement;
console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name=element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number){
    this.names.splice(index, 1);
  }


}
