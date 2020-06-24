import { Component, OnInit } from '@angular/core';
import {RestService} from "../../services/rest.service";
import {ElementApp} from "../../interfaces/element-app";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalInsertElementComponent} from "../modals/modal-insert-element/modal-insert-element.component";
import {TypeElement} from "../../../environments/environment";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public elements: ElementApp[];
  public typeEnum = TypeElement;
  constructor(private restService:RestService, private modalService: NgbModal) { }

  ngOnInit(): void {
    //When the component is charged, search all element
    this.searchElement()
  }

  openInsertModal(): void {
    //Open modal for insert new element
    let modal = this.modalService.open(ModalInsertElementComponent, {backdrop: 'static'});
    modal.result.finally(function () {
      //At modal close even, recharge all element
      this.searchElement();
    }.bind(this));
    //Do bind "this", beacouse in the finally function scope there isn't a "this", with binding
    // you can use it inside the function
  }

  searchElement(): void{
    //call get element API
    this.restService.getElements().subscribe( resp => {
      this.elements = resp;
    },()=>{}, ()=>{});
  }

  deleteElement(el: ElementApp): void{
    //call get element API
    this.restService.deleteElement(el).subscribe( () => {
      this.searchElement();
    },()=>{}, ()=>{});
  }


}
