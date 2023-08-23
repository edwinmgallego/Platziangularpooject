import { Component } from '@angular/core';

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
  names: string[] = ['guille😂','diana🐦','santi🐳','oscar💚','edwin🌮'];

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

}
