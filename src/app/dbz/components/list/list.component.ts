import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name:'Trunks',
    power:10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  public deleteCharacter(character: Character):void {
    this.onDelete.emit(character.id || '');
    console.log('id que va a borrar: ' + character.id);
  }

}
