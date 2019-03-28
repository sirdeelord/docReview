import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';
import { LayoutModule } from '@angular/cdk/layout';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    HomeComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
