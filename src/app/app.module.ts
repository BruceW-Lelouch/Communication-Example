import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './ParentChildren/parent/parent.component';
import { ChildrenComponent } from './ParentChildren/children/children.component';
import { StrangerAlphaComponent } from './Strangers/stranger-alpha/stranger-alpha.component';
import { StrangerBetaComponent } from './Strangers/stranger-beta/stranger-beta.component';
import { DataServiceService } from './service/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildrenComponent,
    StrangerAlphaComponent,
    StrangerBetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
