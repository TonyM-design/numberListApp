import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() valueImport : any;
  @Input() inputIndex : number

  constructor() {
    this.id = Date.now();
    this.inputIndex = 0
    this.value = 0
    this.status = "initial"
   }
   id : number
   value : any
   status : any
   
  determinateListItemStatus(itemValue: number) {
    if (Number.isInteger(itemValue / 3) === true && Number.isInteger(itemValue / 5) === true) {
      return 'Gestform'
    }
    else if (Number.isInteger(itemValue / 3) === true && Number.isInteger(itemValue / 5) === false) {
      return 'Geste'
    }
    else if (Number.isInteger(itemValue / 3) === false && Number.isInteger(itemValue / 5) === true) {
      return 'Forme'
    }
    else { return itemValue }
  } 

  ngOnInit() {
    if (this.valueImport!== undefined){
    this.value = this.valueImport.value
    this.status = this.determinateListItemStatus(this.value)}
  }

}
