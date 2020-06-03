import { Injectable } from '@angular/core';
declare var chance: any;
import { of } from 'rxjs';
import { ItemBean } from '../commons/interfaces';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {


  constructor() { }

  public getRandomItems() {
    let randomItems: ItemBean[] = [];
    randomItems = this.generateItems(randomItems, 0, 15)
    return of(randomItems);
  }


  generateItems(array, startIndex, endIndex, ) {
    for (let i = startIndex; i < endIndex; ++i) {
      let randomItem: ItemBean = {
        itemId: Math.floor(1000 + Math.random() * 9000),
        itemLabel: this.generateWord()
      }
      array.push(randomItem);
    }
    return array;
  }

  generateWord() {
    return chance.word();
  }
}
