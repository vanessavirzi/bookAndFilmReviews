import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ElementApp} from "../../../interfaces/element-app";
import {TypeElement} from "../../../../environments/environment";
import {RestService} from "../../../services/rest.service";

@Component({
  selector: 'app-modal-insert-element',
  templateUrl: './modal-insert-element.component.html',
  styleUrls: ['./modal-insert-element.component.css']
})
export class ModalInsertElementComponent implements OnInit {

  public newElement: ElementApp;
  public typeEnum = TypeElement;
  public isSave: boolean;
  constructor(public activeModal: NgbActiveModal, private restService: RestService) { }

  ngOnInit(): void {
    this.isSave = false;
    this.newElement = {} as ElementApp;
    this.newElement.type = null;
  }

  saveNewElement(): void {
    this.isSave = true;
    this.restService.saveElement(this.newElement).subscribe(resp => {
      this.activeModal.close();
    });
  }

}
