import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './components/search/search.component';
import {HttpClientModule} from "@angular/common/http";
import {DataTablesModule} from "angular-datatables";
import { ModalInsertElementComponent } from './components/modals/modal-insert-element/modal-insert-element.component';
import {FormsModule} from "@angular/forms";
import {LaddaModule} from "angular2-ladda";
import { CreditsComponent } from './components/credits/credits.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ModalInsertElementComponent,
    CreditsComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    //It's for waiting server response
    LaddaModule.forRoot({
      style: "contract",
      spinnerSize: 40,
      spinnerColor: "red",
      spinnerLines: 12
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
