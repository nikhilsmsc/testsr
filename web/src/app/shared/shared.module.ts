import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalMethods } from '../services/global_methods';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HttpClientModule,
    HeaderComponent
  ],
  providers: [GlobalMethods]
})
export class SharedModule { }
