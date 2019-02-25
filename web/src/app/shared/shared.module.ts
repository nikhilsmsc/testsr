import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalMethods } from '../services/global_methods';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[
    HttpClientModule,
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [GlobalMethods]
})
export class SharedModule { }
