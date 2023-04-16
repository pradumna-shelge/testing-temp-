import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChilddetailComponent } from './childdetail/childdetail.component';
import { FormparentComponent } from './formparent/formparent.component';
import { DetailsComponent } from './details/details.component';
import { TemplateFormComponent } from './template-form/template-form.component';

@NgModule({
  declarations: [AppComponent,FormparentComponent,ChilddetailComponent, DetailsComponent, TemplateFormComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
