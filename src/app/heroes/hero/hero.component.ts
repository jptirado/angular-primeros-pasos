import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;
  // public showButton: boolean = true;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  //changeHero():void -> spiderman
  changeHero():void{
    this.name = 'Spiderman';
  }

  //changeAge():void -> otra edad <> 45
  changeAge():void{
    this.age = 10;
  }

  resetForm():void{
    this.name ='ironman';
    this.age = 45;
  }

}
