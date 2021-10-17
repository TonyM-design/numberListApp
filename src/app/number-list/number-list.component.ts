import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.scss']
})

export class NumberListComponent implements OnInit {
  constructor() {
  }

  numberListSettings = {
    requestedNumberListLenght: new BehaviorSubject(0),
    numberLists: Array(0)
  }

  numberLists: any
  requestedNumberListLenght: any

  generateRandom =  (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  /* generate numberLists , lenght equal user's choice
     if lenght change, it complete list without regenerate a whole list
  */
  generateList = ( listLenght: number) => {
    if (this.numberListSettings.numberLists.length < this.numberListSettings.requestedNumberListLenght.getValue()) {
      for (let i = this.numberListSettings.numberLists.length ; i <this.numberListSettings.requestedNumberListLenght.getValue()  ; i++) {
        this.numberListSettings.numberLists.push({ value:this.generateRandom(-1000, 1000) })
      }
    }
    else {
      this.numberListSettings.numberLists.length = listLenght
    }
    console.log(this.numberLists)
  }


  ngOnInit() {
    this.numberListSettings.requestedNumberListLenght.subscribe((value) => {
      this.generateList(value)
    })

  }
}
