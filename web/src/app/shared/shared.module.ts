
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalMethods } from '../services/global_methods';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatSortModule } from '@angular/material';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    


  ],
  exports:[
    HttpClientModule,
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    

  ],
  providers: [GlobalMethods]
})
export class SharedModule { }
